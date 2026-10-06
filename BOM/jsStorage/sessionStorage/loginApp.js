// simulate login 
function login() {
    sessionStorage.setItem("isLoggedIn", "true");
    alert("you are logged in (session only)");
}

login()
// check login state

function checkLogin() {
    if (sessionStorage.getItem("isLoggedIn")) {
        alert("Welcome back (session active)");
    } else {
        alert("Please login")
    }
}
checkLogin()
// simulate log out
function logout() {
    sessionStorage.removeItem("isLoggedIn");
    alert("you are logged out");
}

logout()