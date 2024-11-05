const examDate = new Date('2025-05-04'); // Set your exam date here

function updateCountdown() {
    const now = new Date();
    const timeLeft = examDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById('countdown').innerHTML = `
        ${days}d ${hours}h ${minutes}m ${seconds}s
    `;
}

setInterval(updateCountdown, 1000);
