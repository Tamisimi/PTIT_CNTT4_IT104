import React, { Component } from 'react'
import Increase from './components/PTIT_CNTT4_IT104_Session17_Bai01/Increase'
import UserList from './components/PTIT_CNTT4_IT104_Session17_Bai02/UserList'
import LoginForm from './components/PTIT_CNTT4_IT104_Session17_Bai03/LoginForm'
import ColorPicker from './components/PTIT_CNTT4_IT104_Session17_Bai04/ColorPicker'
import InputText from './components/PTIT_CNTT4_IT104_Session17_Bai05/InputText'
import InputRadio from './components/PTIT_CNTT4_IT104_Session17_Bai06/InputRadio'
import Ex7_8 from './components/PTIT_CNTT4_IT104_Session17_Bai07+8/todoList'
export default class App extends Component {
  render() {
    return (
      <div>
        <Increase></Increase>
        <UserList></UserList>
        <LoginForm></LoginForm>
        <ColorPicker></ColorPicker>
        <InputText></InputText>
        <InputRadio></InputRadio>
        <Ex7_8></Ex7_8>
      </div>
    )
  }
}
