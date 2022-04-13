
import './App.css';
import { useState } from 'react';

import { validarCPF } from './utils/util'


function App() {

  const [funcionarios, setFuncionarios] = useState([
    { cpf: '583', name: 'roger', promover: false }

  ])

  var [mostrar, setMostrar] = useState(
    false
  )

  function addFuncionarios(event) {
    event.preventDefault()

    var funciCpf = event.target.cpf.value
    const funciNome = event.target.name.value

    const validar_cpf = validarCPF(funciCpf)
    if(!validar_cpf) {
      alert('CPF invalido')
      return
    }

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
  
  function demitir(cpf){
     const demitir = funcionarios.filter(item =>
     item.cpf !== cpf  
    )
      setFuncionarios(demitir)
      
  }

  function apto(cpf) {
    const funcionariosAptos = funcionarios.map(item => {
      if (cpf === item.cpf) {
        item.promover = !item.promover
      }
      return item
    }
    )
    setFuncionarios(funcionariosAptos)
  }

  return (
    <div className="App">
      <header>
        <h1>Empresa X</h1>
      </header>
      <section>
        <div id='cadastro'>
          <h1 id='tituloCadastro'>cadastre o funcionario</h1>
          <form onSubmit={addFuncionarios}>
            <br />
            <label>Nome:</label>
            <input id="name" placeholder='Nome' required type="text" />
            <br />
            <label>Cpf:</label>
            <input id="cpf" placeholder="Ex.: 000.000.000-00" class="form-control cpf-mask" required type="text" />
            <br />
            <button id='enviarForm'>enviar</button>
          </form>
        </div>
        <div id='listFuncionarios'>
            <label id='tituloListaFuncionarios'>mostrar lista de funcionarios cadastrados</label>
            <button id='mostratLista' onClick={mostrarLista}>mostrar</button>
          {mostrar &&
            funcionarios.map(item =>
              
              <li key={item.cpf} style={item.promover ? funcionariosApto : funcionariosInapto}>
                nome: {item.name} cpf: {item.cpf} {console.log(item.promover)}
                <button 
                style={item.promover ? notAptoCheck : AptoCheck}
                id='checkApto' onClick={() => apto(item.cpf)}>{item.promover ? 'inapto' : 'apto'}
                </button>
                <button id='demitir' onClick={() => demitir(item.cpf)} >Demitir</button>
                <br/>
                <br/>
              </li>
            )
          }
        </div>
      </section>
    </div>
  );
}

export default App;

const funcionariosApto = {
  color: '#00c214'
}
const funcionariosInapto = {

}

const notAptoCheck = {
  backgroundColor: 'aliceblue',
  
  width: '60px',
  height: '50px',

  border: 'solid 3px #5daad4', 
  borderRadius: '15px',
  marginLeft: '9px',

  cursor: 'pointer',
}


var AptoCheck = {
  backgroundColor: '#befac4',
  
  width: '60px',
  height: '50px',

  border: 'solid 3px #5dd469', 
  borderRadius: '15px',
  marginLeft: '9px',

  cursor: 'pointer',
}