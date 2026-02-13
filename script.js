const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const container = document.getElementById('container');
const message = document.getElementById('message');
const question = document.getElementById('question');

// 1. Make the No button move
noBtn.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

// 2. Success Event
yesBtn.addEventListener('click', () => {
    question.classList.add('hidden');
    document.getElementById('buttons').classList.add('hidden');
    message.classList.remove('hidden');
    
    startBalloons();
});

function startBalloons() {
    for(let i = 0; i < 50; i++) {
        setTimeout(() => {
            const balloon = document.createElement('div');
            balloon.classList.add('balloon');
            balloon.style.left = Math.random() * 100 + 'vw';
            balloon.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 70%)`;
            document.body.appendChild(balloon);
            
            // Cleanup
            setTimeout(() => balloon.remove(), 4000);
        }, i * 100);
    }
}