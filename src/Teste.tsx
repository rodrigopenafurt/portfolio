import styled from 'styled-components'

type BotaoProps = {
  principal: boolean
  fontSize?: string
  //sem o ? a propriedade fica obrigatória
}

const Botao = styled.button<BotaoProps>`
  background-color: ${(props) => (props.principal ? 'green' : 'blue')};
  font-size: ${(props) => props.fontSize || '16px'};
`
// o pipe || irá usar o propriedade padrão caso a condição seja falsa. Se houver a propriedade, ela será utilizada. Se não, será a padrão

// herdando de outro styled (construtor). Tem que passar a propriedade herdade obrigatoriamente(principal)
const BotaoPerigo = styled(Botao)`
  background-color: red;
  color: #fff;

  span {
    text-decoration: line-through;
  }
`

function Teste() {
  return (
    <>
      <Botao principal>Enviar</Botao>
      <Botao fontSize="14px" principal={false}>
        Cancelar
      </Botao>
      <BotaoPerigo as="a" principal>
        <span>Não clique aqui</span>
      </BotaoPerigo>
    </>
  )
}

export default Teste
