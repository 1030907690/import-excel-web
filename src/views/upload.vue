<template>
  <el-row>
    <el-upload
      class="upload-demo"
      ref="upload"
      drag
      action="/"
      :auto-upload="false"
      :on-change="handleChange"
      :http-request="uploadSectionFile"
      :before-upload="beforeAvatarUpload"
    >
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
      <div class="el-upload__tip" slot="tip" style="color: red">
        只能上传xlsx格式文件，2个文件同时上传,注意顺序，先拖或点击上传用户全流程服务跟踪表，再先拖或点击上传顾问服务客户数据表
      </div>
    </el-upload>

    <el-row style="margin-top: 100px">
      <el-button
        style="margin-left: 10px"
        size="small"
        type="success"
        @click="handleOk"
        >确认上传到服务器</el-button
      >
    </el-row>
  </el-row>
</template>
<script>
export default {
  data() {
    return {
      fileList: [],
      uploadUrl: this.$config.getBaseUrl() + "/importVue",
      formObj: "",
      isXlsx: false,
    };
  },
  created() {
  },
  methods: {
    // 发送请求前进入的方法
    uploadSectionFile(param) {
      this.formObj.append("files", param.file); //将文件放入file中
    },
    handleOk() {
      let vm = this;
      vm.formObj = new FormData();

      this.$axios({
        method: "post",
        url: this.uploadUrl,
        headers: {
          "Content-Type": "multipart/form-data",
        },
        data: vm.formObj,
      }).then((res) => {
        console.log("res " + JSON.stringify(res));
        if (res.data.success) {
          this.$message({
            type: "success",
            message: "合并文件成功!",
          });
          window.open(res.data.data);
        } else {
          this.$message({
            type: "error",
            message: res.data.description,
          });
        }
      });
      vm.$refs.upload.submit();
    },
    beforeAvatarUpload(file) {
      this.isXlsx = true;
      var fileExt = file.name.replace(/.+\./, "");
      console.log("文件扩展名 " + fileExt);
      if (["xlsx"].indexOf(fileExt.toLowerCase()) === -1) {
        this.$message({
          type: "warning",
          message: "请上传后缀名为xlsx的文件！",
        });
        this.isXlsx = false;
      }
      return this.isXlsx;
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleChange(file, fileList) {
      console.log(fileList);
    },
  },
};
</script>