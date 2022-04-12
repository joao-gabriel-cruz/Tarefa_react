
import './App.css';
import { useState, useEffect } from 'react';


function App() {

  const [funcionarios, setFuncionarios] = useState([
    { cpf: '431', nome: 'João', promover: false }

  ])


  function addFuncionarios(event) {


    event.preventDefault()

    const funciCpf = event.target.cpf.value
    const funciNome = event.target.name.value

    if (!funciCpf) {
      return event.target.name.value = ''
    }
    if (!funciNome) {
      return event.target.cpf.value = ''
    }

    setFuncionarios([...funcionarios, { cpf: funciCpf, name: funciNome, promover: false }])

    console.log(funcionarios)

    event.target.cpf.value = ''
    event.target.name.value = ''

  }
var mostrar = false

  function listFuncionarios() {
        return mostrar = trueya
  }
console.log(mostrar)
  return (
    <div className="App">
      <section>
        <h1>cadastre o funcionario</h1>
        <form onSubmit={addFuncionarios}>
          <br />
          <label>Nome:</label>
          <input id="name" placeholder='Nome' />
          <br />
          <label>Cpf:</label>
          <input id="cpf" placeholder='Cpf' />
          <br />
          <button>enviar</button>

        </form>
        <div>
          <p>mostrar lista de funcionarios cadastrados</p>
          <button onClick={listFuncionarios}>mostrar</button>
        </div>
        {mostrar ?
             <ul>
               {funcionarios.map(f => <li key={f.cpfcpf}>{funcionarios}</li>)}
             </ul>: ''
        }

      </section>
    </div>
  );
}

export default App;
