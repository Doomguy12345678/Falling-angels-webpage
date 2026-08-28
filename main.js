// Mobile navigation
const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('#nav');
if (menu && nav) {
  menu.addEventListener('click', () => nav.classList.toggle('open'));
}

// Generate drifting petals
const petalBox = document.querySelector('#petals');
if (petalBox) {
  for (let i = 0; i < 24; i++) {
    const p = document.createElement('span');
    p.className = 'petal';
    p.style.left = Math.random() * 100 + 'vw';
    p.style.setProperty('--time', (8 + Math.random() * 10) + 's');
    p.style.setProperty('--delay', (-Math.random() * 15) + 's');
    p.style.transform = `rotate(${Math.random() * 360}deg) scale(${0.5 + Math.random()})`;
    petalBox.appendChild(p);
  }
}

// Play buttons: only one song at a time
document.querySelectorAll('.play').forEach(button => {
  button.addEventListener('click', () => {
    const audio = button.closest('.music-card').querySelector('audio');
    document.querySelectorAll('audio').forEach(a => {
      if (a !== audio) a.pause();
    });
    if (audio.paused) audio.play().catch(() => {});
    else audio.pause();
  });
});

// Smooth reveal
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.section,.music-card,.member,.show').forEach(el => observer.observe(el));
