<template>
    <div>
        <div class="footer">
            <router-link to="/Turnover" :class="[this.$route.meta.index==0?'active':'']"><img src="@/assets/img/list.png" alt="" srcset="">账单</router-link>
            <router-link to="/Bill/out" :class="[this.$route.meta.index==1?'active':'']"><img src="@/assets/img/edit.png" alt="" srcset="">记账</router-link>
            <router-link to="/Bill"><img src="@/assets/img/library.png" alt="" srcset="">库存</router-link>
            <router-link to="/Turnover"><img src="@/assets/img/user.png" alt="" srcset="">我的</router-link>
        </div>
    </div>
</template>
<script>
export default {
  name: 'Struc',
  created(){
      console.log()
    //   
  }
}
</script>
<style scoped>
    .active{
        background: #ccc;
    }
    .footer{
        /* height: 5rem; */
        border-top: 1px solid #ccc;
        width: 100%;
        position: fixed;
        bottom: 0;
        display: flex;
        display: -webkit-flex;
        justify-content: space-around;
        align-items: center;
        z-index: 9999999;
        background: #fff;
    }
    .footer a{
        flex: 1;
        height: 100%;
        /* line-height: 5rem; */
    }
    img{
        width: 30px;
        display: block;
        margin: auto;
    }
</style>
