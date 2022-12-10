const UiAuto = {
  nadimak1: document.getElementById("nadimak1"),
  autoBoja1: document.getElementById("boja1"),
  autoBoja2: document.getElementById("boja2"),
  nadimak2: document.getElementById("nadimak2"),
  brzina1: document.getElementById("brzina1"),
  brzina2: document.getElementById("brzina2"),
  daljina: document.getElementById("daljina"),
  prikaz: document.getElementById("prikaz"),
};
let auto1 = {};
let auto2 = {};

function stvoriObjekte() {
  auto1.nadimak = UiAuto.nadimak1.value;
  auto1.boja = UiAuto.autoBoja1.value;
  auto1.brzina = parseInt(UiAuto.brzina1.value)
    ? parseInt(UiAuto.brzina1.value)
    : undefined;
  auto2.nadimak2 = UiAuto.nadimak2.value;
  auto2.boja2 = UiAuto.autoBoja2.value;
  auto2.brzina2 = parseInt(UiAuto.brzina2.value)
    ? parseInt(UiAuto.brzina2.value)
    : undefined;
  daljina = parseInt(UiAuto.daljina.value)
    ? parseInt(UiAuto.daljina.value)
    : undefined;
}

function utrka(event) {
  event.preventDefault();
  stvoriObjekte();
  let vrijeme1 = daljina / auto1.brzina;
  let vrijeme2 = daljina / auto2.brzina2;
  if (vrijeme1 > vrijeme2) {
    document.getElementById(
      "prikaz"
    ).innerHTML = `Pobjednik je auto sa nadimkom ${
      auto2.nadimak2
    },ima boju ${auto2.boja2},brzina mu je ${
      auto2.brzina2
    } km/h,prijeđena duljina je ${daljina}metara te je prešao u vremenu od ${vrijeme2.toFixed(
      2
    )}sec`;
  }else if (vrijeme1 == vrijeme2){
    document.getElementById("prikaz").innerHTML=`Oba su pobjednici`
  }
   else {
    document.getElementById(
      "prikaz"
    ).innerHTML = `Pobjednik je auto sa nadimkom ${
      auto1.nadimak
    },ima boju ${auto1.boja},brzina mu je ${
      auto1.brzina
    } km/h,prijeđena duljina je ${daljina}metara te je prešao u vremenu od ${vrijeme1.toFixed(
      2
    )}sec`;
  }
  //Moguči slučajevi
 if(auto1.nadimak == "" || auto2.nadimak2 == "" ){
  document.getElementById("prikaz").innerHTML=`Unesite nadimak ispravno`
 }
 //Slučajevi za brzinu
 if (auto1.brzina <0 || auto2.brzina2 <0){
  document.getElementById("prikaz").innerHTML=`Ne prihvaca se negativna brzina`
 }else if (auto1.brzina ==undefined || auto2.brzina2 ==undefined){
  document.getElementById("prikaz").innerHTML=`Popunite polje Brzina sa iznosom većim od 0`
 }else if (auto1.brzina ==0 || auto2.brzina2 ==0){
  document.getElementById("prikaz").innerHTML=`Auto stoji na mjestu`
 }
 //Slučajevi za daljinu
 if (daljina<0){
  document.getElementById("prikaz").innerHTML=`Maknite - u daljini`
 }else if(daljina==undefined){
  document.getElementById("prikaz").innerHTML=`Unesite daljinu`
 }
}
