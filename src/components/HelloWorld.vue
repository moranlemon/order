<template>
  <div class="outblock">
    <div class="inblock">
      <div class="header">
        <Row>
          <i-col offset="5" span="14">
            <i-col span="14">
              <h1>welcome to the hello world food</h1>
              <h3>welcome welcome welcome</h3>
              <h5>FOOD FOOD FOOD</h5>
            </i-col>
            <i-col span="10">
            <Card style="width:300px;height:400px;float:right">
              <Carousel autoplay loop autoplay-speed="5000" height="370px">
                <CarouselItem>
                    <div class="demo-carousel"><img src="../assets/carousel1.jpg" style="width: 260px;height: 380px"></div>
                </CarouselItem>
                <CarouselItem>
                    <div class="demo-carousel"><img src="../assets/carousel2.jpg" style="width: 260px;height: 380px"></div>
                </CarouselItem>
                <CarouselItem>
                    <div class="demo-carousel"><img src="../assets/carousel3.jpg" style="width: 260px;height: 380px"></div>
                </CarouselItem>
                <CarouselItem>
                    <div class="demo-carousel"><img src="../assets/carousel4.jpg" style="width: 260px;height: 380px"></div>
                </CarouselItem>
             </Carousel>
            </Card>
            </i-col>
          </i-col>
        </Row>
      </div>
      <div class="center">
        <Row>
          <i-col offset="5" span="14">
            <i-col span="24">
              <span>
              <div class="border-font somewh">
                <p>Fast &</p>
                <p>Leisure</p>
              </div>
              <div style="float:left;margin:20px 0px 0px 10px">
                <h4>OUR SERVICES</h4>
              </div>
              </span>
            </i-col>
            <i-col span="24">
                <Row :gutter="16">
                  <i-col span="3" class="border-it">
                    <div>
                      <div>
                        <img src="../assets/icons8-apple-50.png" class="img-top">
                      </div>
                      <div>icons8-apple-50 icons8-apple-50</div>
                    </div>
                  </i-col>
                  <i-col span="3" class="border-it shift-up">
                    <div>
                      <div>
                        <img src="../assets/icons8-rack-of-lamb-50.png" class="img-top">
                      </div>
                      <div>icons8-apple-50 icons8-apple-50</div>
                    </div>
                  </i-col>
                  <i-col span="3" class="border-it shift-up-up">
                    <div>
                      <div>
                        <img src="../assets/icons8-kawaii-soda-50.png" class="img-top">
                      </div>
                      <div>icons8-apple-50 icons8-apple-50</div>
                    </div>
                  </i-col>
                  <i-col span="3" class="border-it shift-up">
                    <div>
                      <div>
                        <img src="../assets/icons8-fondue-50.png" class="img-top">
                      </div>
                      <div>icons8-apple-50 icons8-apple-50</div>
                    </div>
                  </i-col>
                  <i-col span="3" class="border-it">
                    <div>
                      <div>
                        <img src="../assets/icons8-sunny-side-up-eggs-50.png" class="img-top">
                      </div>
                      <div>icons8-apple-50 icons8-apple-50</div>
                    </div>
                  </i-col>
                  <i-col span="3" class="border-it shift-up">
                    <div>
                      <div>
                        <img src="../assets/icons8-kawaii-french-fries-50.png" class="img-top">
                      </div>
                      <div>icons8-apple-50 icons8-apple-50</div>
                    </div>
                  </i-col>
                </Row>
              </i-col>
              <i-col span="24" style="margin-top: 30px">
                <span>
                  <div class="somewh1">
                    <p>Fresh &</p>
                    <p>Delicious</p>
                  </div>
                  <div style="float:right;margin:20px 0px 0px 10px">
                    <h4>OUR FOODS</h4>
                  </div>
                </span>
              </i-col>
                <i-col span="24" style="margin-top:30px">
                  <Row :gutter="16">
                    <i-col span="7">
                      <Row>
                        <i-col>
                          <div style="width:auto;height:300px;" class="border-fd">
                            <img src="../assets/food-md1.jpg" style="width: 100%;height:260px;border-radius:20px">
                            <span style="float:left;margin-left:20px;font-size:16px">铁板香煎草原牛排</span><span style="float:right;margin-right:20px;font-size:16px">￥108</span>
                          </div>
                        </i-col>
                      </Row>
                      <Row>
                        <i-col style="margin-top:10px">
                          <div style="width:auto;height:400px;" class="border-fd">
                            <img src="../assets/food-lg3.jpg" style="width: 100%;height:360px;border-radius:20px">
                            <p>food-md1</p>
                          </div>
                        </i-col>
                      </Row>
                    </i-col>
                    <i-col span="7">
                      <Row>
                        <i-col>
                          <div style="width:auto;height:420px;" class="border-fd">
                            <img src="../assets/food-lg1.jpg" style="width: 100%;height:380px;border-radius:20px">
                            <p>food-md1</p>
                          </div>
                        </i-col>
                      </Row>
                      <Row>
                        <i-col style="margin-top:10px">
                          <div style="width:auto;height:280px;" class="border-fd">
                            <img src="../assets/food-md5.jpg" style="width: 100%;height:240px;border-radius:20px">
                            <p>food-md1</p>
                          </div>
                        </i-col>
                      </Row>
                    </i-col>
                    <i-col span="7">
                      <Row>
                        <i-col>
                          <div style="width:auto;height:230px;" class="border-fd">
                            <img src="../assets/food-md4.jpg" style="width: 100%;height:190px;border-radius:20px">
                            <p>food-md1</p>
                          </div>
                        </i-col>
                      </Row>
                      <Row>
                        <i-col style="margin-top:10px">
                          <div style="width:auto;height:230px;" class="border-fd">
                            <img src="../assets/food-md3.jpg" style="width: 100%;height:190px;border-radius:20px">
                            <p>food-md1</p>
                          </div>
                        </i-col>
                      </Row>
                      <Row>
                        <i-col style="margin-top:10px">
                          <div style="width:auto;height:230px;" class="border-fd">
                            <img src="../assets/food-md2.jpg" style="width: 100%;height:190px;border-radius:20px">
                            <p>food-md1</p>
                          </div>
                        </i-col>
                      </Row>
                    </i-col>
                    <i-col offset="1" span="2">
                      <Row>
                        <i-col>
                          <div style="width:auto;height:150px">
                            <img src="../assets/chef-hat.png" style="float:right">
                          </div>
                        </i-col>
                      </Row>
                      <Row>
                        <i-col>
                          <div style="width:auto;height:100px">
                            <img src="../assets/chef-hat.png" style="float:right;width:auto;height: 30px">
                          </div>
                        </i-col>
                      </Row>
                      <Row>
                        <i-col>
                          <div style="width:auto;height:100px">
                            <img src="../assets/chef-hat.png" style="float:left;width:auto;height: 30px">
                          </div>
                        </i-col>
                      </Row>
                      <Row>
                        <i-col>
                          <div style="width:auto;height:100px">
                            <img src="../assets/chef-hat.png" style="float:right;width:auto;height: 30px">
                          </div>
                        </i-col>
                      </Row>
                      <Row>
                        <i-col>
                          <div style="width:auto;height:100px">
                            <img src="../assets/chef-hat.png" style="float:left;width:auto;height: 30px">
                          </div>
                        </i-col>
                      </Row>
                      <Row>
                        <i-col>
                          <div style="width:auto;height:100px">
                            <img src="../assets/chef-hat.png" style="float:right;width:auto;height: 30px">
                          </div>
                        </i-col>
                      </Row>
                      <Row>
                        <i-col>
                          <div style="width:auto;height:30px">
                            <img src="../assets/chef-hat.png" style="float:left;width:auto;height: 30px">
                          </div>
                        </i-col>
                      </Row>
                    </i-col>
                  </Row>
              </i-col>
          </i-col>
        </Row>
      </div>
      <div class="footer">
        <Row>
        <i-col offset="5" span=14 style="margin-top: 30px;background-color:#f3c458">
          <i-col span="6">
            <img src="../assets/coffee.gif" style="float:left;width:auto;height: 200px">
          </i-col>
          <i-col span="12">
            <p style="margin-top: 50px">our foodbar fast and leisure.our food fresh and delicious</p>
            <p>小屋tel:100110011001</p>
          </i-col>
        </i-col>
        </Row>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      theme1: 'light'
    }
  }
}
</script>

