import React from 'react'
import Icon from '@expo/vector-icons/MaterialIcons'

import QRCode from 'react-native-qrcode-svg'
import {
  Container,
  Code,
  Nav,
  NavItems,
  NavText,
  SignOutButton,
  SignOutButtonText,

} from './styles'

export default function Menu({ translateY }) {

  return(
    <Container style={{
      opacity: translateY.interpolate({
        inputRange: [0, 470],
        outputRange: [0, 1],
      }),
    }}>
      <Code>
        <QRCode
          value="https://github.com.br/higordenomar"
          size={80}
          color="#8B10AE"
          backgroundColor="#FFF"
        />
      </Code>

      <Nav>
        <NavItems>
          <Icon name="help-outline" size={20} color="#FFF" />
          <NavText>Me ajuda</NavText>
        </NavItems>

        <NavItems>
          <Icon name="person-outline" size={20} color="#FFF" />
          <NavText>Perfil</NavText>
        </NavItems>
        <NavItems>
          <Icon name="settings-applications" size={20} color="#FFF" />
          <NavText>Configurar NuConta</NavText>
        </NavItems>
        <NavItems>
          <Icon name="credit-card" size={20} color="#FFF" />
          <NavText>Configurar Cartão</NavText>
        </NavItems>

        <NavItems>
          <Icon name="account-balance" size={20} color="#FFF" />
          <NavText>Pedir Conta PJ</NavText>
        </NavItems>

        <NavItems>
          <Icon name="smartphone" size={20} color="#FFF" />
          <NavText>Configurações do app</NavText>
        </NavItems>
      </Nav>

      <SignOutButton onPress={() => {}}>
        <SignOutButtonText>SAIR DO APP</SignOutButtonText>
      </SignOutButton>
    </Container>
  )
}