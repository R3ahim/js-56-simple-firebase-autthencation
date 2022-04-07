/* 
* steps to use firebase
*1. create a project on conosle.firebase.google.com
*2/ install firebase
3/ register web app in firebase
4/ copy firebase init with config from settings inot a file firebase.init.js
5/ export defualt app
6/ imprt getAuth from firebase/auth and create const auth = getAuth(app) in app.js
7/ import app ./firebase.init.js into your app.js
8/ turn on google authencation(firebase> authencation> google sign in )
9/ create google provieder  ;
10/ use sgnInWithPopUp and pass auth and propvider
11/ handle then(ifSucssful)and catch eroo (if error) 
*/