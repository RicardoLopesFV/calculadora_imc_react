/* eslint-disable react/jsx-key */

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons'
import { faRotateRight } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

function App() {
  const [altura, setAltura] = useState('')
  const [peso, setPeso] = useState('')
  const [resultado, setResultado] = useState('')

  function calcularIMC() {
    const alturaValor = parseFloat(altura)
    const pesoValor = parseFloat(peso)

    const imc = pesoValor / (alturaValor * alturaValor)
    setResultado(imc.toFixed(2))

    document.getElementsByClassName('col-1__result')[0].style.display = 'block'
  }

  function classificarIMC() {
    if (resultado < 18.5) {
      return 'Magreza'
    } else if (resultado >= 18.6 && resultado <= 24.9) {
      return 'Normal'
    } else if (resultado >= 25 && resultado <= 30) {
      return 'Sobrepeso'
    } else if (resultado >= 30.1 && resultado <= 34.9) {
      return 'Obesidade'
    }
  }

  function aparecerIMC() {
    return (
      <p className='col-1__result'>Seu IMC é de {resultado}Kg/m2 classificado como {classificarIMC()}.</p>
    )
  }

  function atualizarPágina() {
    window.location.reload()
  }

  return (
    <div className="App">
      <div className="container">
        <div className="col-1">
          <h1 className="col-1__title">Calcule o seu IMC.</h1>
          <p className='col-1__description'>
          IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela OMS para calcular o peso ideal de cada pessoa.
          </p>
          <form className='col-1__form'>
            <input id='altura' onChange={e => setAltura(e.target.value)} value={altura} type="number" className='col-1__form__input' placeholder='Digite sua altura. Ex: 1.5 ou 1 (em metros)'/>
            <input id='peso' onChange={e => setPeso(e.target.value)} value={peso} type="number" className='col-1__form__input' placeholder='Digite seu peso. Ex: 75.5 ou 75 (em kg)'/>
          </form>
          <div className="col-1__btns">
            <button onClick={calcularIMC} className='col-1__btns__btn-calcular' type="submit">Calcular</button>
            <button onClick={atualizarPágina} className='col-1__btns__btn-reload'><FontAwesomeIcon icon={faRotateRight} style={{color: "#ffffff", background: "transparent"}} /></button>
          </div>
          {aparecerIMC()}
        </div>
        <div className="col-2">
          <div className="box box--gray">
            <div className="col-2__circle col-2__circle--gray">
              <FontAwesomeIcon icon={faThumbsDown} style={{color: "#ffffff", background: "transparent"}} />
            </div>
            <h2 className="col-2__title col-2__title--gray">Magreza</h2>
            <p className="col-2__description col-2__description--gray">
              IMC está entre 0 e 18.5
            </p>
          </div>
          <div className="box box--green">
            <div className="col-2__circle col-2__circle--green">
              <FontAwesomeIcon icon={faThumbsUp} style={{color: "#ffffff", background: "transparent"}} />
            </div>
            <h2 className="col-2__title col-2__title--green">Normal</h2>
            <p className="col-2__description col-2__description--green">
              IMC está entre 18.6 e 24.9
            </p>
          </div>
          <div className="box box--yellow">
            <div className="col-2__circle col-2__circle--yellow">
              <FontAwesomeIcon icon={faThumbsDown} style={{color: "#ffffff", background: "transparent"}} />
            </div>
            <h2 className="col-2__title col-2__title--yellow">Sobrepeso</h2>
            <p className="col-2__description col-2__description--yellow">
              IMC está entre 25 e 30
            </p>
          </div>
          <div className="box box--red">
            <div className="col-2__circle col-2__circle--red">
              <FontAwesomeIcon icon={faThumbsDown} style={{color: "#ffffff", background: "transparent"}} />
            </div>
            <h2 className="col-2__title col-2__title--red">Obesidade</h2>
            <p className="col-2__description col-2__description--red">
              IMC está entre 30.1 e 99
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
