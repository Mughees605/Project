import firebase from "firebase"
try{
var config = {
    apiKey: "AIzaSyCH6J0CpUZePwScX86hebwClPE7oQIkuyM",
    authDomain: "quiz-479a9.firebaseapp.com",
    databaseURL: "https://quiz-479a9.firebaseio.com",
    storageBucket: "quiz-479a9.appspot.com",
    messagingSenderId: "365466837134"
  };
  firebase.initializeApp(config);
}catch(e){
console.log(e);

}

  export var githubProvider = new firebase.auth.GithubAuthProvider();
  export var firebaseRef = firebase.database().ref();
  export default firebase;