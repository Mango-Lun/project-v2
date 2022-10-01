<template>
  <div class="work">
    <el-table :data="workList" border style="width: 100%">
      <!-- <el-table-column prop="id" label="id" align="center"> </el-table-column> -->
      <el-table-column prop="id" label="用户ID" align="center">
      </el-table-column>
      <el-table-column prop="userId" label="所属班级" align="center">
      </el-table-column>
      <el-table-column prop="title" label="作业名称" align="center">
      </el-table-column>
      <el-table-column prop="completed_text" label="完成情况" align="center">
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="page"
      :page-sizes="[10, 15, 20, 30]"
      :page-size="size"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
    >
    </el-pagination>
  </div>
</template>

<script>
import { works } from '../../api/api'
export default {
  data() {
    return {
      workList: [],
      page: 1,
      size: 10,
      total: 0,
    }
  },
  created() {
    this.getList()
  },
  methods: {
    // 获取作业列表
    getList(page, size) {
      works(this.page, this.size).then((res) => {
        // console.log(res)
        if (res.data.status === 200) {
          this.workList = res.data.data
          this.workList.forEach((item) => {
            item.completed === true
              ? (item.completed_text = '√')
              : (item.completed_text = '未完成')
          })
          this.total = res.data.total
        }
      })
    },
    // 切换每页显示数据条数
    handleSizeChange(val) {
      this.size = val
      this.page = 1
      this.getList(this.page, this.size)
    },
    // 切换页数
    handleCurrentChange(val) {
      this.page = val
      this.getList(this.page, this.size)
    },
  },
}
</script>

<style></style>
