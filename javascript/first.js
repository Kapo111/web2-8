// 获取节点
var searchform = document.getElementsByClassName("searchform");
var searchbar = document.getElementsByClassName("searchbar");
var user = document.getElementsByClassName("user");
var password = document.getElementsByClassName("password");
var submit2 = document.getElementsByClassName("submit2");
var submit1 = document.getElementsByClassName("submit1");
var lis11 = document.getElementsByClassName("lis1-1");
var con11 = document.getElementsByClassName("con1-1");
var con31 = document.getElementsByClassName("con3-1");
var top = document.getElementsByClassName("top");
var bannerImg = document.getElementById("banner-img");
var arr1 = document.getElementsByClassName("arr1");
var arr2 = document.getElementsByClassName("arr2");
var listContent = document.getElementById("list-content");
var content = document.getElementsByClassName("content");

// 弹窗提示效果
searchbar[0].onclick = function() {
    if (searchform[0].value == "") {
        alert("搜索内容不能为空");
    }
}

submit1[0].onclick = function() {
    if (user[0].value == "" && password[0].value == "") {
        alert("用户名和密码不能为空");
    }
    else if (user[0].value == "") {
        alert("用户名不能为空");
    }
    else if (password[0].value == "") {
        alert("密码不能为空");
    }
    else {
        alert("登录成功！");
    }
}

submit2[0].onclick = function() {
    if (user[0].value == "" && password[0].value == "") {
        alert("用户名和密码不能为空");
    }
    else if (user[0].value == "") {
        alert("用户名不能为空");
    }
    else if (password[0].value == "") {
        alert("密码不能为空");
    }
    else {
        alert("注册成功！");
    }
}

// 图片放大效果
for (var i = 0; i < con31.length; i ++) {
    con31[i].onmouseover = function() {
        this.style.width = "293.7px";
        this.style.height = "165px";
    }
    con31[i].onmouseout = function() {
        this.style.width = "267px";
        this.style.height = "150px";
    }
}

// 回到顶端效果
top.onclick = function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// 轮播图
var imgArr = ["banner1.png", "banner2.jpg", "banner3.jpg", "banner4.jpg", "banner5.jpg"];
var i = 101;
var timeId = setInterval(function() {
    var flag = 0;
    arr1[0].onclick = function() {
        flag = 1;
        i = i - 2;
        bannerImg.setAttribute("src", "./images/" + imgArr[i % imgArr.length]);
    }
    arr2[0].onclick = function() {
        flag = 1;
        bannerImg.setAttribute("src", "./images/" + imgArr[i % imgArr.length]);
        i ++;
    }
    if (flag == 0) {
        bannerImg.setAttribute("src", "./images/" + imgArr[i % imgArr.length]);
        i ++;
    }
}, 2000)

// 二级列表中的任务和美食，划上出现图片
var listImgArr = ["zhalaohu.jpg", "yangchangzi.jpg", "huoguoji.jpg", "lvrouhuoshao.jpg", "qiezibing.jpg", "laodoufu.jpg", "yali.jpg", "bianque.jpg", "mazhiyuan.jpg", "jiyun.jpg", "zhangzhidong.jpg", "fengguozhang.jpg"];
// for (var i = 0; i < content.length; i ++) {
//     content[i].onmouseout = function() {
//         listContent.style.display = "none";
//     }
// }
// content[0].onmouseover = function() {
//     listContent.style.display = "block";
//     listContent.setAttribute("src", "./images/" + listImgArr[0]);
// }
// content[1].onmouseover = function() {
//     listContent.style.display = "block";
//     listContent.setAttribute("src", "./images/" + listImgArr[1]);
// }
// content[2].onmouseover = function() {
//     listContent.style.display = "block";
//     listContent.setAttribute("src", "./images/" + listImgArr[2]);
// }
// content[3].onmouseover = function() {
//     listContent.style.display = "block";
//     listContent.setAttribute("src", "./images/" + listImgArr[3]);
// }
// content[4].onmouseover = function() {
//     listContent.style.display = "block";
//     listContent.setAttribute("src", "./images/" + listImgArr[4]);
// }
// content[5].onmouseover = function() {
//     listContent.style.display = "block";
//     listContent.setAttribute("src", "./images/" + listImgArr[5]);
// }
// content[6].onmouseover = function() {
//     listContent.style.display = "block";
//     listContent.setAttribute("src", "./images/" + listImgArr[6]);
// }
// content[7].onmouseover = function() {
//     listContent.style.display = "block";
//     listContent.setAttribute("src", "./images/" + listImgArr[7]);
// }
// content[8].onmouseover = function() {
//     listContent.style.display = "block";
//     listContent.setAttribute("src", "./images/" + listImgArr[8]);
// }
// content[9].onmouseover = function() {
//     listContent.style.display = "block";
//     listContent.setAttribute("src", "./images/" + listImgArr[9]);
// }
// content[10].onmouseover = function() {
//     listContent.style.display = "block";
//     listContent.setAttribute("src", "./images/" + listImgArr[10]);
// }
// content[11].onmouseover = function() {
//     listContent.style.display = "block";
//     listContent.setAttribute("src", "./images/" + listImgArr[11]);
// }
for(var i = 0; i < content.length; i ++) {
    content[i].onmouseover = function() {
        listContent.style.display = "block";
        var num;
        for(var j = 0; j < content.length; j ++) {
            if(content[j].innerHTML == this.innerHTML) num = j
        }
        listContent.setAttribute("src", "./images/" + listImgArr[num % listImgArr.length]);
    }
    content[i].onmouseout = function() {
        listContent.style.display = "none";
    }
}