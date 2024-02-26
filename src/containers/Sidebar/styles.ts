import styled from 'styled-components'
import { P } from '../../components/Paragrafo/styles'

//desta vez, importou de um componente criado
export const Descricao = styled(P)`
  margin-top: 24px;
  margin-bottom: 40px;
`
export const BotaoTema = styled.button`
  color: #eee;
  border-radius: 12px;
  padding: 8px;
  font-size: 10px;
  font-weight: bold;
  background-color: #282a35;
  cursor: pointer;
`

export const SidebarContainer = styled.div`
  position: sticky;
  top: 80px;
  left: 0;
`
