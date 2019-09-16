<template>
    <el-container class="sprints">
        <el-container style="display: inline-flex; flex-wrap: wrap">
            <div class="card" v-for="sprint in allSprints" v-bind:key="sprint.id">
                <img src="../../assets/travel.png" alt="Avatar">
                <div class="container">
                    <h4>{{ sprint.name}}</h4>
                    <p class="sprintState" v-bind:id="sprint.state">{{ sprint.state}}</p>
                    <p class="sprintDate">
                        <i class="el-icon-date">{{ localeDate(sprint.startDate) }}</i>
                    </p>
                    <p class="sprintTo" v-bind="endDate">
                        <i class="el-icon-date">{{ localeDate(sprint.endDate) }}</i>
                    </p>
                    <button class="viewStory" v-on:click="loadStories(sprint.id)">View Sprint Stories</button>
                </div>
            </div>
        </el-container>
    </el-container>
</template>
<script>
import getAllSprintsMutation from "@/queries/getSprints";
import decryptUserDetails from "@/utils";

export default  {
    name: 'getAllSprints',
    methods: {
        async getAllSprints() {
            const { token } = decryptUserDetails();
            this.loadingData = true;
            const response = await this.$apollo.query({
                query: getAllSprintsMutation,
                variables: {
                    boardId: this.boardId
                },
                context: {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            });
            this.loadingData =false;
            const { data: { getAllSprints: { Sprints } }} = response;
            return Sprints;
        },
        localeDate(date) {
            return new Date(date).toLocaleString();
        },
        loadStories(sprintId) {
            const boardId = localStorage.getItem('boardId');
            localStorage.setItem('sprintId', sprintId);
            this.$router.push(`/issues/${boardId}/${sprintId}`);
        }
    },
    data() {
        return {
            loadingData: false, boardId: 8, allSprints: [], startDate: '', endDate: ''
        }
    },

    async mounted() {
        try {
            if(!decryptUserDetails()) {
                this.$notify.error({
                    title: 'Unauthorized',
                    message: 'You are unauthorized to access this application'
                });
                setTimeout(() => {
                    this.$router.push('/login')
                }, 3000)
            }
            this.allSprints = await this.getAllSprints();
        }
        catch(err) {
            this.$notify.error({
                title: 'Error',
                message: err.message
            })
        }
    },
    created() {
        this.boardId = parseInt(this.$route.params.boardNo, 10);
    }
}
</script>
<style scoped>
    * {
        font-family: "Raleway", sans-serif;
        letter-spacing: 0.5px;
    }
    .sprints {
        display: flex;
        flex-flow: wrap;
        justify-content: space-between;
    }
    .card {
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        transition: 0.3s;
        margin: 40px 70px 40px 40px;
        border-radius: 25px;
        width: 35%;
    }

    .card:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }

    .container {
        padding: 20px 16px;
    }
    img {
        border-radius: 25px;
    }
    div > h4 {
        font-size: x-large;
        font-weight: bold;
        margin-left: auto;
        margin-bottom: 20px;
    }
    #active {
        background-color: #5fba7d;
        padding: 5px 5px 5px 15px;
        width: 19%;
        margin-left: 270px;
        border-radius: 15px;
    }
    #closed {
        background-color: burlywood;
        padding: 5px 5px 5px 10px;
        width: 19%;
        margin-left: 270px;
        border-radius: 15px;
    }
    .sprintDate {
        margin-top: -30px;
        margin-bottom: 15px;
        color: #7f8c8d;
    }
    .sprintTo {
        color: #7f8c8d;
    }
    .viewStory {
        padding: 10px;
        margin-left: 100px;
        margin-top: 20px;
        border-style: none;
        border-radius: 25px;
        outline: none;
        background-color: #57abf2;
        font-weight: bold;
        font-size: medium;
        cursor: pointer;
    }
     p > i {
        padding-left: 5px;
     }
</style>
