export const priceFormat = (amount = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(amount)
}

export const sumCart = (items: Game[]) => {
  return items.reduce((acu, actualPrice) => {
    if (actualPrice.prices.current) {
      return (acu += actualPrice.prices.current)
    }
    return 0
  }, 0)
}
