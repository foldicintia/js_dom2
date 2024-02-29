/* Fogjuk meg az azon  elemet */

const azonELEM = document.getElementById("azon")
const azonELEM2 = document.querySelector("#azon")
console.log(azonELEM) /* tipusa html elem */
console.log(azonELEM2) /* tipusa html elem */
console.log(typeof azonELEM2) /* tipusa html elem */

azonELEM.innerHTML = "Alakul a js"


/* kartya elemek elerese */

const kartyaELEM = document.getElementsByClassName("kartya")
console.log(kartyaELEM) /* tipusa html collection, lista */
/* 2. kartyaba szeretnek beleirni */
kartyaELEM[1].innerHTML = "beleirtunk a masodik kartyaba"

const kartyaELEM2 = document.querySelector(".kartya")
console.log(kartyaELEM2) /* csak az elso ilyen html elemet kapjuk meg */

const kartyaELEM3 = document.querySelectorAll(".kartya")
console.log(kartyaELEM3) /* lista */
/* 3. divet akarom elerni */
kartyaELEM3[2].innerHTML +=  "hozzairunk valamit"


/* fogjuk m eg a button gombot */

const buttonELEM = document.querySelectorAll("button")[0]
console.log(buttonELEM)

/* rateszunk egy esemenykezelot */
buttonELEM.addEventListener("click", gombraKattint)
/* ez a fgv csak egy re4ferencia, avagy hivatkozas a fgv-re */
function gombraKattint(){
    // alert("hurra! rakattintottal  gombra")
    // alert helyett ha rakattintunk a gombra, az elso kartyaba keruljon bele a negyedik kartya tartalma is 
    kartyaELEM3[0].innerHTML += kartyaELEM3[3].innerHTML;

}

