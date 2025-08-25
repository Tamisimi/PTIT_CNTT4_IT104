import React, { Component } from 'react'
import Exersice02 from './components/PTIT_CNTT4_IT104_Session16_Bai02/Exersice02'
import Exersice01 from './components/PTIT_CNTT4_IT104_Session16_Bai01/Exersice01'
import Exersice03 from './components/PTIT_CNTT4_IT104_Session16_Bai03/Exersice03'
import Exercise04 from './components/PTIT_CNTT4_IT104_Session16_Bai04/Exersice04'
import Exersice05 from './components/PTIT_CNTT4_IT104_Session16_Bai05/Exersice05'
import Exercise06 from './components/PTIT_CNTT4_IT104_Session16_Bai06/Exersice06'
import Exersice07 from './components/PTIT_CNTT4_IT104_Session16_Bai07/Exersice07&08'

export default class App extends Component {
  render() {
    return (
      <div>
        <Exersice01></Exersice01> <hr />
        <Exersice02></Exersice02> <hr />
        <Exersice03></Exersice03> <hr />
        <Exercise04></Exercise04> <hr />
        <Exersice05></Exersice05> <hr />
        <Exercise06></Exercise06> <hr />
        <Exersice07></Exersice07>

      </div>
    )
  }
}
