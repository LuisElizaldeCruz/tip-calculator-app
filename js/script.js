//let porcen = 0;
let btnporcentaje = document.querySelector(".porcentajes");

let custoP = document.querySelector(".txtEntrada");//porcentaje personalizado
let iCosto = document.querySelector(".costoI");//costo inicial
let numPersonas = document.querySelector(".numeroPersonas");

let monto = document.querySelector(".montoNumber");//etiqueta de tip amount/person
let tNumber = document.querySelector(".totalNumber");//etiqueta de total/person

let btn = document.querySelector(".btnReset");
btn.setAttribute("disabled", "disabled");

btn.addEventListener("click", () => {
    if(!btn.hasAttribute("disabled")) {
    custoP.value=0;
    iCosto.value=0;
    numPersonas.value=0;

    monto.textContent = "$0.00";
    tNumber.textContent = "$0.00";
    }
   
})

let total = (costo, porcentaje, cPersonas) => {
    let tipPersona = ((costo * porcentaje) / 100) / cPersonas;
    let totalPersona = (costo / cPersonas) + tipPersona;
    console.log("tip amount: " + tipPersona.toPrecision(3));
    console.log("total: " + totalPersona.toPrecision(4));
   
    monto.innerHTML =`$ ${tipPersona.toPrecision(3)}`;
    tNumber.innerHTML =`$ ${totalPersona.toPrecision(4)}`;
}


let envioDatos = (e) => {
   // let iCosto = document.querySelector(".costoI").value;//costo inicial
   // let numPersonas = document.querySelector(".numeroPersonas").value;

    if (iCosto.value >= 1 && numPersonas.value >= 1) {
        btn.removeAttribute("disabled");
        if (e.target.matches(".txtEntrada")) {
            console.log("se presiono el input");
            btnporcentaje.removeEventListener("click", envioDatos);
            btnporcentaje.addEventListener("keyup", envioDatos);
            if (e.target.value >= 1) {

                total(parseFloat(iCosto.value), parseInt(e.target.value), parseInt(numPersonas.value));

                console.log("se presiono el boton", e.target);
                console.log(e.target.value);
                btnporcentaje.addEventListener("click", envioDatos);
            } else {
                console.log("el campo personalizado esta vacio");
            }

        } else {
            total(parseFloat(iCosto.value), parseInt(e.target.textContent), parseInt(numPersonas.value));
        }
    } else {
        console.log("revise los datos");
    }
    // btnporcentaje.addEventListener("click", envioDatos);
};
btnporcentaje.addEventListener("click", envioDatos);
