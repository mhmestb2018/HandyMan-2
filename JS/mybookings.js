function ready(){

var ref = document.getElementById("contai");
ref.innerHTML = "";
var pi=1;
for(var i=0;i<=7;i++){

ref.innerHTML+= '<div  class="small-contai">'
+'<p id="sarvic" style="margin-left:3%;height:34px">service</p>'
+'<p id="daate" style="margin-left:3%;height:34px">date</p>'
+'<p id="tiime" style="margin-left:3%;height:34px">time</p>'
+'<p id="coost" style="margin-left:3%;height:34px">cost</p>'
+'<input type="text" value="Cancle Booking" style="border:none;font-size:24px;height:34px;background:blue;padding-left:10%;margin-left:5%;margin-top:5% ;border-radius:5px;box-shadow: 2px 1px 7px 3px;" onclick="ready()">'
+'</div>';
}
}