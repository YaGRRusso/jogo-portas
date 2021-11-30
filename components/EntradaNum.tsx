import styles from '../styles/EntradaNum.module.css'

interface PropsEntrada {
  text: string
  value: number
  onChange: (newValue: number) => void
}

export default function EntradaNum(props: PropsEntrada) {
  const menos = () => props.onChange(props.value - 1)
  const mais = () => props.onChange(props.value + 1)

  return (
    <div className={styles.entradaNum}>
      <span className={styles.text}>{props.text}</span>
      <span className={styles.value}>{props.value}</span>
      <div className={styles.butoes}>
        <button className={styles.btn} onClick={menos}>-</button>
        <button className={styles.btn} onClick={mais}>+</button>
      </div>
    </div>
  )
}