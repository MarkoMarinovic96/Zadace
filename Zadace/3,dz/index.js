const magicniBroj= Math.floor(Math.random() * 100);
let brojj=document.getElementById("broj");
let pokusaji=0
function pogodak (event){
event.preventDefault();
let brojZaPogodit=brojj.value;
if(magicniBroj>brojZaPogodit){
  (document.getElementById("nesto").innerHTML="Unesite veci broj"),pokusaji+=1   
}else if(magicniBroj<brojZaPogodit){
  (document.getElementById("nesto").innerHTML="Unesite manji broj"),pokusaji+=1  
}else if(brojZaPogodit < 1){
  document.getElementById("nesto").innerHTML="Niste unjeli ispravni broj"} 
  else {document.getElementById("nesto").innerHTML=`Bravo pogodili ste iz ${pokusaji} pokusaja`};

document.getElementById("pogotci").innerHTML=`Broj pokusaja:${pokusaji}`
 console.log(`${magicniBroj} `)
}