<!-- 弹窗组件转换为Js的组件 -->
<template>
  <div class="messageBox">
      <h2>{{ title }}</h2>
      <p>{{ contant }}</p>
      <div>
          <div @touchstart="handleCancle">{{ cancle }}</div>
          <div @touchstart="handleOk">{{ ok }}</div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'MessageBox',

    data() {
        return {
            
        }
    }
}
</script>

<style scoped>
    .messageBox {
        height: 120px;
        width: 200px;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-shadow: 3px 3px 3px 3px #ccc;
        position: absolute;
        top: 50%;
        left: 50%;
        margin: -60px 0 0 -100px;
        background-color: #fff;
    }
    .messageBox h2 {
        text-align: center;
        line-height: 40px;
        font-size: 18px;
    }
    .messageBox p {
        text-align: center;
        line-height: 30px;
    }
    .messageBox > div {
        display: flex;
        position: absolute;
        bottom: 0;
        width: 100%;
        border-top: 1px solid #ccc;
    }
    .messageBox > div div {
        flex:1;
        text-align: center;
        line-height: 40px;
        border-right: 1px solid #ccc;
    }
    .messageBox > div div:last-child {
        border: none;
    }
</style>