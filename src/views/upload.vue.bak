<template>
    <el-row>

 <!-- <el-upload
  class="upload-demo"
    ref="upload"
  drag
  action="http://localhost:8080/importVue"
   :auto-upload="false"
   :on-change="handleChange"
  >
  <i class="el-icon-upload"></i>
  <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
  <div class="el-upload__tip" slot="tip">只能上传xlsx文件</div>
</el-upload> -->

<el-upload
            style="display:inline-block"
            :limit="5"
            class="upload-demo"
            ref="upload"
            action="/"
            :file-list="fileList"
            :http-request="uploadSectionFile"
            :auto-upload="false"
            :before-remove="handleRemove"
            :on-change="handleChange"
            >
            <el-button slot="trigger" size="small" type="primary" plain>选取文件</el-button>
            <el-button style="margin-left: 10px;" size="small" icon="el-icon-upload2" type="success" @click="handleOk">导入</el-button>
          </el-upload>


   <el-row style="margin-top:100px;">
       <!-- <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">确认上传到服务器</el-button> -->
   </el-row>
 
    </el-row>
</template>
<script>
  export default {
    data() {
      return {
        fileList: [],
        uploadUrl: 'http://localhost:8081/api/importVue',
        formObj: ''
      };
    },
    methods: {
      uploadSectionFile(param){
      //  var fileObj = param.file;
      //  console.log(fileObj)

      //  // FormData 对象
      //  var form = new FormData();
      //  // 文件对象
      //  form.append("file", fileObj);
      //  this.$axios({
      //    method: 'post',
      //    url: this.uploadUrl,
      //    headers: {
      //      'Content-Type': 'multipart/form-data'
      //    },
      //    data:form
      //  }).then(res => {
      //    if(res.data.msgCode == '1'){
      //      this.$message({
      //        type:'success',
      //        message:res.data.msgDesc
      //      })
      //      this.attachMentCode = res.data.data.attachmentCode//附件编码
      //      this.attachmentId = res.data.data.attachmentId//标志
      //    } else {
      //      this.$message({
      //        type:'error',
      //        message:res.data.msgDesc
      //      })
      //    }
      //  })

        this.formObj.append("file", param.file);//将文件放入file中
     },
   handleOk() {
        let vm = this;
        vm.formObj = new FormData();
        this.$axios({
         method: 'post',
         url: this.uploadUrl,
         headers: {
           'Content-Type': 'multipart/form-data'
         },
         data: vm.formObj
       }).then(res => {
         if(res.data.msgCode == '1'){
           this.$message({
             type:'success',
             message:res.data.msgDesc
           })
           this.attachMentCode = res.data.data.attachmentCode//附件编码
           this.attachmentId = res.data.data.attachmentId//标志
         } else {
           this.$message({
             type:'error',
             message:res.data.msgDesc
           })
         }
       })
        vm.$refs.upload.submit();
      },
      submitUpload() {
        //this.$refs.upload.submit();
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
       handleChange(file, fileList) {
        console.log(fileList)
      }
    }
  }
</script>