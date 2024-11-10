import { useState } from 'react'

import { InputGroup, Row, TabButton } from './styles'

import Button from '../../components/Button'
import Card from '../../components/Card'

import boleto from '../../assets/images/boleto.png'
import credito from '../../assets/images/credito.png'

const Checkout = () => {
  const [payWithCard, setPayWithCard] = useState(false)

  return (
    <div className="container">
      <Card title="Dados de cobrança">
        <>
          <Row>
            <InputGroup>
              <label htmlFor="fullName">Nome completo</label>
              <input type="text" id="fullName" />
            </InputGroup>
            <InputGroup>
              <label htmlFor="email">E-mail</label>
              <input type="e-mail" id="email" />
            </InputGroup>
            <InputGroup>
              <label htmlFor="cpf">CPF</label>
              <input type="text" id="cpf" />
            </InputGroup>
          </Row>
          <h3>Dados de entrega - conteúdo digital</h3>
          <Row>
            <InputGroup>
              <label htmlFor="dEmail">E-mail</label>
              <input type="email" id="dEmail" />
            </InputGroup>
            <InputGroup>
              <label htmlFor="confDEmail">Confirmação do e-mail</label>
              <input type="email" id="confDEmail" />
            </InputGroup>
          </Row>
        </>
      </Card>
      <Card title="Pagemento">
        <div>
          <TabButton
            isActive={!payWithCard}
            onClick={() => setPayWithCard(false)}
          >
            <img src={boleto} alt="Boleto" />
            Boleto bancário
          </TabButton>
          <TabButton
            isActive={payWithCard}
            onClick={() => setPayWithCard(true)}
          >
            <img src={credito} alt="Cartão de crédito" />
            Cartão de crédito
          </TabButton>
          {payWithCard ? (
            <>
              <Row>
                <InputGroup>
                  <label htmlFor="cardOwner">Nome do titular do cartão</label>
                  <input type="text" id="cardOwner" />
                </InputGroup>
                <InputGroup>
                  <label htmlFor="cpfOwner">CPF do titular do cartão</label>
                  <input type="text" id="cpfOwner" />
                </InputGroup>
              </Row>
              <Row marginTop="24px">
                <InputGroup>
                  <label htmlFor="nameCard">Nome no cartão</label>
                  <input type="text" id="nameCard" />
                </InputGroup>
                <InputGroup>
                  <label htmlFor="cardNumber">Número do cartão</label>
                  <input type="text" id="cardNumber" />
                </InputGroup>
                <InputGroup maxWidth="126px">
                  <label htmlFor="expMonth">Mês de vencimento</label>
                  <input type="text" id="expMonth" />
                </InputGroup>
                <InputGroup maxWidth="126px">
                  <label htmlFor="expYear">Ano de vencimento</label>
                  <input type="text" id="expYear" />
                </InputGroup>
                <InputGroup maxWidth="48px">
                  <label htmlFor="cvv">CVV</label>
                  <input type="text" id="cvv" />
                </InputGroup>
              </Row>
              <Row marginTop="24px">
                <InputGroup maxWidth="150px">
                  <label htmlFor="parcelas">Parcelamento</label>
                  <select id="">
                    <option>1x de R$ 200,00</option>
                    <option>2x de R$ 200,00</option>
                    <option>3x de R$ 200,00</option>
                  </select>
                </InputGroup>
              </Row>
            </>
          ) : (
            <p>
              Ao optar por essa forma de pagamento, é importante lembrar que a
              confirmação pode levar até 3 dias úteis, devido aos prazos
              estabelecidos pelas instituições financeiras. Portanto, a
              liberação do código de ativação do jogo adquirido ocorrerá somento
              após a aprovação do pagamento do boleto.
            </p>
          )}
        </div>
      </Card>
      <Button type="button" title="Clique aqui para finalizar a compra">
        Finalizar compra
      </Button>
    </div>
  )
}

export default Checkout
