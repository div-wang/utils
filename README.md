# Div-widget

###BeforUnload.js（关闭网页提醒）
当用户关闭网页时弹出关闭提醒，F5(windows)或者ctrl+r(os x)刷新不会出现提醒；  
#####用法：
引入直接可用
#####bug：
点击刷新按钮还是会出现关闭提醒  
如果您有更好的意见请提交[issues](https://github.com/div-wang/Div-widget/issues) ，感谢！  

###imgLoad.js（图片延迟加载）
图片延迟加载，依赖jquery   
#####用法：
```javascript
imgLoad(
	$('img'),    						//需要延迟加载的图片jquery数组对象
	'dataimg', 							//img新增attr属性名，存放要加载的图片
	'http://img.39yst.com/loading.gif' 	//默认图片路径
)
```  
#####bug：
如果您有更好的意见请提交[issues](https://github.com/div-wang/Div-widget/issues) ，感谢！

###msg.js（自定义弹窗组件）
用于美化alert弹窗样式，具备url跳转，callback回调功能；  
#####用法：
```javascript
function test(){
	msg('测试')
}
msg('hello word') 			//hello word
msg(1024) 					//1024
msg(abc) 					//测试
msg('http://www.baidu.com') // >>www.baidu.com
```  
#####bug：
如果您有更好的意见请提交[issues](https://github.com/div-wang/Div-widget/issues) ，感谢！


###slide.js（轮播图组件）
用javascript编写，不依赖任何库，样式可自定义，可以自由控制按钮显示隐藏、滚动方向、间隔时间、滚动时间；
#####用法：
```javascript
slide({
    box : String 								//轮播图容器ID 
    num : Number    							//轮播图的数量 
    speed : Number  							//轮播图的速度 (毫秒数)
    direction : 'top'/'bottom'/'left'/'right'  	//轮播图方向 (上下左右)
    point : Boolean  							//轮播图点选按钮 (true/false)
    lr_btn.show : Boolean  						//左右按钮显示隐藏 (true/false)
    lr_btn.hover : Boolean 						//左右按钮划过效果 (true/false)
})
```  
#####bug：
如果您有更好的意见请提交[issues](https://github.com/div-wang/Div-widget/issues) ，感谢！