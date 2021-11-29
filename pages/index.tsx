import { useState } from "react";
import Porta from "../components/Porta";
import PortaModel from "../model/porta";

export default function Home() {
  const [p1, setP1] = useState(new PortaModel(1))
  const [p2, setP2] = useState(new PortaModel(2))
  const [p3, setP3] = useState(new PortaModel(3))

  return (
    <div style={{display: "flex"}}>
      <Porta porta={p1}/>
      <Porta porta={p2}/>
      <Porta porta={p3}/>
    </div>
  )
}
