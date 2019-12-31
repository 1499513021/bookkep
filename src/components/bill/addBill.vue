<template>
    <div>
        <div class="header">
            <router-link to="/Bill/out">采购</router-link>
            <router-link to="/Bill/sales">销售</router-link>
            <router-link to="/Bill/sales">生活开支</router-link>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
  name: 'bill'
}
</script>

<style lang="">
.header{
    height: 3rem;
    width: 100%;
    position: fixed;
    top: 0;
    display: flex;
    display: -webkit-flex;
    display: -ms-flexbox;
    justify-content: space-around;
    align-items: center;
}
.header a{
    display: block;
    line-height: 3rem;
    height: 100%;
    flex: 1;
}
</style>
