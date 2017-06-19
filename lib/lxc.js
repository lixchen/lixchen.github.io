// DOM选择函数
function $(selector) {
    const idReg = /^#[a-zA-Z]+([-_]?[a-zA-z]+)*$/g;
    const classReg = /^\.[a-zA-Z]+([-_]?[a-zA-z]+)*$/g;
    const tagReg = /^[a-zA-Z]+[a-zA-Z]*$/g;
    let selectorType = 'querySelectorAll';
    // 判断改用哪种方式获取元素
    if (idReg.test(selector)) {
        selectorType = 'getElementById';
        selector = selector.substr(1, selector.length);
    } else if (classReg.test(selector)) {
        selectorType = 'getElementsByClassName';
        selector = selector.substr(1, selector.length)
    } else if (tagReg.test(selector)) {
        selectorType = 'getElementsByTagName';
    } else {
        return [];
    }
    // 将选择到的元素集合转换成数组
    const elems = document[selectorType](selector) || [];
    // 如果是getElementById获取的元素，则直接返回
    if (elems.length) {
        return Array.from(elems);
    } else {
        return elems;
    }
}

// 设置样式和获取样式
function css(elem, cssRules, value) {
    if (typeof cssRules === 'string') {
        if (!value) {
            let result;
            if (cssRules === 'width' || cssRules === 'height') {
                // 返回的是元素的总高度(padding+border)
                result = elem.getBoundingClientRect()[cssRules] + 'px';
            } else {
                // 大多数情况下可以使用getComputedStyle(elem, null)[cssRules]
                result = document.defaultView.getComputedStyle(elem, null).getPropertyValue(cssRules);
            }
            return result === 'auto' ? '0px' : result;
        } else {
            elem.style[cssRules] = value;
        }
    } else {
        // 传入json的情况下
        for (let i in cssRules) {
            elem.style[i] = cssRules[i];
        }
    }
}

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
                // 这里没有除10 
                step = json[attr] - currentValue; // 每次执行都会变化
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
