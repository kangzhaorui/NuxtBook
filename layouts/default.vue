<template>
  <div>
    <div class="layout">
      <Layout>
        <Sider breakpoint="md" collapsible :collapsed-width="78" v-model="isCollapsed">
          <!-- <Row>
            <Col span="8"> -->
          <div style="min-height: 100vh;">
            <Menu width="100%" :theme="theme2" active-name="1-1" :open-names="['1']">
              <Submenu name="1">
                <template slot="title">
                  <Icon type="ios-paper" />
                  内容管理
                </template>
                <MenuItem name="1-1" to='/home/book'>书源列表</MenuItem>
                <!-- <MenuItem name="1-2">评论管理</MenuItem>
                <MenuItem name="1-3">举报管理</MenuItem> -->
              </Submenu>
              <!-- <Submenu name="2">
                <template slot="title">
                  <Icon type="ios-people" />
                  用户管理
                </template>
                <MenuItem name="2-1">新增用户</MenuItem>
                <MenuItem name="2-2">活跃用户</MenuItem>
              </Submenu> -->
            </Menu>
          </div>

          <!-- </Col>
          </Row> -->
          <div slot="trigger"></div>
        </Sider>
        <Layout>
          <Header class="layout-header-bar"></Header>
          <Content :style="{margin: '20px', background: '#fff', minHeight: '220px'}">
            <Nuxt />
          </Content>
        </Layout>
      </Layout>
    </div>
    <!-- <Nuxt /> -->
  </div>
</template>
<script>
  export default {
    data() {
      return {
        isCollapsed: false,
        theme2: 'dark'
      };
    },
    computed: {
      menuitemClasses: function () {
        return [
          'menu-item',
          this.isCollapsed ? 'collapsed-menu' : ''
        ]
      }
    },
  }
</script>
<style>
  html {
    font-family:
      'Source Sans Pro',
      -apple-system,
      BlinkMacSystemFont,
      'Segoe UI',
      Roboto,
      'Helvetica Neue',
      Arial,
      sans-serif;
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
  }

  .button--green {
    display: inline-block;
    border-radius: 4px;
    border: 1px solid #3b8070;
    color: #3b8070;
    text-decoration: none;
    padding: 10px 30px;
  }

  .button--green:hover {
    color: #fff;
    background-color: #3b8070;
  }

  .button--grey {
    display: inline-block;
    border-radius: 4px;
    border: 1px solid #35495e;
    color: #35495e;
    text-decoration: none;
    padding: 10px 30px;
    margin-left: 15px;
  }

  .button--grey:hover {
    color: #fff;
    background-color: #35495e;
  }
</style>