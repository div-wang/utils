
 /**
 * 图片放大镜
 * @author  Div_wang (gh110827@gmail.com)
 * @date    2015-06-23 13:10:38
 * @version 0.2.0
 */
(function (w,d){
    var hoverimg = {
        oBig : {},
        oPic : {},
        oFloat : {},
        oDiv : {},
        oBigImg : {},
        oPicImg : {},
        show : function(bigPicId,picId,fl){
            var _this = this;
            //获取划过显示大图的父元素id
            _this.oBig = d.getElementById(bigPicId); 
            //获取主显示区的id
            _this.oPic = d.getElementById(picId); 
            //获取划过图片的样式的id
            _this.oFloat = d.getElementById(fl); 
            //获取整个图片函数的父元素id
            _this.oDiv = _this.oBig.parentNode;
            //获取划过显示大图的图片
            _this.oBigImg = _this.oBig.getElementsByTagName('img')[0]; 
            //获取主显示区图片的src
            _this.oPicImg = _this.oPic.getElementsByTagName('img')[0] ;
            //划入主显示区大图显示，划过图片的样式显示
            _this.oPic.onmouseover = function () {
                _this.oFloat.style.display = 'block';
                _this.oBig.style.display = 'block';
            };
            //划离主显示区大图隐藏，划过图片的样式隐藏
            _this.oPic.onmouseout = function () {
                _this.oFloat.style.display = 'none';
                _this.oBig.style.display = 'none';
            };
            //划过主显示区的处理函数
            _this.oPic.onmousemove = function (ev) {
                var oEvent = ev||window.event;
                var scrollTop = d.documentElement.scrollTop||d.body.scrollTop
                //left = 当前鼠标的x轴位置-当前父元素距左边框的距离-主显示区距左边框的距离-划过元素的宽度的1/2
                var left = oEvent.clientX-_this.oDiv.offsetLeft-_this.oPic.offsetLeft-_this.oFloat.offsetWidth/2;
                //left = 当前鼠标的y轴位置-当前父元素距上边框的距离-主显示区距上边框的距离-划过元素的高度的1/2
                var top  = oEvent.clientY-_this.oDiv.offsetTop+scrollTop-_this.oPic.offsetTop-_this.oFloat.offsetHeight/2;
                //超出父元素 left置为0
                if(left < 0) left = 0;
                else if(left > _this.oPic.offsetWidth-_this.oFloat.offsetWidth)
                    left = _this.oPic.offsetWidth-_this.oFloat.offsetWidth;
                //超出父元素 top置为0
                if(top < 0) top = 0;
                else if(top > _this.oPic.offsetHeight-_this.oFloat.offsetHeight)
                    top = _this.oPic.offsetHeight-_this.oFloat.offsetHeight;
                //划过元素的left和top值
                _this.oFloat.style.left = left+'px';
                _this.oFloat.style.top = top+'px';
                //大图的
                _this.oBigImg.src = _this.oPicImg.src;
                var percentX = left/(_this.oPic.offsetWidth-_this.oFloat.offsetWidth);
                var percentY = top/(_this.oPic.offsetHeight-_this.oFloat.offsetHeight);
                _this.oBigImg.style.left = -percentX*(_this.oBigImg.offsetWidth-_this.oBig.offsetWidth)+'px';
                _this.oBigImg.style.top = -percentY*(_this.oBigImg.offsetHeight-_this.oBig.offsetHeight)+'px';
            };
        }
    }
    w.hoverImg = hoverimg.show;
})(window,document)

