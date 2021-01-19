<template>
<!--不像tabbar，一直在底下是唯一的，所以tabbar取的是id，而每一页的navbar可能不一样，所以取class-->
    <div class="nav-bar">
        <div class="left"><slot name="left"></slot></div>
        <div class="center"><slot name="center"></slot></div>
        <div class="right"><slot name="right"></slot></div>
    </div>
</template>

<script>
    export default {
        name:'NavBar',
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
    .nav-bar{
        display: flex;
        height:44px;
        line-height: 44px;
        text-align:center;
        box-shadow:0 1px 1px rgba(100,100,100,.1);
    }

    .left,.right{
        width:60px;
    }

    .center{
        flex: 1; /*如果其他确定了宽度，这里来个flex:1表示这1个把剩下的全部占据*/
    }
 
</style>
