
import './App.css'
import Card from './components/Card'

function App() {
  let myObj = {
    username: "Harsh",
    age:19
  };

  let newArr = [1,2,3];
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4" >Tailwind Test</h1>

      <Card username="Harsh Bari"/>
      <Card />

    </>
  )
}

export default App
