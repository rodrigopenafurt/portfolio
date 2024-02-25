import { P } from './styles'

export type Props = {
  children: string
  tipo?: 'principal' | 'secundario' //o pipe limite as opções da propriedade, se fosse apenas uma seria aceito qualquer valor para a condição if
}

const Paragrafo = ({ children, tipo = 'principal' }: Props) => (
  <P tipo={tipo}>{children}</P>
)

export default Paragrafo
