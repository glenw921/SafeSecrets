// JavaScript source code

// Function to detect Chromium-based browsers
function isChromiumBased() {
    const userAgent = navigator.userAgent;
    return userAgent.includes('Chrome') || userAgent.includes('Chromium') || userAgent.includes('CriOS') || userAgent.includes('Edg') || userAgent.includes('OPR');
}

// Display the result on the web page
window.addEventListener('load', () => {
    const resultElement = document.getElementById('result');
    if (resultElement) {
        if (isChromiumBased()) {
            resultElement.textContent = 'You are using a Chromium-based browser.';
        } else {
            resultElement.textContent = 'This web app is optimized for Chromium-based browsers. Please switch to a compatible browser for the best experience.';
        }
    } else {
        console.error('Result element not found');
    }
});
