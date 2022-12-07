function razbi(e){
  e.preventDefault();
  let recenica=document.getElementById("recenica").value;
  let brojznakova=recenica.length;
  const myArray=recenica.split(/[.?!]/);
  document.getElementById("kolikoRecenica").innerHTML =`Imate ${(myArray.length)-1} recenica`
  document.getElementById("brojZnakova").innerHTML = `Broj znakova u rečenici je ${brojznakova}`;
}
function velika(e){
  e.preventDefault();
  let recenica=document.getElementById("recenica").value;
  document.getElementById("velikaSlova").innerHTML = `Rečenica promjenjena sa velikim slovima: ${recenica.toUpperCase()}`;

}
