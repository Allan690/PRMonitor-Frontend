<template>
    <div class="loginScreen">
            <img src="../../assets/logo.png" alt="logo" class="logo">
            <span class="projectDescription"
            >A POC tool that PCs and PMs in Andela can leverage for high performing engineering teams</span>
            <img class="bgImage" src="../../assets/travel.png" alt="background">
            <span class="loginButton" @click="login">Login To Proceed</span>
    </div>
</template>

<script>
    import signInUser from "@/firebase/auth";
    import LoginMutation from "@/mutation/authMutation";
    import SimpleCrypto from 'simple-crypto-js';

    export default {
        name: 'LoginScreen',
        data() {
            return { loggedIn: false }
        },
        methods: {
            async login() {
                try {
                    const accessToken = await signInUser();
                    const results = await this.$apollo.mutate({
                        mutation: LoginMutation,
                        variables: {
                            accessToken
                        }
                    });
                    const { data: { googleAuth } } = results;
                    this.loggedIn = true;
                    const encryptedData = this.encryptAndStoreCredentials(googleAuth);
                    localStorage.setItem('loggedInUser', encryptedData);
                    await this.$apolloProvider.defaultClient.resetStore();
                    await this.$router.push(`/boards?login=success`);
                }
                catch (err) {
                    this.$notify.error({
                        title: 'Login Error',
                        message: `Sorry! You're not authorized to login to this application`
                    });
                }
            },
            encryptAndStoreCredentials(credentials) {
                const simpleCrypto = new SimpleCrypto(process.env.VUE_APP_SECRET);
                return simpleCrypto.encrypt(credentials);
            }
        }
    }
</script>
<style scoped>
     * {
         background-color: rgb(211, 213, 215);
     }
     .loginScreen {
         min-height: 100vh;
     }
    .logo {
        margin: 180px 50px 50px 50px;
        width: 250px;
    }
    span {
        display: block;
    }
    .projectDescription {
        margin-left: 50px;
        font-weight: bold;
        font-size: 20px;
        opacity: 0.7;
        text-overflow: ellipsis;
        line-height: 30px;
        max-width: 500px;
    }
    .bgImage {
        width: 800px;
        margin-left: 600px;
        margin-top: -190px;
        border-style: none;
        border-radius: 50px;
    }
    .loginButton {
        margin-left: 150px;
        background-color: #57abf2;
        width: 200px;
        text-align: center;
        padding: 15px;
        border-radius: 25px;
        font-weight: bold;
    }
    .loginButton:hover {
        opacity: 0.5;
        cursor: pointer;
    }

     @media only screen and (min-width: 1920px){
         .bgImage {
             width: 800px;
             margin-left: 900px;
             margin-top: -150px;
             border-style: none;
             border-radius: 50px;
         }
     }

</style>
