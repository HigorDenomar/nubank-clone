import React from 'react'
import {
  Container,
  TabsContainer,
  TabItem,
  TabText,

} from './styles'

import Icon from '@expo/vector-icons/MaterialIcons'

export default function Tabs({ translateY }) {

  return (
    <Container style={{
      opacity: translateY.interpolate({
        inputRange: [0, 285],
        outputRange: [1, 0],
        extrapolate: 'clamp',
      }),
    }}>
      <TabsContainer>
        <TabItem>
          <Icon name="person-add" size={24} color="#FFF" />
          <TabText>Indicar amigos</TabText>
        </TabItem>

        <TabItem>
          <Icon name="smartphone" size={24} color="#FFF" />
          <TabText>Recarga de celular</TabText>
        </TabItem>

        <TabItem>
          <Icon name="question-answer" size={24} color="#FFF" />
          <TabText>Cobrar</TabText>
        </TabItem>

        <TabItem>
          <Icon name="arrow-downward" size={24} color="#FFF" />
          <TabText>Depositar</TabText>
        </TabItem>
        
        <TabItem>
          <Icon name="arrow-upward" size={24} color="#FFF" />
          <TabText>Transferir</TabText>
        </TabItem>

        <TabItem>
          <Icon name="create" size={24} color="#FFF" />
          <TabText>Ajustar limite</TabText>
        </TabItem>

        <TabItem>
          <Icon name="help-outline" size={24} color="#FFF" />
          <TabText>Me Ajuda</TabText>
        </TabItem>

        <TabItem>
          <Icon name="money" size={24} color="#FFF" />
          <TabText>Pagar</TabText>
        </TabItem>
        
        <TabItem>
          <Icon name="lock-open" size={24} color="#FFF" />
          <TabText>Bloquear cartão</TabText>
        </TabItem>

        <TabItem>
          <Icon name="payment" size={24} color="#FFF" />
          <TabText>Cartão virtual</TabText>
        </TabItem>

        <TabItem>
          <Icon name="sort" size={24} color="#FFF" />
          <TabText>Organizar atalhos</TabText>
        </TabItem>

      </TabsContainer>
    </Container>
  )
}