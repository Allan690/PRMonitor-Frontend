import SimpleCrypto from "simple-crypto-js/build/SimpleCrypto";

const simpleCrypto = new SimpleCrypto(process.env.VUE_APP_SECRET);

const decryptUserDetails = () => {
    const encryptedDetails = localStorage.getItem('loggedInUser');
    if(encryptedDetails) {
        const decryptedDetails = simpleCrypto.decrypt(encryptedDetails);
        return JSON.parse(decryptedDetails);
    }
};

export default decryptUserDetails;
