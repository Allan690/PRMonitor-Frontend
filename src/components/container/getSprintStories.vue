<template>
    <div class="sprintStory">
        <el-container style="align-items: center" v-if="loadingData"
             v-loading="loadingData"
             element-loading-text="Loading..."
             element-loading-spinner="el-icon-loading"
             element-loading-background="rgb(238, 241, 244)"
        >
            <h4 style="visibility: hidden; display: none"> {{ boardNo }}</h4>
        </el-container>
        <el-container style="display: flex" v-for="issue in sprintIssues" v-bind:key="issue">
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
    </div>
</template>

<script>
    import getSprintIssuesMutation from "@/mutations/getSprintIssues";
    import VueCard from "@/components/shared/VueCard";

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
              boardId: '', sprintId: '', sprintIssues: [], loadingData: false
           }
        },
        watch: {
           async boardNo(board) {
              this.boardId = parseInt(board, 10);
               this.sprintIssues = await this.getSprintIssues();
           }
        },
        methods: {
           async getSprintIssues() {
               this.loadingData = true;
               try {
                   const boardNumber = (this.boardId) ? this.boardId: 8;
                   const response = await this.$apollo.mutate({
                       mutation: getSprintIssuesMutation,
                       variables: {
                           boardId: boardNumber,
                           sprintId: this.sprintId || 59
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
        },
        async mounted() {
          try {
              this.sprintIssues = await this.getSprintIssues();
          }
          catch(err) {
              // console.log(err);
          }
        }
    }
</script>

<style scoped>
    .sprintStory {
        display: inline-flex;
        flex-flow: row wrap;
        box-sizing: border-box;
        /*align-items: center;*/
    }
</style>
