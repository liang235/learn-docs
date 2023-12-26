# window.open() 打开多个在生产上只能打开一个的问题

```js
const urlsToDownload = selectList.map((item) => `${host}${contextPath}/${this.server}.expMsgFj.do?ID=${item._PK_}`);
this.downloadZipsInSequence(urlsToDownload);

async downloadZip(url) {
	const downloadLink = document.createElement('a');
	downloadLink.href = `${url}&${new Date().getTime()}`;
	downloadLink.click();
},

async downloadZipsInSequence(urls) {
	for (const [index, item] of urls.entries()) {
		this.downloadZip(item);
		await new Promise((resolve) => setTimeout(resolve, 500)); // 添加延迟以确保下载完成
	}
},
```