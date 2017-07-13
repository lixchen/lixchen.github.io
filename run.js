var fs = require('fs');

// 用于存储获取到的数据
var data = {};
// 获取文件夹名称
var folders = fs.readdirSync('./doc/', 'utf8');

// 遍历文件夹获取文件信息并处理
folders.forEach(function (item) {
  data[item] = [];
  var files = fs.readdirSync(`./doc/${item}`, 'urf-8');
  // 遍历文件下的文件
  files.forEach(function (elem, index) {
    // 获取文件信息
    var fileMessage = fs.statSync(`./doc/${item}/${elem}`);
    data[item][index] = {
      title: elem.replace('.md', ''),
      time: fileMessage.mtime,
      type: item
    }
  })
})

// 写入数据
fs.writeFile('./data.json', JSON.stringify(data));
// 在控制台打印
console.log(data);
console.log(`\n数据载完成.`);