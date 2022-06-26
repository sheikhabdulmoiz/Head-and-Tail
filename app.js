var player1=prompt("Enter Player1 name","Abdul Moiz");
var player2=prompt("Enter Player2 name", "Ghous Ahmed");
var player2Choose;
var player1Choose=prompt(player1+" choose from Head or Tail: H/T ","H");
if(player1Choose==="H"){
    player2Choose="T"
}
else{
    player2Choose="H"
}
var R=Math.random();
var result=Math.round(R);
var winner;
if(result===0){
   winner="Head's Winner "
}
else{
   winner="Tail's Winner "
}

document.write("<table border=2 cellpadding=5>"+"<tr><th>Players</th><th>Head/Tail</th><th>Winner</th></tr><tr>"+"<td>"+player1 +"</td>"+"<td>"+player1Choose+"</td><td rowspan=2>"+winner+"</td></tr><tr><td>"+player2+"</td><td>"+player2Choose+"</td></tr>"+"</table>");
