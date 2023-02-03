let numberContainer = document.querySelector(".seccion3")
let rateNumber = document.querySelector(".mensajeFinal")
let enviarBoton = document.querySelector(".seccion4")
let primeraTarjeta = document.querySelector(".container")
let segundaTarjeta = document.querySelector(".thankyou")

numberContainer.addEventListener("click",  event => {
    let numberSelected = event.target.innerText
    let numberSelectednumero = parseInt(numberSelected)
    rateNumber.innerText = `You selected ${numberSelected} out of 5`
    if(numberSelectednumero  > 0 && numberSelectednumero <= 5) {
        enviarBoton.addEventListener("click", () => {
            primeraTarjeta.style.display = "none"
            segundaTarjeta.style.display = "flex"
        })
    }
})