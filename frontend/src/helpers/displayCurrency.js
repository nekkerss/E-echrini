const displayINRCurrency = (num) => {
    const formatter = new Intl.NumberFormat('en-tn',{
        style : "currency",
        currency : 'DNT',
        minimumFractionDigits : 2
    })

    return formatter.format(num)

}

export default displayINRCurrency