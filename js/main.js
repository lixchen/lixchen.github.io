function Article(obj) {
    this.title = obj.title;
    this.time = obj.time;
    this.type = obj.type;
    this.description = obj.description;
    this.link = obj.link;
    this.content = `
        <h3>${this.title}</h3>
        <time>${this.time}</time>
        <span>${this.type}</span>
        <p>${this.description}</p>
        <a href="${this.link}">read me</a>
    `
}
Article.prototype.render = function () {
    var section = document.createElement('section');
    section.innerHTML = this.content;
    main.appendChild(section);
};
var count = 0;

var arrLike = main.children;


function lxc(type) {
    if (type) {
        data = data.filter(function (item) {
            return item.type === type;
        });
    }
    data.forEach(function (item, index, arr) {
        if (index >= 10 * count && index < 10 * (count + 1)) {
            var article = new Article(item);
            article.render();
        }
    });
    window.scrollTo(0, 0);
}
next.onclick = function () {
    count++;
    if (count > len / 10) {
        count = parseInt(len / 10);
        return false;
    }
    main.innerHTML = '';
    lxc();
    return false;
}

last.onclick = function () {
    count--;
    if (count < 0) {
        count = 0;
        return false;
    }
    main.innerHTML = '';
    lxc();
    return false;
}

// 动态添加 分页标签
var len = data.length;
for (var i = 0; i < Math.ceil(len / 10); i++) {
    var a = document.createElement('a');
    a.innerHTML = i + 1;
    page.insertBefore(a, page.lastElementChild);
    a.onclick = function () {
        main.innerHTML = '';
        count = (parseInt(this.textContent) - 1) < 1 ? 0 : (parseInt(this.textContent) - 1);
        lxc();
        return false;
    }
}
