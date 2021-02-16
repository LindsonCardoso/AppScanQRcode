import React from 'react';
import {

    TextCam,
    TouchCam,Container,
    ViewIcon,
  } from './stylesScan';

  import {StyleSheet} from 'react-native'
// import { Container } from './styles';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import Icon from 'react-native-vector-icons/FontAwesome'
import IconFlash from 'react-native-vector-icons/FontAwesome'

function Scanqrcode(){

 

      const onSuccess = (e) => {
            Linking.openURL(e.data).catch(err =>
              console.error('An error occured', err)
            );
          };





  return(
<>
        <Container   style={styles.cam}>

 
        <QRCodeScanner
             style={styles.qr}
        onRead={onSuccess}
        flashMode={RNCamera.Constants.FlashMode.off}
        topContent={
          <TextCam>
              Busque o QRcode
          </TextCam>
        }
      />


          <ViewIcon style={styles.rqcam}>

              
              <Icon
                     style={styles.sair}
                
                name="circle"
                size={80}
                color="#FFF"
              />
        
                 
               
                     <IconFlash 
                     style={styles.flash}
                     name="circle"
                    size={80}
                    color="#FFF"
              />
         
              </ViewIcon>
  
        
</Container>

</>

  )

  
}

const styles = StyleSheet.create({
    cam:{
        flex:1,

    },qr:{
        flex: 1,
        
    },  

    flash:{
        left: 100,
    },
    rqcam:{
       marginHorizontal: '32%',

    },sair:{
        right: 100,
        shadowOpacity: 10,
    },


})

export default Scanqrcode;