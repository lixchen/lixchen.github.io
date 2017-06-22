function Article(obj) {
    this.title = obj.title;
    this.time = obj.time;
    this.description = obj.description;
    this.link = obj.link;
    this.content = `
        <h3>${this.title}</h3>
        <time>${this.time}</time>
        <p>${this.description}</p>
        <a href="${this.link}">read me</a>
    `
}
Article.prototype.render = function () {
    var section = document.createElement('section');
    section.innerHTML = this.content;
    main.appendChild(section);
};

data.forEach(function (item, index, arr) {
    if (index < 10) {
        var article = new Article(item);
        article.render();
    }
});
var arrLike = main.children;
var count = 0;
next.onclick = function () {
    count++;
    main.innerHTML = '';
    data.forEach(function (item, index, arr) {
        if (index > 9 * count && index < 20 * count) {
            var article = new Article(item);
            article.render();
        }
    });
}
