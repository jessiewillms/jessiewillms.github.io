$(function() {

	hljs.initHighlightingOnLoad();

	$('a.exercise').each(function(i){
		var downloadLink = $(this).clone().prop('download',"").html('&#9660;').attr('title', 'download file');
		$(this).after(downloadLink);
	});

});
