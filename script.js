var article = document.getElementsByClassName('block article body')[0].textContent;

if (article.indexOf('Giel Beelen') >= -1) {
	var qs = article.split('"');
	if (qs !== null) {
		for (var i = 1; i < qs.length; i = i + 2) {
			var aq = '';
			for (var j = 0; j < qs[i].length; j++) {
				aq += (j % 2 === 0) ? qs[i].charAt(j).toUpperCase() : qs[i].charAt(j).toLowerCase();
			}
			article = article.replace(qs[i],aq);
		}
	}
	
	document.getElementsByClassName('block article body')[0].textContent = article;
}

