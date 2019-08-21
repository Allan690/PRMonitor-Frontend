<template>
    <div class="sprintStory">
        <el-container style="display: flex" v-for="issue in sprintIssues" v-bind:key="issue">
            <VueCard
                    :sprint-key="issue.issueProjectKey"
                    :sprint-status="issue.issueStatus"
                    :sprints-covered="issue.SprintsCoveredByStory ? issue.SprintsCoveredByStory.length : 1"
                    :sprint-name="issue.sprintDetails.sprintName"
                    :story-type="issue.issueTypeDetails.issueType"
                    :assignee-name="issue.assigneeDetails ? issue.assigneeDetails.displayName : 'None'"
                    :reporter-name="issue.issueCreator"
                    :description="issue.issueDescription"
            ></VueCard>
        </el-container>
    </div>
</template>

<script>
    import getSprintIssuesMutation from "@/mutations/getSprintIssues";
    import VueCard from "@/components/shared/VueCard";

    export default {
       name: 'getSprintStories', components: {
           VueCard
        },
        data() {
           return {
              boardId: '', sprintId: '', sprintIssues: []
           }
        },
        methods: {
           async getSprintIssues() {
               const response = await this.$apollo.mutate({
                   mutation: getSprintIssuesMutation,
                   variables: {
                       boardId: this.boardId || 8,
                       sprintId: this.sprintId || 59
                   }
               });
               const { data: { getSprintStories: { sprintIssues } }} = response;
               return sprintIssues;
           }
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
        /*margin: -15px;*/
        display: inline-flex;
        flex-flow: row wrap;
        box-sizing: border-box;
        /*align-items: center;*/
    }
</style>
