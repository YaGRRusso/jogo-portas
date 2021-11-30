import PortaModel from "../model/porta";

export default function criarPortas(qtde: number, comPresente: number): PortaModel[] {
  return Array.from({ length: qtde }, (_, i) => {
    const numero = i + 1
    const temPresente = numero === comPresente
    return new PortaModel(numero, temPresente)
  })
}

export function atualizarPortas(portas: PortaModel[], modificada: PortaModel) {
  return portas.map(portaAtual => {
    const igual = portaAtual.numero === modificada.numero

    if (igual) {
      return modificada 
    } else {
      return modificada.aberta ? portaAtual : portaAtual.desselecionar()
    }
  })
}