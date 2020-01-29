import React, {useState} from 'react'

import { Animated, TouchableOpacity } from 'react-native'
import { PanGestureHandler, State } from 'react-native-gesture-handler'

import {
  Container,
  Card,
  Content,
  CardHeader,
  CardContent,
  CardFooter,
  Annotation,
  Title,
  Description,
  TitleCard,
  TextTitleCard,

} from './styles'

import Icon from '@expo/vector-icons/MaterialIcons'

import Header from '../../components/Header'
import Tabs from '../../components/Tabs'
import Menu from '../../components/Menu'

export default function Main() {
  let offset = 0
  const translateY = new Animated.Value(0);

  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY,
        },
      },
    ],
    { useNativeDriver: true },
  );

  function onHandlerStateChange(event) {
    if(event.nativeEvent.oldState === State.ACTIVE) {
      let opened = false
      const { translationY } = event.nativeEvent;

      offset += translationY

      if(translationY >= 115 ) {
        opened = true

      } else {
        translateY.setValue(offset)
        translateY.setOffset(0)
        offset = 0
      }

      Animated.timing(translateY, {
        toValue: opened ? 485 : 0,
        duration: 200,
        useNativeDriver: true,
      }).start(()=>{
        offset = opened ? 485 : 0
        translateY.setOffset(offset)
        translateY.setValue(0)
      });
    }
  }

  const [visibility, setVisibility] = useState(true)

  return(
    <Container>
      <Header/>

      <Content>
        <Menu translateY={translateY} />
        
        <PanGestureHandler
          onGestureEvent={animatedEvent}
          onHandlerStateChange={onHandlerStateChange}
        >
          <Card style={{
            transform: [{
              translateY: translateY.interpolate({
                inputRange: [- 200, 0, 485],
                outputRange: [-15, 0, 485],
                extrapolate: 'clamp'
              })
            }],
          }}>
            <CardHeader>
              <TitleCard>
                <Icon name="attach-money" size={28} color="#888" />
                <TextTitleCard>NuConta</TextTitleCard>
              </TitleCard>

              <TouchableOpacity
                onPress={()=>{setVisibility(!visibility)}}
              >
                {visibility ? <Icon name="visibility-off" size={28} color="#888" /> : <Icon name="visibility" size={28} color="#888" />}
                
              </TouchableOpacity>
            </CardHeader>
            <CardContent>
              <Title>Saldo disponível</Title>
              {visibility ? <Description>R$ 4.589,72</Description> : <Description style={{opacity: 0,}}>R$ 4.589,72</Description> }
              
            </CardContent>
            <CardFooter>
              <Annotation>
                Transferência de R$ 1.200,00 recebida de Falsto Silva hoje às 17h:35h
              </Annotation>
            </CardFooter>
          </Card>
        </PanGestureHandler>

      </Content>

      <Tabs translateY={translateY} />
    </Container>
  )
}