<template>
    <div class="studentList">
        <!-- 查询、重置 -->
        <el-form :inline="true" :model="formInline" class="demo-form-inline" size="small">
            <el-form-item label="姓名">
                <el-input v-model="formInline.name" placeholder="请输入姓名查询"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="find">查询</el-button>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="reset">重置</el-button>
            </el-form-item>
        </el-form>
        <el-table
            :data="comData"
            border
            style="width: 100%">
            <el-table-column prop="name" label="姓名" align="center"></el-table-column>
            <el-table-column prop="sex" label="性别" align="center"></el-table-column>
            <el-table-column prop="age" label="年龄" align="center"></el-table-column>
            <el-table-column prop="number" label="学号" align="center"></el-table-column>
            <el-table-column prop="class" label="班级" align="center"></el-table-column>
            <el-table-column prop="state" label="状态" align="center"></el-table-column>
            <el-table-column prop="address" label="地址" align="center"></el-table-column>
            <el-table-column prop="phone" label="联系方式" align="center"></el-table-column>
            <el-table-column label="操作" align="center">
                <template #default="scope">
                    <el-button
                    type="danger" 
                    size="mini" 
                    @click="del(scope.row)">delete</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="[5, 10, 20, 30]"
            :page-size="pageSize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total">
        </el-pagination>
    </div>
