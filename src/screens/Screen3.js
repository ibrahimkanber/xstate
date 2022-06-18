import {useActor} from '@xstate/react';
import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {useAppContext} from '../../App';
import {source3} from '../htmlContent/lesson3';
import {Button} from './components/Button';
import {ButtonContainer} from './components/ButtonContainer';
import {Container} from './components/Container';
import {LessonContent} from './components/LessonContent';
export const Screen3 = () => {
  const {service} = useAppContext();
  const [state] = useActor(service);
  console.log(state)
  return (
    <Container>
      <Text>Lesson 3</Text>
      <Text>Current counter value: {state.context.counter}</Text>
      <LessonContent source={source3} />
      <Button title="INCREASE" event="INCREASE" />
      <ButtonContainer>
        <Button title="PREV" event="PREV" />
        <Button title="NEXT" event="NEXT" />
      </ButtonContainer>
    </Container>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
