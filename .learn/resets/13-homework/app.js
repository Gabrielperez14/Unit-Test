let oneEurois = {
    "JPY": 127.9,
    "USD": 1.2,
    "GBP": 0.8,
}



const fromDollarToYen=(usdValue)=>{
    let yenValue= (usdValue/oneEurois.USD)*oneEurois.JPY
    return yenValue
}

const fromEuroToDollar = (eurValue)=>{
  let usdValue= oneEurois.USD * eurValue
  return usdValue
}

const fromYenToPound = (yenValue)=>{
    let poundValue = (yenValue/oneEurois.JPY)*oneEurois.GBP
    return poundValue
}

module.exports = {fromEuroToDollar}