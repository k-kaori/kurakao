
// hide URL bar
/*
window.onload = function() {
setTimeout(scrollTo, 100, 0, 1);
}
*/

// inputTxt deleteValue
function deleteValue(obj){
if(obj.value==obj.defaultValue){
obj.value="";
obj.style.color="#666";
}
}

$(function() {
	$("#toppage #MainContents .box-inner").hide();
	$("#toppage #MainContents .box-ttl").each(function(){
		$(this).click(function() {	
			$(this).next().slideToggle();
			if ($(this).attr("class").indexOf("selected") == -1) {
			  $(this).addClass('selected');
			}else {
			  $(this).removeClass('selected');
			}
		});
	});
})
