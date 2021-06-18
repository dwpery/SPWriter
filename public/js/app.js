const auth = firebase.auth();

const whenSignedIn = document.getElementById('main');
const whenSignedOut = document.getElementById('log-in');

const signInBtn = document.getElementById('signInBtn');

const provider = new firebase.auth.GoogleAuthProvider();

/// Sign in event handlers

signInBtn.onclick = () => auth.signInWithPopup(provider);

auth.onAuthStateChanged(user => {
    if (user) {
        // signed in
        whenSignedIn.hidden = false;
        whenSignedOut.hidden = true;
        alert(user.photoURL)
        $(".rightSideTools").append('<img src="'+user.photoURL+'" id="accountLogo">')
    } else {
        // not signed in
        whenSignedIn.hidden = true;
        whenSignedOut.hidden = false;
    }
});
