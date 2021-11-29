function time(){
	var d=new Date();
	var hours=d.getHours();
	var mins=d.getMinutes();
	var secs=d.getSeconds();
	document.getElementById("time").innerHTML=hours + ":" + mins + ":" + secs;
}
setInterval(time);