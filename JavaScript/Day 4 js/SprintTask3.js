let buyUSD = 429
let buyEUR = 507
let sellUSD = 431
let sellEur = 509


selector.addEventListener('mouseout', countMoney)


function countMoney() {
    let money = amount.value
    let currency = selector.value

    if (currency == "KZT") {
        document.getElementById("tng").textContent = "-"
        document.getElementById("dol").textContent = (money / buyUSD).toFixed(2)
        document.getElementById("eur").textContent=(money/buyEUR).toFixed(2)
    }

    if (currency=="USD"){
        document.getElementById("tng").textContent=(money * sellUSD).toFixed(2)
        document.getElementById("dol").textContent="-"
        document.getElementById("eur").textContent=(money*(sellUSD/sellEur)).toFixed(2)
    }

    if (currency=="EUR"){
        document.getElementById("tng").textContent=(money*sellUSD).toFixed(2)
        document.getElementById("dol").textContent=(money*(sellEur/sellUSD)).toFixed(2)
        document.getElementById("eur").textContent="-"
    }
}


