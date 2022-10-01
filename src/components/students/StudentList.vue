<template>
  <div class="stuendts">
    <!-- 查询、重置 -->
    <el-form
      :inline="true"
      :model="formInline"
      class="demo-form-inline"
      id="form-search"
      size="small"
    >
      <el-form-item label="姓名">
        <el-input v-model="formInline.name" placeholder="请输入姓名"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="search">查询</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="reset">重置</el-button>
      </el-form-item>
    </el-form>
    <!-- 分页逻辑：slice（（当前页-1）*每页条数，当前页*每页条数） -->
    <el-table :data="computedStudentList" border style="width: 100%">
      <!-- <el-table-column prop="id" label="id" align="center"> </el-table-column> -->
      <el-table-column prop="name" label="姓名" align="center">
      </el-table-column>
      <el-table-column prop="age" label="年龄" align="center">
      </el-table-column>
      <el-table-column prop="sex_text" label="性别" align="center">
      </el-table-column>
      <el-table-column prop="number" label="学号" align="center">
      </el-table-column>
      <el-table-column prop="class" label="班级" align="center">
      </el-table-column>
      <el-table-column prop="state_text" label="状态" align="center">
      </el-table-column>
      <el-table-column prop="address" label="地址" align="center">
      </el-table-column>
      <el-table-column prop="control" label="操作" align="center">
        <div slot-scope="scope">
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
    <!-- 分页导航 -->
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[10, 15, 20, 30]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
    >
    </el-pagination>
  </div>
</template>

<script>
import { students, delStuent } from '../../api/api'

export default {
  data() {
    return {
      // 学生列表
      students: [],
      currentPage4: 1, // 当前页数
      pageSize: 10, // 每页显示条数
      total: 0, // 总条数

      formInline: {
        name: '',
      },
    }
  },
  computed: {
    // 分页功能
    computedStudentList() {
      return this.students.slice(
        (this.currentPage4 - 1) * this.pageSize,
        this.currentPage4 * this.pageSize
      )
    },
  },
  created() {
    this.getStudentsList()
  },
  methods: {
    // 获取学生列表
    getStudentsList(params) {
      students(params).then((res) => {
        // console.log(res)
        if (res.data.status === 200) {
          this.total = res.data.total
          this.students = res.data.data
          this.students.forEach((item) => {
            // 尽量不要修改元素据
            item.sex === 1 ? (item.sex_text = '男') : (item.sex_text = '女')
            item.state === '1'
              ? (item.state_text = '已入学')
              : item.state === '2'
              ? (item.state_text = '未入学')
              : (item.state_text = '休学中')
          })
        }
      })
    },
    // 切换每页显示数据条数
    handleSizeChange(val) {
      this.pageSize = val
      this.currentPage4 = 1
    },
    // 切换页数
    handleCurrentChange(val) {
      this.currentPage4 = val
    },
    // 删除
    del(row) {
      // console.log(row)
      delStuent(row.id).then((res) => {
        if (res.status === 200) {
          this.$message({ message: '删除成功', type: 'success' })
          this.getStudentsList()
        }
      })
    },
    // 查询
    search() {
      this.getStudentsList(this.formInline)
    },
    // 重置
    reset() {
      this.formInline = {}
      this.getStudentsList(this.formInline)
    },
  },
}
</script>

<style lang="scss">
form#form-search {
  text-align: right;
}
</style>
