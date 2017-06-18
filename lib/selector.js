// DOM选择函数
function $(selector) {
    const idReg = /^#[a-zA-Z]+([-_]?[a-zA-z]+)*$/g;
    const classReg = /^\.[a-zA-Z]+([-_]?[a-zA-z]+)*$/g;
    const tagReg = /^[a-zA-Z]+[a-zA-Z]*$/g;
    let selectorType = 'querySelectorAll';
    if (idReg.test(selector)) {
        selectorType = 'getElementById';
        selector = selector.substr(1, selector.length);
    } else if (classReg.test(selector)) {
        selectorType = 'getElementsByClassName';
        selector = selector.substr(1, selector.length)
    } else if (tagReg.test(selector)) {
        selectorType = 'getElementsByTagName';
    }
    const elems = document[selectorType](selector) || [];
    if (elems.length) {
        return Array.from(elems);
    } else {
        return elems;
    }
}