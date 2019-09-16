<template>
    <el-container class="appContainer">
        <side-nav-component component-name="sprintStories"></side-nav-component>
        <el-container style="margin-left: 300px;">
            <search-component></search-component>
            <el-main>
                <bread-crumbs-component
                        :root="root"
                        :level-one="levelOne"
                        :level-one-path="levelOnePath"
                        :level-two="levelTwo"
                        :level-two-path="levelTwoPath"
                        :level-three="levelThree"
                ></bread-crumbs-component>
                <div style="margin-top: 100px;">
                    <keep-alive>
                      <get-sprint-stories></get-sprint-stories>
                    </keep-alive>
                </div>
            </el-main>
        </el-container>
    </el-container>
</template>

<style scoped>
    .el-main {
        background: #EEF1F4;
    }

    .appContainer {
        min-height: 100vh;
    }
</style>

<script>
    import SideNavComponent from "@/components/shared/SideNavComponent";
    import SearchComponent from "@/components/shared/SearchComponent";
    import BreadCrumbsComponent from "@/components/shared/BreadCrumbsComponent";
    import GetSprintStories from "@/components/container/getSprintStories";

    export default {
        name: 'SprintStoriesComponent',
        components: { GetSprintStories, BreadCrumbsComponent, SearchComponent, SideNavComponent },
        data() {
            const { boardId } = this.$route.params;
            return {
                root: 'PRMonitor',
                levelOne: 'boards',
                levelOnePath: '/boards',
                levelTwo: 'sprints',
                levelTwoPath: `/sprints/${boardId}`,
                levelThree: 'issues'
            }

        }
    }
</script>
