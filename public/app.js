const auth = firebase.auth();

const whenSignedIn = document.getElementById('main');
const whenSignedOut = document.getElementById('log-in');

const google = document.getElementById('signInWithGoogle');
const github = document.getElementById('signInWithGithub');
const signOutBtn = document.getElementById('signOutBtn')

const googleAuth = new firebase.auth.GoogleAuthProvider();
const githubAuth = new firebase.auth.GithubAuthProvider();

/// Sign in event handlers

google.onclick = () => auth.signInWithPopup(googleAuth);
github.onclick = () => auth.signInWithPopup(githubAuth);
signOutBtn.onclick = () => auth.signOut();

auth.onAuthStateChanged(user => {
    if (user) {
        // signed in
        whenSignedIn.hidden = false;
        whenSignedOut.hidden = true;
        $("#author").val(user.displayName);
        $(".rightSideTools").append('<img src="'+user.photoURL+'" id="accountLogo">')
    } else {
        // not signed in
        whenSignedIn.hidden = true;
        whenSignedOut.hidden = false;
    }
});
