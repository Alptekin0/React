import './App.css'
import useCount from './hooks/useCount'
import useVisible from './hooks/useVisible'

function App() {

  const { decrease, increase, count } = useCount()

  const { request, visible } = useVisible();

  return (
    <>
      <div>
        {count}
      </div>

      <button onClick={decrease} > ARTTIR </button>
      <button onClick={increase}> AZALT </button>
      <br /> <br /> <br />
      {
        visible ? <div style={{ backgroundColor: "black", width: "210px", height: "210px" }} ></div> : <div></div>
      }

      {
        visible ? <button onClick={request}> visible </button> : <button onClick={request}> not visible </button>
      }


    </>
  )
}

export default App
