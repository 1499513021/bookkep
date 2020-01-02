<template>
  <div>
    <el-dialog title="添加图文" :visible.sync="dialogVisible">
      <el-form
        :model="configForm"
        ref="configForm"
        label-width="100px"
        :rules="rules"
        v-loading="loading2"
      >
        <h3 class="title modal-headline">添加图文</h3>
        <el-form-item label=" 图文标题" prop="imgTitle">
          <el-input
            v-model="configForm.imgTitle"
            type="text"
            auto-complete="off"
            placeholder="请输入标题"
          ></el-input>
        </el-form-item>
        <el-form-item label="添加文字" prop="imgText">
          <el-input
            v-model="configForm.imgText"
            type="textarea"
            auto-complete="off"
            placeholder="请输入文字内容"
          ></el-input>
        </el-form-item>
        <el-form-item label="添加图片" ref="uploadElement" prop="img">
          <el-input v-model="configForm.img" v-if="false"></el-input>
          <el-upload
            class="upload-demo"
            accept="image/jpeg, image/jpg, image/png"
            action="这里填后台地址"
            :auto-upload="false"
            ref="upload"
            :before-upload="beforeUpload"
            :on-change="handleChange"
            multiple
            :data="configForm"
          >
            <el-button type="success" size="small">选择文件</el-button>
          </el-upload>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submitImg('configForm')">确 定</el-button>
        <el-button @click="dialogVisible = false">取 消</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  methods: {
    submitImg(forName) {
      let self = this;
      this.$confirm("此操作将无法撤回, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          self.$refs[forName].validate(valid => {
            if (valid) {
              self.$refs.upload.submit();
              self.dialogVisible = false;
              self.loading2 = false;
            } else {
              return false;
            }
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消更新"
          });
        });
    }
  }
};
</script>