<!--
 * @Author: your name
 * @Date: 2021-03-06 23:50:34
 * @LastEditTime: 2021-03-08 21:39:51
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
      <Button @click="handleSelectAll(false)">Cancel all selected</Button>-->
      <!-- <div style="margin-bottom: 8px;">
                <Button type="primary" @click="shuyuanBtn(0)">生成书源</Button>
                <Button type="warning" @click="shuyuanBtn(1)">分享书源</Button>
      </div>-->

      <Table
        @on-selection-change="selectRows"
        border
        ref="selection"
        :columns="columns4"
        :data="bookData"
      >
        <template slot-scope="{ row, index }" slot="otherMsg">
          <span>{{row.ctime}}</span>
        </template>
        <template slot-scope="{ row, index }" slot="name">
          <a @click="goBookDetail(row)">{{row.name}}</a>
          <br />
          <span>{{row.url}}</span>
        </template>
      </Table>
    </Card>
    <Modal v-model="startBookFlag" title="导入方式" :footer-hide="true">
      <div>链接</div>
      <div>分享二维码</div>
    </Modal>
    <Page
      class="pagestyle"
      :total="bookData.length"
      show-total
      v-if="bookData.length > 0 "
      @on-change="changepage"
    />
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      formItem: {
        input: ""
      },
      startBookFlag: false,
      selectRowsList: [],
      columns4: [
        //设置多选的不用先注释掉
        // {
        //     type: 'selection',
        //     width: 60,
        //     align: 'center'
        // },
        {
          title: "名称",
          key: "name",
          slot: "name"
        },
        {
          title: "其他信息",
          slot: "otherMsg",
          key: "age"
        },
        {
          title: "分享者",
          key: "shareUsername"
        }
      ],
      bookData: []
    };
  },
  async asyncData() {
    let { data } = await axios.get(`${process.env.api}/booksource/list`); //?page=0&key=17k
    console.log("datares---", data);
    return { bookData: data };
  },
  methods: {
    goBookDetail(rows) {
      this.$router.push({ path: `/home/bookDetail/${rows.id}` });
      console.log("roew---", rows);
    },
    //搜索按钮，点击搜索请求数据
    handleSubmit(name) {
      let that = this;
      this.$axios
        .get(`${process.env.api}/booksource/list?key=${this.formItem.input}`)
        .then(data => {
          this.bookData = data.data;
        })
        .catch(err => {
          console.log("err---", err);
        });
    },
    handleSelectAll(status) {
      this.$refs.selection.selectAll(status);
    },
    //书源按钮 val= 0是生成书源 1是分享书源
    shuyuanBtn(val) {
      if (val === 0) {
        if (this.selectRowsList.length == 0) {
          this.$Message.success("请选择书源");
          return;
        }
        this.startBookFlag = true;
      }
      if (val === 1) {
        this.$router.push({ path: "/home/shareBook" });
      }
      console.log(this.selectRowsList, "111书源", val);
    },
    //选中项  拿到选中项赋值数组，待点击生成书源时用
    selectRows(rows) {
      this.selectRowsList = [...rows];
      console.log("rows", rows);
    },
    // 改变页面
    changepage() {
      console.log("哈哈哈");
    }
  }
};
</script>
<style scoped >
.pagestyle {
  margin: 10px atuo;
}
</style>