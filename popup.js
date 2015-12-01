window.onload = function(){
	chrome.tabs.query(
		{
			currentWindow: true,    // currently focused window
		        active: true            // selected tab
		},
		function (tab){
			var title = tab[0].title
			var url = "http://listenonrepeat.com/watch/?v=epfPe2U_2Xk#ORANGE_RANGE_-_SUSHI%E9%A3%9F%E3%81%B9%E3%81%9F%E3%81%84_feat._%E3%82%BD%E3%82%A4%E3%82%BD%E3%83%BC%E3%82%B9";
			chrome.tabs.create({"url":url,"pinned":true});
		}
	);
};