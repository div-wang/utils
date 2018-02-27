/**
 * 弹出提示
 * @author  Div_wang (gh110827@gmail.com)
 * @date    2015-06-23 18:28:43
 * @version 0.1.0
 */

(function (w,d){
    var H = d.getElementsByTagName('head')[0] || d.head || d.documentElement;
    var B = d.getElementsByTagName('body')[0] || d.body || d.documentElement;
    var u;
    var msg = {
        show:function(callback){
            var msg_width = d.body.clientWidth || d.documentElement.clientWidth,
                msg_height = d.body.clientHeight || d.documentElement.clientHeight;  
            var msg_srt_height = parseInt(msg_height*0.3)-110
            var popup_msg_style = d.createElement('style');
                popup_msg_style.type = "text/css";
            var popup_msg_style_text = '.popup_msg_box{width:30%;min-height:30%;padding:30px 5px 0px;font-family:"微软雅黑";text-align:center; border:1px solid #999;border-radius:5px;background:#fff;color:#333;position:fixed;top:30%;left:35%;z-index:12; }.popup_msg_str{width:100%;word-break:break-all;word-wrap:break-word;font-size:14px;font-weight:bold;line-height:1.6;padding-bottom:60px}.popup_mag_true{background:#f4f4f4;width:100%;position:absolute;bottom:0px;left:0;border-radius:5px;padding:10px 0;}.popup_mag_true input{width:90px;height:30px;border:none;border-radius:5px;background:#e50014;color:#fff;font-size:13px;font-weight:bold;}.popup_msg_close{position:absolute;top:-7px;right:-7px;background:#fff;border-radius:50%; cursor:pointer; color:#f33c3c; font-size:17px;font-weight:900;width:25px;height:25px;display:block;} #popup_msg_tan{position:absolute;top:0;width:100%;height:100%;background:#000;opacity:0.5;filter:alpha(opacity=50);z-index:10;width:100%;height:'+msg_height+'px;}'
                if (popup_msg_style.styleSheet) { //IE
                  popup_msg_style.styleSheet.cssText = popup_msg_style_text;
                } else { 
                  popup_msg_style.innerHTML = popup_msg_style_text;
                }
                H.appendChild(popup_msg_style);
            var popup_msg_tan = d.createElement('div');
                popup_msg_tan.id = 'popup_msg_tan';
                B.appendChild(popup_msg_tan);
            var popup_msg_box = d.createElement('div');
                popup_msg_box.innerHTML = '<a class="popup_msg_close" onclick="msgx(this)">X</a><div class="popup_msg_str">'+callback+'<div id="time"></div></div><div class="popup_mag_true"><input type="button" value="确 定" onclick="msgx(this.parentNode)"></div>';
                popup_msg_box.className = 'popup_msg_box';
                B.appendChild(popup_msg_box);

                if(callback && typeof callback == 'function'){
                    callback();
                }else if(callback && typeof callback == 'string'){
                    if (callback.match('http://')||callback.match('https://')){
                        u = callback
                        var i=5,t,s = d.getElementById('time');
                        s.innerHTML = i+'秒后自动跳转';
                        t = setInterval(function(){
                            i-=1;
                            s.innerHTML = i+'秒后自动跳转';
                            if (i==0)  window.location.href = callback;
                        },1000);
                    }
                }
        },
        close:function(obj){
            if (u) window.location.href = u;
            var a = H.childNodes;
            H.removeChild(a[a.length-1]);
            B.removeChild(d.getElementById('popup_msg_tan'));
            B.removeChild(obj.parentNode);
        }
    } 
    //信息提示，msg(arguments)
    w.msgx = msg.close;   
    w.msg = msg.show;
})(window,document);

