import React from 'react';
import { Text, } from 'react-native';
import {source1} from '../htmlContent/lesson1';
import {LessonContent} from './components/LessonContent';
import {Container} from './components/Container';
import { ButtonContainer } from './components/ButtonContainer';
import { Button } from './components/Button';

export const Screen1 = () => {
  return (
    <Container>
      <Text>Lesson 1</Text>
      <LessonContent source={source1} />
      <ButtonContainer>
        <Button title="PREV" event="PREV"/>
        <Button title="NEXT" event="NEXT"/>
      </ButtonContainer>
    </Container>
  );
};
