import styled from 'styled-components'
//import LinearGradient from 'react-native-linear-gradient'
//import {getStatusBarHeight}  from 'react-native-status-bar-height' //força o statusbar no android ir para baixa o conteude 

export const Container = styled.View`
    background-color: black;
    flex:1;
    border-bottom-width: 2px;
    border-bottom-color: #181717;
`;


export const ConteinerMenu = styled.View`
  flex-direction: row;
  padding-top: 40px;
  padding-bottom: 10px;
  width: 100%;
  justify-content: center;
  align-items: center;
  border-bottom-width: 2px;
  border-bottom-color: #181717;
  

`;

export const TouchBack = styled.TouchableOpacity`
   text-align: left;
  
`;
export const Text = styled.Text`
width: 80%;
    font-size: 22px;
    color:#FFF;
    text-align: left;
    left: 20px

`;


export const TouchContainer = styled.View`
background-color: #212121;
margin-top: 10px;
`;

export const TouchCard = styled.TouchableOpacity`
flex-direction: row;
  background-color: #181717;
    padding: 10px;


  `;

export const Title = styled.Text`

    font-size: 20px;
    color:#FFF;
    left: 45px;
    top: -35px;

`;
export const TitleOne = styled.Text`
padding: 10px;
    font-size: 20px;
    color:#FFF;
    left: 15px;

`;



export const ViewTouch = styled.View`
padding: 8px;
  bottom: -10px;
  left: 15px
`;