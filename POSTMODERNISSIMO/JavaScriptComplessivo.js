
//codice per fare in modo che la pagina non scorra in orizzontale
var scrollEventHandler = function()
{
  window.scroll(0, window.pageYOffset)
}
window.addEventListener("scroll", scrollEventHandler, false);


//inizio codice per il menù a comparsa
function menu() {
  var x = document.getElementById("menuHide");
  if (x.style.display === "block") {
    x.style.display = "none";
    window.onscroll = function () {};
  } else {
    x.style.display = "block";
    window.onscroll = function () { window.scrollTo(0, 0); };
  }
}
//fine codice per il menù a comparsa
//inizio codice per il menù a comparsa smartphone
function menuSmart() {
  var x = document.getElementById("menuHideSmart");
  if (x.style.display === "block") {
    x.style.display = "none";
    window.onscroll = function () {};
  } else {
    x.style.display = "block";
    window.onscroll = function () { window.scrollTo(0, 0); };
  }
}
//fine codice per il menù a comparsa smartphone
//inizio funzione per la pagina programmazione che mostra l'ora di adesso
function addZero(h,m){
  var orario=document.getElementById("orariobasso");
  var orarioTab=document.getElementById("orariobassoTab");
  if(h<10){
    h="0"+h;
    if(m<10){
      m="0"+m;
      orario.innerHTML= h+"."+m;
      orarioTab.innerHTML= h+"."+m;
      }
    else {
      orario.innerHTML= h+"."+m;
      orarioTab.innerHTML= h+"."+m;
  }
}
  if(m<10){
    m="0"+m;
    orario.innerHTML= h+"."+m;
    orarioTab.innerHTML= h+"."+m;
    }
  else {
    orario.innerHTML= h+"."+m;
    orarioTab.innerHTML= h+"."+m;
}
}

function oraDelGiorno(){
  //var orario= document.getElementById('orariobasso');
  //orario.innerHtml="ciao";
  var orario=document.getElementById("orariobasso");
  var linea=document.getElementById("lineaTempo");
  var orarioTab=document.getElementById("orariobassoTab");
  var lineaTab=document.getElementById("lineaTempoTab");
  var data = new Date();
  var h,m;
  h = data.getHours();

  m = data.getMinutes();

  if ((h=>3) && (h<11)){
  addZero(h,m);
  //desktop
  orario.style.right = "710px";
  linea.style.right = "314.5px";
  //tab
  orarioTab.style.top = "-52px";
  lineaTab.style.top = "-267px";
  }
  else if ((h=>11) && (h<18)){
    addZero(h,m);
  orario.style.right = "577px";
  linea.style.right = "181.5px";

  orarioTab.style.top = "26px";
  lineaTab.style.top = "-189px";

  }
  else if ((h=>18) && (h<19)){
    addZero(h,m);
  orario.style.right = "444px";
  linea.style.right = "48.5px";

  orarioTab.style.top = "102px";
  lineaTab.style.top = "-111px";
  }
  else if (((h=>19) && (h<20))||((h==20) && (m<30))){
    addZero(h,m);
  orario.style.right = "311px";
  linea.style.right = "-84.5px";

  orarioTab.style.top = "180px";
  lineaTab.style.top = "-36px";
  }
  else if (((h==20)&&(m>30))||((h==21)&&(m<30))){
    addZero(h,m);
  orario.style.right = "178px";
  linea.style.right = "-217.5px";

  orarioTab.style.top = "260px";
  lineaTab.style.top = "42px";
  }
  else if(((h=>21) && (h<=23))||((h=>0) && (h<3))){
    addZero(h,m);
  orario.style.right = "45px";
  linea.style.right = "-350.5px";

  orarioTab.style.top = "338px";
  lineaTab.style.top = "120px";
  }
  else {
  orario.style.right = "0px";}

}
//fine funzione per la pagina programmazione che mostra l'ora di adesso

//inizio slideshow
var pos = 0;


