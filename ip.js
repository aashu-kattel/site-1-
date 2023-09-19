function getIpAddress() {
    fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
            const ipAddress = data.ip;
            document.getElementById('ip-address').textContent = ipAddress;
        })
        .catch(error => {
            console.error('Error fetching IP address:', error);
        });
}
getIpAddress();