import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Exersice01 from './components/PTIT_CNTT4_IT104_Session14_Bai1/Exersice01.tsx'
import Exercise02 from './components/PTIT_CNTT4_IT104_Session14_Bai2/Exersice02.tsx'
import Exersice03 from './components/PTIT_CNTT4_IT104_Session14_Bai3/Exersice03.tsx'
import Exersice04 from './components/PTIT_CNTT4_IT104_Session14_Bai4/Exersice04.tsx'
import ListPost from './components/PTIT_CNTT4_IT104_Session14_Bai6/ListPost.tsx'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Exersice01></Exersice01>
    <Exercise02></Exercise02>
    <Exersice03></Exersice03>
    <Exersice04></Exersice04>
    <ListPost></ListPost>
  </StrictMode>,
)
