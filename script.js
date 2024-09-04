// JavaScript source code

document.getElementById('displayButton').addEventListener('click', function () {
    const currentDateTime = new Date();
    const formattedDateTime = currentDateTime.toLocaleString();
    document.getElementById('dateTimeField').value = formattedDateTime;
});
