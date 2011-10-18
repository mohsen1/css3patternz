/* Project: CSS3 Patternz
 * Description: Generate CSS3 Patterns and the necessary code.
 * Authors: Mohsen Nabiloo-Azimi (@mohsen____), Andrew Henderson (@AndrewHenderson)
 * Start Date: Oct 12, 2011
 */
 
//setAsideHeight
function setHeights(){
	$('aside, #pattern').height(innerHeight - 60 - $('footer').height());
}



// document load
 $(document).ready(function(){
	
 	setHeights();

	$("#generate").click(function(){
		$("#output").html('<pre class="brush: css"></pre>');
		var pattern = $("#pattern").attr("style");
		$("#output pre").html(pattern);
		SyntaxHighlighter.all();	
	});
    
 });
 
// footer resizable
$('footer .resize.handle').bind('mousedown', function(mde){
	var currentHeight = $('footer').height();
	$(window).bind('mousemove', function(mme){
		if(mme.pageY < innerHeight - 100 && mme.pageY > 150){
			$('footer').height(currentHeight + mde.pageY - mme.pageY);
			$('#output').height($('footer').height() - 40);
			setAsideHeight();
	    }
		$(window).bind('mouseup', function(){
			$(window).unbind('mousemove');
		})
	})
});


window.onresize = function  () {
  setAsideHeight();
}

