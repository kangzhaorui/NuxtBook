<!--
 * @Author: your name
 * @Date: 2021-03-08 17:30:14
 * @LastEditTime: 2021-03-08 21:35:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /localProject/iviewShuyuan/pages/home/bookDetail/_id.vue
-->

<template>
    <div class="">
        <Row>
            <Col :xs='24' :sm="5">
            <div class="detail_left">
                <Card width="100%">
                    <List width="100%" border>
                        <ListItem> <strong>源分享者：{{bookDetail.shareUsername}}</strong> </ListItem>
                        <ListItem> <strong>网站名称：{{bookDetail.name}}</strong> </ListItem>
                        <ListItem> <strong>网站地址：{{bookDetail.url}}</strong> </ListItem>
                        <ListItem> <strong>更新时间：{{bookDetail.mtime}}</strong> </ListItem>
                    </List>
                </Card>
                <Card>
                    <h2>网路导入</h2>
                    <div @click="copyUrl" class="url_export">
                        {{bookDetail.url}}
                    </div>
                </Card>
            </div>

            </Col>
            <Col :xs="0" :sm="19">
            <div>
                <div class="copy_code">
                    <Button @click="copyCode" type="primary">复制代码</Button>
                </div>
                <Input v-model="code" type="textarea" :rows="16" placeholder="请输入代码" />
            </div>
            </Col>
        </Row>

        <Row>
            <Col :xs="24" :sm="0">
            <div>
                <Input v-model="code" type="textarea" :rows="16" placeholder="请输入代码" />
            </div>
            </Col>
        </Row>
    </div>
</template>
<script>
    import axios from 'axios';
    import Clipboard from 'clipboard';
    export default {
        data() {
            return {
                msg: '哈哈哈',
                detailId: '',
                code: '',
                bookDetail: {},

            }
        },
        async created() {
            this.detailId = this.$route.params.id;
            // console.log('axios---',this.$axios)
            let that = this;
            this.$axios.get(`${process.env.api}/booksource/info?id=${this.detailId}`).then((data) => {
                that.code = data.data.content;
                that.bookDetail = data.data;
            }).catch((err) => {
                console.log('err---', err)
            });
        },
        methods: {
            //复制内容到剪切板
            copyUrl() {
                var input = document.createElement("input");   // js创建一个input输入框
                input.value = this.bookDetail.url;  // 将需要复制的文本赋值到创建的input输入框中，this.ruleForm.url这个是我要复制的内容
                document.body.appendChild(input);    // 将输入框暂时创建到实例里面
                input.select();   // 选中输入框中的内容
                document.execCommand("Copy");   // 执行复制操作
                document.body.removeChild(input); // 最后删除实例中临时创建的input输入框，完成复制操作
                this.$Message.success('复制成功');
            },
            copyCode(){
                var input = document.createElement("input");   // js创建一个input输入框
                input.value = this.code;  // 将需要复制的文本赋值到创建的input输入框中，this.ruleForm.url这个是我要复制的内容
                document.body.appendChild(input);    // 将输入框暂时创建到实例里面
                input.select();   // 选中输入框中的内容
                document.execCommand("Copy");   // 执行复制操作
                document.body.removeChild(input); // 最后删除实例中临时创建的input输入框，完成复制操作
                this.$Message.success('复制成功');
            }
        }
    }
</script>
<style scoped lang="scss">
    .detail_box {
        display: flex;

    }

    .detail_left {
        /* width: 400px; */
        font-size: 18px;
    }

    .url_export {
        height: 40px;
        border: solid 1px;
        display: flex;
        align-items: center;
        justify-content: start;
        padding-left: 20px;
    }
    .copy_code{
        margin: 16px;
    }
</style>