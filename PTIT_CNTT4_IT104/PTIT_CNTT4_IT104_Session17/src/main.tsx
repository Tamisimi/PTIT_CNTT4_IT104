import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import Exersice01 from './components/PTIT_CNTT4_IT104_Session16_Bai01/index.tsx'
import Exersice02 from './components/PTIT_CNTT4_IT104_Session17_Bai02/index.tsx'
import Exersice03 from './components/PTIT_CNTT4_IT104_Session17_Bai03/index.tsx'
import Exersice04 from './components/PTIT_CNTT4_IT104_Session17_Bai04/index.tsx'
import Exersice06 from './components/PTIT_CNTT4_IT104_Session17_Bai06/index.tsx'
import Exersice05 from './components/PTIT_CNTT4_IT104_Session17_Bai05/index.tsx'
import Exersice07 from './components/PTIT_CNTT4_IT104_Session17_Bai07/index.tsx'
import Exersice08 from './components/PTIT_CNTT4_IT104_Session17_Bai08/index.tsx'
import Exersice09 from './components/PTIT_CNTT4_IT104_Session17_Bai09/index.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <Exersice01></Exersice01>
    <Exersice02></Exersice02>
    <Exersice03></Exersice03>
    <Exersice04></Exersice04>
    <Exersice05></Exersice05>
    <Exersice06></Exersice06>
    <Exersice07></Exersice07>
    <Exersice08></Exersice08>
    <Exersice09></Exersice09>
  </StrictMode>,
)
