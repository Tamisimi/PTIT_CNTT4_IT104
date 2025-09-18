import React from 'react'
import { Provider } from 'react-redux'
import { store } from './store/store'
import Profile from './pages/Profile'
import UserList from './pages/UserList'
import Counter from './pages/Counter'
import RandomNumber from './pages/RandomNumber'
import ChangeState from './pages/ChangeState'
import ThemeToggle from './pages/ThemeToggle'
import UserDashboard from './pages/UserDashboard'
import Register from './pages/Register'

export default function App() {
  return (
    <div>
      REDUX
      <Provider store={store} >
        <Profile></Profile>
        <UserList></UserList>
        <Counter></Counter>
        <RandomNumber></RandomNumber>
        <ChangeState></ChangeState>
        <ThemeToggle></ThemeToggle>
        <UserDashboard></UserDashboard>
        <Register></Register>
      </Provider>
    </div>
  )
}
