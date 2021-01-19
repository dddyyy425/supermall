<template>
    <div>
        <tab-bar>
        <!--tab-bar相当于就是一个大的插槽(tab-bar里面只定义了一个插槽)，
        用tab-bar的时候，可在里面任意插入，比如这里就插入了四个tab-bar-item，也可插入其他数量
        而tab-bar-item定义也有两个插槽，现在使用tab-bar-item时内的也会替换在tab-bar-item留下的插槽-->
        <!--监听按钮在tab-bar-item组件内监听，不要在这监听，否则要监听四个-->
        <tab-bar-item path="/home" activeColor="#ff5777">
            <!--slot属性是指要替换哪一个插槽-->
            <!--这里的~符号表示后面的值为 alias dom里面加别名要加~-->
            <img slot="item-icon" src="~@/assets/img/tabbar/home.svg" alt="">
            <img slot="item-icon-active" src="~@/assets/img/tabbar/home_active.svg" alt="">
            <!--图片和文字都是行内标签，需要形成一上一下，所以给文字外面加上div标签-->
            <div slot="item-text">首页</div>
        </tab-bar-item>
        <tab-bar-item path="/category" activeColor="#ff5777">
            <img slot="item-icon" src="~@/assets/img/tabbar/category.svg" alt="">
            <img slot="item-icon-active" src="~@/assets/img/tabbar/category_active.svg" alt="">
            <div slot="item-text">分类</div>
        </tab-bar-item>
        <tab-bar-item path="/cart" activeColor="#ff5777">
            <img slot="item-icon" src="~@/assets/img/tabbar/shopcart.svg" alt="">
            <img slot="item-icon-active" src="~@/assets/img/tabbar/shopcart_active.svg" alt="">
            <div slot="item-text">购物车</div>
        </tab-bar-item>
        <tab-bar-item path="/profile" activeColor="#ff5777">
            <img slot="item-icon" src="~@/assets/img/tabbar/profile.svg" alt="">
            <img slot="item-icon-active" src="~@/assets/img/tabbar/profile_active.svg" alt="">
            <div slot="item-text">我的</div>
        </tab-bar-item>
    </tab-bar>
    </div>
</template>

<script>
    //导入后需要注册
    import TabBar from '@/components/common/tabbar/TabBar'
    import TabBarItem from '@/components/common/tabbar/TabBarItem'
    export default {
        name:"MainTabBar",
        components:{
            TabBar,
            TabBarItem
        }
    }
</script>

<style scope>

 
</style>
