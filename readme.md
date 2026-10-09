# koishi-plugin-pics-changer3

[![npm](https://img.shields.io/npm/v/koishi-plugin-pics-changer3?style=flat-square)](https://www.npmjs.com/package/koishi-plugin-pics-changer3)

对图片进行左右上下对称左右上下翻转

## 配置

配置页面使用 `Schema.intersect` 分组，基础设置位于指令设置之前。

| 分组 | 配置项 | 默认值 | 说明 |
| --- | --- | --- | --- |
| 基础设置 | `enableQuote` | `false` | 发送图片、等待提示、超时提示、无效图片提示及错误消息时是否引用触发指令的原始消息；等待补图后仍引用原指令消息 |
| 基础设置 | `promptTimeout` | `30` | 等待用户发送图片的超时时间，单位为秒 |
| 指令设置 | `upsymmetry` | `上对称` | 上对称指令 |
| 指令设置 | `downsymmetry` | `下对称` | 下对称指令 |
| 指令设置 | `leftsymmetry` | `左对称` | 左对称指令 |
| 指令设置 | `rightsymmetry` | `右对称` | 右对称指令 |
| 指令设置 | `defaultsymmetry` | `对称` | 默认对称指令，执行左对称 |
