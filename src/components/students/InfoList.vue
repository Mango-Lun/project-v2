<template>
  <div class="info">
    <el-form :inline="true" class="demo-form-inline" size="small">
      <el-form-item>
        <el-button type="primary" @click="addStudent">新增</el-button>
      </el-form-item>
    </el-form>
    <el-table border style="width: 100%" :data="infoList">
      <el-table-column prop="name" label="姓名" align="center">
      </el-table-column>
      <el-table-column prop="age" label="年龄" align="center">
      </el-table-column>
      <el-table-column prop="father" label="父亲" align="center">
      </el-table-column>
      <el-table-column prop="mather" label="母亲" align="center">
      </el-table-column>
      <el-table-column prop="address" label="家庭住址" align="center">
      </el-table-column>
      <el-table-column prop="time" label="入校时间" align="center">
      </el-table-column>
      <el-table-column prop="phone" label="联系方式" align="center">
      </el-table-column>
      <el-table-column prop="control" label="操作" align="center">
        <div slot-scope="scope">
          <el-button
            type="danger"
            icon="el-icon-edit"
            size="mini"
            round
            @click="edit(scope.row)"
          ></el-button>
          <el-button
            type="danger"
            icon="el-icon-delete"
            size="mini"
            round
            @click="del(scope.row)"
          ></el-button>
        </div>
      </el-table-column>
    </el-table>
    <!-- 对话框 -->
    <el-dialog
      :title="state === true ? '新增学生信息' : '修改学生信息'"
      :visible.sync="dialogFormVisible"
      width="600px"
    >
      <el-form :model="form" :rules="rules" ref="form">
        <el-form-item label="姓名" :label-width="formLabelWidth" prop="name">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="年龄" :label-width="formLabelWidth" prop="age">
          <el-input v-model="form.age" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="性别" :label-width="formLabelWidth" prop="sex">
          <el-radio v-model="form.sex" label="1">男</el-radio>
          <el-radio v-model="form.sex" label="2">女</el-radio>
        </el-form-item>
        <el-form-item
          label="父亲姓名"
          :label-width="formLabelWidth"
          prop="father"
        >
          <el-input v-model="form.father" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item
          label="母亲姓名"
          :label-width="formLabelWidth"
          prop="mather"
        >
          <el-input v-model="form.mather" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item
          label="入校时间"
          :label-width="formLabelWidth"
          prop="time"
        >
          <el-date-picker
            v-model="form.time"
            format="yyyy 年 MM 月 dd 日"
            value-format="yyyy-MM-dd"
            type="date"
            placeholder="选择日期"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item
          label="家庭住址"
          :label-width="formLabelWidth"
          prop="address"
        >
          <el-input v-model="form.address" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item
          label="联系方式"
          :label-width="formLabelWidth"
          prop="phone"
        >
          <el-input v-model="form.phone" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="closeInfo('form')">取 消</el-button>
        <el-button type="primary" @click="sure('form')">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { getInfo, info, deleteInfo, addInfo, updateInfo } from '../../api/api'
export default {
  data() {
    return {
      infoList: [],
      form: {
        name: '',
        age: '',
        sex: '1',
        father: '',
        mather: '',
        time: '',
        address: '',
        phone: '',
      },
      dialogFormVisible: false, // 对话框显示状态
      state: true,
      formLabelWidth: '80px',
      rules: {
        name: [{ required: true, message: '请输入姓名' }],
        age: [{ required: true, message: '请输入年龄' }],
        sex: [{ required: true }],
        time: [{ required: true, message: '请输入入学时间' }],
        address: [{ required: true, message: '请输入家庭地址' }],
        phone: [{ required: true, message: '请输入联系电话' }],
      },
      total: 0,
    }
  },
  methods: {
    // 删除
    del(row) {
      this.$alert('你确定要删除吗', '提示', {
        confirmButtonText: '确定',
        callback: () => {
          deleteInfo(row.id).then((res) => {
            if (res.data.status === 200) {
              this.getList()
              this.$message({ message: res.data.message, type: 'success' })
            }
          })
        },
      })
    },
    // 修改按钮
    edit(row) {
      console.log(row)
      this.state = false
      this.dialogFormVisible = true
      this.form = { ...row }
    },
    // 新增按钮
    addStudent() {
      this.state = true
      this.form = {
        name: '',
        age: '',
        sex: '1',
        father: '',
        mather: '',
        time: '',
        address: '',
        phone: '',
      }
      this.dialogFormVisible = true
    },
    closeInfo(form) {
      this.dialogFormVisible = false
      this.$refs[form].resetFields()
    },
    // 获取信息列表
    getList() {
      getInfo().then((res) => {
        if (res.data.status === 200) {
          this.infoList = res.data.data
          this.total = res.data.total
          // console.log(res)
        }
      })
    },
    // 对话框
    sure(form) {
      this.$refs[form].validate((valid) => {
        if (valid) {
          if (this.state) {
            // 新增
            // info('post', this.form).then((res) => {
            //   console.log(res)
            //   if (res.data.status === 200) {
            //     this.getList()
            //     // this.dialogFormVisible = false
            //     this.$message({ message: res.data.message, type: 'success' })
            //   }
            // 新增
            addInfo(this.form).then((res) => {
              console.log(res)
              if (res.data.status === 200) {
                this.getList()
                this.dialogFormVisible = false
                this.$message({ message: res.data.message, type: 'success' })
              }
            })
          } else {
            // 修改
            updateInfo(this.form).then((res) => {
              if (res.data.status === 200) {
                this.getList()
                this.dialogFormVisible = false
                this.$message({ message: res.data.message, type: 'success' })
              }
            })
            // // 修改
            // info('put', this.form).then((res) => {
            //   if (res.data.status === 200) {
            //     this.getList()
            //     // this.dialogFormVisible = false
            //     this.$message({ message: res.data.message, type: 'success' })
            //   }
            // })
          }
        }
      })
    },
  },
  created() {
    this.getList()
  },
}
</script>

<style>
form.el-form.demo-form-inline.el-form--inline {
  text-align: right;
}
.el-form-item__content {
  text-align: left;
}
</style>
