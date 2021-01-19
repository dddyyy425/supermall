<template>
    <div id="tab-bar">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name:"TabBar",
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
    /* 关于flex:1 --> https://www.cnblogs.com/LangZ-/p/12703858.html
    flex是弹性布局  flex:1是表明class=tab-bar-item的都是1份，都是等份大小
    若只有一个tab-bar-item是flex=1，说明它使用了100%
    
    flex属性 是 flex-grow、flex-shrink、flex-basis三个属性的缩写。
    推荐使用此简写属性，而不是单独写这三个属性。
    第一个参数表示: flex-grow 定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大
    第二个参数表示: flex-shrink 定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小
    第三个参数表示: flex-basis给上面两个属性分配多余空间之前, 计算项目是否有多余空间, 默认值为 auto, 即项目本身的大小*/
    #tab-bar{
    display:flex;
    background-color: #f6f6f6;

    /* fixed（固定定位）：生成绝对定位的元素，相对于浏览器窗口进行定位。
    元素的位置通过 "left", "top", "right" 以及 "bottom" 属性进行规定。
    可通过z-index进行层次分级。 */
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;

    /* 现在灰色的tab-bar和上面的白色区域连接比较硬，在连接部分加上阴影更连贯
    前两个属性是偏移量，第一个是x，第二个是y，x朝右，y朝下，所以两个都是正的话，
    阴影会朝右下角走，不是想要的效果。首先x不需要偏移，因为我们只需要阴影往上走一点，
    所以y是负，x是0
    第三个属性是模糊程度 第四个属性是颜色，rbga是透明度，透明度是0.1*/
    box-shadow: 0 -1px 1px rgba(100, 100, 100,.1);
  }

 
</style>
