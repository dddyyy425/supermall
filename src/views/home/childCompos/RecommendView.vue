<template>
    <div class="recommend">
        <div v-for="item in recommends" class="recommend-item">
            <a :href="item.link">
                <img :src="item.image" alt="">
                <div>{{item.title}}</div>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name:'RecommendView',
        props:{
            recommends:{
                type:Array,
                //默认值必须是个函数
                default(){
                    return []
                }
            }
        },
        data () {
            return {
                
            }
        },
        components: {

        },
        methods: {

        },
    }
</script>

<style scope>
    .recommend{
        display:flex;
        width:100%;
        text-align:center;
        font-size:12px;

        padding: 15px 0 15px;
        border-bottom: 10px solid #eee;
    }
    .recommend-item{
        flex:1;  /*均等分*/
    }

    .recommend-item img{
        width:70px;
        height:70px;
        margin-bottom: 8px;
    }
 
</style>
