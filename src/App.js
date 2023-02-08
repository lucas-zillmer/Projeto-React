import './App.css'
import HelloWorld from './components/HelloWorld'
import SayMyName from './components/SayMyName'
import Pessoa from './components/Pessoa'

function App() {

  const nome = 'Álvaro'

  return (
    <div className="App">
      <h1>Testando React</h1>
      <SayMyName nome="Lucas"/>
      <SayMyName nome="Vitinho"/>
      <SayMyName nome={nome}/>
      <Pessoa 
        nome="Iago" 
        idade="24" 
        profissao="Developer Pleno" 
        foto="https://via.placeholder.com/150"
      />
    </div>
  )
}

export default App;