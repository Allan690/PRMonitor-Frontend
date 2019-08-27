<template>
    <el-aside :span="8" style="position: fixed">
        <div class="logo-container">
            <img src="../../assets/logo.png" alt="logo" width="135px"/>
        </div>
        <div style="margin: 20px">
            <el-radio-group v-model="boardNo">
                <el-radio-button label="71">WatchTower</el-radio-button>
                <el-radio-button label="8">Tembea</el-radio-button>
            </el-radio-group>
        </div>

        <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b">
            <el-submenu index="1">

                <template slot="title">
                    <img src="../../assets/github-logo.png"
                         width="18"
                         alt="github_logo"
                    />
                    <!--              Github pane-->
                    <span class="navigator-one">Github</span>
                </template>

                <el-menu-item-group title="Github Tasks">
                    <el-menu-item index="1-1" onclick="">
                        <i class="el-icon-finished"></i>
                        <span>Finished Tasks</span>
                    </el-menu-item>
                    <el-menu-item index="1-2">
                        <i class="el-icon-help"></i>
                        <span>Merged Tasks</span>
                    </el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <!--         End of Github pane start of Jira pane-->
            <el-submenu index="2">
                <template slot="title">
                    <img src="../../assets/jira.png"
                         style="margin-left: -5px"
                         width="30" alt="jira_logo"/>
                    <span class="navigator-two">Jira</span>
                </template>
                <el-menu-item-group title="Jira Stories">
                    <el-menu-item index="2-1"
                                  v-on:click="currentComponent = 'getSprintStories'"
                                  v-bind:key="'getSprintStories'"
                    >
                        <i class="el-icon-full-screen"></i>
                        <span>All Stories</span>
                    </el-menu-item>
                    <el-menu-item index="2-2">
                        <i class="el-icon-data-line"></i>
                        <span>In Progress</span>
                    </el-menu-item>
                    <el-menu-item index="2-3">
                        <i class="el-icon-scissors"></i>
                        <span>QA</span>
                    </el-menu-item>
                    <el-menu-item index="2-4">
                        <i class="el-icon-data-analysis"></i>
                        <span>Validation</span>
                    </el-menu-item>
                    <el-menu-item index="2-5">
                        <i class="el-icon-circle-check"></i>
                        <span>Done</span>
                    </el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="Boards & Sprints">
                    <el-menu-item index="3-1">
                        <i class="el-icon-data-board"></i>
                        <span>All Boards</span>
                    </el-menu-item>
                    <el-menu-item index="3-2">
                        <i class="el-icon-bank-card"></i>
                        <span>All Sprints</span>
                    </el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <!--        End of Jira Pane-->
            <!--          start of user pane -->
            <el-submenu index="0">
                <template slot="title">
                    <i class="el-icon-user-solid"></i>
                    <span class="navigator-two">Users</span>
                </template>
                <el-menu-item-group title="User Groups">
                    <el-menu-item index="0-1">
                        <i class="el-icon-male"></i>
                        <span>Github</span>
                    </el-menu-item>
                    <el-menu-item index="0-2">
                        <i class="el-icon-female"></i>
                        <span>Jira</span>
                    </el-menu-item>
                </el-menu-item-group>
            </el-submenu>
        </el-menu>

    </el-aside>
</template>

<script>
    export default {
        name: 'SideNavComponent',
        data() {
            return { boardNo: '', currentComponent: ''}
        }
    }
</script>
<style scoped>
    .el-aside {
        background: #545c64;
        color: white;
        min-height: 100vh;
        width: 100%;
        overflow: scroll;
        height: 0px;
    }
    .logo-container {
        padding: 22px;
    }
    .el-menu {
        border-right: 0 !important;
    }
    .navigator-one {
        margin-left: 8px;
        font-weight: bold;
        font-kerning: normal;
        font-size: medium;
    }
    .navigator-two {
        margin-left: 3px;
        font-weight: bold;
        font-kerning: normal;
        font-size: medium;
    }

</style>
