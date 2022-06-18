import React from "react";
import { useWindowDimensions } from "react-native";
import RenderHtml from 'react-native-render-html';
export const LessonContent=({source})=>{
    const {width} = useWindowDimensions();
   return  <RenderHtml contentWidth={width} source={source} />
}