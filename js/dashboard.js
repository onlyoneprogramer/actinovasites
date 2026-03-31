const attacks = [
    "BPFdoor detected",
    "Suspicious syscall pattern",
    "Memory injection attempt",
    "Rootkit behavior detected"
];

function randomAttack() {
    return attacks[Math.floor(Math.random() * attacks.length)];
}

setInterval(() => {
    const log = document.getElementById("attackLog");
    const li = document.createElement("li");
    li.innerText = new Date().toLocaleTimeString() + " - " + randomAttack();
    log.prepend(li);

    // CPU/MEM
    document.getElementById("cpu").innerText = Math.floor(Math.random()*100);
    document.getElementById("mem").innerText = Math.floor(Math.random()*100);

}, 2000);


// 터미널 느낌
setInterval(() => {
    const terminal = document.getElementById("terminal");
    terminal.innerHTML += "> scanning kernel memory...\n";
    terminal.scrollTop = terminal.scrollHeight;
}, 1500);