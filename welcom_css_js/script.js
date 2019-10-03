//chadrack_inventor
/**
 * Sign In && Up Animation
 * Transition Code
 */
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");

});





// ===========================================
/**
 * === Java Script Sign In and Up System ===
 */

 // Declaring an Array object
let users = [];

//Register
document.getElementById("signUp1").onclick = function() {
    let usernameHTMLelm = document.getElementById("registerName");
    let pwdHTMLelm = document.getElementById("registerPassword");

    let username = usernameHTMLelm.value;
    let password = pwdHTMLelm.value;

    users[users.length] = {username: username, password: password};
    usernameHTMLelm.value = "";
    pwdHTMLelm.value = "";

    // console.log(users);
};
//Login
document.getElementById("signIn1").onclick = function() {
    let usernameHTMLelm = document.getElementById("loginName");
    let pwdHTMLelm = document.getElementById("loginPassword");
    
    let username = usernameHTMLelm.value;
    let password = pwdHTMLelm.value;

    
    for (let i = 0; i < users.length; i++) {
        let user = users[i];

        if (user.username === username && user.password === password) {
            location.replace("mainPage/index.html");
            break;
        }
    }
};


//show password Button Sign Up
function showpw1(){
    var pw = document.getElementById("registerPassword");

    if(pw.type == "text")
        pw.type = "password";
    else
        pw.type = "text";
}

//show password Button Sign In
function showpw2(){
    var pw = document.getElementById("loginPassword");

    if(pw.type == "text")
        pw.type = "password";
    else
        pw.type = "text";
}


