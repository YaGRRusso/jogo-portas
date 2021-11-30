import styles from '../styles/Porta.module.css'
import PortaModel from '../model/porta'
import Presente from './Presente'

interface PortaProps {
  value: PortaModel
  onChange: (novaPorta: PortaModel) => void
}

export default function Porta(props: PortaProps) {
  const porta = props.value
  const selecionada = porta.selecionada && !porta.aberta ? styles.selecionada : ''

  const abrir = (e) => {
    e.stopPropagation()
    props.onChange(porta.abrir())
  }

  const fechar = (e) => {
    e.stopPropagation()
    props.onChange(porta.fechar())
  }

  const alternarSelecao = function(e) {
    return props.onChange(porta.alternarSelecao())
  }

  function renderPorta() {
    return (
      <div className={styles.porta}>
        <div className={styles.numero}>{porta.numero}</div>
        <div className={styles.macaneta} onClick={abrir}></div>
      </div>
    )
  }

  function renderPresente() {
    return (
      <Presente/>
    )
  }

  function fecharPorta() {
    return (
      <div style={{display: 'flex', flex: 1}} onClick={fechar}></div>
    )
  }

  return(
    <div className={styles.area} onClick={alternarSelecao}>
      <div className={`${styles.estrutura} ${selecionada}`}>
        {porta.fechada ? renderPorta() : porta.temPresente ? renderPresente() : fecharPorta()}
      </div>
      <div className={styles.chao}/>
    </div>
  )
}