<style scoped>
.outblock{
  width: 100%;
  background-color:#f3c458;
}
.inblock{
  width: 100%;
  text-align: center;
  background-color:white;
}
.header{
  width: 100%;
  background-color:white;
  margin-top: -10px;
}
.center{
  width: 100%;
  height: auto;
  background-color: #fff;
}
.img-top{
  margin-top: -15px;
}
.somewh{
  width: 90px;
  height: 60px;
  float: left;
  margin-left: 15px;
}
.somewh1{
  width: 110px;
  height: 60px;
  float: right;
  margin-left: 15px;
  font-size: 20px;
  font-weight: bold;
  font-family:monospace;
  border: 5px solid;
  border-color:white white white #f3c458 ;
}
.border-font{
  font-size: 20px;
  font-weight: bold;
  font-family:monospace;
  border: 5px solid;
  border-color:white  #f3c458 white white;
}
.border-it{
  border: 2px solid;
  border-radius: 20px;
  border-color: #eee;
  margin-left: 35px;
  margin-top: 30px;
  box-shadow: 5px 5px 3px #eee;
}
.border-fd{
  border: 2px solid;
  border-radius: 20px;
  border-color: #eee;
  margin-left:0px;
}
.border-fd:hover{
  box-shadow: 5px 5px 5px #f3c458;
}
.shift-up{
  margin-top: 10px;
}
.shift-up-up{
  margin-top: -10px;
}
.border-it:hover{
  box-shadow: 5px 5px 5px #f3c458;
}
.footer{
  width: 100%;
  margin-top: 30px;
}

</style>
