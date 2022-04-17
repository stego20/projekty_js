var ile=prompt("ile rund")
for (let x = 1; x <= Number(ile); x++) {

    var tabelka=document.getElementById('tabelaw');
    tabelka.innerHTML+="<tr id="+x+"-tr></tr>" ;
    var tabelkaa=document.getElementById(x+'-tr');
    tabelkaa.innerHTML="<td>"+x+"</td><td id='"+x+"-a'></td> <td id='"+x+"-b'></td>"
}
tabelka.innerHTML+="<tr><td>wynik koncowy</td><td id='wynik-a'></td> <td id='wynik-b'></td></tr>"