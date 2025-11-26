document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Login / Register Switcher Logic ---
    const loginBtn = document.getElementById('tab-login');
    const registerBtn = document.getElementById('tab-register');
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const formTitle = document.getElementById('form-title');

    if(loginBtn && registerBtn) {
        loginBtn.addEventListener('click', () => {
            // Activate Tab
            loginBtn.classList.add('active');
            registerBtn.classList.remove('active');
            
            // Show Form
            loginForm.classList.remove('hidden');
            registerForm.classList.add('hidden');
            
            // Update Title
            formTitle.textContent = "Welcome Back";
        });

        registerBtn.addEventListener('click', () => {
            // Activate Tab
            registerBtn.classList.add('active');
            loginBtn.classList.remove('active');
            
            // Show Form
            registerForm.classList.remove('hidden');
            loginForm.classList.add('hidden');
            
            // Update Title
            formTitle.textContent = "Create New Account";
        });
    }

    // --- 2. Dashboard Actions Logic ---
    const cancelButtons = document.querySelectorAll('.cancel-btn');

    cancelButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            if(confirm("Are you sure you want to cancel this appointment?")) {
                const row = e.target.closest('tr');
                const statusCell = row.querySelector('.status-cell');
                
                // Change UI to reflect cancellation
                statusCell.innerHTML = '<span class="badge badge-danger">Cancelled</span>';
                e.target.disabled = true;
                e.target.style.opacity = "0.5";
                e.target.innerText = "Cancelled";
            }
        });
    });
});