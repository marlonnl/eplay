import { useState } from 'react'

import { useFormik } from 'formik'
import * as Yup from 'yup'

import { InputGroup, Row, TabButton } from './styles'

import Button from '../../components/Button'
import Card from '../../components/Card'

import boleto from '../../assets/images/boleto.png'
import credito from '../../assets/images/credito.png'
import { usePurchaseMutation } from '../../services/api'

const Checkout = () => {
  const [payWithCard, setPayWithCard] = useState(false)
  const [purchase, { isLoading, isError, data }] = usePurchaseMutation()

  const form = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      cpf: '',
      dEmail: '',
      confDEmail: '',
      cardOwner: '',
      cpfOwner: '',
      nameCard: '',
      cardNumber: '',
      expMonth: '',
      expYear: '',
      cvv: '',
      parcelas: 1
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('Campo obrigatório'),
      email: Yup.string()
        .email('E-mail inválido')
        .required('Campo obrigatório'),
      cpf: Yup.string()
        .min(14, 'CPF inválido')
        .max(14, 'CPF inválido')
        .required('Campo obrigatório'),
      dEmail: Yup.string()
        .email('E-mail inválido')
        .required('Campo obrigatório'),
      confDEmail: Yup.string()
        .oneOf([Yup.ref('dEmail')], 'Os e-mails são diferentes')
        .required('Campo obrigatório'),

      cardOwner: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('Campo obrigatório') : schema
      ),
      cpfOwner: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('Campo obrigatório') : schema
      ),
      nameCard: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('Campo obrigatório') : schema
      ),
      cardNumber: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('Campo obrigatório') : schema
      ),
      expMonth: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('Campo obrigatório') : schema
      ),
      expYear: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('Campo obrigatório') : schema
      ),
      cvv: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('Campo obrigatório') : schema
      ),
      parcelas: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('Campo obrigatório') : schema
      )
    }),
    onSubmit: (values) => {
      purchase({
        products: [
          {
            id: 1,
            price: 10
          }
        ],
        billing: {
          name: values.fullName,
          email: values.email,
          document: values.cpf
        },
        delivery: {
          email: values.dEmail
        },
        payment: {
          card: {
            active: payWithCard,
            owner: {
              name: values.cardOwner,
              document: values.cpfOwner
            },
            name: values.nameCard,
            number: values.cardNumber,
            expires: {
              month: Number(values.expMonth),
              year: Number(values.expYear)
            },
            code: Number(values.cvv)
          },
          installments: 1
        }
      })
    }
  })

  const getErrorMessage = (fieldName: string, errorMessage?: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors

    if (isTouched && isInvalid) return errorMessage
    return ''
  }

  return (
    <form onSubmit={form.handleSubmit} className="container">
      <Card title="Dados de cobrança">
        <>
          <Row>
            <InputGroup>
              <label htmlFor="fullName">Nome completo</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={form.values.fullName}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>{getErrorMessage('fullName', form.errors.fullName)}</small>
            </InputGroup>
            <InputGroup>
              <label htmlFor="email">E-mail</label>
              <input
                type="e-mail"
                id="email"
                name="email"
                value={form.values.email}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>{getErrorMessage('email', form.errors.fullName)}</small>
            </InputGroup>
            <InputGroup>
              <label htmlFor="cpf">CPF</label>
              <input
                type="text"
                id="cpf"
                name="cpf"
                value={form.values.cpf}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>{getErrorMessage('cpf', form.errors.fullName)}</small>
            </InputGroup>
          </Row>
          <h3>Dados de entrega - conteúdo digital</h3>
          <Row>
            <InputGroup>
              <label htmlFor="dEmail">E-mail</label>
              <input
                type="email"
                id="dEmail"
                name="dEmail"
                value={form.values.dEmail}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>{getErrorMessage('dEmail', form.errors.fullName)}</small>
            </InputGroup>
            <InputGroup>
              <label htmlFor="confDEmail">Confirmação do e-mail</label>
              <input
                type="email"
                id="confDEmail"
                name="confDEmail"
                value={form.values.confDEmail}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>
                {getErrorMessage('confDEmail', form.errors.fullName)}
              </small>
            </InputGroup>
          </Row>
        </>
      </Card>
      <Card title="Pagemento">
        <div>
          <TabButton
            type="button"
            isActive={!payWithCard}
            onClick={() => setPayWithCard(false)}
          >
            <img src={boleto} alt="Boleto" />
            Boleto bancário
          </TabButton>
          <TabButton
            type="button"
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
                  <input
                    type="text"
                    id="cardOwner"
                    name="cardOwner"
                    value={form.values.cardOwner}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <small>
                    {getErrorMessage('cardOwner', form.errors.fullName)}
                  </small>
                </InputGroup>
                <InputGroup>
                  <label htmlFor="cpfOwner">CPF do titular do cartão</label>
                  <input
                    type="text"
                    id="cpfOwner"
                    name="cpfOwner"
                    value={form.values.cpfOwner}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <small>
                    {getErrorMessage('cpfOwner', form.errors.fullName)}
                  </small>
                </InputGroup>
              </Row>
              <Row marginTop="24px">
                <InputGroup>
                  <label htmlFor="nameCard">Nome no cartão</label>
                  <input
                    type="text"
                    id="nameCard"
                    name="nameCard"
                    value={form.values.nameCard}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <small>
                    {getErrorMessage('nameCard', form.errors.fullName)}
                  </small>
                </InputGroup>
                <InputGroup>
                  <label htmlFor="cardNumber">Número do cartão</label>
                  <input
                    type="text"
                    id="cardNumber"
                    name="cardNumber"
                    value={form.values.cardNumber}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <small>
                    {getErrorMessage('cardNumber', form.errors.fullName)}
                  </small>
                </InputGroup>
                <InputGroup maxWidth="126px">
                  <label htmlFor="expMonth">Mês de vencimento</label>
                  <input
                    type="text"
                    id="expMonth"
                    name="expMonth"
                    value={form.values.expMonth}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <small>
                    {getErrorMessage('expMonth', form.errors.fullName)}
                  </small>
                </InputGroup>
                <InputGroup maxWidth="126px">
                  <label htmlFor="expYear">Ano de vencimento</label>
                  <input
                    type="text"
                    id="expYear"
                    name="expYear"
                    value={form.values.expYear}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <small>
                    {getErrorMessage('expYear', form.errors.fullName)}
                  </small>
                </InputGroup>
                <InputGroup maxWidth="48px">
                  <label htmlFor="cvv">CVV</label>
                  <input
                    type="text"
                    id="cvv"
                    name="cvv"
                    value={form.values.cvv}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <small>{getErrorMessage('cvv', form.errors.fullName)}</small>
                </InputGroup>
              </Row>
              <Row marginTop="24px">
                <InputGroup maxWidth="150px">
                  <label htmlFor="parcelas">Parcelamento</label>
                  <select
                    id="parcelas"
                    name="parcelas"
                    value={form.values.parcelas}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  >
                    <option>1x de R$ 200,00</option>
                    <option>2x de R$ 200,00</option>
                    <option>3x de R$ 200,00</option>
                  </select>
                  <small>
                    {getErrorMessage('parcelas', form.errors.fullName)}
                  </small>
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
      <Button
        type="button"
        title="Clique aqui para finalizar a compra"
        onClick={form.handleSubmit}
      >
        Finalizar compra
      </Button>
    </form>
  )
}

export default Checkout
