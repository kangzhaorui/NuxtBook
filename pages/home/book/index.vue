<!--
 * @Author: your name
 * @Date: 2021-03-06 23:50:34
 * @LastEditTime: 2021-03-08 13:38:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /localProject/iviewShuyuan/pages/home/book/index.vue
-->
<template>
    <div>
        <Card :dis-hover="true">
            <Form ref="formItem" :model="formItem" :label-width="80" inline>
                <FormItem label="关键字">
                    <Input v-model="formItem.input" placeholder="请输入关键字"></Input>
                </FormItem>
                <FormItem>
                    <Button type="primary" @click="handleSubmit('formItem')">搜索</Button>
                </FormItem>
            </Form>
        </Card>
        <Card :dis-hover="true">
            <!-- <Button @click="handleSelectAll(true)">Set all selected</Button>
        <Button @click="handleSelectAll(false)">Cancel all selected</Button> -->
            <div style="margin-bottom: 8px;">
                <Button type="primary" @click="shuyuanBtn(0)">生成书源</Button>
                <Button type="warning" @click="shuyuanBtn(1)">分享书源</Button>
            </div>

            <Table @on-selection-change="selectRows" border ref="selection" :columns="columns4" :data="data1"></Table>
        </Card>
        <Modal v-model="startBookFlag" title="导入方式" :footer-hide="true">
            <div>
                链接
            </div>
            <div>
                分享二维码
            </div>
        </Modal>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        data() {
            return {
                formItem: {
                    input: ''
                },
                startBookFlag: false,
                selectRowsList: [],
                columns4: [
                    {
                        type: 'selection',
                        width: 60,
                        align: 'center'
                    },
                    {
                        title: 'Name',
                        key: 'name'
                    },
                    {
                        title: 'Age',
                        key: 'age'
                    },
                    {
                        title: 'Address',
                        key: 'address'
                    }
                ],
                data1: [
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park',
                        date: '2016-10-03'
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'London No. 1 Lake Park',
                        date: '2016-10-01'
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park',
                        date: '2016-10-02'
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        date: '2016-10-04'
                    }
                ]
            }
        },
        async asyncData() {
            // let { res } = await axios.get(`${process.env.api}/booksource/list?page=0&key=17k`);
            // console.log('---', res)
            // return { res }
        },
        methods: {
            //搜索按钮，点击搜索请求数据
           handleSubmit(name) {
                console.log('----', this.formItem)
            },
            handleSelectAll(status) {
                this.$refs.selection.selectAll(status);
            },
            //书源按钮 val= 0是生成书源 1是分享书源
            shuyuanBtn(val) {
                if (val === 0) {
                    if (this.selectRowsList.length == 0) {
                        this.$Message.success('请选择书源');
                        return
                    }
                    this.startBookFlag = true;
                }
                if (val === 1) {
                    this.$router.push({ path: '/home/shareBook' })
                }
                console.log(this.selectRowsList, '111书源', val)
            },
            //选中项  拿到选中项赋值数组，待点击生成书源时用
            selectRows(rows) {
                this.selectRowsList = [...rows];
                console.log('rows', rows);

            }
        }
    }
</script>
<style scoped>

</style>