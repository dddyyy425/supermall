<template>
    <div class="tab-bar-item" @click="itemClick">
        <!-- <slot v-if="!isActive" name="item-icon"></slot>
        <slot v-else name="item-icon-active"></slot> -->

        <div v-if="!isActive"><slot name="item-icon"></slot></div>
        <div v-else><slot name="item-icon-active"></slot></div>

        <!--当item激活的时候(被点击)，class="active"就激活
        但是到时候slot会被替换掉，所以class会被删掉，因此在slot外面加一层div，加上这个class属性
        虽然上面的if-else看起来不受影响，但最好还是在slot外面加一层div-->
        <!-- <slot :class="{active:isAtive}" name="item-text"></slot> -->
        <div :style="activeStyle"><slot name="item-text"></slot></div>
        
    </div>
</template>

<script>
    export default {
        name:'TabBarItem',
        props:{
            //希望别人传过来path路径，别人用你这个组件的时候就可以传过来这个路径，在tab-bar-item标签上的属性传递
            path:String,
            activeColor:{
                type:String,
                default:'red', //任何参数都是动态的可传过来的(在tab-bar-item标签上的属性传递)
            }
        },
        data () {
            return {
                //isActive:true,
            }
        },
        computed:{
            isActive(){
                //判断该路由的path包不包含传过来的path
                return this.$route.path.indexOf(this.path) !== -1
            },
            activeStyle(){
                //是活跃状态返回颜色，不是就返回空的对象
                return this.isActive? {color:this.activeColor}:{}
            }
        },
        components: {

        },
        methods: {
            itemClick(){
                //能返回用push，不能返回用replace
                this.$router.replace(this.path)
            }
        },
    }
</script>

<style scope>
    .tab-bar-item{
        flex:1;
        text-align: center;
        height: 49px; /* 49px是很多移动开发用的高度，是比较合适的高度 */
        font-size: 14px;
    }

    .tab-bar-item img{
        width:21px;
        height:21px;
        margin-top: 4px;
         /*图片默认最下面会多三个像素，现在想去除，来缩小图标和文字的距离*/
        vertical-align: middle;
    }
 
</style>
