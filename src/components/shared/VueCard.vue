<template>
    <el-container style="margin-left: 20px; margin-top: 15px;">
        <div class="recipe-card">
            <aside>
                <img src="../../assets/travel.png" alt="Chai Oatmeal" />

                <a href="#" class="button"><span class="icon icon-play"></span></a>
            </aside>
            <article>
                <h2>{{ sprintKey }}</h2>
                <h3>Status: {{ sprintStatus }}</h3>
                <ul>
                    <li><span class="icon icon-users"></span><span>1</span></li>
                    <li><span class="icon icon-clock"></span><span>{{ sprintsCovered}} sps</span></li>
                    <li><span class="icon icon-level"></span><span>{{sprintName}}</span></li>
                    <li><span class="icon icon-calories"></span><span>{{storyType}}</span></li>
                </ul>

                <p class="descriptionBody" v-html="description"></p>

                <el-row style="display: inline-flex">
                    <p class="ingredients"><span>Assignee:&nbsp;</span>{{assigneeName}}</p>
                    <p class="ingredients" style="margin-left: 5px"><span>Reporter:&nbsp;</span>{{reporterName}}</p>
                </el-row>

            </article>

        </div>
    </el-container>
</template>


<script>
    import replaceLineBreaks from "@/helpers/markdownToRaw";

    export default {
        name: 'VueCard',
        props: {
            sprintKey: String,
            sprintStatus: String,
            sprintsCovered: Number,
            sprintName: String,
            description: String,
            storyType: String,
            assigneeName: String,
            reporterName: String
        },
        mounted() {
            if(this.description) {
                this.description = replaceLineBreaks(this.description);
            }
        }
    }
</script>

<style scoped>
    * {
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }

    html {
        height: 100%;
    }

    body {
        background-color: #57abf2;
        background-image: -webkit-linear-gradient(-225deg, #19d3d1 5%, #57abf2);
        background-image: linear-gradient(-45deg,#19d3d1 5%, #57abf2);
        font-family: 'Open Sans', sans-serif;
        font-size: 1rem;
    }

    img {
        max-width: 100%;
        height: auto;
        vertical-align: bottom;
    }

    .recipe-card {
        background: #fff;
        margin: 15px;
        width: 90%;
        max-width: 496px;
        border-radius: 25px;
    }
    .recipe-card aside {
        position: relative;
    }
    .recipe-card aside img {
        border-top-left-radius: 25px;
        border-top-right-radius: 25px;
    }
    .recipe-card aside .button {
        background: #57abf2;
        display: inline-block;
        position: absolute;
        top: 80%;
        right: 3%;
        width: 4.0625em;
        height: 4.0625em;
        border-radius: 4.0625em;
        line-height: 4.0625em;
        text-align: center;
    }
    .recipe-card aside .button .icon {
        vertical-align: middle;
    }
    .recipe-card article {
        padding: 1.25em 1.5em;
    }
    .recipe-card article ul {
        list-style: none;
        margin: 0.5em 0 0;
        padding: 0;
    }
    .recipe-card article ul li {
        display: inline-block;
        margin-left: 1em;
        line-height: 1em;
    }
    .recipe-card article ul li:first-child {
        margin-left: 0;
    }
    .recipe-card article ul li .icon {
        vertical-align: bottom;
    }
    .recipe-card article ul li span:nth-of-type(2) {
        margin-left: 0.5em;
        font-size: 0.8em;
        font-weight: 300;
        vertical-align: middle;
        color: #838689;
    }
    .recipe-card article h2, .recipe-card article h3 {
        margin: 0;
        font-weight: 300;
    }
    .recipe-card article h2 {
        font-size: 1.75em;
        color: #222222;
    }
    .recipe-card article h3 {
        font-size: 0.9375em;
        color: #838689;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }
    .recipe-card article p {
        margin: 1.25em 0;
        font-size: 0.8125em;
        font-weight: 400;
        color: #222222;
    }
    .recipe-card article p span {
        font-weight: 700;
        color: #000000;
    }
    .recipe-card article .ingredients {
        margin: 1em 0 0.5em;
    }
    .recipe-card .icon {
        /*display: inline;*/
        display: inline-block;
        background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/203277/recipe-card-icons.svg);
        background-repeat: no-repeat;
    }
    .recipe-card .icon-calories, .recipe-card .icon-calories\:regular {
        background-position: 0 0;
        width: 16px;
        height: 19px;
    }
    .recipe-card .icon-clock, .recipe-card .icon-clock\:regular {
        background-position: 0 -19px;
        width: 20px;
        height: 20px;
    }
    .recipe-card .icon-level, .recipe-card .icon-level\:regular {
        background-position: 0 -39px;
        width: 16px;
        height: 19px;
    }
    .recipe-card .icon-play, .recipe-card .icon-play\:regular {
        background-position: 0 -58px;
        width: 21px;
        height: 26px;
    }
    .recipe-card .icon-users, .recipe-card .icon-users\:regular {
        background-position: 0 -84px;
        width: 18px;
        height: 18px;
    }
    .descriptionBody {
        align-items: center;
    }

    .markdown-body {
        box-sizing: border-box;
        min-width: 200px;
        max-width: 980px;
        margin: 0 auto;
        /*padding: 45px;*/
    }
    @media (max-width: 767px) {
        .markdown-body {
            padding: 15px;
        }
    }
</style>
