<!-- 公共方法 -->
<script type="text/javascript">
const util = {
	setCookie: function (name, value, days) { //存储cookie
		var d = new Date;
		var days = days ? days : 0.5;
		d.setTime(d.getTime() + 24 * 60 * 60 * 1000 * days);
		window.document.cookie = name + "=" + value + ";path=/;expires=" + d.toGMTString();
	},

	getCookie: function(name){ //获取cookie
		var v = window.document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
		return v ? v[2] : null;
	},

	deleteCookie:function(name) { //清除cookie
		this.setCookie(name, '', -1);
	},

	isvalidPhone:function(str) {//验证手机号码是否正确
	  const reg = /^1[3|4|5|7|8][0-9]\d{8}$/
	  return reg.test(str)
	},

}

export default util;
</script>
