import {useActor} from '@xstate/react';
import React from 'react';
import {Text} from 'react-native';
import {useAppContext} from '../../App';
import { source4 } from '../htmlContent/lesson4';
import {Button} from './components/Button';
import {ButtonContainer} from './components/ButtonContainer';
import {Container} from './components/Container';
import {LessonContent} from './components/LessonContent';
export const Screen4 = () => {
  const {service} = useAppContext();
  const [state] = useActor(service);
  console.log(state);
  return (
    <Container>
      <Text>Lesson 4</Text>
      <Text>Current counter value: {state.context.counter}</Text>
      <LessonContent source={source4} />
      <Button title="INCREASE" event="INCREASE" />
      <ButtonContainer>
        <Button title="PREV" event="PREV" />
        <Button title="NEXT" event="NEXT" />
      </ButtonContainer>
    </Container>
  );
};
