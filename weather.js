let currentTime = new Date();
let hours = currentTime.getHours();
console.log(hours);

if(0<=hours && hours<12){
    document.getElementById('greet').innerText="Good Morning!"
}else if(12>=hours && hours<16){
    document.getElementbyId("greet").innerText="Good Afternoon!"
}else{
    document.getElementById("greet").innerText="Good Evening!"
}

