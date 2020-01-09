<template>
    <div>
        <com :tabList="tabList"></com>
        <router-view></router-view>
    </div>
</template>
<script>
import com from './com'
export default {
    data(){
        return {
            tabList:[
                {name: '标签1',url: '/test',index: 1},
                {name: '标签2',url: '/test',index: 2}
            ]
        }
    },
    components:{
        com
    }
}
</script>