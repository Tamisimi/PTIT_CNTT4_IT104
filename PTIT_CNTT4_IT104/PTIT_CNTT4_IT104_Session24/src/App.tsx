import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import header from './components/header/header'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <div className='title'>
        QUan ly hoa don tien dien
      </div>
      <form action="">
        <h2>Form nhap du lieu</h2>
        <input type="text" placeholder='Nhap ten chu ho' />
        <input type="text" placeholder='Gia tien' />
        <button>Them</button>
      </form>
      <table>Bang hien thi ket qua</table>
    </div>
  )
}

export default App