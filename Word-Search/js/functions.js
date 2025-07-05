var originaltxt = "";

function pageLoad(){
    originaltxt = document.getElementById('textWholePage').innerHTML;
}

function findWord(){
    let phrase = document.getElementById('textInput').value;
    let txt = originaltxt;

    if (phrase) {
        let highlightedText = txt.split(phrase).join("<span class='highlight'>"+phrase+"</span>");
        document.getElementById('text').innerHTML = highlightedText;
    } else {
        document.getElementById('text').innerHTML = txt;
    }
}
