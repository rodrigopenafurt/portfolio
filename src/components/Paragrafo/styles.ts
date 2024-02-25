import styled from 'styled-components'

import { Props } from '.'
//quando se chama index o arquivo pode colocar só "." no endereço do arquivo

export const P = styled.p<Props>`
  font-size: 14px;
  color: ${(props) => (props.tipo === 'principal' ? '#282a35' : '#949494')};
  line-height: 22px;
`
