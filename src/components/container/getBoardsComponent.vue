<template>
<div class="board">
    <el-container>
        <el-container style="display: flex;" v-for="board in boardDetails" v-bind:key="board.projectId">
            <div class="container">
                <div class="recipe-card">
                    <div class="header">
                        <button class="edit"><i class="fa fa-tasks" aria-hidden="true"></i></button>
                    </div>
                    <div class="body">
                        <p class="title"
                           v-bind:data-v-099ab69c="board.id"
                           v-on:click="loadSprints"
                        >{{ board.displayName }}</p>
                        <h3>{{ board.projectId }}</h3>
                        <ul class="ingredients">
                            <li> <i class="fa fa-bookmark-o" aria-hidden="true"> </i>Project ID: {{ board.id }}</li>
                            <li> <i class="fa fa-sitemap" aria-hidden="true"> </i>Name: {{ board.name }}</li>
                        </ul>
                    </div>
                </div>
            </div>

        </el-container>
    </el-container>
</div>
</template>

<script>
    import getAllBoardsMutation from "@/queries/getAllBoards";
    import decryptUserDetails from "@/utils";

    export default {
        name: 'GetBoardsComponent',
        data() {
            return { boardDetails: [], boardNo: 0}
        },
        methods: {
            async getAllBoards() {
                try {
                    const { token } = decryptUserDetails();
                    const response = await this.$apollo.query({
                        query: getAllBoardsMutation,
                        context: {
                            headers: {
                                Authorization: `Bearer ${token}`
                            }
                        }
                    });
                    const { data: { getAllBoards: { projectDetails }}} = response;
                    return projectDetails;
                }
                catch(err) {
                    this.$notify.error({
                        title: 'Error', message: err.message
                    })
                }
            },
            loadSprints(event) {
               const boardId = event.target.dataset["v-099ab69c"];
               localStorage.setItem('boardId', boardId);
               this.$router.push(`/sprints/${boardId}`)
            }
        },
        async mounted() {
            if(!decryptUserDetails()) {
                this.$notify.error({
                    title: 'Unauthorized',
                    message: 'You are unauthorized to access this application'
                });
                setTimeout(() => {
                    this.$router.push('/login');
                }, 3000)
            }
            const { name } = decryptUserDetails();
            if(this.$route.query.login === 'success') {
                this.$notify.success({
                    title: `Welcome, ${name}`,
                    message: "You were logged in successfully!"
                })
            }
            this.boardDetails = await this.getAllBoards();

        }
    }
</script>
<style scoped>
    @import url("https://fonts.googleapis.com/css?family=Raleway:300,400");
    html {
        font-size: 16px;
    }

    body {
        margin: 0;
        background: #ecf0f1;
    }
    .board {
        /*display: inline-flex;*/
        flex-flow: row wrap;
        box-sizing: border-box;
    }
    p:hover {
        cursor: pointer;
    }

    .container {
        height: 500px;
        width: 100%;
        margin: 20px auto;
        position: relative;
    }

    .recipe-card {
        background: #FFF;
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
        position: absolute;
        left: 5%;
        top: 5%;
        width: 60%;
        border-radius: 25px;
    }
    .recipe-card .header {
        background: url("../../assets/travel.png") top center;
        background-size: cover;
        height: 200px;
        width: 100%;
        overflow: hidden;
        position: relative;
        border-radius: 25px;
    }
    .recipe-card .header .edit {
        height: 50px;
        width: 50px;
        position: absolute;
        bottom: 13%;
        left: 10%;
        border-radius: 50%;
        background: #1abc9c;
        border: 0;
        color: #FFF;
        font-size: 1.5rem;
        transition: all .5s ease-in;
        cursor: pointer;
        z-index: 3;
    }
    .recipe-card .header .edit:hover {
        background: #16a085;
    }
    .recipe-card .header .edit:focus {
        outline: 0;
    }
    .recipe-card .header .delete {
        height: 50px;
        width: 50px;
        position: absolute;
        top: 0%;
        right: 0%;
        border-radius: 0%;
        background: transparent;
        border: 0;
        color: #fff;
        font-size: 1.5rem;
        transition: all .5s ease-in;
        cursor: pointer;
        z-index: 3;
    }
    .recipe-card .header .delete:hover {
        background: #e74c3c;
    }
    .recipe-card .header .delete:focus {
        outline: 0;
    }
    .recipe-card .header:after {
        height: 100%;
        width: 130%;
        background: #FFF;
        content: '';
        position: absolute;
        top: 85%;
        left: -15%;
        transform: rotate(10deg);
        box-shadow: 0 -9px 0 #1abc9c;
    }
    .recipe-card .body {
        padding: 15px 15px 25px 15px;
    }
    .recipe-card .body .title {
        background: transparent;
        border-bottom: 1px solid #16a085;
        color: #16a085;
        display: block;
        margin: 0 0 5px;
        font-family: "Raleway", sans-serif;
        font-size: 1.5rem;
        font-weight: 300;
        padding: 0 0 5px 0;
        text-decoration: none;
    }
    .recipe-card .body h3 {
        color: #27ae60;
        font-family: "Raleway", sans-serif;
        font-weight: 300;
        margin: 0 0 15px;
        padding: 0;
        text-align: right;
    }
    .recipe-card .body ul.ingredients {
        margin: 0;
        padding: 0;
        list-style: none;
    }
    .recipe-card .body ul.ingredients li {
        color: #7f8c8d;
        font-size: 1rem;
        font-family: "Raleway", sans-serif;
    }
    .recipe-card .body ul.ingredients li .fa {
        color: #1abc9c;
        margin-right: .5rem;
        margin-bottom: .8rem;
    }

</style>
