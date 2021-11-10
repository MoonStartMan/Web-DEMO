<template>
    <div id="home-textarea-top">
        <div class="title">希望得到的JSON</div>
        <div class="bottom-box">
            <el-input
                type="textarea"
                v-model="textareaValue"
                show-word-limit
                :rows="12"
            >
            </el-input>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            textareaValue: ""
        }
    },
    props: ["topTextarea"],
    watch: {
        topTextarea(value, oldValue) {
            this.textareaValue = value
        }
    }
}
</script>

<style lang="less">
#home-textarea-top {
    width: 100%;
    height: 100%;
    .title {
        width: 100%;
        font-size: 1rem;
        color: #000000;
        font-weight: bold;
        margin-bottom: .625rem;
    }
    .bottom-box {
        width: 100%;
    }
}
</style>