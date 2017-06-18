// 设置样式和获取样式
function css(elem, cssRules, value) {
    if (typeof cssRules === 'string') {
        if (!value) {
            // 大多数情况下可以使用getComputedStyle(elem, null)[cssRules]
            return document.defaultView.getComputedStyle(elem, null).getPropertyValue(cssRules);
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