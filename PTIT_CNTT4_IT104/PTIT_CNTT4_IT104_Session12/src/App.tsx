import React from 'react'
import ListCourse from './components/PTIT_CNTT4_IT104_Session012_Bai01/ListCourse';
import Calculation from './components/PTIT_CNTT4_IT104_Session012_Bai02/Calculation';
import UserInfo from './components/PTIT_CNTT4_IT104_Session012_Bai03/UserInfo';
import ColorBox from './components/PTIT_CNTT4_IT104_Session012_Bai04/ColorBox';
import FormatName from './components/PTIT_CNTT4_IT104_Session012_Bai05/FormatName';
import AdminIndex from './components/PTIT_CNTT4_IT104_Session012_Bai06/AdminIndex';
import UserLayout from './components/PTIT_CNTT4_IT104_Session012_Bai07/UserLayout';
import ListAcc from './components/PTIT_CNTT4_IT104_Session012_Bai08/UserTable';

export default function App() {
  return (
    <p>
      <ListCourse></ListCourse>
      <Calculation></Calculation>
      <UserInfo></UserInfo>
      <ColorBox></ColorBox>
      <FormatName></FormatName>
      <AdminIndex></AdminIndex>
      <UserLayout></UserLayout>
      <ListAcc></ListAcc>
    </p>
  )
}