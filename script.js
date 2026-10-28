const depositeInput = document.getElementById('deposite');
const pnlInput = document.getElementById('pnl');
const displayEquity = document.getElementById('equity');

document.getElementById("logo").addEventListener("click", function () {
    window.location.href= "../index.html";
});

document.getElementById("account-btn").addEventListener("click", function() {
    window.location.href= "../page/account.html";
});

function updateEquity() {
    const deposite = parseFloat(depositeInput.value) || 0;
    const pnl = parseFloat(pnlInput.value) || 0;

    const totalEquity = deposite + pnl;

    displayEquity.textContent = `$${totalEquity.toLocaleString('en-US')}`;
}

depositeInput.addEventListener('input', updateEquity);
pnlInput.addEventListener('input', updateEquity);

function saveData() {
    const saveEquity = document.getElementById('equity');

    if(saveEquity.trim() == "") {
        return;
    }

    localStorage.setItem("totalEquity", saveEquity);
}