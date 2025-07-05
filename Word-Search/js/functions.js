function pageLoad(){
    originaltxt = document.getElementById('textWholePage').innerHTML
}
function findWord(){
    let phrase = document.getElementById('textInput').value
    let txt = originaltxt
    document.getElementById('text').innerHTML = txt.split(phrase).join("<span class='highlight'>"+phrase+"</span>")
}