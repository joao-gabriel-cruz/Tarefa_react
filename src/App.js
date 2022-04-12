
import './App.css';
import { useEffect, useState } from 'react';


function App() {

  const [funcionarios, setFuncionarios] = useState([
    { cpf: '583', name: 'roger', promover: false }

  ])

  var [mostrar, setMostrar] = useState(
    false
  )

  function addFuncionarios(event) {
    event.preventDefault()

    const funciCpf = event.target.cpf.value
    const funciNome = event.target.name.value

    if (!funciCpf || !funciNome) {
      return
    }


    setFuncionarios([...funcionarios, { cpf: funciCpf, name: funciNome, promover: false }])

    console.log(funcionarios)

    event.target.cpf.value = ''
    event.target.name.value = ''

  }

  function mostrarLista() {
    setMostrar(mostrar = !mostrar)
  }
  function apto(cpf){
    const funcionariosAptos = funcionarios.map(item => {
       if(cpf === item.cpf){
         item.promover = !item.promover
       }
       return item 
      }
    )
    setFuncionarios(funcionariosAptos)
  }

  return (
    <div className="App">
      <section>
        <h1>cadastre o funcionario</h1>
        <form onSubmit={addFuncionarios}>
          <br />
          <label>Nome:</label>
          <input id="name" placeholder='Nome' required type="text" />
          <br />
          <label>Cpf:</label>
          <input id="cpf" placeholder='Cpf' required type="number" />
          <br />
          <button>enviar</button>
        </form>
        <div>
          <p>mostrar lista de funcionarios cadastrados</p>
          <button onClick={mostrarLista}>mostrar</button>
        </div>
        {mostrar &&
          funcionarios.map(item =>
              <li  key={item.cpf}>
              {item.name} {item.cpf} {console.log(item.promover)}  
                <button onClick={apto(item.cpf)}>{item.promover ? 'inapto' : 'apto'}</button>
              </li>
          )
        }
      </section>
    </div>
  );
}

export default App;
