#这是一个牛逼的项目
##项目信息
###z做项目
##用传统的方法吧修改过后的代码上传到git
git remote add origin https://github.com/704810394/profile.git
1. git add .
2.git commit -m "提交信息"
3.git push
## 制作首页App组件
1.完成 Haeder 区域，使用的是Mint-UI中的Header组件
2.制作底部的Tabbar区域，使用的是MUI的Tabbar.html
+在制作购物车小图标的时候，操作会多一些
+先把扩展图标的css样式，拷贝到项目中
+拷贝扩展字体库ttf文件，到项目中
为购物车小图标添加如下样式"mui-icon mui-icon-extra mui-icon-extra-cart"
3.要在中间区域防止一个router-view 来展示路由匹配组件

##改造tabbar为router-link
##设置路由高亮
##点击tabbar中的路由连接，展示对应的路由组件
##制作首页轮播图布局
##加载首页轮播图数据
1.获取数据，如何获取数据，使用vue-resource
2.使用vue-resource的this.$http.get获取数据
3.获取到的数据，要保存到data身上
4.使用v-for循环渲染到每个item项
##改造九宫格区域的样式

