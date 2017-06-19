/*$(document).ready(function() {
	var language = "en";
	if (localStorage.getItem("language") != null) language = localStorage.getItem("language");
	
    i18n.init({
        lng: language,
        resStore: itemslang,
        fallbackLng: "en"
    }, function(o) {
        $(document).i18n()
    }); 
	$(".lang").click(function() {
        var o = $(this).attr("data-lang");
		
		localStorage.setItem("language", o);
		
        i18n.init({
            lng: o
        }, function(o) {
            $(document).i18n()
        })
    })
});
*/
$(document).ready(function() {
	var language = "en";
	if (localStorage.getItem("language") != null) language = localStorage.getItem("language");
	
    i18n.init({
        lng: language,
        resGetPath: '/atlas/js/languages/__lng__.json',
        fallbackLng: "en"
    }, function(o) {
        $(document).i18n()
    }); 
	$(".lang").click(function() {
        var o = $(this).attr("data-lang");
		
		localStorage.setItem("language", o);
		
        i18n.init({
            lng: o
        }, function(o) {
            $(document).i18n()
        })
    })
});
