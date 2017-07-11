"use strict";
// 处理数据，暂时还没有排序功能

function dataHandle(data) {
    var newData = [];
    for (var prop in data) {
        newData = newData.concat(data[prop]);
    }
    return newData;
}

function MyArticle(elemId, data) {
    this.elem = document.getElementById(elemId);
    this.data = dataHandle(data);
    this.category = location.hash.substr(1);
    this.fragment = document.createDocumentFragment();
    this.count = 0;
    this.topTenData; // 保存前十项数据
    this.page;
}

// 将数据分类 并且限制最多渲染10项
MyArticle.prototype.classify = function () {
    var _this = this;

    if (this.category) {
        this.data = this.data.filter(function (item) {
            return item.type === _this.category;
        });
        this.topTenData = this.data.filter(function (item, index) {
            return index >= 10 * _this.count && index < 10 * (_this.count + 1);
        });
    } else {
        this.topTenData = this.data.filter(function (item, index) {
            return index >= 10 * _this.count && index < 10 * (_this.count + 1);
        });
    }
};
// 渲染数据到页面
MyArticle.prototype.render = function (obj) {
    var ul = document.createElement('ul');
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = obj[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var value = _step.value;

            var li = document.createElement('li');
            li.innerHTML = '\n            <h3>' + value.time + '<span>' + value.type + '</span></h3>\n            <h2><a href=\'page.html#' + value.type + '/' + value.title + '\'>' + value.title + '</a></h2>\n        ';
            ul.appendChild(li);
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    this.fragment.appendChild(ul);
};
// 分页功能
MyArticle.prototype.paging = function () {
    var len = this.data.length;
    var pageNum = Math.ceil(len / 10);
    if (len > 10) {
        this.page = document.createElement("div");
        this.page.className = 'page';
        if (pageNum > 1) {
            this.page.innerHTML = '\n            <span class="last-page">last</span>\n            <span class="next-page">next</span>\n            ';
        }
        for (var i = 0; i < pageNum; i++) {
            var span = document.createElement('span');
            span.className = 'page-num';
            span.innerHTML = i + 1;
            this.page.insertBefore(span, this.page.lastElementChild);
        }
        this.fragment.appendChild(this.page);
    }
};

MyArticle.prototype.handler = function (event) {
    var that = this;
    var next = this.page.getElementsByClassName('next-page')[0];
    var last = this.page.getElementsByClassName('last-page')[0];
    var pageNum = this.page.getElementsByClassName('page-num');
    var len = this.data.length;
    return function (event) {
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
            for (var _iterator2 = pageNum[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var value = _step2.value;

                if (event.target === value) {
                    that.count = parseInt(value.textContent) - 1 < 1 ? 0 : parseInt(value.textContent) - 1;
                    that.run();
                }
            }
        } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion2 && _iterator2.return) {
                    _iterator2.return();
                }
            } finally {
                if (_didIteratorError2) {
                    throw _iteratorError2;
                }
            }
        }

        if (event.target === next) {
            that.count++;
            if (that.count > len / 10) {
                that.count = parseInt(len / 10);
                return false;
            }
            that.run();
        } else if (event.target === last) {
            that.count--;
            if (that.count < 0) {
                that.count = 0;
                return false;
            }
            that.run();
        }
    };
};
// 事件处理程序
MyArticle.prototype.listener = function () {
    if (this.page) {
        this.elem.addEventListener('click', this.handler());
    }
};

// 运行实例
MyArticle.prototype.run = function () {
    this.classify();
    this.render(this.topTenData);
    this.paging();
    this.elem.innerHTML = '';
    this.elem.appendChild(this.fragment);
    this.listener();
};

function get(fileName) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', fileName);
    xhr.onload = function () {
        if (xhr.status === 200) {
            var data = JSON.parse(xhr.responseText);
            var lxc = new MyArticle("main", data);
            lxc.run();
        } else {
            console.log('error');
        }
    };
    xhr.send();
}