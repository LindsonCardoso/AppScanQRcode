import React from 'react'
import {Container,
        FlatList,Text,
        TouchBack,ConteinerMenu,
        TouchContainer,TouchCard,
        Title,TitleOne,ViewTouch
} from './styles'

import ICon from 'react-native-vector-icons/FontAwesome'

import Qrcode from 'react-native-vector-icons/FontAwesome'

import Scanqrcode from './Scanqrcode.js'

function Home({navigation}){
        const HandleOnPress = ()  => {
                navigation.navigate('Scanqrcode')
        }
    return(

            <Container>

                    <ConteinerMenu>
                    <TouchBack>
                        <ICon name="chevron-left" size={18} color="#FFF"
                                onPress={() => navigation.navigate('Login')}
                        />

                    </TouchBack>
                  <Text>Home</Text>
                 </ConteinerMenu>   



             
                    <TouchContainer>   
                            <TitleOne>
                                Tools         
                           </TitleOne> 
                        <TouchCard
                            onPress={HandleOnPress}
                         >
                       
                       <ViewTouch>
                       <Qrcode
                        name="qrcode" size={40} color="#FFF"/>
                        <Title>
                        Scanner QRcode
                        </Title>
                        </ViewTouch>
                        
                        </TouchCard>
               
                        </TouchContainer>




            </Container>


    );}


export default Home;