</template>
<script>
// import { students , studentDel} from '@/api/api.js'
import { students } from '@/api/api.js'
  export default {
    data() {
      return {
        tableData: [{
            id: 1,
            name: '王小虎',
            sex: 1,
            age: 20,
            number:1,
            class:1,
            state: '1',
            address: '上海市普陀区金沙江路 1518 弄',
            phone: '123456789'
        },{
            id:2,
            name: '王小虎',
            sex: 1,
            age: 20,
            number:1,
            class:1,
            state: '1',
            address: '上海市普陀区金沙江路 1518 弄',
            phone: '123456789'
        },{
            id:3,
            name: '王小虎',
            sex: 1,
            age: 20,
            number:1,
            class:1,
            state: '1',
            address: '上海市普陀区金沙江路 1518 弄',
            phone: '123456789'
        },{
            id:4,
            name: '王小虎',
            sex: 1,
            age: 20,
            number:1,
            class:1,
            state: '1',
            address: '上海市普陀区金沙江路 1518 弄',
            phone: '123456789'
        },{
            id:5,
            name: '张三',
            sex: 1,
            age: 20,
            number:1,
            class:1,
            state: '1',
            address: '上海市普陀区金沙江路 1518 弄',
            phone: '123456789'
        },{
            id:6,
            name: '王小虎',
            sex: 1,
            age: 20,
            number:1,
            class:1,
            state: '1',
            address: '上海市普陀区金沙江路 1518 弄',
            phone: '123456789'
        },{
            id: 7,
            name: '李四',
            sex: 1,
            age: 20,
            number:1,
            class:1,
            state: '1',
            address: '上海市普陀区金沙江路 1518 弄',
            phone: '123456789'
        },{
            id: 8,
            name: '赵五',
            sex: 1,
            age: 20,
            number:1,
            class:1,
            state: '1',
            address: '上海市普陀区金沙江路 1518 弄',
            phone: '123456789'
        },{
            id: 9,
            name: '王小虎',
            sex: 1,
            age: 20,
            number:1,
            class:1,
            state: '1',
            address: '上海市普陀区金沙江路 1518 弄',
            phone: '123456789'
        },{
            id: 10,
            name: '王小虎',
            sex: 1,
            age: 20,
            number:1,
            class:1,
            state: '1',
            address: '上海市普陀区金沙江路 1518 弄',
            phone: '123456789'
        },{
            id: 11,
            name: '王小虎',
            sex: 1,
            age: 20,
            number:1,
            class:1,
            state: '1',
            address: '上海市普陀区金沙江路 1518 弄',
            phone: '123456789'
        },{
            name: '王小虎',
            sex: 1,
            age: 20,
            number:1,
            class:1,
            state: '1',
            address: '上海市普陀区金沙江路 1518 弄',
            phone: '123456789'
        },{
            name: '王小虎',
            sex: 1,
            age: 20,
            number:1,
            class:1,
            state: '1',
            address: '上海市普陀区金沙江路 1518 弄',
            phone: '123456789'
        },{
            name: '王小虎',
            sex: 1,
            age: 20,
            number:1,
            class:1,
            state: '1',
            address: '上海市普陀区金沙江路 1518 弄',
            phone: '123456789'
        },{
            name: '王小虎',
            sex: 1,
            age: 20,
            number:1,
            class:1,
            state: '1',
            address: '上海市普陀区金沙江路 1518 弄',
            phone: '123456789'
        },{
            name: '王小虎',
            sex: 1,
            age: 20,
            number:1,
            class:1,
            state: '1',
            address: '上海市普陀区金沙江路 1518 弄',
            phone: '123456789'
        },{
            name: '王小虎',
            sex: 1,
            age: 20,
            number:1,
            class:1,
            state: '1',
            address: '上海市普陀区金沙江路 1518 弄',
            phone: '123456789'
        },{
            name: '王小虎',
            sex: 1,
            age: 20,
            number:1,
            class:1,
            state: '1',
            address: '上海市普陀区金沙江路 1518 弄',
            phone: '123456789'
        },{
            name: '王小虎',
            sex: 1,
            age: 20,
            number:1,
            class:1,
            state: '1',
            address: '上海市普陀区金沙江路 1518 弄',
            phone: '123456789'
        },{
            name: '王小虎',
            sex: 1,
            age: 20,
            number:1,
            class:1,
            state: '1',
            address: '上海市普陀区金沙江路 1518 弄',
            phone: '123456789'
        },{
            name: '王小虎',
            sex: 1,
            age: 20,
            number:1,
            class:1,
            state: '1',
            address: '上海市普陀区金沙江路 1518 弄',
            phone: '123456789'
        },{
            name: '王小虎',
            sex: 1,
            age: 20,
            number:1,
            class:1,
            state: '1',
            address: '上海市普陀区金沙江路 1518 弄',
            phone: '123456789'
        },{
            name: '王小虎',
            sex: 1,
            age: 20,
            number:1,
            class:1,
            state: '1',
            address: '上海市普陀区金沙江路 1518 弄',
            phone: '123456789'
        },{
            name: '王小虎',
            sex: 1,
            age: 20,
            number:1,
            class:1,
            state: '1',
            address: '上海市普陀区金沙江路 1518 弄',
            phone: '123456789'
        },{
            name: '王小虎',
            sex: 1,
            age: 20,
            number:1,
            class:1,
            state: '1',
            address: '上海市普陀区金沙江路 1518 弄',
            phone: '123456789'
        },{
            name: '王小虎',
            sex: 1,
            age: 20,
            number:1,
            class:1,
            state: '1',
            address: '上海市普陀区金沙江路 1518 弄',
            phone: '123456789'
        },{
            name: '王小虎',
            sex: 1,
            age: 20,
            number:1,
            class:1,
            state: '1',
            address: '上海市普陀区金沙江路 1518 弄',
            phone: '123456789'
        },{
            name: '王小虎',
            sex: 1,
            age: 20,
            number:1,
            class:1,
            state: '1',
            address: '上海市普陀区金沙江路 1518 弄',
            phone: '123456789'
        },{
            name: '王小虎',
            sex: 1,
            age: 20,
            number:1,
            class:1,
            state: '1',
            address: '上海市普陀区金沙江路 1518 弄',
            phone: '123456789'
        },{
            name: '王小虎',
            sex: 1,
            age: 20,
            number:1,
            class:1,
            state: '1',
            address: '上海市普陀区金沙江路 1518 弄',
            phone: '123456789'
        },{
            name: '王小虎',
            sex: 1,
            age: 20,
            number:1,
            class:1,
            state: '1',
            address: '上海市普陀区金沙江路 1518 弄',
            phone: '123456789'
        },{
            name: '王小虎',
            sex: 1,
            age: 20,
            number:1,
            class:1,
            state: '1',
            address: '上海市普陀区金沙江路 1518 弄',
            phone: '123456789'
        },{
            name: '王小虎',
            sex: 1,
            age: 20,
            number:1,
            class:1,
            state: '1',
            address: '上海市普陀区金沙江路 1518 弄',
            phone: '123456789'
        },{
            name: '王小虎',
            sex: 1,
            age: 20,
            number:1,
            class:1,
            state: '1',
            address: '上海市普陀区金沙江路 1518 弄',
            phone: '123456789'
        },{
            name: '王小虎',
            sex: 1,
            age: 20,
            number:1,
            class:1,
            state: '1',
            address: '上海市普陀区金沙江路 1518 弄',
            phone: '123456789'
        },{
            name: '王小虎',
            sex: 1,
            age: 20,
            number:1,
            class:1,
            state: '1',
            address: '上海市普陀区金沙江路 1518 弄',
            phone: '123456789'
        },{
            name: '王小虎',
            sex: 1,
            age: 20,
            number:1,
            class:1,
            state: '1',
            address: '上海市普陀区金沙江路 1518 弄',
            phone: '123456789'
        },{
            name: '王小虎',
            sex: 1,
            age: 20,
            number:1,
            class:1,
            state: '1',
            address: '上海市普陀区金沙江路 1518 弄',
            phone: '123456789'
        },{
            name: '王小虎',
            sex: 1,
            age: 20,
            number:1,
            class:1,
            state: '1',
            address: '上海市普陀区金沙江路 1518 弄',
            phone: '123456789'
        },{
            name: '王小虎',
            sex: 1,
            age: 20,
            number:1,
            class:1,
            state: '1',
            address: '上海市普陀区金沙江路 1518 弄',
            phone: '123456789'
        },{
            name: '王小虎',
            sex: 1,
            age: 20,
            number:1,
            class:1,
            state: '1',
            address: '上海市普陀区金沙江路 1518 弄',
            phone: '123456789'
        },{
            name: '王小虎',
            sex: 1,
            age: 20,
            number:1,
            class:1,
            state: '1',
            address: '上海市普陀区金沙江路 1518 弄',
            phone: '123456789'
        },{
            name: '王小虎',
            sex: 1,
            age: 20,
            number:1,
            class:1,
            state: '1',
            address: '上海市普陀区金沙江路 1518 弄',
            phone: '123456789'
        },{
            name: '王小虎',
            sex: 1,
            age: 20,
            number:1,
            class:1,
            state: '1',
            address: '上海市普陀区金沙江路 1518 弄',
            phone: '123456789'
        },{
            name: '王小虎',
            sex: 1,
            age: 20,
            number:1,
            class:1,
            state: '1',
            address: '上海市普陀区金沙江路 1518 弄',
            phone: '123456789'
        },{
            name: '王小虎',
            sex: 1,
            age: 20,
            number:1,
            class:1,
            state: '1',
            address: '上海市普陀区金沙江路 1518 弄',
            phone: '123456789'
        },{
            name: '王小虎',
            sex: 1,
            age: 20,
            number:1,
            class:1,
            state: '1',
            address: '上海市普陀区金沙江路 1518 弄',
            phone: '123456789'
        },{
            name: '王小虎',
            sex: 1,
            age: 20,
            number:1,
            class:1,
            state: '1',
            address: '上海市普陀区金沙江路 1518 弄',
            phone: '123456789'
        },{
            name: '王小虎',
            sex: 1,
            age: 20,
            number:1,
            class:1,
            state: '1',
            address: '上海市普陀区金沙江路 1518 弄',
            phone: '123456789'
        },{
            name: '王小虎',
            sex: 1,
            age: 20,
            number:1,
            class:1,
            state: '1',
            address: '上海市普陀区金沙江路 1518 弄',
            phone: '123456789'
        },{
            name: '王小虎',
            sex: 1,
            age: 20,
            number:1,
            class:1,
            state: '1',
            address: '上海市普陀区金沙江路 1518 弄',
            phone: '123456789'
        },{
            name: '王小虎',
            sex: 1,
            age: 20,
            number:1,
            class:1,
            state: '1',
            address: '上海市普陀区金沙江路 1518 弄',
            phone: '123456789'
        },{
            name: '王小虎',
            sex: 1,
            age: 20,
            number:1,
            class:1,
            state: '1',
            address: '上海市普陀区金沙江路 1518 弄',
            phone: '123456789'
        },{
            name: '王小虎',
            sex: 1,
            age: 20,
            number:1,
            class:1,
            state: '1',
            address: '上海市普陀区金沙江路 1518 弄',
            phone: '123456789'
        },{
            name: '王小虎',
            sex: 1,
            age: 20,
            number:1,
            class:1,
            state: '1',
            address: '上海市普陀区金沙江路 1518 弄',
            phone: '123456789'
        },{
            name: '王小虎',
            sex: 1,
            age: 20,
            number:1,
            class:1,
            state: '1',
            address: '上海市普陀区金沙江路 1518 弄',
            phone: '123456789'
        },{
            name: '王小虎',
            sex: 1,
            age: 20,
            number:1,
            class:1,
            state: '1',
            address: '上海市普陀区金沙江路 1518 弄',
            phone: '123456789'
        },{
            name: '王小虎',
            sex: 1,
            age: 20,
            number:1,
            class:1,
            state: '1',
            address: '上海市普陀区金沙江路 1518 弄',
            phone: '123456789'
        },{
            name: '王小虎',
            sex: 1,
            age: 20,
            number:1,
            class:1,
            state: '1',
            address: '上海市普陀区金沙江路 1518 弄',
            phone: '123456789'
        },{
            name: '王小虎',
            sex: 1,
            age: 20,
            number:1,
            class:1,
            state: '1',
            address: '上海市普陀区金沙江路 1518 弄',
            phone: '123456789'
        },{
            name: '王小虎',
            sex: 1,
            age: 20,
            number:1,
            class:1,
            state: '1',
            address: '上海市普陀区金沙江路 1518 弄',
            phone: '123456789'
        },{
            name: '王小虎',
            sex: 1,
            age: 20,
            number:1,
            class:1,
            state: '1',
            address: '上海市普陀区金沙江路 1518 弄',
            phone: '123456789'
        },{
            name: '王小虎',
            sex: 1,
            age: 20,
            number:1,
            class:1,
            state: '1',
            address: '上海市普陀区金沙江路 1518 弄',
            phone: '123456789'
        },{
            name: '王小虎',
            sex: 1,
            age: 20,
            number:1,
            class:1,
            state: '1',
            address: '上海市普陀区金沙江路 1518 弄',
            phone: '123456789'
        },{
            name: '王小虎',
            sex: 1,
            age: 20,
            number:1,
            class:1,
            state: '1',
            address: '上海市普陀区金沙江路 1518 弄',
            phone: '123456789'
        },{
            name: '王小虎',
            sex: 1,
            age: 20,
            number:1,
            class:1,
            state: '1',
            address: '上海市普陀区金沙江路 1518 弄',
            phone: '123456789'
        },{
            name: '王小虎',
            sex: 1,
            age: 20,
            number:1,
            class:1,
            state: '1',
            address: '上海市普陀区金沙江路 1518 弄',
            phone: '123456789'
        },{
            name: '王小虎',
            sex: 1,
            age: 20,
            number:1,
            class:1,
            state: '1',
            address: '上海市普陀区金沙江路 1518 弄',
            phone: '123456789'
        },{
            name: '王小虎',
            sex: 1,
            age: 20,
            number:1,
            class:1,
            state: '1',
            address: '上海市普陀区金沙江路 1518 弄',
            phone: '123456789'
        },{
            name: '王小虎',
            sex: 1,
            age: 20,
            number:1,
            class:1,
            state: '1',
            address: '上海市普陀区金沙江路 1518 弄',
            phone: '123456789'
        },{
            name: '王小虎',
            sex: 1,
            age: 20,
            number:1,
            class:1,
            state: '1',
            address: '上海市普陀区金沙江路 1518 弄',
            phone: '123456789'
        },{
            name: '王小虎',
            sex: 1,
            age: 20,
            number:1,
            class:1,
            state: '1',
            address: '上海市普陀区金沙江路 1518 弄',
            phone: '123456789'
        },{
            name: '王小虎',
            sex: 1,
            age: 20,
            number:1,
            class:1,
            state: '1',
            address: '上海市普陀区金沙江路 1518 弄',
            phone: '123456789'
        },{
            name: '王小虎',
            sex: 1,
            age: 20,
            number:1,
            class:1,
            state: '1',
            address: '上海市普陀区金沙江路 1518 弄',
            phone: '123456789'
        },{
            name: '王小虎',
            sex: 1,
            age: 20,
            number:1,
            class:1,
            state: '1',
            address: '上海市普陀区金沙江路 1518 弄',
            phone: '123456789'
        },{
            name: '王小虎',
            sex: 1,
            age: 20,
            number:1,
            class:1,
            state: '1',
            address: '上海市普陀区金沙江路 1518 弄',
            phone: '123456789'
        },{
            name: '王小虎',
            sex: 1,
            age: 20,
            number:1,
            class:1,
            state: '1',
            address: '上海市普陀区金沙江路 1518 弄',
            phone: '123456789'
        },{
            name: '王小虎',
            sex: 1,
            age: 20,
            number:1,
            class:1,
            state: '1',
            address: '上海市普陀区金沙江路 1518 弄',
            phone: '123456789'
        },{
            name: '王小虎',
            sex: 1,
            age: 20,
            number:1,
            class:1,
            state: '1',
            address: '上海市普陀区金沙江路 1518 弄',
            phone: '123456789'
        },{
            name: '王小虎',
            sex: 1,
            age: 20,
            number:1,
            class:1,
            state: '1',
            address: '上海市普陀区金沙江路 1518 弄',
            phone: '123456789'
        },{
            name: '王小虎',
            sex: 1,
            age: 20,
            number:1,
            class:1,
            state: '1',
            address: '上海市普陀区金沙江路 1518 弄',
            phone: '123456789'
        },{
            name: '王小虎',
            sex: 1,
            age: 20,
            number:1,
            class:1,
            state: '1',
            address: '上海市普陀区金沙江路 1518 弄',
            phone: '123456789'
        },{
            name: '王小虎',
            sex: 1,
            age: 20,
            number:1,
            class:1,
            state: '1',
            address: '上海市普陀区金沙江路 1518 弄',
            phone: '123456789'
        },{
            name: '王小虎',
            sex: 1,
            age: 20,
            number:1,
            class:1,
            state: '1',
            address: '上海市普陀区金沙江路 1518 弄',
            phone: '123456789'
        },{
            name: '王小虎',
            sex: 1,
            age: 20,
            number:1,
            class:1,
            state: '1',
            address: '上海市普陀区金沙江路 1518 弄',
            phone: '123456789'
        },{
            name: '王小虎',
            sex: 1,
            age: 20,
            number:1,
            class:1,
            state: '1',
            address: '上海市普陀区金沙江路 1518 弄',
            phone: '123456789'
        },{
            name: '王小虎',
            sex: 1,
            age: 20,
            number:1,
            class:1,
            state: '1',
            address: '上海市普陀区金沙江路 1518 弄',
            phone: '123456789'
        },{
            name: '王小虎',
            sex: 1,
            age: 20,
            number:1,
            class:1,
            state: '1',
            address: '上海市普陀区金沙江路 1518 弄',
            phone: '123456789'
        },{
            name: '王小虎',
            sex: 1,
            age: 20,
            number:1,
            class:1,
            state: '1',
            address: '上海市普陀区金沙江路 1518 弄',
            phone: '123456789'
        },{
            name: '王小虎',
            sex: 1,
            age: 20,
            number:1,
            class:1,
            state: '1',
            address: '上海市普陀区金沙江路 1518 弄',
            phone: '123456789'
        },{
            name: '王小虎',
            sex: 1,
            age: 20,
            number:1,
            class:1,
            state: '1',
            address: '上海市普陀区金沙江路 1518 弄',
            phone: '123456789'
        },{
            name: '王小虎',
            sex: 1,
            age: 20,
            number:1,
            class:1,
            state: '1',
            address: '上海市普陀区金沙江路 1518 弄',
            phone: '123456789'
        },{
            name: '王小虎',
            sex: 1,
            age: 20,
            number:1,
            class:1,
            state: '1',
            address: '上海市普陀区金沙江路 1518 弄',
            phone: '123456789'
        },{
            name: '王小虎',
            sex: 1,
            age: 20,
            number:1,
            class:1,
            state: '1',
            address: '上海市普陀区金沙江路 1518 弄',
            phone: '123456789'
        },{
            name: '王小虎',
            sex: 1,
            age: 20,
            number:1,
            class:1,
            state: '1',
            address: '上海市普陀区金沙江路 1518 弄',
            phone: '123456789'
        },{
            name: '王小虎',
            sex: 1,
            age: 20,
            number:1,
            class:1,
            state: '1',
            address: '上海市普陀区金沙江路 1518 弄',
            phone: '123456789'
        },{
            name: '王小虎',
            sex: 1,
            age: 20,
            number:1,
            class:1,
            state: '1',
            address: '上海市普陀区金沙江路 1518 弄',
            phone: '123456789'
        },{
            name: '王小虎',
            sex: 1,
            age: 20,
            number:1,
            class:1,
            state: '1',
            address: '上海市普陀区金沙江路 1518 弄',
            phone: '123456789'
        },{
            name: '王小虎',
            sex: 1,
            age: 20,
            number:1,
            class:1,
            state: '1',
            address: '上海市普陀区金沙江路 1518 弄',
            phone: '123456789'
        },{
            name: '王小虎',
            sex: 1,
            age: 20,
            number:1,
            class:1,
            state: '1',
            address: '上海市普陀区金沙江路 1518 弄',
            phone: '123456789'
        },],
        currentPage: 1,
        pageSize: 10,
        total: 100,
        formInline: {
            name: ''
        }
      }
    },
    created(){
        this.getData()
    },
    computed: {
        comData(){
            return this.tableData.slice((this.currentPage - 1) * this.pageSize, this.currentPage * this.pageSize)
        }
    },
    methods: {
        find(){
            this.getData(this.formInline)
        },
        reset(){
            this.formInline = {}
            this.getData(this.formInline)
        },
        getData(params) {
            students(params)
            .then(res=>{
                console.log(res)
                if(res.data.status === 200) {
                    this.tableData = res.data.data;
                    this.total = res.data.total;
                    this.tableData.forEach(item => {
                        item.sex === 1 ? item.sex_text = '男' : item.sex_text = '女';
                        item.state === "1" ? (item.state_text = "已入学") : 
                        item.state === "2" ? (item.state_text = "未入学") :
                        (item.state_text = "休学中")
                    })
                }
            })
            .catch(err=>{
                console.log(err)
            })
        },
        handleSizeChange(val) {
            this.pageSize = val
            this.currentPage = 1
        console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            this.currentPage = val
            console.log(`当前页: ${val}`);
        },
        // del(row){
        //     console.log(row)
        //     studentDel(row.id).then(res => {
        //         if(res.data.status === 200){
        //             this.$message({message:'删除数据成功',type:'success'})
        //             this.getData()
        //         }
        //     })
        // }
        // del(row){
        //     console.log(row)
        //     this.$alert('你确定要删除吗？','提示',{
        //         confirmButtonText : '确定',
        //         callback: ( )=> {
        //             infoDel(row.id).then(res => {
        //                 if(res.data.status === 200) {
        //                     this.$message({message:res.data.message,type:'success'})
        //                 }
        //             })
        //         }
        //     })
        // },
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
                    this.total--
                    this.$message({
                        message:'删除成功',
                        type:'success'})
                        }
            })
        },
    }
  }
</script>
<style lang="less">
.studentList {
    .demo-form-inline,.el-form-item {
        text-align:left;
    }
    .el-pagination {
        text-align:left;
        margin-top: 20px;
    }
}


</style>