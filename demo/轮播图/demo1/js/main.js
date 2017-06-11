let box = document.getElementById('box');
let picList = document.getElementsByClassName('box-piclist')[0].getElementsByTagName('li');
let icoList = document.getElementsByClassName('box-icolist')[0].getElementsByTagName('li');
let icoUl = document.getElementsByClassName('box-icolist')[0].getElementsByTagName('ul')[0];
let textList = document.getElementsByClassName('box-textlist')[0].getElementsByTagName('li');
let rightBtn = document.getElementById('right');
let leftBtn = document.getElementById('left');
let icoPosX = icoUl.offsetLeft;
let num = 0;
// 点击切换图片 和 文字
for (let i = 0; i < icoList.length; i++) {
    icoList[i].addEventListener('click', function () {
        for (let j = 0; j < picList.length; j++) {
            picList[j].className = '';
            textList[j].className = '';
            icoList[j].getElementsByTagName('img')[0].className = '';
        }
        picList[i].className = 'show';
        textList[i].className = 'show';
        this.getElementsByTagName('img')[0].className = 'high';
    });
};


// 按钮切换图片
rightBtn.addEventListener('click', function () {
    if (icoUl.offsetLeft <= -(icoList.length - 7) * 73) {
        icoUl.style.left = -(icoList.length - 7) * 73 + 'px';
        rightBtn.className = 'btnchange';
    } else {
        icoUl.style.left = icoUl.offsetLeft - 73 + 'px';
        leftBtn.className = '';
    }
});

leftBtn.addEventListener('click', function () {
    rightBtn.className = '';
    if (icoUl.offsetLeft >= 0) {
        icoUl.style.left = 0;
        leftBtn.className = 'btnchange';
    } else {
        icoUl.style.left = icoUl.offsetLeft + 73 + 'px';
    }
});


// 自动播放
var timer = setInterval(function () {
    // 清除class
    for (var i = 0; i < picList.length; i++) {
        picList[i].className = '';
        textList[i].className = '';
    }
    // 设置要显示文字和图片
    num++;
    if (num >= picList.length) {
        num = 0;
    }
    picList[num].className = 'show';
    textList[num].className = 'show';
    // icoUl.style.left = -num * 73 + 'px';
    for (var i = 0; i < icoList.length; i++) {
        icoList[i].getElementsByTagName('img')[0].className = '';
    }
    icoList[num].getElementsByTagName('img')[0].className = 'high';
    if (num > 7) {
        icoUl.style.left = icoUl.offsetLeft - 73 + 'px';
    }
}, 1000);

box.addEventListener('mouseover', function () {
    clearInterval(timer);
});