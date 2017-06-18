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
    }
    // 如果没有获取到元素，则返回一个空的数组
    const elems = document[selectorType](selector) || [];
    // 如果是getElementById获取的元素，则直接返回，否则转换成数组
    if (elems.length) {
        return Array.from(elems);
    } else {
        return elems;
    }
}