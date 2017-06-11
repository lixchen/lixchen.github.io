// 缓动
function animate(elem, json, type) {
    // 进来先清除定时器
    clearInterval(elem.timer);
    //  定时器
    elem.timer = setInterval(function () {
        var flag = true;
        for (var attr in json) {
            // 获取元素的当前属性值
            var currentValue = 0;
            var step = 0;
            currentValue = parseFloat(getComputedStyle(elem, null)[attr]);
            // 设置步长
            if (attr === 'opacity') {
                step = (json[attr] - currentValue); // 每次执行都会变化
            } else {
                step = (json[attr] - currentValue) / 10; // 每次执行都会变化
            }
            // 取整
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            // 当有任何一个条件不满足时 flag都为false
            if (currentValue != json[attr]) {
                flag = false;
            }
            // 开始运动
            if (attr === 'opacity') {
                elem.style[attr] = currentValue + (step / 10);
            } else {
                elem.style[attr] = currentValue + step + 'px';
            }

        }
        // 条件成立 停止定时器
        if (flag) {
            clearInterval(elem.timer);
        }

    }, 30);
};

// 匀速
function move(elem, step, json) {
    clearInterval(elem.timer);
    elem.timer = setInterval(function () {
        for (var attr in json) {
            var currentValue = parseFloat(getComputedStyle(elem, null)[attr]);
            // 计算step是正值还是负值
            step = (json[attr] > currentValue) ? Math.abs(step) : -Math.abs(step);
            if (attr === 'opacity') {
                elem.style[attr] = currentValue + step;
            }
            elem.style[attr] = currentValue + step + 'px';
            var result = Math.abs(json[attr] - currentValue);
            // step有可能变成了负值 所以比较绝对值
            if (result <= Math.abs(step)) {
                elem.style[attr] = json[attr] + 'px';
                clearInterval(elem.timer);
            }
        }
    }, 30);
};
