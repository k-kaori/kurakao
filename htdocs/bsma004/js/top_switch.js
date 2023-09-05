$(document).ready(function(){
	$("nav ul li.news").click(function() {
		$("nav ul li").each(function() {
			$(this).css({"background":"#0452A3"})
		})
		$("nav ul li.news").css({"background":"#009CE5"})
		$("#tab1").show();
		$("#tab2").hide();
		$("#tab3").hide();
		$("#tab4").hide();
	})
	$("nav ul li.setup").click(function() {
		$("nav ul li").each(function() {
			$(this).css({"background":"#0452A3"})
		})
		$("nav ul li.setup").css({"background":"#009CE5"})
		$("#tab1").hide();
		$("#tab2").show();
		$("#tab3").hide();
		$("#tab4").hide();
	})
	$("nav ul li.faq").click(function() {
		$("nav ul li").each(function() {
			$(this).css({"background":"#0452A3"})
		})
		$("nav ul li.faq").css({"background":"#009CE5"})
		$("#tab1").hide();
		$("#tab2").hide();
		$("#tab3").show();
		$("#tab4").hide();
	})
	$("nav ul li.protocol").click(function() {
		$("nav ul li").each(function() {
			$(this).css({"background":"#0452A3"})
		})
		$("nav ul li.protocol").css({"background":"#009CE5"})
		$("#tab1").hide();
		$("#tab2").hide();
		$("#tab3").hide();
		$("#tab4").show();
	})
})
