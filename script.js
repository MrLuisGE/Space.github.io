const starsContainer = document.querySelector('.stars-container');
const numberOfStars = 70;

for (let i = 0; i < numberOfStars; i++) {
  const star = document.createElement('div');
  star.className = 'star';
  starsContainer.appendChild(star);
}

function getRandomPosition() {
  const x = Math.random() * (window.innerWidth - 20);
  const y = Math.random() * (window.innerHeight - 20);
  return { x, y };
}

function getRandomColor() {
  const colors = ['#ffffff', '#ffff99']; 
  return colors[Math.floor(Math.random() * colors.length)];
}

function getRandomSize() {
  const minSize = 2;
  const maxSize = 6;
  return Math.random() * (maxSize - minSize) + minSize;
}

function animateStar(star) {
  const { x, y } = getRandomPosition();
  star.style.left = `${x}px`;
  star.style.top = `${y}px`;

  star.style.backgroundColor = getRandomColor();

  const size = getRandomSize();
  star.style.width = `${size}px`;
  star.style.height = `${size}px`;

  const duration = Math.random() * 3000 + 1000;
  star.style.transition = `opacity ${duration}ms`;

  setTimeout(() => {
    star.style.opacity = Math.random();
    setTimeout(() => animateStar(star), duration);
  }, duration);
}

document.querySelectorAll('.star').forEach(animateStar);

const sky = document.querySelector('.stars-container');
const fallingStarsContainer = document.createElement('div');
fallingStarsContainer.classList.add('falling-stars-container');
document.body.appendChild(fallingStarsContainer);

sky.addEventListener('click', (event) => {
  const fallingStar = document.createElement('div');
  fallingStar.classList.add('falling-star');

  fallingStar.style.left = `${event.clientX}px`;
  fallingStar.style.top = `${event.clientY}px`;

  fallingStar.style.animation = 'falling-star 2s forwards';

  fallingStarsContainer.appendChild(fallingStar);

  setTimeout(() => {
    fallingStarsContainer.removeChild(fallingStar);
  }, 2000);
});

