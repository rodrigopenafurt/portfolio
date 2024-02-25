import styled from 'styled-components'

import { Props } from '.'
//quando se chama index o arquivo pode colocar só "." no endereço do arquivo

export const Titulo = styled.h3<Props>`
  color: #282a35;
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
  font-weight: bold;
  margin-bottom: 16px;
`
