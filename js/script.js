let porcen = 0;
let btnporcentaje = document.querySelector(".porcentajes");
let custoP = document.querySelector(".txtEntrada");//porcentaje personalizado

let monto = document.querySelector(".montoNumber");
let tNumber = document.querySelector(".totalNumber");

let btn = document.querySelector(".btnReset");
btn.setAttribute("disabled", "disabled");

let total = (costo, porcentaje, cPersonas) => {
    let tipPersona = ((costo * porcentaje) / 100) / cPersonas;
    let totalPersona = (costo / cPersonas) + tipPersona;
    console.log("tip amount: " + tipPersona.toPrecision(3));
    console.log("total: " + totalPersona.toPrecision(4));
    // if(tipPersona != NaN && totalPersona != NaN){
    monto.innerHTML = tipPersona.toPrecision(3);
    tNumber.innerHTML = totalPersona.toPrecision(4);
    //}
    //else{
    //   monto.innerHTML = "0.0";
    // tNumber.innerHTML ="0.0";
    // console.log("el elemento esta vacio");
    //}
}


let envioDatos = (e) => {
    let iCosto = document.querySelector(".costoI").value;//costo inicial
    let numPersonas = document.querySelector(".numeroPersonas").value;

    if (iCosto >= 1 && numPersonas >= 1) {
        btn.removeAttribute("disabled");
        if (e.target.matches(".txtEntrada")) {
            console.log("se presiono el input");
            btnporcentaje.removeEventListener("click", envioDatos);
            btnporcentaje.addEventListener("keyup", envioDatos);
            if (e.target.value >= 1) {


                total(parseFloat(iCosto), parseInt(e.target.value), parseInt(numPersonas));

                console.log("se presiono el boton", e.target);
                console.log(e.target.value);
                btnporcentaje.addEventListener("click", envioDatos);
            } else {
                console.log("el campo personalizado esta vacio");
            }

        } else {
            total(parseFloat(iCosto), parseInt(e.target.textContent), parseInt(numPersonas));
        }
    } else {
        console.log("revise los datos");
    }

    // btnporcentaje.addEventListener("click", envioDatos);

};
btnporcentaje.addEventListener("click", envioDatos);
