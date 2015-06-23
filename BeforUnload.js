/**
 * 
 * @author 	Div_wang (gh110827@gmail.com)
 * @date    2015-06-23 13:10:38
 * @version 0.2.0
 */

//刷新或关闭网页提示
var BeforUnload = function(e){
    e = e || window.event;

    // 兼容IE8和Firefox 4之前的版本
    if (e) {
        e.returnValue = '关闭提示';
    }

    // Chrome, Safari, Firefox 4+, Opera 12+ , IE 9+
    return '关闭提示';
}

//刷新不提示
var NoUnload = function(e){
    console.log('刷新不提示');
}

//当使用快捷键刷新网页时阻止提示
var OnKeyDown = function(event) {
    var keyCode = event.keyCode;
    //根据keycode判断按下的是哪个键
    //console.log(keyCode);

    //windows系统
    if(keyCode == 116){

        window.onbeforeunload = NoUnload 

    }else{

        window.onbeforeunload = BeforUnload

    }

    //mac系统
    if(keyCode == 91 || keyCode == 82){

        window.onbeforeunload = NoUnload

    }else{

        window.onbeforeunload = BeforUnload

    }
};

//阻止鼠标右键刷新提示
var OnMouseDown = function (e){
    var e = window.event||e;//获取事件对象
    var value = e.button;

    if(value==2||value==3){ 

        window.onbeforeunload = NoUnload

    }else{

        window.onbeforeunload = BeforUnload

    }
}
//默认开启关闭提示
window.onbeforeunload = BeforUnload;
document.onkeydown = OnKeyDown;
document.onmousedown = OnMouseDown;