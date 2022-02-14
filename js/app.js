
function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    }
    else {
        // console.log('got 3 digit and calling again', pin);
        return getPin();
    }
}

function genaratePin() {
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
}
document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const calcInput = document.getElementById('typed-numbers');
    if (isNaN(number)) {
        if (number == 'C') {
            calcInput.value = '';
        }
    }
    else {
        const previousNumber = calcInput.value;
        const newNumber = previousNumber + number;
        calcInput.value = newNumber;
    }
});

function verifyPin() {
    const pin = document.getElementById('display-pin').value;
    const typedNumers = document.getElementById('typed-numbers').value;
    const successMassage = document.getElementById('notify-success');
    const notifyFail = document.getElementById('notify-fail');
    if (pin == typedNumers) {

        successMassage.style.display = 'block';
        notifyFail.style.display = 'none';
    }
    else {

        notifyFail.style.display = 'block';
        successMassage.style.display = 'none';
    }
}
