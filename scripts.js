document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    
function validate() {
    var user = document.querySelector('#email');
    var pass = document.querySelector('#pass');
    if (email.value == 'email' && pass.value == '0000') {
        alert('Login Successful');
        return false; // Prevent form submission
    } else {
        alert('Login Failed! Please try again.');
        return false; // Prevent form submission
    }
}

    alert('Login Successful');
});
