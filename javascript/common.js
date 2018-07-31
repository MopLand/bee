var chm = 0;
var menu =
[
	['手册首页','index.htm'],
	[
	 	['目录结构','structure.htm'],
		['系统架构','framework.htm'],
		['配置文件','config.htm']
	],
	['模块与小工具'],
	[
		['应用模块','application.htm'],
		['小工具','widget.htm']
	],
	['基本函数'],
	[
		['基本函数','library.htm'],
		['数组处理','array.htm'],
		['UBB相关','ubb.htm'],
		['验证函数','verify.htm'],
		['过滤函数','filter.htm'],
		['图片验证','captcha.htm'],
		['客户端函数包','client.htm']
	],
	['类与方法'],
	[
		['数据查询','database.htm'],
		['文件上传','attach.htm'],
		['缓存相关','cached.htm'],
		['系统函数','system.htm'],
		['应用模块','module.htm'],
		['勾子函数','hooks.htm']
	],
	['通行证'],
	[
		['公共模板','template.htm'],
		['公共函数','passport.htm']
	],
	['JavaScript API '],
	[
		['通行证','passport.js.htm'],
		['上传组件','upload.htm'],
		['评论处理','commect.htm'],
		['分享组件','share.htm']
	]
];

function $(id) {
	return document.getElementById(id);
}

var currentfile = location.href.substr(location.href.lastIndexOf('/') + 1);

function documentmenu(showtype) {
	var returnstr = '';
	if(showtype && chm) {
		document.body.style.background = 'none';
		$('wrap').style.paddingLeft = 0;
		return;
	}
	var menucount = 0;
	var tabon;
	for(var i in menu) {
		if(typeof(menu[i][0]) == 'object') {
			if(showtype) {
				returnstr += '<div class="subinfo" id="menu' + menucount + '" style="display:;">';
				for(var k in menu[i]) {
					tabon = '';
					if(currentfile && currentfile == menu[i][k][1]) {
						tabon = 'tabon ';
					}
					if(!menu[i][k][1]) {
						menu[i][k][1] = '';
					}
					returnstr += '<a class="' + tabon + 'sidelist" href="' + menu[i][k][1] + '">' + menu[i][k][0] + '</a>';
				}
				returnstr += '</div>';
			}
		} else {
			tabon = '';
			if(!menu[i][1]) {
				menu[i][1] = '';
			}
			if(showtype) {
				menucount++;
				if(currentfile && currentfile == menu[i][1]) {
					tabon = 'tabon ';
				}
				returnstr += '<a class="' + tabon + 'sideul"';
				if(menu[i][1] != '') {
					returnstr += ' href="' + menu[i][1] +'"';
				}
				returnstr += '><em class="shrink" onclick="collapse(this, \'menu' + menucount + '\');return false">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</em>' + menu[i][0] + '</a>';
			} else {
				returnstr += '<li><a';
				if(menu[i][1] != '') {
					returnstr += ' href="' + menu[i][1] +'"';
				}
				returnstr += '>' + menu[i][0] + '</a></li>';
			}
		}
	}
	if(showtype) {
		document.write('<div class="side" style="height: 400px;">' + returnstr + '</div>');
	} else {
		return '<ul>' + returnstr + '</ul>';
	}
}

function showmenu(ctrl) {
	ctrl.className = ctrl.className == 'otherson' ? 'othersoff' : 'otherson';
	var menu = parent.document.getElementById('toggle');
	if(!menu) {
		menu = parent.document.createElement('div');
		menu.id = 'toggle';
		menu.innerHTML = documentmenu(0);
		var obj = ctrl;
		var x = ctrl.offsetLeft;
		var y = ctrl.offsetTop;
		while((obj = obj.offsetParent) != null) {
			x += obj.offsetLeft;
			y += obj.offsetTop;
		}
		menu.style.left = x + 'px';
		menu.style.top = y + ctrl.offsetHeight + 'px';
		menu.className = 'togglemenu';
		menu.style.display = '';
		parent.document.body.appendChild(menu);
	} else {
		menu.style.display = menu.style.display == 'none' ? '' : 'none';
	}
}

function collapse(ctrlobj, showobj) {
	if(!$(showobj)) {
		return;
	}
	if($(showobj).style.display == '') {
		ctrlobj.className = 'spread';
		$(showobj).style.display = 'none';
	} else {
		ctrlobj.className = 'shrink';
		$(showobj).style.display = '';
	}
}

function showindex(){
	var menu = document.getElementsByTagName('h3');
	var text = '';
	var rnid = null;
	
	if( menu.length < 2 ) return;
	
	for( var i = 0; i < menu.length; i++ ){
		rnid = escape( menu[i].innerHTML );
		text += '<li><a href="#'+ rnid +'">'+ menu[i].innerHTML +'</a></li>';
		menu[i].insertAdjacentHTML('afterBegin','<a name="'+ rnid +'"></a>');
	}
	
	document.getElementById('mainbox').insertAdjacentHTML('afterBegin','<ul class="index">'+text+'</ul>');
	
}