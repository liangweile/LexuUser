<template>
    <div class="infoList">
        <el-form :inline="true" class="demo-form-inline" size="small">
            <el-form-item>
                <el-button type="primary" @click="addStudent">新增</el-button>
            </el-form-item>
        </el-form>
        <el-table
            :data="tableData"
            border
            style="width: 100%"
            ref="table">
            <el-table-column prop="name" label="姓名" align="center"></el-table-column>
            <el-table-column prop="age" label="年龄" align="center"></el-table-column>
            <el-table-column prop="sex" label="性别" align="center"></el-table-column>
            <el-table-column prop="father" label="父亲姓名" align="center"></el-table-column>
            <el-table-column prop="mother" label="母亲姓名" align="center"></el-table-column>
            <el-table-column prop="time" label="入校时间" align="center"></el-table-column>
            <el-table-column prop="address" label="家庭住址" align="center"></el-table-column>
            <el-table-column prop="phone" label="联系方式" align="center"></el-table-column>
            <el-table-column label="操作" align="center">
                <template #default="scope">
                    <el-button 
                    type="danger" 
                    size="mini" 
                    @click="edit(scope.row)">edit</el-button>
                    <el-button 
                    type="danger" 
                    size="mini" 
                    @click="del(scope.row)">del</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-dialog :title="state ? '添加学生信息' : '修改学生信息'" v-model="dialogFormVisible" width="600px">
            <el-form :model="form" :rules="rules" ref="form"> 
                <el-form-item label="姓名" :label-width="formLabelWidth" prop="name">
                    <el-input v-model="form.name" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="性别" :label-width="formLabelWidth" prop="sex">
                    <el-radio v-model="form.sex" label="1">男</el-radio>
                    <el-radio v-model="form.sex" label="2">女</el-radio>
                </el-form-item>
                <el-form-item label="年龄" :label-width="formLabelWidth" prop="age">
                    <el-input v-model="form.age" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="父亲姓名" :label-width="formLabelWidth" prop="father">
                    <el-input v-model="form.father" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="母亲姓名" :label-width="formLabelWidth" prop="mother">
                    <el-input v-model="form.mother" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="家庭地址" :label-width="formLabelWidth" prop="address">
                    <el-input v-model="form.address" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="入校时间" :label-width="formLabelWidth" prop="time">
                    <el-date-picker
                        v-model="form.time"
                        format="yyyy 年 MM 月 dd 日"
                        value-format="yyyy-MM-dd"
                        type="date"
                        placeholder="选择日期">
                    </el-date-picker>
                </el-form-item>
                <el-form-item label="联系方式" :label-width="formLabelWidth" prop="phone">
                    <el-input v-model="form.phone" autocomplete="off"></el-input>
                </el-form-item>
            </el-form>
            <template #footer>
                <div class="dialog-footer">
                    <el-button @click="closeInfo">取 消</el-button>
                    <el-button type="primary" @click="sure('form')">确 定</el-button>
                </div>
            </template>
        </el-dialog>
    </div>
</template>
<script>
// import { info , getInfo , infoDel } from '@/api/api'
import { info , getInfo } from '@/api/api'
  export default {
    data() {
      return {
        tableData: [{
            id:1,
            name: '来晚了',
            sex: '1',
            age: '20',
            father: '烂尾楼',
            mother: '礼物了',
            address: '广东省广州市',
            time: '2024-05-15 ',
            phone: '14745585855'
        }],
        dialogFormVisible: false,
        form: {
            name: '',
            sex: '1',
            age: '',
            father: '',
            mother: '',
            address: '',
            time: '',
            phone: ''
        },
        total: 0,
        state: true,
        formLabelWidth:"80px",
        rules:{
            name:[{required:true,message:'请输入姓名'}],
            sex: [{required:true}],
            age:[{required:true,message:'请输入年龄'}],
            address:[{required:true,message:'请输入地址'}],
            time:[{required:true,message:'请输入入学时间'}],
            phone:[{required:true,message:'请输入联系方式'}]
        }
      }
    },
    created(){
        this.getData()
    },
    methods: {
        edit(row){
            console.log(row)
            this.state = false
            this.form = {...row}
            this.dialogFormVisible = true
        },
        closeInfo(form) {
            this.$ref[form].resetFields()
            this.dialogFormVisible = false
        },
        del(row){
            console.log(row)
            this.$alert('你确定要删除吗？','提示',{
                confirmButtonText : '确定',
                // callback: ( )=> {
                //     infoDel(row.id).then(res => {
                //         if(res.data.status === 200) {
                //             this.$message({message:res.data.message,type:'success'})
                //         }
                //     })
                // }
                callback: ( )=> {
                    this.tableData.splice(row,1)
                    this.$message({
                        message:'删除成功',
                        type:'success'})
                        }
            })
            
            
        },
        addStudent(){
            this.form = {
            name: '',
            sex: '1',
            age: '',
            father: '',
            mother: '',
            address: '',
            time: '',
            phone: ''
        }
            this.state = true
            this.dialogFormVisible = true
        },
        getData(){
            getInfo().then(res => {
                if(res.data.status === 200) {
                    this.tableData = res.data.data
                    this.total = res.data.total
                }
            })
        },
        sure(form){
            this.$refs[form].validate(valid => {
                if(valid) {
                    if(this.state) {
                        info('post',this.form).then(res => {
                        if(res.data.status === 200) {
                            this.getData()
                            this.dialogFormVisible = false;
                            this.$message({message:res.data.message,type:'success'})
                        }
                    })
                    } else {
                        info('put',this.form).then(res => {
                        if(res.data.status === 200) {
                            this.getData()
                            this.dialogFormVisible = false;
                            this.$message({message:res.data.message,type:'success'})
                        }
                    })
                    }
                }
            })
        }
    }
    }
</script>
<style lang="less">
.infoList {
    .demo-form-inline,.el-form-item {
        text-align:left;
    }
    .el-dialog {
        text-align:left;
    }
}


</style>