// var fs = require('fs');

// // 用于存储获取到的数据
// var data = [];

// var filesName = fs.readdirSync('./doc/', 'utf8');

// filesName.forEach((item, index) => {
//   var fileMessage = fs.statSync(`./doc/${item}`);
//   data[index] = {
//     title: item.replace('.md', ''),
//     time: fileMessage.mtime,
//   }
// });
// data.sort(function (a, b) {
//   return b.time - a.time;
// });
// for (var i = 0; i < data.length; i++) {
//   data[i].time = data[i].time.toDateString().slice(4);
// }
// fs.writeFile('./data.json', JSON.stringify(data));

// console.log(data);
// console.log(`\n总计${data.length}条数据,已加载完成.`);




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
    // 按照日期排序
    data[item].sort(function (a, b) {
      return b.time - a.time;
    })
    // 格式化日期
    data[item][index].time = data[item][index].time.toDateString().slice(4);
  })
});


fs.writeFile('./data.json', JSON.stringify(data));

console.log(data);
console.log(`\n数据载完成.`);