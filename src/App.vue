<template>
  <div id="app">
    <Row>
    <i-col span="24">
      <i-col span="6">
          <Menu mode="horizontal">
            <div class="layout-nav">
<<<<<<< HEAD
              <span><img src="./assets/chef-hat.png"></span>
=======
              <span><img src="./assets/images/chef-hat.png"></span>
>>>>>>> 876f51e7586276ef05d82152170a0449f870d2a4
            </div>
          </Menu>
          <span><div class="text-shadow">HELLO &nbsp; WORLD  &nbsp;&nbsp; hello world</div></span>
        </i-col>
      <i-col span="12" style="text-align: center">
          <Menu mode="horizontal" :active-name="$route.path"  @on-select='onSelect'>
            <div class="layout-nav">
              <Menu-item name="/" to="/" style="margin-left: 20%">
                <Icon type="ios-home" />
                主页
              </Menu-item>
              <Menu-item name="/thingShow" to="/thingShow">
                <Icon type="ios-navigate" />
                商品展示
              </Menu-item>
              <Menu-item name="/orderFood" to="/orderFood">
                <Icon type="ios-paper" />
                订餐
             </Menu-item>
              <Menu-item name="/login" to="/login">
                <Icon type="md-contact" />
                登录
              </Menu-item>
              <Menu-item name="/loginAdd" to="/loginAdd">
                <Icon type="md-contact" />
                注册
              </Menu-item>
            </div>
          </Menu>
        </i-col>
      <i-col span="6">
      <Menu mode="horizontal">
        <div class="layout-nav"></div>
      </Menu>
    </i-col>
    </i-col>
  </Row>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      shop: 'shop-list'
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.shop = this.$route.path.slice(1)
      this.$refs.shop.updateActiveName()
    })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.text-shadow{
    text-shadow:#f88f04 0 0 5px;
    color:white;
    font-size:16px;
}

</style>
