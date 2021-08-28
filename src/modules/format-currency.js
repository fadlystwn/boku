function formatCurrency(amount) {
  if(amount) {
    new Intl.NumberFormat('id-ID', {
      style: 'decimal',
      currency: 'IDR',
    }).format(amount);
    return `Rp. ${amount}`
  }
}

export default formatCurrency