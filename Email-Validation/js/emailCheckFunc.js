function checkValidation(){
    let emailInput = document.getElementById('inputtxt').value
    var emailStyle = /^[a-zA-Z%._+-]+@[a-zA-Z0-9_]+.[a-zA-Z]{2,3}$/;
    var check = emailStyle.test(emailInput)
    if (check){
        document.getElementById('outputtxt').innerHTML = 'Your email address is valid'
        return
    }else{
        document.getElementById('outputtxt').innerHTML = 'Please Enter a valid email'
        return
    }
}