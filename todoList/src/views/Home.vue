<template>
    <div id="home">
        <div class="cover-box">
            <div class="cover-inline-box">
                <div class="cover-top-box">
                    <div class="cover-title">表单配置生成</div>
                    <el-button type="primary" icon="el-icon-close" circle @click="closeBtn()"></el-button>
                </div>
                <div class="cover-content-box">
                    <div class="cover-content-left-box">
                        <HomeTextAreaTop 
                            class="left-item"
                            :topTextarea = "jsonValue"
                        ></HomeTextAreaTop>
                        <HomeTextAreaBottom
                            v-on:sendTextarea = "getMessage"
                            class="left-item"
                        >
                        </HomeTextAreaBottom>
                    </div>
                    <div class="cover-content-right-box">
                        <HomeTable 
                            class="content-table"
                            :jsonValue="jsonValue"
                        ></HomeTable>
                    </div>
                </div>
                <div class="cover-bottom-box">
                    <el-button type="text">取消</el-button>
                    <el-button type="primary">取消</el-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import HomeTextAreaTop from '../components/HomeTextAreaTop.vue'
import HomeTextAreaBottom from '../components/HomeTextAreaBottom.vue'
import HomeTable from '../components/HomeTable.vue'
export default {
    name: 'Home',
    data() {
        return {
            contentHeight: 0,
            // jsonValue: `
                // [
                //     {
                //     date: "1",
                //     name: "select",
                //     type: "type",
                //     dom: "label",
                //     placeholder: "请输入类型",
                //     options: "值:div,label,div",
                //     thead: " "
                //     },
                //     {
                //     date: "2",
                //     name: "select",
                //     type: "type",
                //     dom: "label",
                //     placeholder: "请输入类型",
                //     options: "值:div,label,div",
                //     thead: " "
                //     },
                // ],
            // `,
            jsonValue: ""
        }
    },
    methods: {
        //  关闭按钮事件
        closeBtn() {
            console.log("点击了关闭")
        },
        //  获取传值的事件
        getMessage(data) {
            this.jsonValue = data
        },
    },
    components: {
        HomeTextAreaTop,
        HomeTextAreaBottom,
        HomeTable
    },
    mounted() {
        let coverTopHeight = $(".cover-top-box").height();
        let coverHeight = $(".cover-inline-box").height();
        let coverBottomHeight = $(".cover-bottom-box").height();
        this.contentHeight = coverHeight - coverTopHeight - coverBottomHeight;
        $(".cover-content-box").height(this.contentHeight);
    },
}
</script>

<style lang="less" scoped>
#home{
    width: 100%;
    .cover-box {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        background-color: rgba(0, 0, 0, 0.5);
        .cover-inline-box {
            width: 90%;
            height: 90%;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            margin: auto;
            background-color: #FFFFFF;
            border-radius: 1.25rem;
            box-sizing: border-box;
            -moz-box-sizing: border-box;
            -webkit-box-sizing: border-box;
            padding: 1.875rem;
            .cover-top-box {
                width: 100%;
                height: 3.125rem;
                display: flex;
                display: -webkit-flex;
                justify-content: space-between;
                align-items: center;
                border-bottom: 1px solid #eeeeee;
                .cover-title {
                    height: 3.125rem;
                    line-height: 3.125rem;
                    font-size: 1rem;
                    color: #1A1A1A;
                }
            }
            .cover-content-box {
                width: 100%;
                display: flex;
                display: -webkit-flex;
                justify-content: space-between;
                align-items: center;
                .cover-content-left-box {
                    width: 40%;
                    height: 100%;
                    display: flex;
                    display: -webkit-flex;
                    flex-direction: column;
                    justify-content: space-around;
                    align-items: center;
                    .left-item {
                        width: 100%;
                        height: 48%;
                    }
                }
                .cover-content-right-box {
                    width: 55%;
                    height: 90%;
                    display: flex;
                    display: -webkit-flex;
                    justify-content: center;
                    align-items: center;
                    .content-table {
                        width: 100%;
                        height: 100%;
                    }
                }
            }
            .cover-bottom-box {
                width: 100%;
                height: 3.125rem;
                box-sizing: border-box;
                -moz-box-sizing: border-box;
                -webkit-box-sizing: border-box;
                padding: .625rem 1.25rem;
                display: flex;
                display: -webkit-flex;
                justify-content: flex-end;
                align-items: center;
                .el-button {
                    margin: 0 .625rem;
                }
            }
        }
    }
}
</style>
