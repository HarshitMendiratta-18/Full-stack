import React from 'react'
import Card from './components/card'

const App = () => {
  return (
    <div className="parent">
     
     <Card user='Harry' age={19} img='https://images.unsplash.com/photo-1773332611612-ffdaa753afb1?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8' />
     <Card user='Saksham' age={23} img='https://images.unsplash.com/photo-1779896412244-aed1d2f8bed2?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8' />
     
    </div>
  )
}

export default App
