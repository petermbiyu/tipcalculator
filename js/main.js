const bill = document.querySelector('#bill');
const guest = document.querySelector('#guest');
const quality = document.querySelector('#quality');
const calcBtn = document.querySelector('#calculate');
let ans = document.querySelector('#tip');
let tip;

calcBtn.addEventListener('click', () => {
    tip = (bill.value * quality.value) / guest.value;
    if(isNaN(tip)) {
        alert ('please check your input..!')
    } else {
        ans.innerHTML = 'Your tip amount is $ ' + Math.round(tip);
        showTip();
    }
})
const showTip = () => {
    let show = ans;
    show.classList.add('show');
    setTimeout(() => {
        show.classList.remove('show');
    }, 2900);
}

