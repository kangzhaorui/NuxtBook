<!--
 * @Author: your name
 * @Date: 2021-03-07 00:42:05
 * @LastEditTime: 2021-03-07 01:04:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /localProject/iviewShuyuan/pages/home/shareBook/index.vue
-->
<template>
    <div>分享书源
        <Card :dis-hover="true">
            <Input v-model="code" type="textarea" :rows="16" placeholder="请输入代码" />

        </Card>
        <Card :dis-hover="true">
            <Button type="primary" @click="submit">提交</Button>

        </Card>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                code: '',
            }
        },
        methods: {
            submit() {
                console.log('----code', this.code)
            }
        }
    }
</script>
<style>

</style>