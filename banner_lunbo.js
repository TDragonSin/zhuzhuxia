var btn_prev = document.getElementsByClassName("prev")[0]
var btn_next = document.getElementsByClassName("next")[0]
var oUl = document.querySelector("#imgList");
var sli = document.getElementsByClassName("slider")[0]
var aImageList = oUl.children;
var index = 1; //当前显示的下标;
//样式的初始化;
banner_init();
btn_next.onclick = function(){
    var show , point;
    if(index == aImageList.length - 1){
        index = 2;
        show = index;
        oUl.style.marginLeft = -1130+"px"
    }else{
        index ++;
        show = index;
    }
    move(oUl,-1130 * show,"marginLeft")
}

btn_prev.onclick = function(){
    var show , point;
    if(index == 0){
        index = aImageList.length - 3;
        show = index;
        oUl.style.marginLeft = -5650+"px"
    }else{
        index --;
        show = index;
    }
    move(oUl,-1130 * show,"marginLeft")
}

function banner_init(){
    //复制第一张图片插入到 大长条结尾;
    var ofirst_ele = aImageList[0].cloneNode(true);
    var olast_ele = aImageList[aImageList.length - 1].cloneNode(true)
    oUl.appendChild(ofirst_ele);
    oUl.insertBefore(olast_ele,aImageList[0])
    oUl.style.width = aImageList[0].offsetWidth * aImageList.length + "px";
}

function addClass(ele,className){
    var reg = new RegExp("(\\s)?"+className,"g")
    ele.className = ele.className.replace(reg,"")
    ele.className +=" "+className
}
function removeClass(ele,className){
    var reg = new RegExp("(\\s)?"+className,"g")
    ele.className = ele.className.replace(reg,"")
}

var timer = setInterval(btn_next.onclick,3000)
sli.onmouseover = function(){
    clearInterval(timer)
}
sli.onmouseout = function(){
    timer = setInterval(btn_next.onclick,3000)
}

var rbox = document.getElementsByClassName("back-to-top")[0]
var back_top = rbox.children[0]
var foot = document.getElementById("footer")
window.onscroll = function(){
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop
    if(scrollTop > 800){
        rbox.style.display = "block"
    }else{
        rbox.style.display = "none"
    }
    if(scrollTop  > (document.body.offsetHeight-document.documentElement.clientHeight-foot.offsetHeight)){
        rbox.style.position = "absolute"
        rbox.style.bottom = foot.offsetHeight+34+"px"
    }else{
        rbox.style.position = "fixed"
        rbox.style.bottom = 34 + "px"
    }
}
back_top.onclick = function(){
    document.documentElement.scrollTop = 0
}