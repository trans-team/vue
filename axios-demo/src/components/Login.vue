<template>
  <div class="box">
    <el-row class="row"
            type="flex"
            justify="center">
      <el-col :span="6">用户名:</el-col>
      <el-col :span="6">
        <el-input style="width:200px"
                  v-model="username"
                  placeholder="请输入用户名"></el-input>
      </el-col>
    </el-row>
    <el-row class="row"
            type="flex"
            justify="center">
      <el-col :span="6"> 密码:</el-col>
      <el-col :span="6">
        <el-input style="width:200px"
                  v-model="password"
                  placeholder="请输入密码"></el-input>
      </el-col>
    </el-row>
    <el-row class="row"
            type="flex"
            justify="center">
      <el-col :span="4"> 请求方式:</el-col>
      <el-col :span="4">
        <el-radio v-model="method"
                  label="GET">GET请求</el-radio>
      </el-col>
      <el-col :span="4">
        <el-radio v-model="method"
                  label="POST">POST请求</el-radio>
      </el-col>
    </el-row>

    <el-button type="primary"
               @click="login()">登陆</el-button>
  </div>
</template>
<script>
export default {
  name: 'Login',
  data () {
    return {
      username: 'sa',
      password: '123',
      method: 'GET'//请求方式
    }
  },
  methods: {
    login () {
      switch (this.method) {
        case 'GET':
          this.loginByGet()
          //  this.loginByGet2()
          break
        case 'POST':
          this.loginByPost()
          //  this.loginByPost2()
          break
        default:
          console.log('请求方式出现错误')
          break
      }
    },
    // get写法1
    loginByGet () {
      this.$axios({
        url: '/login',
        method: 'get',
        params: {
          username: this.username,
          password: this.password
        }
      }).then(resp => {
        console.log('请求URL')
        console.log(resp.resultData.url)
        console.log('请求的参数')
        console.log(resp.resultData.reqParams)
        console.log('返回的数据')
        console.log(resp)
      }).catch(err => {
        console.log(err)
      })
    },
    // get写法2
    loginByGet2 () {
      this.$axios.get('/login', {
        params: {
          username: this.username,
          password: this.password
        }
      }).then(resp => {
        console.log('请求URL')
        console.log(resp.resultData.url)
        console.log('请求参数')
        console.log(resp.resultData.reqParams)
        console.log('返回数据')
        console.log(resp)
      }).catch(err => {
        console.log(err)
      })
    },
    // post写法1
    loginByPost () {

      this.$axios({
        url: '/login',
        method: 'post',
        data: {
          username: this.username,
          password: this.password
        }
      }).then(resp => {
        console.log('请求参数')
        console.log(resp.resultData.reqParams)
        console.log('返回数据')
        console.log(resp)
      }).catch(err => {
        console.log(err)
      })
    },
    // post写法2
    loginByPost2 () {
      this.$axios.post('/login', {
        username: this.username,
        password: this.password
      }).then(resp => {
        console.log('请求参数')
        console.log(resp.resultData.reqParams)
        console.log('返回数据')
        console.log(resp)
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>
<style scoped>
.box {
  width: 600px;
  height: 400px;
  margin: 0px auto;
}
.row {
  line-height: 50px;
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>