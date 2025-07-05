function calculateFibo() {
    let n = document.getElementById('inputValue').value;
    n = parseInt(n);
    if (isNaN(n) || n <= 0) {
        document.getElementById('outputNumber').innerHTML = 'Please Enter a Valid Number';
        return;
    }
    
    let arr = [];
    arr[0] = 1;
    arr[1] = 1;
    
    for (let i = 2; i < n; i++) {
        arr[i] = arr[i - 1] + arr[i - 2];
    }
    
    document.getElementById('outputNumber').innerHTML = arr[n - 1];
}
