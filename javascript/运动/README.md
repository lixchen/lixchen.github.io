# 基本动画

- 基本动画
- 匀速运动/淡入淡出
//缓动公式 leader 起始位置  target 目标位置
var leader = 0, target = 0;
setInterval(function () {
        leader = leader + (target - leader) / 10;
}, 100)
