<template>
    <el-container class="appContainer">
        <side-nav-component
                v-on:github-reviewing="passProps"
                v-on:github-finished="passProps"
                v-on:github-wip="passProps"
        ></side-nav-component>
        <el-container style="margin-left: 300px;">
            <search-component></search-component>
            <el-main>
                <bread-crumbs-component
                        :root="root"
                        :level-one="levelOne"
                        :level-one-path="levelOnePath"
                ></bread-crumbs-component>
                <div style="margin-top: 100px;">
                    <keep-alive>
                       <get-labelled-tasks-component :label="label"></get-labelled-tasks-component>
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
    import GetLabelledTasksComponent from "@/components/container/getLabelledTasks";

    export default {
        name: 'LabelledTasksComponent',
        components: { GetLabelledTasksComponent, BreadCrumbsComponent, SearchComponent, SideNavComponent},
        data() {
            return {
                root: 'PRMonitor',
                levelOne: 'Github',
                levelOnePath: '/pullRequests',
                label: ''
            }
        },
        methods: {
            passProps(props) {
                this.label = props;
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
