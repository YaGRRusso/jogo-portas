import styles from '../styles/Cartao.module.css'

interface PropsCartao {
  bgColor?: string
  children?: any
}

export default function Cartao(props: PropsCartao) {
  return(
      <div className={styles.cartao} style={{
        backgroundColor: props.bgColor ?? 'white'
      }}>
        <h1>{props.children}</h1>
      </div>
  )
}