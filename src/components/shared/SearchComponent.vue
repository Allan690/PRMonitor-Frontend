<template>
    <el-header style="
        background-color: rgb(238, 241, 244);
        height: auto;
        display: flex;
        position: fixed;
         z-index: 1000;
"
    >
        <div class="inner-form">
            <div class="input-field first-wrap">
                <div class="svg-wrapper">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
                    </svg>
                </div>
                <input id="search"
                       type="text"
                       placeholder="Search for jira story..."
                />
                <!--              Search button-->
                <div class="input-field second-wrap">
                    <button class="btn-search"
                            type="button"
                    >Search</button>
                </div>
                <!--              End of button-->
            </div>
        </div>
        <div class="toolbar-button">
            <button class="action-button">
                <img
                        alt="profile picture"
                        class="upic"
                        src="https://lh4.googleusercontent.com/-JFAtrgPLayg/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rdL0KuU0VfH-y0lDYx9g2u0iAw_aQ/s50/photo.jpg"/>
                <span class="too-bar-username">Allan Mogusu</span>

            </button>
        </div>
    </el-header>
</template>

<script>
    export default {
        name: 'SearchComponent'
    }
</script>

<style scoped>
    .inner-form {
        align-items: center;
        border-radius: 34px;
        box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15);
        overflow: hidden;
        color: rgb(0,0,0);
        box-sizing: border-box;
        width: 40%;
        margin-top: 10px;margin-left: 25px;
        margin-bottom: 30px;
    }
    .input-field.first-wrap {
        flex-grow: 1;
        display: flex;
        align-items: center;
        background-attachment: scroll;
        background-clip: border-box;
        background-image: none;
        background-color: rgb(217, 241, 227);
        background-origin: padding-box;
        background-size: auto;
        color: rgb(0,0,0);
        box-sizing: border-box;
    }
    .input-field.first-wrap input
    {
        flex-grow: 1;
        height: 100%;
        background: transparent;
        border: 0;
        display: block;
        width: 100%;
        padding: 10px 0;
        font-size: 16px;
        color: #000;
        outline: none;
    }
    .input-field.second-wrap {
        box-sizing: border-box;
        color: rgb(0, 0, 0);
        display: block;
        font-family: Poppins, sans-serif;
        height: 50px;
        line-height: 18.4px;
        min-width: 150px;
        outline: none;
        -webkit-text-size-adjust: 100%;
    }
    .input-field.first-wrap .svg-wrapper {
        min-width: 80px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .input-field.second-wrap .btn-search {
        align-items: flex-start;
        height: 100%;
        width: 100%;
        white-space: nowrap;
        font-size: 16px;
        color: #fff;
        border: 0;
        cursor: pointer;
        position: relative;
        z-index: 0;
        background: #545c64;
        transition: all .2s ease-out, color .2s ease-out;
        font-weight: 300;
        outline: none;
        -webkit-writing-mode: horizontal-tb !important;
        text-rendering: auto;
    }
    .toolbar-button {
        margin-top: 10px;
        margin-left: 450px;
        margin-right: 2.5em;
    }
    .action-button {
        height: 45px;
        min-width: 182px;
        border: 1px solid rgba(128,143,163,.11);
        border-radius: 6px;
        background-color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        outline: 0;
    }
    .upic {
        width: 34px;
        height: 34px;
        border-radius: 50%;
        border: 1px solid #fff;
    }
    .too-bar-username {
        font-size: 1rem;
        font-weight: 200;
        line-height: 21px;
        color: rgb(96, 98, 102);
        padding: 6px 1px 6px 6px;
    }
</style>
