function getOTP() {

    let phone = document.getElementById("phone").value;

    if (phone === "") {
        alert("Please enter your mobile number.");
        return;
    }

    if (phone.length !== 10 || isNaN(phone)) {
        alert("Please enter a valid 10-digit mobile number.");
        return;
    }

    alert("Demo OTP: 1234");

    document.getElementById("otpBox").style.display = "block";
}

function loginUser() {

    let otp = document.getElementById("otp").value;

    if (otp === "") {
        alert("Please enter the OTP.");
        return;
    }

    if (otp === "1234") {
        alert("Login Successful!");
        window.location.href = "home.html";
    } else {
        alert("Invalid OTP!");
    }

}

function resetPassword() {

    let newPassword = document.getElementById("newPassword").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    if (newPassword === "" || confirmPassword === "") {
        alert("Please fill all fields.");
        return;
    }

    if (newPassword !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    alert("Password Reset Successful!");
    window.location.href = "login.html";
}