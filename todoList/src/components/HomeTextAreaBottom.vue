<template>
    <div id="home-textarea-bottom">
        <div class="top-box">
            <div class="title">表单配置</div>
            <div class="right-text">
                根据配置内容自动生成
                <el-switch 
                v-model="switchValue"
                :active-value="1"
                :inactive-value="0"
                @change="sendMessage()"
                ></el-switch>
            </div>
        </div>
        <div class="bottom-box">
            <el-input
                type="textarea"
                v-model="bottomTextarea"
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
            /// 开关
            switchValue: false,
            /// 文本内容
            bottomTextarea: ""
        }
    },
    methods: {
        sendMessage() {
            this.$emit("sendTextarea", this.bottomTextarea)
        }
    },
}
</script>

<style lang="less">
#home-textarea-bottom {
    width: 100%;
    height: 100%;
    .top-box {
        width: 100%;
        height: 2.5rem;
        display: flex;
        display: -webkit-flex;
        justify-content: space-between;
        align-items: center;
        .title {
            line-height: 2.5rem;
            font-size: 1rem;
            color: #000000;
            font-weight: bold;
        }
        .right-text {
            font-size: .75rem;
            color: #999999;
        }
        .el-switch {
            width: 2.5rem;
        }
    }
    .bottom-box {
        width: 100%;
    }
}
</style>