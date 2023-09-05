
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

	var count1 = 0;
	var count2 = 0;
	var count3 = 0;

	$("#toppage #MainContents .box-inner").hide();
	$("#toppage #MainContents .box-ttl").click(function() {	
		$(this).next().slideToggle();
		count1++;
		if (count1 % 2 == 0) {
		  $(this).removeClass('selected');
		}else {
		  $(this).addClass('selected');
		};

	});
	

})


