module.export = {
    configureWebpack: {
        resolve: {  //resolve是配置跟路径有关的
            //extensions: [],  //哪些文件后缀名可以不写，比如.vue、.js、.css，但这个已经被脚手架配置过了，不需要配置
            alias: {
                //脚手架已经配置过@就是src
                //router不需要配置，因为这个文件只需要在main.js里面引用一次，而且每个页面都能用this.$router拿到
                //同理，this.$store也是，所以store文件也不需要配置
                // 'assets': '@/assets',
                // 'common': '@/common',
                // 'components': '@/components',
                // 'network': '@/network',
                // 'views': '@/views',
            }
        }
    }
}