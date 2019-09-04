<template>
    <div class="sprintStory" :key="componentKey">
        <el-container style="align-items: center" v-if="loadingData"
             v-loading="loadingData"
             element-loading-text="Loading..."
             element-loading-spinner="el-icon-loading"
             element-loading-background="rgb(238, 241, 244)"
        >
            <h4 style="visibility: hidden; display: none"> {{ boardNo }}</h4>
        </el-container>
        <el-container style="display: flex" v-for="issue in sprintIssues" v-bind:key="issue.issueProjectKey">
            <VueCard
                    :sprint-key="issue.issueProjectKey"
                    :sprint-status="issue.issueStatus"
                    :sprints-covered="issue.SprintsCoveredByStory ? issue.SprintsCoveredByStory.length : 1"
                    :sprint-name="issue.sprintDetails.sprintName"
                    :story-type="issue.issueTypeDetails.issueType"
                    :assignee-name="issue.assigneeDetails ? issue.assigneeDetails.displayName : 'None'"
                    :reporter-name="issue.issueCreator"
            ></VueCard>
        </el-container>
        <div>
        </div>
    </div>
</template>

<script>
    import getSprintIssuesMutation from "@/queries/getSprintIssues";
    import VueCard from "@/components/shared/VueCard";
    import decryptUserDetails from "@/utils";

    export default {
       name: 'getSprintStories',
        props: {
           boardNo: {
               type: String,
               default: ''
           }
        },
        components: {
            VueCard
        },
        data() {
           return {
              boardId: '',
               sprintId: '',
               sprintIssues: [],
               loadingData: false,
               filterParam: 'All',
               componentKey: 0,
               vueCardDisplay: true
           }
        },
        watch: {
           async boardNo(board) {
              this.boardId = parseInt(board, 10);
               this.sprintIssues = await this.getSprintIssues();
           },
            '$route' (to) {
               const { status } = to.query;
               this.filterParam = status;
               this.filterByState(status);
            }
        },
        methods: {
           async getSprintIssues() {
               this.loadingData = true;
               try {
                   const { token } = decryptUserDetails();
                   this.boardId = parseInt(localStorage.getItem('boardId'), 10);
                   this.sprintId = parseInt(localStorage.getItem('sprintId'), 10);
                   const boardNumber = (this.boardId) ? this.boardId: 8;
                   const response = await this.$apollo.query({
                       query: getSprintIssuesMutation,
                       variables: {
                           boardId: boardNumber,
                           sprintId: this.sprintId
                       },
                       context: {
                           headers: {
                               Authorization: `Bearer ${token}`
                           }
                       }
                   });
                   this.loadingData = false;
                   const { data: { getSprintStories: { sprintIssues } }} = response;
                   return sprintIssues;
               }
               catch(err) {
                   this.loadingData = false;
                   this.$notify.error({
                       title: 'Error',
                       message: err.message
                   });
               }

           },
            async filterByState(status) {
                if(status !== 'All')  {
                    this.sprintIssues = await this.getSprintIssues();
                    const result = await this.sprintIssues.filter(issue => {
                        return issue.issueStatus === status
                    });
                    this.sprintIssues = result;
                }
                else {
                    this.sprintIssues = await this.getSprintIssues();
                }
            }
        },
        async mounted() {
          try {
              if(!decryptUserDetails()){
                  this.$notify.error({
                      title: 'Unauthorized',
                      message: 'You are unauthorized to access this application'
                  });
                  setTimeout( () => {
                     this.$router.replace('/login');
                  }, 3000)
              }
              this.sprintIssues = await this.getSprintIssues();
          }
          catch(err) {
              this.$notify.error({
                  title: 'Error', message: err.message
              });
          }
        }
    }
</script>

<style scoped>
    .sprintStory {
        display: flex;
        flex-flow: row wrap;
    }
</style>
