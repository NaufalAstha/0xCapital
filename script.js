const depositeInput = document.getElementById('deposite');
const pnlInput = document.getElementById('pnl');
const displayEquity = document.getElementById('equity');

document.getElementById("logo").addEventListener("click", function () {
    window.location.href= "../index.html";
});

document.getElementById("account-btn").addEventListener("click", function() {
    window.location.href= "../page/account.html";
});

document.getElementById("tradeBtn").addEventListener("click", function() {
    window.location.href= "page/trade.html";
});

function updateEquity() {
    const deposite = parseFloat(localStorage.getItem('deposite')) || 0;
    const pnl = parseFloat(localStorage.getItem('pnl')) || 0;
    
    const modalAwal = deposite;
    const totalEquity = deposite + pnl;

    localStorage.setItem('equity', totalEquity);
    return totalEquity;
}

function updateRPT() {
    const equity = parseFloat(localStorage.getItem('equity')) || 0;
    const RPT = 0.01;
    const rptValue = equity * RPT;
    
    return rptValue;
}

depositeInput.addEventListener('input', updateEquity);
pnlInput.addEventListener('input', updateEquity);

// Save Data Equity In Local Storage
window.addEventListener('DOMContentLoaded', () => {
    const saveDeposite = localStorage.getItem('deposite');
    const savePnl = localStorage.getItem('pnl');

    if(saveDeposite !== null) {
        depositeInput.value = saveDeposite;
    }

    if (savePnl !== null) {
        pnlInput.value = savePnl;
    }

    updateEquity();
});

depositeInput.addEventListener('input', function() {
    localStorage.setItem('deposite', depositeInput.value);
    updateEquity();
});

pnlInput.addEventListener('input', function(){
    localStorage.setItem('pnl', pnlInput.value);
    updateEquity();
});