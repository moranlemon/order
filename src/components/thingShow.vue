<template>
    <div class="outblock">
      <div class="inblock">
        <Row><i-col>001茶餐厅的招牌菜</i-col></Row>
        <Row gutter="16">
          <i-col offset="5" span="7">
            <Card class="showblock">
              <Row>
              <i-col span="8">
                <i-col span="24">
                  <div class="border-it">
                   <img src="../assets/images/food-md1.jpg" class="img"/>
                  </div>
                </i-col>
              </i-col>
              <i-col span="16">
                <i-col class="fontblock">
                <p>招牌菜001：</p>
                <p>balabalabalabalabala</p>
                <p>￥:168</p>
                </i-col>
              </i-col>
              </Row>
            </Card>
          </i-col>
          <i-col span="7">
            <Card class="showblock"></Card>
          </i-col>
        </Row>
      </div>
    </div>
</template>

<script>
export default {
  name: 'thingShow',
  components: {},
  data () {
    return {}
  }
}
</script>

<style scoped>
.outblock{
  width: 100%;
  background-color: blanchedalmond;
}
.inblock{
  width: 100%;
  text-align: center;
  background-color:white;
}
.showblock{
  width:100%;
  height: 200px;
  text-align: center;
  margin-top: 20px;
}
.img{
  width: 160px;
  height: 165px;
}
.border-it{
  width: 164px;
  height: 169px;
  border: 2px solid;
  border-color: #f3c458;
  /* box-shadow: 2px 2px 3px #f3c458; */
}
.fontblock{
  margin: 20px;
  text-align: left;
}
</style>
