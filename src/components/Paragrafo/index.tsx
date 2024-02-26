import { P } from './styles'

export type Props = {
  children: string
  tipo?: 'principal' | 'secundario' //o pipe limite as opções da propriedade, se fosse apenas uma seria aceito qualquer valor para a condição if
  fontSize?: number
}

const Paragrafo = ({ children, tipo = 'principal', fontSize }: Props) => (
  <P fontSize={fontSize} tipo={tipo}>
    {children}
  </P>
)

export default Paragrafo
