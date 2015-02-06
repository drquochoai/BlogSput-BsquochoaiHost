var host = "https://googledrive.com/host/0B01VnLY_sd58fkRqR3poWWNHeEJSZGxPS0dvMDJaVUIyRE1TUWlrSUlGY1plS2JfVnpUZzg/"
function getDulieu(){
	var hoi ={}
	dapan = {}
	$.getJSON( host+"4985_Collegiate_English_words_DAPAN.json", function( j ) {
		hoi= j
	});
	console.log(hoi)
}