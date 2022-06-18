import {useActor} from '@xstate/react';
import React from 'react';
import { ActivityIndicator } from 'react-native';
import {Text} from 'react-native';
import {useAppContext} from '../../App';
import { source5 } from '../htmlContent/lesson5';
import {Button} from './components/Button';
import {ButtonContainer} from './components/ButtonContainer';
import {Container} from './components/Container';
import {LessonContent} from './components/LessonContent';
export const Screen5 = () => {
  const {service} = useAppContext();
  const [state] = useActor(service);
  console.log(state.value.fifth);
  return (
    <Container>
      <Text>Lesson 5</Text>
      <LessonContent source={source5} />
      {state.value.fifth==="loading" && <ActivityIndicator size="large"/>}
      <Button title="FETCH" event="FETCH" />
      <ButtonContainer>
        <Button title="PREV" event="PREV" />
        <Button title="NEXT" event="NEXT" />
      </ButtonContainer>
    </Container>
  );
};
