function getStyle(obj,attr){
    if(obj.currentStyle){
        return obj.currentStyle[arr];
    }else{
       return getComputedStyle(obj,null)[attr];
    }
}
//json对象中放着好多想要改变的样式
function animate(obj,json,callback){
    clearInterval(obj.timer)
    obj.timer=setInterval(function(){
        console.log(1);
        var isStop=true;
        for(var attr in json){
            var now=0;
            if(attr=='opacity'){
                 now=parseInt(getStyle(obj,attr)*100);
            }else{
                now=parseInt(getStyle(obj,attr));
            }
            var now=parseInt(getStyle(obj,attr));
            var speed=(json[attr]-now)/6;
            speed=speed>0?Math.ceil(speed):Math.floor(speed);
            var current=now+speed;

            if(attr=='opacity'){
                obj.style.opacity=current/100;
            }else{
                obj.style[attr]=current+"px";
            }
            box.style[attr]=now+speed+"px";
            if(json[attr]!==current){
                isStop=false;
            }
        }
            //所有样式都满足要求了 ，才清除定时器
            if(isStop){
                clearInterval(obj.timer);
                // if(callback){
                //     callback();
                // };
                callback&&callback();
            }
    },30)
}