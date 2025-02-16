const toggleButton = document.getElementById('toggleButton');
const statusText = document.getElementById('status');

toggleButton.addEventListener('change', () => {
    if (toggleButton.checked) {
        statusText.textContent = 'Status: On';
    } else {
        statusText.textContent = 'Status: Off';
    }
});