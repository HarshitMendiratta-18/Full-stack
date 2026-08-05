

const App = () => {
  
  return (
    <div>
      <div onMouseMove={(elem)=>{
        console.log(elem.clientX,elem.clientY)
      }} className="box">

      </div>
      
    </div>
  )
}

export default App
