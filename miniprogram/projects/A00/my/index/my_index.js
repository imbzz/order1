let behavior = require('../../../../behavior/my_index_bh.js');
let PassortBiz = require('../../../../biz/passport_biz.js');
let skin = require('../../skin/skin.js');

Page({
	behaviors: [behavior],

	onReady: function () {
		PassortBiz.initPage({
			skin,
			that: this,
			isLoadSkin: true,
			tabIndex: -1
		});
		
	},

    bindSetTap: function (e) {//设置按钮  该函数在behavior中设置
		this.setTap(e, skin);
	}
})