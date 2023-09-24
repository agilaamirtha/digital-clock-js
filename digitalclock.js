function displayTime(){
    let dateTime=new Date();
    let hr=dateTime.getHours();
    let min=padZero(dateTime.getMinutes());
    let sec=padZero(dateTime.getSeconds());

    if(hr>12){
        hr=hr-12
        document.getElementById("ampm").innerHTML='PM'
    }

document.getElementById("hours").innerHTML=padZero(hr);
document.getElementById("min").innerHTML=min;
document.getElementById("sec").innerHTML=sec;
}

function padZero(numb){
    return numb<10?"0"+numb:numb
}

setInterval(displayTime,500)