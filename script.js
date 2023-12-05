function submitForm() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // In a real-world scenario, you would send this data to a server for authentication
    // This example just shows an alert for demonstration purposes
    alert('Submitted: Username - ' + username + ', Password - ' + password);
}
