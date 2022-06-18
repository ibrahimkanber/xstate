import React from 'react';
import {Text} from 'react-native';
import {source2} from '../htmlContent/lesson2';
import { Button } from './components/Button';
import {ButtonContainer} from './components/ButtonContainer';
import {Container} from './components/Container';
import {LessonContent} from './components/LessonContent';
export const Screen2 = () => {
  return (
    <Container>
      <Text>Lesson 2</Text>
      <LessonContent source={source2} />
      <ButtonContainer>
        <Button title="PREV" event="PREV" />
        <Button title="NEXT" event="NEXT" />
      </ButtonContainer>
    </Container>
  );
};
