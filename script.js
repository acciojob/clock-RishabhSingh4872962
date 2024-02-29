//your JS code here. If required.
const time=document.getElementById("timer");

setInterval(()=>{
	const date=new Date();
	time.innerText=date.toLocaleString();
},950)