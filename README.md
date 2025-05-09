# WX-Barcode-Launcher

WX-Barcode-Launcher 是一个微信小程序案例，用于外部程序跳转微信并打开指定小程序,传值自动生成二维码（QR Code）。适合在网页、系统或其他平台中快速跳转到小程序并展示二维码，长按即可识别内容。

## ✨ 功能特色

- 🧾 支持通过 URL 参数传值
- 🔳 自动生成二维码
- 👆 支持长按识别二维码内容
- 🌐 附带网页跳转 Demo（`wechat.html`）
- 🧩 结构清晰，便于二次开发
- 主页是伪装页，可任意修改，对逻辑没关系。

---

### 示例用途
比如传递名片加好友。
![实例1](https://github.com/user-attachments/assets/87479bf6-4e87-43a4-b49a-70c8165bf33d)
![实例2](https://github.com/user-attachments/assets/39107e1a-454a-4578-b6c8-0337d6204159)

## 🚀 使用说明

### 1. 小程序配置（修改 `project.config.json`）

使用你自己的小程序时，请将根目录下的 `project.config.json` 中的 `appid` 替换为你的：

```json
{
  "appid": "your-mini-program-appid", // ← 修改为你的小程序 AppID
  "compileType": "miniprogram",
  ...
}
```


---

### 2. 使用网页跳转 Demo（wechat.html）

项目中包含一个网页跳转示例文件 `wechat.html`，可在手机浏览器中打开该文件，并跳转打开你的小程序，同时传递参数。

跳转方式可看官方文档：https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/url-scheme.html

#### 使用步骤如下：

1. 打开项目根目录中的 `wechat.html` 文件。

2. 替换为你自己的微信小程序 AppID。

3. 修改传递的二维码内容，修改为你想展示的二维码内容。

5. 将 `wechat.html` 上传至你的服务器，或直接用手机浏览器打开。

   浏览器将会跳转打开微信小程序，并传递 `data` 参数用于生成二维码。

**注意：** 该跳转方式仅适用于手机浏览器，PC 有可能旧版本浏览器不支持 `weixin://` 协议跳转。

---

## ⭐ 支持我

如果你觉得这个项目有帮助，欢迎点个 Star ⭐️！
```

---
