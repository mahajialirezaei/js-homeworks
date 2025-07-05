setInterval(function(){
    var date = new Date()
    document.getElementById('clock').innerText = date.toLocaleTimeString()
}, 1000)