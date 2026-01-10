async function register() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const msg = document.getElementById('msg');

    // Validate email domain
    const kuRegex = /^[a-zA-Z0-9._%+-]+@student\.ku\.edu\.np$/;
    if (!kuRegex.test(email)) {
        msg.innerText = "Email must end with @student.ku.edu.np";
        return; // stop registration
    }

    // Proceed with server request
    const res = await fetch('/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password })
    });

    const text = await res.text();
    msg.innerText = text;
}