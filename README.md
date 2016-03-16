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


###hoverImg.js（图片放大镜）
用javascript编写，不依赖任何库，样式可自定义，兼容ie6、7、8；
#####用法：
html：
```html
    <div class="product_img" style="position:relative;z-index:2">
        <div id="big_pic" style="display: none;">
            <img src="http://img.39yst.com/uploads/bjsp/product/28920/2015050506334483.jpg" width="800" height="800"></div>
        <ul id="pic">
            <li>
                <img src="http://img.39yst.com/uploads/bjsp/product/28920/2015050506334483.jpg" width="300" height="300"></li>
            <a href="/bjsp/bigimage/j20100019.shtml" target="_blank">
                <span id="float_layer" style="display: none; left: 141px; top: 190px;"></span>
            </a>
        </ul>
    </div>
``` 
css：
```css
    .product_img{ width:300px; float:left;}
    #pic{ width:300px; height:300px; border:1px solid #eee;}
    #small_pic{ width:280px; overflow:hidden; height:64px;position: absolute;left: 0px;top: 0}
    #img_box {  position: relative; }
    #float_layer { width: 110px; height: 110px; border: 1px solid #000; background: #fff; filter: alpha(opacity: 30); opacity: 0.3; position: absolute; top: 0; left: 0; display:none; }
    #big_pic { position: absolute; top: -1px; left: 310px; width:300px; height:300px; overflow:hidden; border:2px solid #CCC; display:none;z-index: 10 }
    #big_pic img { position:absolute; top: -30px; left: -80px; }
``` 
js：  
```javascript
    hoverimg(
        bigPicId : 'big_pic',    //大图div容器ID
        picId  : 'pic',          //默认图片div容器ID
        fl : 'float_layer'      //划过显示区块ID
    )
```  
###drugImg.js（查看图片的弹层）
图片查看弹层，可拖拽
#####用法：
```javascript
    // 也需要查看图片的父窗口
    drugImg('.list')
```  
#####bug：
如果您有更好的意见请提交[issues](https://github.com/div-wang/Div-widget/issues) ，感谢！
