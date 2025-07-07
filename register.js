// Blur main index and show modal on register button click
const openBtn = document.getElementById('open-register-btn');
const modal = document.getElementById('register-modal');
const mainIndex = document.getElementById('main-index');
const closeBtn = document.getElementById('close-register');
const registerForm = document.getElementById('register-form');
const successMsg = document.getElementById('register-success');

// Show modal and blur background
if (openBtn) {
    openBtn.addEventListener('click', () => {
        modal.classList.add('active');
        mainIndex.classList.add('blur');
        document.body.style.overflow = 'hidden';
    });
}

// Hide modal and unblur background
if (closeBtn) {
    closeBtn.addEventListener('click', () => {
        modal.classList.remove('active');
        mainIndex.classList.remove('blur');
        document.body.style.overflow = '';
        successMsg.textContent = '';
        registerForm.reset();
    });
}

// Hide modal with Esc key
window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        modal.classList.remove('active');
        mainIndex.classList.remove('blur');
        document.body.style.overflow = '';
        successMsg.textContent = '';
        registerForm.reset();
    }
});

// Hide modal if clicked outside the register box
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
        mainIndex.classList.remove('blur');
        document.body.style.overflow = '';
        successMsg.textContent = '';
        registerForm.reset();
    }
});

// Registration form validation and success animation
registerForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const username = document.getElementById('reg-username').value.trim();
    const email = document.getElementById('reg-email').value.trim();
    const password = document.getElementById('reg-password').value;
    const confirm = document.getElementById('reg-confirm').value;

    // Basic validation
    if (username.length < 3) {
        showSuccess('Username must be at least 3 characters.', true);
        return;
    }
    if (!validateEmail(email)) {
        showSuccess('Please enter a valid email.', true);
        return;
    }
    if (password.length < 6) {
        showSuccess('Password must be at least 6 characters.', true);
        return;
    }
    if (password !== confirm) {
        showSuccess('Passwords do not match.', true);
        return;
    }

    // Simulate successful registration with animation
    showSuccess('Registration Successful! 🎉');
    setTimeout(() => {
        modal.classList.remove('active');
        mainIndex.classList.remove('blur');
        document.body.style.overflow = '';
        successMsg.textContent = '';
        registerForm.reset();
    }, 1800);
});

function showSuccess(message, isError = false) {
    successMsg.textContent = message;
    successMsg.style.color = isError ? '#d90429' : '#26d0ce';
    if (!isError) {
        successMsg.style.animation = 'successPop 0.8s';
        setTimeout(() => { successMsg.style.animation = ''; }, 800);
    }
}

// Email validator
function validateEmail(email) {
    // Simple regex for demonstration
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Success message pop animation
const styleSheet = document.createElement("style");
styleSheet.innerText = `
@keyframes successPop {
    0% { transform: scale(0.9); opacity: 0.1;}
    55% { transform: scale(1.07); opacity: 1;}
    70% { transform: scale(0.95);}
    100% { transform: scale(1);}
}`;
document.head.appendChild(styleSheet);