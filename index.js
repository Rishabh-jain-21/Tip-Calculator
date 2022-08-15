const bill_amount = document.getElementById('bill_amount');
const total_amt = document.getElementById('total_amt');
const tip_amount = document.getElementById('tip_amount');
let tip_to_give = 0;

function show() {
    // console.log(bill_amount.value);
    total_amt.innerText = bill_amount.value;
}

function show_calculated() {
    let valuetoShow = parseInt(bill_amount.value) + tip_to_give;

    total_amt.innerText = isNaN(valuetoShow) ? bill_amount.value : valuetoShow;
    total_amt.innerText = parseFloat(total_amt.innerText).toFixed(2);
}

function bill_calculate() {
    if (bill_amount.value == '') {
        alert('Please Enter some bill amount');
        return;
    }
    tip_to_give = (parseInt(bill_amount.value) / 100) * parseInt(tip_amount.value);
    // console.log('chalgya bhai' + bill_amount.value);
    show_calculated();
}


bill_amount.addEventListener('keyup', show);
tip_amount.addEventListener('keyup', bill_calculate);