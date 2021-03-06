import React, {useState} from 'react';
import {View, Text,StyleSheet,TextInput,Input } from 'react-native'
import {Background,Container,Logo,AreaInput,SubmitButton,SubmitText,Link,LinkText} from './styles'
import {useNavigation} from '@react-navigation/native'
import  MyTabs from '../../routers/TabNavigator'

function Login(){

        const navigation = useNavigation();
        
        const HandleOnPress = ()  => {
                navigation.navigate('MyTabs')
        }
        


        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
      
    return(     
        <>
        <Background>
         <Container>
              

                <AreaInput >
                        <TextInput  style = {styles.textinput}
                        underlineColorAndroid = "transparent"
                        placeholder="Email"
                        placeholderTextColor="#FFF"
                        autoCorrect={false}
                        autoCapitalize="none"
                        value={email}
                        onChangeText={ (text) => setEmail(text) }
                    
                        />

                </AreaInput >

                <AreaInput >
                        <TextInput style={styles.textinput}
                        underlineColorAndroid = "transparent"
                        placeholder="Senha"
                        placeholderTextColor="#FFF"
                        autoCorrect={false}
                        autoCapitalize="none"
                        value={password}
                        onChangeText={ (text) => setPassword(text) }
                        />
                </AreaInput >

                <SubmitButton onPress={HandleOnPress}>
                        <SubmitText>Acessar</SubmitText>
                </SubmitButton>


                <Link>
                        <LinkText >Criar uma conta!</LinkText>
                </Link>

         </Container>
        </Background>
        </>
    );
    
    }

    const styles = StyleSheet.create({  
        textinput: {
          fontSize: 18,
          color: '#FFF',
          marginBottom: 30,
          borderBottomColor: 'white',
          borderBottomWidth: 2,
          width: '80%',
          
        }
    }); 
export default Login;