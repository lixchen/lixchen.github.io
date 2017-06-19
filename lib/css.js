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