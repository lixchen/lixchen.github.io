"use strict";



function MyArticle(elemId, data) {
    this.elem = document.getElementById(elemId);
    this.data = data;
    this.category = location.hash.substr(1);
    this.fragment = document.createDocumentFragment();
    this.count = 0;
    this.topTenData; // 保存前十项数据
    this.page;
}

// 将数据分类 并且限制最多渲染10项
MyArticle.prototype.classify = function() {
    if (this.category) {
        this.data = this.data.filter(item => (item.type === this.category));
        this.topTenData = this.data.filter((item, index) => (index >= 10 * this.count && index < 10 * (this.count + 1)));
    } else {
        this.topTenData = this.data.filter((item, index) => (index >= 10 * this.count && index < 10 * (this.count + 1)));
    }
};
// 渲染数据到页面
MyArticle.prototype.render = function(obj) {
    const ul = document.createElement('ul');
    for (let value of obj) {
        const li = document.createElement('li');
        li.innerHTML = `
            <h3>${value.time}</h3>
            <h2><a href='page.html#${value.title}'>${value.title}</a></h2>
        `;
        ul.appendChild(li);
    }
    this.fragment.appendChild(ul);
};
// 分页功能
MyArticle.prototype.paging = function() {
    const len = this.data.length;
    const pageNum = Math.ceil(len / 10);
    if (len > 10) {
        this.page = document.createElement("div");
        this.page.className = 'page';
        if (pageNum > 1) {
            this.page.innerHTML = `
            <span class="last-page">last</span>
            <span class="next-page">next</span>
            `;
        }
        for (let i = 0; i < pageNum; i++) {
            const span = document.createElement('span');
            span.className = 'page-num'
            span.innerHTML = i + 1;
            this.page.insertBefore(span, this.page.lastElementChild);
        }
        this.fragment.appendChild(this.page);
    }

};

MyArticle.prototype.handler = function(event) {
    const that = this;
    const next = this.page.getElementsByClassName('next-page')[0];
    const last = this.page.getElementsByClassName('last-page')[0];
    const pageNum = this.page.getElementsByClassName('page-num');
    const len = this.data.length;
    return function(event) {
        for (let value of pageNum) {
            if (event.target === value) {
                that.count = (parseInt(value.textContent) - 1) < 1 ? 0 : (parseInt(value.textContent) - 1);
                that.run();
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
    }
};
// 事件处理程序
MyArticle.prototype.listener = function() {
    if (this.page) {
        this.elem.addEventListener('click', this.handler());
    }
};

// 运行实例
MyArticle.prototype.run = function() {
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
    xhr.onload = function() {
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
