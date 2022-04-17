var wyniki=document.getElementById('wynik-ruztów')
var p=document.getElementById('suma')
var ponownyy=document.getElementById('ponowne')
var przycisk=document.getElementById('rzuty')
var paragraf=document.getElementById('blad')
// var player=new Audio("dice.mp3");

// player.loop=true
// player.autoplay=true
var ktora_runda=0

var koniec=false
var ponowwny=false
var koniec_gry=false

var canroll=1
var ponowny=[]
var wynik=[]
var wynik2=[]
var liczby=[]


function rzut(){

    if (koniec_gry==true){
        if (sumaa2<sumaa){
            alert("wygrana")
        }
        else if (sumaa2>sumaa){
            alert("przegrana")
        }
        else if (sumaa2==sumaa){
            alert("remis")
        }
        location.href ='menu.html'
    }
    if (koniec==false ){
        var suma=0
        for (let x = 1; x <= 5; x++) {
            var okscwrog=document.getElementById(x+'-w')
            sciezka2="url('img/puste.png')"
            okscwrog.style.backgroundImage=sciezka2;
        }
        for (let x = 1; x <= 5; x++) {
            var kosc=document.getElementById(x)
            
            var random=Math.floor(Math.random()*6)+1
            sciezka="url('img/"+random+".png')"
            kosc.style.backgroundImage=sciezka;
            kosc.style.border='2px solid black'
            liczby.push(random)
            // kosc.innerHTML=random
        }
        przycisk.innerHTML='zapisz wynik'
        koniec=true
    }

    else if(ponowwny==true && canroll==1){
        canroll=0
        for (var item in ponowny){
            
            var kosc=document.getElementById(ponowny[item])
            var random=Math.floor(Math.random()*6)+1
            liczby.splice(ponowny[item]-1,1,random)

            sciezka="url('img/"+random+".png')"
            kosc.style.backgroundImage=sciezka;
            kosc.style.border='2px solid black'
        }
        
        ponowwny=false
        koniec=true
        ponowny=[]
        
        przycisk.innerHTML='zapisz wynik'
    }

    else{
        ktora_runda++
        id=String(ktora_runda)
        var tabela=document.getElementById(id+'-a')
        koniec=false
        suma=0
        for (let x = 0; x < 5; x++) {
            suma+=liczby[x]
        }
        liczby=liczby.slice(5)
        tabela.innerHTML=suma
        // p.innerHTML=suma
        wynik.push(suma)
        paragraf.innerHTML=''
        function turaw(){
        if (ktora_runda!=ile){
          for (let x = 1; x <= 5; x++) {
            var kosc=document.getElementById(x)

            sciezka="url('img/puste.png')"
            kosc.style.backgroundImage=sciezka;
            kosc.style.border='none'
        }  
        }
            suma2=0
        for (let x = 1; x <= 5; x++) {
            var randomw=Math.floor(Math.random()*6)+1
            suma2+=randomw
            var okscwrog=document.getElementById(x+'-w')
            sciezka2="url('img/"+randomw+".png')"
            okscwrog.style.backgroundImage=sciezka2;
        }
        
        
        var tabela2=document.getElementById(id+'-b')
        wynik2.push(suma2)
        tabela2.innerHTML=suma2
        canroll=1
        if (ktora_runda==ile){
            sumaa=0
            sumaa2=0
            for (let x = 0; x < ile; x++) {
                sumaa+=wynik[x]
                sumaa2+=wynik2[x]   
            }
            tabela=document.getElementById('wynik-a')
            tabela2=document.getElementById('wynik-b')
            tabela.innerHTML=sumaa
            tabela2.innerHTML=sumaa2
            koniec_gry=true
            przycisk.innerHTML='zakończ gre'

        }
        else if (ktora_runda==ile){
            
        }
        else{
            canclick=true
            przycisk.innerHTML='wykonaj rzut'
        }
        }
        canclick=false
        var tutaj=setTimeout(turaw,500)
        tutaj

    }
}

function dodaj(i){
    var przyciskk=document.getElementById(i)
    if (ponowny.indexOf(i)==-1 && canroll==1){
        ponowny.push(i)
        przyciskk.style.border='2px solid lime'
    }
    else{
        ponowny.splice(ponowny.indexOf(i),1)
        przyciskk.style.border='2px solid black'
        if (ponowny.length==0){
            przycisk.innerHTML='zapisz wynik ' 
            ponowwny=false
        }
    }
    if (canroll==0){
        
        paragraf.innerHTML='juz wykonałes ponowny rzut'
        paragraf.style.color='red'
        paragraf.style.textAlign='center'
    }
    if (canroll==1 && ponowny.length!=0){
       przycisk.innerHTML='rzuć ponownie ' 
       ponowwny=true
    }
   

    
    
}


