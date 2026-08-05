
// const App = () => {
// //  async function getData(){
// //     const response=await fetch('https://jsonplaceholder.typicode.com/todos/1')
// //     console.log(response);
//   }
//   return (
//     <div>
//       <button onClick={getData}>Get data</button>
//     </div>
//   )
// }

// export default App

import axios from 'axios'

const App = () => {
  const getData=async ()=>{
    const response=await axios.get('https://jsonplaceholder.typicode.com/todos/1')
    console.log(response.data);
  }
  return (
    <div>
      <button onClick={getData}>Get data</button>
    </div>
  )
}

export default App
