module.exports = {
	configureWebpack: {
		resolve: {
			alias: {
				'assets': '@/assets',
				'common': '@/common',
				'components': '@/components',
				'api': '@/api',
				'views': '@/views',
				'plugins': '@/plugins'
			}
		}
	},
	// webpack-dev-server 相关配置
	// devServer: { // 设置代理
	// 	host: '0.0.0.0', //
	// 	port: 80, //自定义端口
	// 	https: true, //false关闭https，true为开启
	// 	open: true, //自动打开浏览器
	// 	proxy: {
	// 		[process.env.VUE_APP_BASE_API]: { //同济医院地址
	// 			target: process.env.VUE_APP_BASE_URL,
	// 			// 如果要代理 websockets
	// 			ws: true,
	// 			changeOrigin: true,
	// 			pathRewrite: {   //重写路径，这种是没有我们定义的前缀
	// 				['^' + process.env.VUE_APP_BASE_API]: ''
	// 			}
	// 		}
	// 	}
	// },
}