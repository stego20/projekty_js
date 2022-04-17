var win=0
var lose=0
var doilu=prompt("Do ilu wygranych")
var znak_przeciwnika=['kamien','nozyczki','papier']
var resultat=document.getElementById("wynik2")
var wynik_punkt=document.getElementById('wynik1')
var wroga_renka=document.getElementById('wroga-reka')
var twoja_renka=document.getElementById('twoja-reka')

function jakiznak(znak){
    
    
    // document.write("wybrałeś ",znak,"<br>")
    var znak_przeciwnika_index=Math.floor(Math.random()*3)
    znak_wroga=znak_przeciwnika[znak_przeciwnika_index]
    // document.write("    ",znak_wroga,"<br>")
    if (znak_przeciwnika_index==0){
        wroga_renka.style.backgroundImage="url('img/kamien-reka.png')";
    }
    if(znak_przeciwnika_index==1){
        wroga_renka.style.backgroundImage="url('img/nozyczki-reka.png')";
    }
    if (znak_przeciwnika_index==2){
        wroga_renka.style.backgroundImage="url('img/papier-reka.png')";
    }
    if (znak=='kamien'){
        twoja_renka.style.backgroundImage="url('img/kamien-reka.png')";
    }
    if(znak=='nozyczki'){
        twoja_renka.style.backgroundImage="url('img/nozyczki-reka.png')";
    }
    if (znak=='papier'){
        twoja_renka.style.backgroundImage="url('img/papier-reka.png')";
    }
    if (znak==znak_wroga){
        resultat.innerHTML="remis"
        resultat.style.color='grey'
    }
    else if (znak=="kamien" && znak_wroga=="nozyczki"){
        win++
        resultat.innerHTML="wygrana"
        resultat.style.color='lime'
    }
    else if (znak=="nozyczki" && znak_wroga=="papier"){
        win++
        resultat.innerHTML="wygrana"
        resultat.style.color='lime'
    }
    else if (znak=="papier" && znak_wroga=="kamien"){
        win++
        resultat.innerHTML="wygrana"
        resultat.style.color='lime'
    }
    else if (znak=="papier" && znak_wroga=="nozyczki"){
        lose++
        resultat.innerHTML="przegrana"
        resultat.style.color='red'
    }
    else if (znak=="nozyczki" && znak_wroga=="kamien"){
        lose++
        resultat.innerHTML="przegrana"
        resultat.style.color='red'
    }
    else if (znak=="kamien" && znak_wroga=="papier"){
        lose++
        resultat.innerHTML="przegrana"
        resultat.style.color='red'
    }
    wynik_punkt.innerText=win+':'+lose
    setTimeout(chek(),10)
}

function chek(){
var koniecgry=document.getElementById('przyciski')
    if (win==Number(doilu)){
        koniecgry.innerHTML='<button id="koniec" onclick="koniec()">Zakończ gre</button>'
    }
    if (lose==Number(doilu)){
        koniecgry.innerHTML='<button id="koniec" onclick="koniec()">Zakończ gre</button>'
    }
}
function koniec(){
    if (win==Number(doilu)){
        alert("Wygrałeś")
    }
    if (lose==Number(doilu)){
        alert("przegrałeś")
    }
        location.href='menu.html'
}