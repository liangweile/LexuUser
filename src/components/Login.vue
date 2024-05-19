<template>
    <div class="login">
        <el-card class="box-card">
            <template #header>
                <div class="clearfix">
                    <span>乐旭用户管理系统</span>
                </div>
            </template>
            <el-form 
                label-width="80px" :model="form" ref="form" :rules="rules">
                <el-form-item label="用户名" prop="username">
                    <el-input v-model="form.username" id="username"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input type='password' v-model="form.password" id="password"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="login('form')">登录</el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>
<script>
import { usernameRule, passwordRule } from '../utils/validate.js'
// import { setToken } from '../utils/setToken.js'
// import { login } from '../api/api.js'
export default {
    data(){
        return{
            form: {
                username: '',
                password: ''
            },
            rules: {
                username:[{validator:usernameRule,trigger:'blur'}],
                password:[{validator:passwordRule,trigger:'blur'}]
            }
        };
    },
    methods:{
        login(form){
            this.$refs[form].validate((valid)=>{
                if(valid){
                    console.log(this.form);
                    localStorage.setItem('username', this.form.username)
                    localStorage.setItem('password', this.form.password)
                    this.$message({message: '登录成功', type: 'success'})
                    this.$router.push('/home')
                /*     把这个登录方法封装成api进行调用
                this.service.post('/login', this.form)
                    .then((res) => {
                        if(res.data.status === 200){
                            setToken('username', res.data.username);
                            setToken('token', res.data.token);
                            this.$message({message: res.data.message, type: 'success'})
                            this.$router.push('/home')
                        }
                        console.log(res);
                        console.log('好');
                    })
                    .catch((err) => {
                        console.log(err);
                        console.log('坏');
                    }) */
                    // login(this.form).then((res) => {
                    //     if(res.data.status === 200){
                    //         setToken('username', res.data.username);
                    //         setToken('token', res.data.token);
                    //         this.$message({message: res.data.message, type: 'success'})
                    //         this.$router.push('/home')
                    //     }
                    // }).catch(err=>{
                    //     console.log(err)
                    // })
                }else{
                    this.$message({message: '账号或密码错误', type: 'error'})
                    console.error(this.form)
                }
            })
        }
    }

}

</script>
<style lang="less">
.login{
    width: 100%;
    height: 100%;
    position: absolute;
    background: url('../assets/picture/bg.jpg') center no-repeat;
    background-size: cover;
    .el-card {
        background: #65768557;
    }
    .box-card{
        width: 450px;
        margin: 200px auto;
        color: #fff;
        .el-form .el-form-item__label {
            color: #fff;
        }
        .el-card__header{
            font-size:34px;
        }
        .el-button{
            width:100%;
        }
    }
}
</style>