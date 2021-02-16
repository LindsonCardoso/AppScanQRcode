import React from 'react'
import {StyleSheet,Image} from 'react-native'
import {ContainerTitles,Text,CardContainer,RankText,Name,NameTime,Pais,ContainerImage} from './styles'

function CardPlayer({data}){
        return (
            <CardContainer>

                <ContainerImage>
                
                <Image
                  style={{flex: 1, width:60, height:60,borderRadius:30}} 

                />
                
                </ContainerImage>

                <ContainerTitles>
                    <Name>{data.name}</Name>
                    <NameTime>Time: {data.time}</NameTime>
                    <Pais>Pais: {data.country}</Pais>
            </ContainerTitles>

            <RankText>
                <Text>#1</Text>        
            </RankText>


        </CardContainer>
        )
}
