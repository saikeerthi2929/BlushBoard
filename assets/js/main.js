// main.js

// Play click sound on every interactive element
const clickSound = new Audio('assets/click.mp3');
document.querySelectorAll('button, .clickable, .nav-link, .avatar').forEach(el => {
  el.addEventListener('click', () => clickSound.play());
});

// Home: Navigate to diary on avatar click
const avatar = document.querySelector('.avatar');
if (avatar) {
  avatar.addEventListener('click', () => {
    window.location.href = 'diary.html';
  });
}

// Diary: Auto focus on textarea
if (window.location.pathname.includes('diary.html')) {
  window.onload = () => {
    document.querySelector('.diary-text')?.focus();
  };
}

// Tracker: Date select with pink highlight
if (window.location.pathname.includes('tracker.html')) {
  const days = document.querySelectorAll('.day');
  days.forEach(day => {
    day.addEventListener('click', () => {
      days.forEach(d => d.classList.remove('selected'));
      day.classList.add('selected');
    });
  });
}

// Goals: Checkmark animation
if (window.location.pathname.includes('goals.html')) {
  const goals = document.querySelectorAll('.goal input[type="checkbox"]');
  goals.forEach(chk => {
    chk.addEventListener('change', () => {
      chk.parentElement.classList.toggle('done', chk.checked);
    });
  });
}

// Settings: Theme switch demo
if (window.location.pathname.includes('settings.html')) {
  const toggle = document.getElementById('theme-toggle');
  toggle?.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
  });
}

// Affirmations: Rotating quotes
if (window.location.pathname.includes('affirmations.html')) {
  const affirmations = [
    "You are powerful 💪",
    "You are beautiful 💖",
    "You’re doing your best ✨",
    "Rest is productive too 🛌",
    "You’ve got this 🌸"
  ];
  let idx = 0;
  const display = document.getElementById('affirmation-display');
  setInterval(() => {
    idx = (idx + 1) % affirmations.length;
    display.innerText = affirmations[idx];
  }, 5000);
}

// Wellness Tips Auto Rotate
if (window.location.pathname.includes('wellness.html')) {
  const tips = [
    "Drink 8 glasses of water 💧",
    "Do a 5-minute stretch 🧘‍♀️",
    "Take 10 deep breaths 🌬️",
    "Go tech-free for 1 hour 📵",
    "Write 1 positive thing 💌"
  ];
  let i = 0;
  const tipDisplay = document.getElementById('wellness-tip');
  setInterval(() => {
    tipDisplay.classList.remove('fade-in');
    void tipDisplay.offsetWidth; // force reflow
    tipDisplay.innerText = tips[i];
    tipDisplay.classList.add('fade-in');
    i = (i + 1) % tips.length;
  }, 7000);
}
