
const passwordInput = document.getElementById('password');
const strengthText = document.getElementById('strengthText');

passwordInput.addEventListener('input', () => {
  const password = passwordInput.value;
  let score = 0;

  if (password.length >= 8) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[a-z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;

  if (score === 5) {
    strengthText.textContent = 'Strong';
    strengthText.className = 'strength strong';
  } else if (score >= 3) {
    strengthText.textContent = 'Medium';
    strengthText.className = 'strength medium';
  } else {
    strengthText.textContent = 'Weak';
    strengthText.className = 'strength weak';
  }
});