function frame() {
  var elem1 = document.getElementById("myAnimationUno");
  var elem2 = document.getElementById("myAnimationDue");
  var elem3 = document.getElementById("myAnimationTre");
  var elem4 = document.getElementById("myAnimationQuattro");
  var elem5 = document.getElementById("myAnimationCinque");
  if (pos < a) {
    console.log("ciao");
    pos=pos+2;
    elem1.style.transform = "translateX(" + pos + "px)";
    elem2.style.transform = "translateX(" + pos + "px)";
    /*elem2t.style.transform = "translateX(" + pos + "px)";*/
    elem3.style.transform = "translateX(" + pos + "px)";
    elem4.style.transform = "translateX(" + pos + "px)";
    elem5.style.transform = "translateX(" + pos + "px)";
    //elem.style.transform = "translateX(" + pos + "px)";
  }
  else {
    //console.log("ciao");
    clearInterval(id);
  }
}
function frameTwo() {
  var elem1 = document.getElementById("myAnimationUno");
  var elem2 = document.getElementById("myAnimationDue");
  var elem3 = document.getElementById("myAnimationTre");
  var elem4 = document.getElementById("myAnimationQuattro");
  var elem5 = document.getElementById("myAnimationCinque");
  if (pos > a) {
    pos=pos-2;
    elem1.style.transform = "translateX(" + pos + "px)";
    elem2.style.transform = "translateX(" + pos + "px)";
    /*elem2t.style.transform = "translateX(" + pos + "px)";*/
    elem3.style.transform = "translateX(" + pos + "px)";
    elem4.style.transform = "translateX(" + pos + "px)";
    elem5.style.transform = "translateX(" + pos + "px)";
    //elem.style.transform = "translateX(" + pos + "px)";
  }
  else {
    //console.log(a);
    clearInterval(id);
  }
}
var i=0;
var a=0;
var id = null;
function myMove(count) {
  var elem1 = document.getElementById("myAnimationUno");
  var elem2 = document.getElementById("myAnimationDue");
  /*var elem2t = document.getElementById("myAnimationDueT");*/
  var elem3 = document.getElementById("myAnimationTre");
  var elem4 = document.getElementById("myAnimationQuattro");
  var elem5 = document.getElementById("myAnimationCinque");
  //var elem = document.getElementsByClassName("slide");
  clearInterval(id);
  //console.log(count);
  if ((count==0)&&(a<0)){
    a=a + 521;
    id = setInterval(frame, 1);
    i--;
  }
  if(count==1){
    a=a -521;
    id = setInterval(frameTwo, 1);
    i++;
  }
  if(s==0)
  {
    s=1;
  }
  if (i!=0){
    document.getElementById("arrowLeft").style.display = "flex";
  }
  if (i==0){
    document.getElementById("arrowLeft").style.display = "none";
  }
  if (i!=4){
    document.getElementById("arrowRight").style.display = "flex";
  }
  if (i==4){
    document.getElementById("arrowRight").style.display = "none";

  }
  if (i==5){
    a=-521;
    i=1;
    s=0;
    document.getElementById("arrowRight").style.display = "none";
}
}
var s=1;
function slideshow(){
  myMove(s);
  console.log(s);
}
//fine slideshow
//inizio slideshow smartphone
var posSmart = 0;


function frameSmart() {
  var elem1 = document.getElementById("myAnimationUnoSmart");
  var elem2 = document.getElementById("myAnimationDueSmart");
  var elem3 = document.getElementById("myAnimationTreSmart");
  var elem4 = document.getElementById("myAnimationQuattroSmart");
  var elem5 = document.getElementById("myAnimationCinqueSmart");
  if (posSmart < aSmart) {
    console.log("ciao");
    posSmart=posSmart+2;
    elem1.style.transform = "translateX(" + posSmart + "px)";
    elem2.style.transform = "translateX(" + posSmart + "px)";
    /*elem2t.style.transform = "translateX(" + pos + "px)";*/
    elem3.style.transform = "translateX(" + posSmart + "px)";
    elem4.style.transform = "translateX(" + posSmart + "px)";
    elem5.style.transform = "translateX(" + posSmart + "px)";
    //elem.style.transform = "translateX(" + pos + "px)";
  }
  else {
    //console.log("ciao");
    clearInterval(idSmart);
  }
}
function frameTwoSmart() {
  var elem1 = document.getElementById("myAnimationUnoSmart");
  var elem2 = document.getElementById("myAnimationDueSmart");
  var elem3 = document.getElementById("myAnimationTreSmart");
  var elem4 = document.getElementById("myAnimationQuattroSmart");
  var elem5 = document.getElementById("myAnimationCinqueSmart");
  if (posSmart > aSmart) {
    posSmart=posSmart-2;
    elem1.style.transform = "translateX(" + posSmart + "px)";
    elem2.style.transform = "translateX(" + posSmart + "px)";
    /*elem2t.style.transform = "translateX(" + pos + "px)";*/
    elem3.style.transform = "translateX(" + posSmart + "px)";
    elem4.style.transform = "translateX(" + posSmart + "px)";
    elem5.style.transform = "translateX(" + posSmart + "px)";
    //elem.style.transform = "translateX(" + pos + "px)";
  }
  else {
    //console.log(a);
    clearInterval(idSmart);
  }
}
var iSmart=0;
var aSmart=0;
var idSmart = null;
function myMoveSmart(countSmart) {
  var elem1 = document.getElementById("myAnimationUnoSmart");
  var elem2 = document.getElementById("myAnimationDueSmart");
  /*var elem2t = document.getElementById("myAnimationDueT");*/
  var elem3 = document.getElementById("myAnimationTreSmart");
  var elem4 = document.getElementById("myAnimationQuattroSmart");
  var elem5 = document.getElementById("myAnimationCinqueSmart");
  //var elem = document.getElementsByClassName("slide");
  clearInterval(idSmart);
  //console.log(count);
  if ((countSmart==0)&&(aSmart<0)){
    aSmart=aSmart + 255;
    idSmart = setInterval(frameSmart, 1);
    iSmart--;
  }
  if(countSmart==1){
    aSmart=aSmart -255;
    idSmart = setInterval(frameTwoSmart, 1);
    iSmart++;
  }
  if(sSmart==0)
  {
    sSmart=1;
  }
  if (iSmart!=0){
    document.getElementById("arrowLeftSmart").style.display = "flex";
  }
  if (iSmart==0){
    document.getElementById("arrowLeftSmart").style.display = "none";
  }
  if (iSmart!=4){
    document.getElementById("arrowRightSmart").style.display = "flex";
  }
  if (iSmart==4){
    document.getElementById("arrowRightSmart").style.display = "none";

  }
  if (iSmart==5){
    aSmart=-255;
    iSmart=1;
    sSmart=0;
    document.getElementById("arrowRightSmart").style.display = "none";
}
}
var sSmart=1;
function slideshowSmart(){
  myMoveSmart(sSmart);
  console.log(sSmart);
}
//fine slideshow
