/**
 * tgNews: Tabs + AMS News + TGax  
 * Author: sonichuang
 * Create: 2017-05-21
 */

var tgNews = function(obj){
	this.selectID = obj.selectID;
	this.pgv = obj.pgv;
	this.tabTargets = obj.tabTargets;
	this.TGaxSetting = obj.TGaxSetting;

	this.init(obj);
}

tgNews.prototype.loadJs = function(url, callback, options) {
	options = options || {};
	var head = document.getElementsByTagName('head')[0] || document.documentElement,
		script = document.createElement('script'),
		done = false;
	script.src = url;
	if (options.charset) {
		script.charset = options.charset;
	}
	script.onerror = script.onload = script.onreadystatechange = function() {
		if (!done && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")) {
			done = true;
			if (callback) {
				callback();
			}
			script.onerror = script.onload = script.onreadystatechange = null;
			head.removeChild(script);
		}
	};
	head.insertBefore(script, head.firstChild);
}

tgNews.prototype.init = function(obj){
	var tabTriggerTPL = '<div class="news-box-hd"><div class="nbh-tab"><ul class="m-tab-triggers nbh-tab-triggers">{{tabTriggers}}</ul></div><div class="nhb-extra"><a href="/webplat/info/news_version3/25119/28361/28362/m17308/list_1.shtml" class="m-more a-tgax">more+</a></div>;'
	var tabPannelTPL = '<div class="m-tab-pannels news-box-bd">{{tabPannels}}</div>'

}

