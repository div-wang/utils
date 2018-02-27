/**
 * 图片延迟加载js
 * @author  Div_wang (gh110827@gmail.com)
 * @date    2015-06-23 18:27:18
 * @version 0.1.0
 */

//判断浏览器 
var Browser=new Object(); 
Browser.userAgent=window.navigator.userAgent.toLowerCase(); 
Browser.ie=/msie/.test(Browser.userAgent); 
Browser.Moz=/gecko/.test(Browser.userAgent); 
//判断是否加载完成 
function imgLoad(imgs,dataimg,pic){ 
    //imgs : 需要延迟加载的图片jquery数组对象,
    //dataimg ：img标签设置的图片路径字段名称,
    //pic ：默认图片路径, 
    imgs.each(function(i){
        if (imgs.eq(i).attr(dataimg) == undefined) {
            return
        }
        var val = imgs.eq(i).attr(dataimg);
        var img = new Image(); 
        if(Browser.ie){ 
            img.onreadystatechange =function(){  
                if(img.readyState=="complete"||img.readyState=="loaded"){ 
                    imgs.eq(i).attr('src',val);
                } 
            }        
        }else if(Browser.Moz){ 
            img.onload=function(){ 
                if(img.complete==true){ 
                    imgs.eq(i).attr('src',val);
                } 
            }        
        }    
        //如果因为网络或图片的原因发生异常，则显示该图片 
        img.onerror=function(){img.src = pic} 
        img.src = val; 
    })
} 
