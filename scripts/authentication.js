const domainURL = "https://gameserver.locphan201.repl.co";

const usernameInput = document.getElementById("username-input");
const passwordInput = document.getElementById("password-input");

function validateInput(value) {
    var regex = /^[a-zA-Z0-9]+$/;
    return regex.test(value) && !(value == "")
}

document.getElementById('signup-btn').addEventListener('click', () => {
    if (!validateInput(usernameInput.value) || !validateInput(passwordInput.value)) {
        alert("Invalid inputs! Username and Password only contain alphanumeric characters.")
        return
    }
    
    fetch(`${domainURL}/signup-account`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: usernameInput.value,
            password: passwordInput.value
        })
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        }
        throw new Error('Network response was not ok.');
    })
    .then(data => {
        if (data.error) {
            alert(data.error);
            return;
        }
        alert(data.message);
    })
    .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
    });
});

document.getElementById('signin-btn').addEventListener('click', () => {
    if (!validateInput(usernameInput.value) || !validateInput(passwordInput.value)) {
        alert("Invalid inputs! Username and Password only contain alphanumeric characters.")
        return
    }

    document.querySelectorAll("#lock-screen svg")[0].style.display = "block";
    document.querySelectorAll("#lock-screen .input-fields")[0].style.display = "none";

    fetch(`${domainURL}/signin-account`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: usernameInput.value,
            password: passwordInput.value
        })
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        }
        throw new Error('Network response was not ok.');
    })
    .then(data => {
        document.querySelectorAll("#lock-screen svg")[0].style.display = "none";
        document.querySelectorAll("#lock-screen .input-fields")[0].style.display = "block";
        if (data.error) {
            alert(data.error);
            return;
        }
        // alert(data.message);
        document.getElementById("lock-screen").style.display = 'none';
        document.querySelectorAll("main")[0].style.display = 'block';
        document.querySelectorAll("#overlay img")[0].src = "Assets/desktop/background.png";
    })
    .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
    });
});