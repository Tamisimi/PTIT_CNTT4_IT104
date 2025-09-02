import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import Stringlength from './components/PTIT_CNTT4_IT104_Session20_Bai01/Stringlength.tsx'
import UserProfile from './components/PTIT_CNTT4_IT104_Session20_Bai02/UserProfile.tsx'
import PageTitle from './components/PTIT_CNTT4_IT104_Session20_Bai04/PageTitle.tsx'
import Welcome from './components/PTIT_CNTT4_IT104_Session20_Bai03/Welcome.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <Stringlength></Stringlength>
    <UserProfile></UserProfile>
    <Welcome></Welcome>
    <PageTitle></PageTitle>
  </StrictMode>,
)
