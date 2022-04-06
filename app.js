const sum = (a,b)=>{
    return a + b
}


console.log(sum(7,3))


let oneEurois = {
    "JPY": 127.9,
    "USD": 1.2,
    "GBP": 0.8,
}



const fromDollarToYen=(usdValue)=>{
    let yenValue= (usdValue/oneEurois.USD)*oneEurois.JPY
    return yenValue.toFixed(2)
}

const fromEuroToDollar = (eurValue)=>{
  let usdValue= oneEurois.USD * eurValue
  return usdValue
}

const fromYenToPound = (yenValue)=>{
    let poundValue = (yenValue/oneEurois.JPY)*oneEurois.GBP
    return poundValue.toFixed(4)
}

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound}