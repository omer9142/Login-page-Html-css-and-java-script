console.log("documents loaded");

let btn = document.getElementById('send-btn');
let email = document.getElementById('email');
let password = document.getElementById('pass');
let forbtn = document.getElementById('Forgot');
let back_login = document.getElementById('B-Login');
let new_pass = document.getElementById('new-pass');
let old_pass = document.getElementById('old-pass');
let Reset_btn = document.getElementById('Reset-btn');
let error_mes = document.getElementById('Message');
let error_mes2 = document.getElementById('Message2');
let error_mes3 = document.getElementById('Password_notmatch');
let email_check = false;
let pass_check = false;

document.querySelector('.Forget-container').style.display = 'none';


btn.addEventListener('click', async function () {
    
    error_mes.style.display = 'none';
    console.log(email.value);
    console.log(password.value);
    await emailvalidation();
    await passwordvalidation();
    if (email_check && pass_check) {
        console.log("Login succesfull with email and password")
        error_mes2.style.color = "black";
        error_mes2.textContent = "Login successful";
        error_mes2.style.display = 'block';
        setTimeout(() => {
            error_mes2.style.display = 'none';
        }, 3000);
    }

});

function emailvalidation() {

    //condition to check if mail is empty
    if (email.value) {
        console.log("Mail is not empty");

        //condition to check if email is in correct format
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
            console.log('Valid Email:', email.value);
            email_check = true;

        } else {
            email_check = false;
            error_mes.style.display = 'block';
            error_mes.textContent = "Invalid email";
            console.log('Invalid email format');
            setTimeout(() => {
                error_mes.style.display = 'none';
            }, 3000);
        }
    }
    else {
        console.log("Mail is Empty")
        error_mes.textContent = "Email is empty";
        error_mes.style.display = 'block';
        setTimeout(() => {
            error_mes.style.display = 'none';
        }, 3000);
    }
    console.log('Password:', password.value);
}


function passwordvalidation() {

    //condition to check if password is empty
    if (password.value) {

        console.log("Password exist", password.value)

        // Password validation regex: first character should be a capital letter (A-Z)
        if (/^[A-Z].*$/.test(password.value)) {
            console.log("Correct password")
            pass_check = true;
        }
        else {
            pass_check = false;
            console.log("Incorrect password");
            error_mes2.style.color = 'red';
            error_mes2.textContent = "Incorrect format: First letter should be capital";
            error_mes2.style.display = 'block';
            setTimeout(() => {
                error_mes2.style.display = 'none';
            }, 3000);
        }

    } else {
        console.log("Password empty")
        error_mes2.textContent = "Password is empty ";
        error_mes2.style.display = 'block';
        setTimeout(() => {
            error_mes2.style.display = 'none';
        }, 3000);
    }
}

forbtn.addEventListener('click', function () {
    document.querySelector('.login-container').style.display = 'none';
    document.querySelector('.Forget-container').style.display = 'block';
});

back_login.addEventListener('click', function () {
    document.querySelector('.login-container').style.display = 'block';
    document.querySelector('.Forget-container').style.display = 'none';
});

Reset_btn.addEventListener('click', function () {
    console.log(new_pass.value);
    console.log(old_pass.value);

    if (/^[A-Z].*$/.test(new_pass.value)) {
        console.log("First letter capital")

        if (new_pass.value === old_pass.value) {
            console.log("Password matched")
            error_mes3.style.color = "black"
            error_mes3.textContent = "Password reset successful";
            error_mes3.style.display = 'block';
            setTimeout(() => {
                error_mes3.style.display = 'none';
            }, 3000);
        }
        else {
            console.log("Password didnt matched");

            Password_notmatch.textContent = "Password do not matched";
            Password_notmatch.style.color = 'red';
            Password_notmatch.style.display = 'block';
            setTimeout(() => {
                Password_notmatch.style.display = 'none';
            }, 3000);
        }
    } else {
        error_mes3.style.color = "red"
        error_mes3.textContent = "Incorrect format first letter should be capital";
        error_mes3.style.display = 'block';
        setTimeout(() => {
            error_mes3.style.display = 'none';
        }, 3000);
    }

});

document.getElementById('show-password').addEventListener('change', function () {
    var oldPassInput = document.getElementById('old-pass');
    oldPassInput.type = this.checked ? 'text' : 'password';
});

document.getElementById('show-password2').addEventListener('change', function () {
    var newPassInput = document.getElementById('new-pass');
    newPassInput.type = this.checked ? 'text' : 'password';
});