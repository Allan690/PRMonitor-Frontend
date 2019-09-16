<template>
    <div class="emptyComponent">
<!--        <span>Disappointed by the empty cup? Yeah, it's true. There's nothing here.</span>-->
        <img src="../../assets/back.png" alt="background">
    </div>
</template>

<script>
    export default {
        name: 'EmptyComponent'
    }
</script>

<style scoped>
    span {
        display: block;
        margin: 30px;
    }
    img {
        opacity: 0.5;
        position: fixed;
        margin: 50px;
        width: 80%;
    }
</style>
