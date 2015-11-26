define(function(){
    return {
        pageGroups: [{"id":"18bfddb0-3945-c46c-4153-fa31fb9e4cce","name":"Default group","pages":[{"id":"7cb66ce6-fd53-fb4f-6be7-0eb4a95a717a","name":"Page 1"}]}],
        downloadLink: "//services.ninjamock.com/html/htmlExport/download?shareCode=W42QS&projectName=Untitled project",
        startupPageId: 0,

        forEachPage: function(func, thisArg){
        	for (var i = 0, l = this.pageGroups.length; i < l; ++i){
                var group = this.pageGroups[i];
                for (var j = 0, k = group.pages.length; j < k; ++j){
                    var page = group.pages[j];
                    if (func.call(thisArg, page) === false){
                    	return;
                    }
                }
            }
        },
        findPageById: function(pageId){
        	var result;
        	this.forEachPage(function(page){
        		if (page.id === pageId){
        			result = page;
        			return false;
        		}
        	});
        	return result;
        }
    }
});
