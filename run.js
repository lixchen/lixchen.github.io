var fs = require('fs');

var data = [];

var filesName = fs.readdirSync('./doc/', 'utf8');

filesName.forEach((item, index) => {
    var fileMessage = fs.statSync(`./doc/${item}`);
    data[index] = {
        title: item.replace('.md', ''),
        time: fileMessage.mtime,
    }
});
data.sort(function (a, b) {
    return b.time - a.time;
});
for(var i = 0; i < data.length; i++) {
    data[i].time = data[i].time.toDateString().slice(4);
}
fs.writeFile('./data.json', JSON.stringify(data));

console.log(data);
console.log(`\n总计${data.length}条数据,已加载完成.`);