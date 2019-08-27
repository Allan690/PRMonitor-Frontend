<template>
    <el-container class="appContainer">
        <side-nav-component></side-nav-component>
        <el-container style="margin-left: 300px;">
            <search-component></search-component>
            <el-main>
                <bread-crumbs-component></bread-crumbs-component>
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
        components: {GetSprintStories, BreadCrumbsComponent, SearchComponent, SideNavComponent },
    }
</script>
