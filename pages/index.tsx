import Cartao from "../components/Cartao";
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import EntradaNum from "../components/EntradaNum";
import { useState } from "react";

export default function Home() {
  const [qtdePortas, setQtdePortas] = useState(3)
  const [comPres, setComPres] = useState(1)


  return (
    <div className={styles.home}>
      <div>

        <Cartao bgColor='#1B9088'>
          <h1>Monty Hall</h1>
        </Cartao>

        <Cartao>
          <EntradaNum text="Quantidade Portas:" value={qtdePortas} onChange={novaQtde => setQtdePortas(novaQtde)}/>
        </Cartao>

      </div>
      <div>

        <Cartao>
          <EntradaNum text="Porta com Presente:" value={comPres} onChange={novaQtde => setComPres(novaQtde)}/>
        </Cartao>

        <Cartao bgColor='#A9334A'>
          <Link href={`/jogo/${qtdePortas}/${comPres}`} passHref>
              <h1 className={styles.link}>Iniciar Jogo</h1>
          </Link>
        </Cartao>

      </div>
    </div>
  )
}
