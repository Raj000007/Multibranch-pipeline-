function submitForm() {
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // In a real-world scenario, you would send this data to a server for user registration
    // This example just shows an alert for demonstration purposes
    alert('Submitted: Username - ' + username + ', Email - ' + email + ', Password - ' + password);
}
