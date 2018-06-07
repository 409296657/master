<!-- 公共方法 -->
<script type="text/javascript">
const util = {
	setCookie: function (name, value, days) { //存储cookie
		let d = new Date;
		let ds = ds ? ds : 0.5;
		let vs = value;
		d.setTime(d.getTime() + 24 * 60 * 60 * 1000 * ds);
		if (typeof value == 'object') vs = JSON.stringify(value)
		window.document.cookie = name + "=" + vs + ";path=/;expires=" + d.toGMTString();
	},

	getCookie: function(name){ //获取cookie
		let v = window.document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
		let vs = v ? v[2] : null;
		if(typeof vs == 'string'){
			try {
				let obj = JSON.parse(vs);
				if (typeof obj == 'object' && obj) {
					return obj;
				}else {
					return vs;
				}
			}catch(e){
				return vs;
			}
		}
	},

	deleteCookie:function(name) { //清除cookie
		this.setCookie(name, '', -1);
	},

	isvalidPhone:function(str) {//验证手机号码是否正确
	  const reg = /^1[3|4|5|7|8][0-9]\d{8}$/
	  return reg.test(str)
	},

	formTimeToData:function(time){//计算发布文章到现在过了多长时间
		let ot = Date.parse(time)/1000;
		let nt = new Date().getTime()/1000;
		let t = nt - ot;
		if (t<86400) {
			let h = parseInt(t/3600)+1;
			return "于"+h+"小时前发布";
		}else if (t>=86400&&t<2592000) {
			let d = parseInt(t/3600/24);
			return "于"+d+"天前发布";
		}else if (t>=2592000&&t<31104000) {
			let m = parseInt(t/3600/24/30);
			return "于"+m+"月前发布";
		}else if (t>=31104000) {
			let y = parseInt(t/3600/24/30/12);
			return "于"+y+"年前发布";
		}
	},

	replyTimeToData:function(time){//最新回复到现在过了多长时间
		let ot = Date.parse(time)/1000;
		let nt = new Date().getTime()/1000;
		let t = nt - ot;
		if (t<86400) {
			let h = parseInt(t/3600)+1;
			return "于"+h+"小时前回复";
		}else if (t>=86400&&t<2592000) {
			let d = parseInt(t/3600/24);
			return "于"+d+"天前回复";
		}else if (t>=2592000&&t<31104000) {
			let m = parseInt(t/3600/24/30);
			return "于"+m+"月前回复";
		}else if (t>=31104000) {
			let y = parseInt(t/3600/24/30/12);
			return "于"+y+"年前回复";
		}
	}

}

export default util;
</script>
