<template>
    <el-breadcrumb
            style="position: fixed;
                  z-index: 1000;
                  margin-top: 70px;
                  background-color: rgb(238, 241, 244);
                  height: 50px;
                  width: 100%;"
            separator-class="el-icon-arrow-right"
            class="breadcrumb-container"
    >
        <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
        <el-breadcrumb-item>promotion management</el-breadcrumb-item>
        <el-breadcrumb-item>promotion list</el-breadcrumb-item>
        <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
    </el-breadcrumb>
</template>

<style scoped>
    .breadcrumb-container {
        margin-top: 20px;
        margin-bottom: 40px;
        margin-left: 35px;
    }

</style>

<script>
    export default {
        name: 'BreadCrumbsComponent',
        props: {
            root: String,
            levelOne: String,
            levelTwo: String,
            levelThree: String,
            rootPath: String,
            levelOnePath: String,
            levelTwoPath: String,
            levelThreePath: String,
        }
    }
</script>
