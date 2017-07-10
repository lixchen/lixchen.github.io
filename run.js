var fs = require('fs');

var data = [];

var filesName = fs.readdirSync('./doc/', 'utf8');

filesName.forEach((item, index) => {
    var fileMessage = fs.statSync(`./doc/${item}`);
    // var mtime = `${fileMessage.mtime.getFullYear()}-${fileMessage.mtime.getMonth()+1}-${fileMessage.mtime.getDate()}`;
    var mtime = fileMessage.mtime.toDateString().slice(4);
    data[index] = {
        title: item.replace('.md', ''),
        time: mtime,
    }
    fs.writeFile('./data.json', JSON.stringify(data));

    console.log("数据加载完成.");
})
