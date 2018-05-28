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

}

export default util;
</script>
