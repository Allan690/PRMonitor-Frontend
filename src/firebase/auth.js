import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore"
import * as firebaseConfig from "../../firebase.config";

firebase.initializeApp(firebaseConfig.default);

const provider = new firebase.auth.GoogleAuthProvider();

provider.addScope('https://www.googleapis.com/auth/userinfo.email');
provider.addScope('https://www.googleapis.com/auth/userinfo.profile');

provider.setCustomParameters({
    'login_hint': 'firstname.lastname@andela.com'
});

const signInUser = async () => {
    try {
        const result = await firebase.auth().signInWithPopup(provider);
        const { accessToken } = result.credential;
        return accessToken;
    }
    catch (err) {
        throw new Error('You are unauthorized to access this application');
    }
};

export default signInUser;
