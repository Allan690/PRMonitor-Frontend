<template>
    <el-container class="appContainer">
        <side-nav-component></side-nav-component>
        <el-container style="margin-left: 300px;">
            <search-component></search-component>
            <el-main>
                <bread-crumbs-component
                        :root="root"
                        :level-one="levelOne"
                        :level-one-path="levelOnePath"
                        :level-two="levelTwo"
                        :level-two-path="levelTwoPath"
                ></bread-crumbs-component>
                <div style="margin-top: 100px;">
                    <keep-alive>
                        <get-all-sprints></get-all-sprints>
                    </keep-alive>
                </div>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
    import SideNavComponent from "@/components/shared/SideNavComponent";
    import SearchComponent from "@/components/shared/SearchComponent";
    import BreadCrumbsComponent from "@/components/shared/BreadCrumbsComponent";
    import GetAllSprints from "@/components/container/getAllSprints";
    export default {
        name: 'SprintsComponent',
        components: {GetAllSprints, BreadCrumbsComponent, SearchComponent, SideNavComponent},
        data() {
            const { boardNo } = this.$route.params;
            return {
                root: 'PRMonitor',
                levelOne: 'boards',
                levelTwo: 'sprints',
                levelOnePath: '/boards',
                levelTwoPath: `/sprints/${boardNo}`
            }
        }
    }
</script>

<style scoped>
    .el-main {
        background: #EEF1F4;
    }

    .appContainer {
        min-height: 100vh;
    }
</style>
