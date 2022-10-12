export function copyToClip(func) {
	navigator.clipboard.writeText('LightningLion').then(func).catch((err) => {
	  alert("错误，请自行复制口令，否则无法下载腕上B站！"+err)
	})
}
 
 export function openBili() {
   location.href = "https://apps.apple.com/cn/app/%E8%85%95%E4%B8%8Arss/id1632611843"
}
 