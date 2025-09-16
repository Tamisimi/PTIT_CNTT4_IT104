import React from 'react'
// import Ex01_2 from './components/Ex1+2'
// import Ex03_4_5_6 from './components/Ex03+4+5+6'
// import Ex07 from './components/Ex7'
import Ex08 from './components/Ex8'

export default function App() {
  return (
    <div>
      {/* <Ex01_2></Ex01_2> */}
      {/* <Ex03_4_5_6></Ex03_4_5_6> */}
      {/* <Ex07></Ex07> */}
      <Ex08></Ex08>
    </div>
  )
}



// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// type User = {
//   id: number,
//   name: string,
// }
// export default function App() {
//   const [users, cd setUsers] = useState<any>([]);

//   async function getData() {
//     let res = await axios.get("http://localhost:8080/users");
//     console.log("res", res);
//     setUsers([...res.data]);
//   }
//   useEffect(() => {
//     getData();
//   }, [])
//   return (
//     <div>
//       học API
//       <ul>
//         {users.map((item: any, index: number) => {
//           return <li key={index}> {item.name}</li>
//         })}
//       </ul>
//     </div>
//   )
// }