var pierwsza=-1
var druga=-1
var pamiec1=-1
var pamiec2=-1
var liczby=[]
var match=[]
var click=0
var cklick_con=document.getElementById('clicki')
var odkryte=[]
cklick_con.innerHTML='kliknięcia: '+click

for (let xx = 1; xx <= 10; xx++) {
    liczby.push(xx)
    liczby.push(xx)
    
}
liczby.sort(function(a, b){return 0.5 - Math.random()});
var body=document.getElementById('grid')
        for (let x = 0; x < 20; x++) {
            var random=liczby[x]
            body.innerHTML+="<button id="+x+" onclick=dodaj("+random+","+x+")>?</button>"        
        }
        
function dodaj(i,x){
    click++
    cklick_con.innerHTML='kliknięcia: '+click
    if (pierwsza==-1 && i>-1){
        pierwsza=i
        pamiec1=x
        var pierwszakratka=document.getElementById(pamiec1)
        pierwszakratka.style.backgroundImage="url('img/"+pierwsza+".png')"
        pierwszakratka.innerHTML=''
        
    }
    else{
        druga=i
        pamiec2=x
       
        var pierwszakratka=document.getElementById(pamiec1)
        var pierwszakratka2=document.getElementById(pamiec2)
        pierwszakratka2.style.backgroundImage="url('img/"+druga+".png')"
        pierwszakratka2.innerHTML=''
        if (pamiec1!=pamiec2){
            if (pierwsza==druga){
                var pierwszakratka=document.getElementById(pamiec1)
                var pierwszakratka2=document.getElementById(pamiec2)
                pierwszakratka.style.border= '2px solid lime'
                pierwszakratka2.style.border= '2px solid lime'
                if(odkryte.indexOf(pamiec1)==-1){
                    odkryte.push(pamiec1)
                }
                if(odkryte.indexOf(pamiec2)==-1){
                    odkryte.push(pamiec2)
                }
                if (match.indexOf(pierwsza)==-1){
                    match.push(pierwsza)
                    
                }
                if (match.length==10){
                    alert("wygrales")
                    clearInterval(timer)
                    var inter=document.getElementById('interfejs')
                    inter.innerHTML+='<button id="powrot" onclick="powrot()">worc do muenu</button>'
                }
                pierwsza=-1
                druga=-1
            }
            else{
                pierwsza=-1
                druga=-1
                setTimeout(reset,500)
            }
        }
        
        
        else{
        pierwsza=-1
        druga=-1
        setTimeout(reset,500)
        }

    }
}
function reset(){
    var pierwszakratka=document.getElementById(pamiec1)
    var pierwszakratka2=document.getElementById(pamiec2)
    
    
    if(odkryte.indexOf(pamiec1)==-1){
        pierwszakratka.style.backgroundImage="none"
        pierwszakratka.innerHTML='?'
    }
    if(odkryte.indexOf(pamiec2)==-1){
        pierwszakratka2.style.backgroundImage="none"
        pierwszakratka2.innerHTML='?'
    }
    

    clear()
}

function clear(){
    for (let x = 0; x < 20; x++) {
        if(odkryte.indexOf(x)==-1){
            var tu=document.getElementById(x)
            tu.style.backgroundImage="none"
            tu.innerHTML='?'
        }
    }
}

function powrot(){
    location.href='menu.html'
}
// var tutaj=document.getElementById('timer')
// tutaj.innerHTML='0:00:00:000'
// var milisecound=0
// var secound=0
// var minute=0
// var hour=0
// var timer=setInterval(timer,1)
        
// function timer(){
//     milisecound+=1

//     if (milisecound==1000){
//         secound++
//         milisecound=0
//     }
//     if (secound==60){
//         minute++
//         secound=0
//     }
//     if (minute==60){
//         hour++
//         minute=0
//     }
//     tutaj.innerHTML="aktyalny czas: "+hour+':'+minute+':'+secound+':'+milisecound
// }