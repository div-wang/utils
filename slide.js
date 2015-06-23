/**
 * slide轮播图插件
 * @author  Div_wang (gh110827@gmail.com)
 * @date    2015-06-23 18:38:15
 * @version 0.2.0
 */

function slide (config){
    /* @param {object} : config
        * config.box           : 轮播图容器ID (轮播图容器的父ID)
        * config.num           : 轮播图的数量 (数字，根据具体轮播子元素数量而定)
        * config.speed         : 轮播图的速度 (毫秒数,0-正无穷)
        * config.direction     : 轮播图方向 (left/right/top/bottom)
        * config.point         : 轮播图点选按钮 (true/false)
        * config.lr_btn.show   : 左右按钮显示隐藏 (true/false)
        * config.lr_btn.hover  ：左右按钮划过效果 (true/false)
    */
    //动画组件
    function startMove(obj, json, fnEnd) {
        function getStyle(obj, name) {
            if(obj.currentStyle) {
                return obj.currentStyle[name];
            }
            else {
                return getComputedStyle(obj, false)[name];
            }
        }
        clearInterval(obj.timer);
        obj.timer=setInterval(function (){
            var bStop=true;     //假设：所有值都已经到了
            for(var attr in json) {
                var cur=0;
                if(attr=='opacity') {
                    cur=Math.round(parseFloat(getStyle(obj, attr))*100);
                }
                else {
                    //alert(getStyle(obj, attr))
                    cur=parseInt(getStyle(obj, attr));
                }
                var speed=(json[attr]-cur)/6;
                speed=speed>0?Math.ceil(speed):Math.floor(speed);
                if(cur!=json[attr])  bStop=false;
                if(attr=='opacity') {
                    obj.style.filter='alpha(opacity:'+(cur+speed)+')';
                    obj.style.opacity=(cur+speed)/100;
                }
                else {
                    obj.style[attr]=cur+speed+'px';
                }
            }
            if(bStop) {
                clearInterval(obj.timer);           
                if(fnEnd)fnEnd();
            }
        }, 30);
    };
    //样式组件
    function getStyle(element, attr) {
        var value;
        if (typeof window.getComputedStyle != 'undefined') {//W3C
            value = window.getComputedStyle(element, null)[attr];
        } else if (typeof element.currentStyle != 'undeinfed') {//IE
            value = element.currentStyle[attr];
        }
        return value;
    }
    var oBox = document.getElementById(config.box);
    var oBoxUL = oBox.getElementsByTagName('ul')[0];
    var oBoxList = oBoxUL.getElementsByTagName(config.boxList);
    var direction = config.direction;
    var bool = true;
    var img = 0;
    var oBox_px = '';
    if (config.direction == direction) { //根据方向自动滚动
        if (direction == 'left' || direction == 'right') { 
            oBox_px = getStyle(oBox, 'width').split('p')[0];
            var oBoxUL_width = oBox_px*(config.num+1)+'px';
            oBoxUL.style.position = 'absolute';
            oBoxUL.style.width = oBoxUL_width; 
            if (direction == 'left') oBoxUL.style.left = 0;
            else oBoxUL.style.right = 0;
            var oBoxLI = document.createElement("li");
            oBoxLI.innerHTML =  oBoxUL.getElementsByTagName('li')[0].innerHTML;
            oBoxUL.appendChild(oBoxLI);
        }if (direction == 'top' || direction == 'bottom') {
            oBox_px = getStyle(oBox, 'height').split('p')[0]
            var oBoxUL_height = oBox_px*(config.num+1)+'px';
            oBoxUL.style.position = 'absolute'; 
            oBoxUL.style.height = oBoxUL_height;
            if (direction == 'top') oBoxUL.style.top = 0;
            else oBoxUL.style.bottom = 0;
            var oBoxLI = document.createElement("li");
            oBoxLI.innerHTML =  oBoxUL.getElementsByTagName('li')[0].innerHTML;
            oBoxUL.appendChild(oBoxLI);
        };// 判断上下左右
        function autoslide(){ 
            if (bool) {
                img = img + 1;
                if (img == config.num) {eval('startMove(oBoxUL,{'+direction+':-(oBox_px*img)},function(){oBoxUL.style.'+direction+'=0})');img = 0;}
                else{eval('startMove(oBoxUL,{'+direction+':-(oBox_px*img)})');}
                if(config.point){
                    var point_li = point.getElementsByTagName('li');
                    for (var s = 0 ; s < config.num; s++ ) {
                        point_li[s].className = '';
                    }; 
                    point_li[img].className = 'cur'
                }   
            }else return;
        }
        oBox.onmouseover = function(){
            bool = false;
        }
        oBox.onmouseout = function(){
            bool = true;
        }
        var start = setInterval(autoslide , config.speed) ;
    };
    if(config.point){ //如果point为true，创建点选按钮，并默认第一个选中
        var point = document.createElement('ol');
        var point_html = '';
        for (var i = 0 ;i < config.num; i++) {
            if (config.point.number) point_html += '<li>'+(i+1)+'</li>';
            else point_html += '<li></li>'
        };
        point.innerHTML = point_html;
        oBox.insertBefore(point,oBoxUL);
        point.getElementsByTagName('li')[0].className = 'cur';
        var point_li = point.getElementsByTagName('li');
        for (var j = 0 ;j < config.num; j++) {
            point_li[j].index = j;
            point_li[j].onclick = function (){  
                var a = this.index;
                for (var k = 0 ; k < config.num; k++ ) {
                    point_li[k].className = '';
                };
                this.className = 'cur';            
                eval('startMove(oBoxUL,{'+direction+':-(oBox_px*a-1)})');
                img = a;
            }   
        };
    }
    if(config.lr_btn.show){ //如果config.lr_btn.show为true，创建左右点击按钮
       var l_btn = document.createElement('span'); 
       l_btn.id = 'YSlide_left_btn';
       var r_btn = document.createElement('span');
       r_btn.id = 'YSlide_right_btn';
       oBox.appendChild(r_btn);
       oBox.appendChild(l_btn);
       if (config.lr_btn.hover) { //如果config.lr_btn.hover为true，左右按钮默认划过box显示，划出box隐藏
            r_btn.style.position = 'absolute';
            l_btn.style.position = 'absolute'; 
            oBox.onmouseover = function(){
                r_btn.style.display = 'block';
                l_btn.style.display = 'block';
                bool = false;
            }
            oBox.onmouseout = function(ev){
                var e = ev || event
                if (this.contains(e.toElement)) return;
                r_btn.style.display = 'none';
                l_btn.style.display = 'none'; 
                bool = true;       
            }
        };
        l_btn.onclick = function(){  //点击左按钮事件          
            img = img-1
            if (img < 0) {eval('oBoxUL.style.'+direction+'= -(oBox_px*config.num)+"px";img = config.num-1;startMove(oBoxUL,{'+direction+':-(oBox_px)*(config.num-1)})')}
            else{eval('startMove(oBoxUL,{'+direction+':-(oBox_px*img)})');}
            if (config.point) {
                var point_li = point.getElementsByTagName('li');
                for (var j = 0 ; j < config.num; j++ ) {
                point_li[j].className = '';
                };
                point_li[img].className = 'cur';  
            };                                         
        }
        r_btn.onclick = function(){ //点击右按钮事件 
            img = img+1
            if (img == config.num) {eval('startMove(oBoxUL,{'+direction+':-(oBox_px*img)},function(){oBoxUL.style.'+direction+'=0})');img = 0;}
            else{eval('startMove(oBoxUL,{'+direction+':-(oBox_px*img)})');}
            //eval('startMove(oBoxUL,{'+direction+':-(oBox_px*img)})');
            if (config.point) {
                var point_li = point.getElementsByTagName('li');
                for (var j = 0 ; j < config.num; j++ ) {
                point_li[j].className = '';
                };
                point_li[img].className = 'cur';  
            }; 
        } 
    }   
}