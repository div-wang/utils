/**
 * 图片弹层
 * @author  Div_wang (gh110827@gmail.com)
 * @date    2016-03-16 17:09
 * @version 1.0.0
 */
(function (w,d){
    var img = {
        /**
         * 初始化事件处理
         **/
        onRedy: function(element){
            var that = this,
                imgs = d.querySelector(element).querySelectorAll('img')

            for (var i = imgs.length - 1; i >= 0; i--) {
                imgs[i].onclick = function(event){
                    that.imgMask(event)
                }
            };
            that.show()
        },
        /**
         * 点击图片显示图片弹层的事件处理
         **/
        imgMask: function(event){
            var that = this,
                imgBox = d.querySelector('#imgBox'),
                img = imgBox.querySelector('img')

            
            imgBox.style.display = 'block'
            img.src = event.target.src
            var top = (window.innerHeight-img.clientHeight)/2
            alert(window.innerHeight)
            alert(img.clientHeight)
            alert(top)
            img.style.top = top<0?0:top+'px'
            that.dragImg()
        },
        /**
         * 初始化图片弹层需要的处理
         **/
        show: function(){
            var that = this
            var Head = d.getElementsByTagName('head')[0] || d.head || d.dElement
            var Body = d.getElementsByTagName('body')[0] || d.body || d.dElement

            // 引入样式
            var drugImgStyle = d.createElement('style'),
                drugImgStyleText = '*{margin:0,padding:0} #imgBox{width: 100%;height: 100%;position: relative;display: none;} .imgClose{position: relative;width: 100%;height: 100%;background: rgba(0,0,0,0.5);} #imgBox img{position: absolute; left:0; top:0; width: 100%;}'
                drugImgStyle.type = "text/css";
                if (drugImgStyle.styleSheet) { //IE
                    drugImgStyle.styleSheet.cssText = drugImgStyleText;
                } else { 
                    drugImgStyle.innerHTML = drugImgStyleText;
                }
                Head.appendChild(drugImgStyle);
            // 插入标签
            var drugImgSection = d.createElement('section');
                drugImgSection.id = 'imgBox'
                drugImgSection.style.height = window.innerHeight+'px'
                drugImgSection.style.width = window.innerWidth+'px'
                drugImgSection.innerHTML = '<div class="imgClose"></div><img src="" alt="图片名字">'
                Body.appendChild(drugImgSection);
            // 关闭当前标签    
            var drugImgClose = d.querySelector('.imgClose')
            drugImgClose.onclick = that.close
        },
        /**
         * 点击关闭当前图片弹层
         **/
        close:function(e){
            var that = this,
                imgBox = d.querySelector('#imgBox')

            imgBox.style.display = 'none'
        },
        /**
         * 处理单据图片功能
         **/
        dragImg: function() {
            var imgBox = d.querySelector('#imgBox'),
                img = imgBox.querySelector('img'),
                width = img.clientWidth,
                height = img.clientHeight,
                clientX = 0,
                clientY = 0,
                left = 0,
                top = 0;

            /**
             * 拖拽图片开始
             **/
            img.ondragstart = function(event) {
                clientX = event.clientX||event.screenX;
                clientY = event.clientY||event.screenY;
                left = parseInt(img.style.left.split('px')[0]) || 0;
                top = parseInt(img.style.top.split('px')[0]) || 0;
            }
            /**
             * 拖拽图片中
             **/
            img.ondrag = function(event) {
                event.preventDefault();
                var oLeft = (event.clientX||event.screenX) - clientX + left,
                    oTop = (event.clientY||event.screenY) - clientY + top;
                img.style.left = oLeft + 'px';
                img.style.top = oTop + 'px';
            }
            /**
             * 拖拽图片结束
             **/
            img.ondragend = function(event) {
                event.preventDefault();
                left = (event.clientX||event.screenX) - clientX + left;
                top = (event.clientY||event.screenY) - clientY + top;
                img.style.left = left + 'px';
                img.style.top = top + 'px';
            }
        }
    } 
    w.drugImg = function(str){
        img.onRedy(str)
    }
})(window,d);   
