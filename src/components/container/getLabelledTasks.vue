<template>
<div class="labelledTasks">
<el-container class="prContainer">
    <el-container style="align-items: center" v-if="loadingData"
                  v-loading="loadingData"
                  element-loading-text="Loading..."
                  element-loading-spinner="el-icon-loading"
                  element-loading-background="rgb(238, 241, 244)"
    >
    </el-container>
    <div v-for="(pullRequest, index ) in pullRequestArray" v-bind:key="index">
        <div class="prRow" @click="openPullRequest(pullRequest.permalink)">
            <div class="avatar">
                <img :src="pullRequest.author.avatarUrl" alt="avatar">
                <span class="description">{{ pullRequest.title }}</span>
                <span class="user">{{ pullRequest.author.url }}</span>
                <span class="prNumber">{{ pullRequest.number }}</span>
                <span class="state" :class="pullRequest.state">{{ pullRequest.state }}</span>
            </div>
        </div>
    </div>
</el-container>
</div>
</template>
<script>
    import getLabelledTasksQuery from "@/queries/getFinishedGithubTasks";
    import decryptUserDetails from "@/utils";

    export default {
        name: 'GetLabelledTasksComponent',
        data() {
            return {
                orgName: 'andela',
                repoName: 'tembea',
                labelTag: 'finished',
                numberToDisplay: 20,
                pullRequestArray: [],
                loadingData: false,
                signedIn: false
            }
        },
        methods: {
            async fetchFinishedPRs() {
                try {
                    const decryptedDetails = decryptUserDetails();
                    const { token } = decryptedDetails;
                    this.loadingData = true;
                    const results = await this.$apollo.query({
                        query: getLabelledTasksQuery,
                        variables: {
                            organization: this.orgName,
                            repoName: this.repoName,
                            labelTag: this.labelTag,
                            numberToDisplay: this.numberToDisplay
                        },
                        context: {
                            headers: {
                                Authorization: `Bearer ${token}`
                            }
                        }
                    });
                    this.loadingData = false;
                    const { data: { viewLabelledTasks } } = results;
                    this.pullRequestArray = viewLabelledTasks;
                }
                catch(err) {
                    this.loadingData = false;
                    this.$notify.error({
                        title: 'Error',
                        message: err.message
                    });
                }
            },
            openPullRequest(link) {
                window.open(link, '_blank');
            }
        },
        mounted() {
            if(!decryptUserDetails()) {
                this.$notify.error({
                    title: 'Unauthorized!',
                    message: 'Sorry! You are not allowed to login to this application'
                });
                this.$router.push('/login');
            }
            this.fetchFinishedPRs()
        },
        props: {
            label: String
        },
        watch: {
            label(data) {
                this.labelTag = data;
                this.fetchFinishedPRs()
            }
        }
    }
</script>

<style scoped>
    .prContainer {
        display: flex;
        flex-direction: column;
    }
    .prRow {
        height: 150px;
        margin: 60px 60px 0px 40px;
        width: 90%;
        background-color: rgb(160,160,161);
        border-radius: 25px;
        cursor: pointer;
        animation:prRow 1s cubic-bezier(.25,.46,.45,.94) both
    }

    .avatar {
    }
    img {
        border-radius: 50%;
        height: 10%;
        width: 5%;
        margin: 30px;
    }
    .description{
        font-weight: bold;
        font-size: large;
        display: inline-block;
        overflow:hidden;
        text-overflow:ellipsis;
        max-width:350px;
    }
    .user {
        display: block;
        margin-left: 300px;
        margin-top: -50px;
        position: absolute;
        opacity: 0.5;
    }

    @media only screen and (min-width: 768px) and (max-width: 1440px) {
        .prNumber {
            display: block;
            font-weight: bold;
            font-size: 35px;
            margin-left: 600px;
            margin-top: -80px;
        }
        .state {
            display: block;
            width: 10%;
            text-align: center;
            font-weight: bold;
            margin-left: 800px;
            margin-top: -30px;
            background-color: rgb(111, 192, 124);
            padding: 15px;
            border-radius: 25px;
        }
        .state.MERGED {
            background-color: rgb(111, 192, 124);
        }
        .state.OPEN {
            background-color: bisque;
        }
        .state.CLOSED {
            background-color: #7f8c8d;
        }
        .avatar {
            margin-top: 10px;
        }
        img {
            border-radius: 50%;
            height: 10%;
            width: 9%;
            margin: 30px;
        }
    }
    @media only screen and (min-width: 1920px ) {
        .prNumber {
            display: block;
            font-weight: bold;
            font-size: 35px;
            margin-left: 800px;
            margin-top: -90px;
        }

        .state {
            display: block;
            width: 10%;
            text-align: center;
            font-weight: bold;
            margin-left: 1200px;
            margin-top: -20px;
            background-color: rgb(111, 192, 124);
            padding: 15px;
            border-radius: 25px;
        }

        .state.MERGED {
            background-color: rgb(111, 192, 124);
        }
        .state.OPEN {
            background-color: bisque;
        }
        .state.CLOSED {
            background-color: #7f8c8d;
        }
        .avatar {
            margin-top: 10px;
        }
        img {
            border-radius: 50%;
            height: 10%;
            width: 7%;
            margin: 25px 30px 30px;
        }
    }

    @keyframes prRow{
        0%{
        transform:translateY(0)
    }
        50%{
            transform:translateY(-50px)}

       100%{
        transform:translateY(0px)}
      }
</style>
