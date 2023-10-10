//Common Setting
var _ua = (function(){
	return {
		ltIE6:typeof window.addEventListener == "undefined" && typeof document.documentElement.style.maxHeight == "undefined",
		ltIE7:typeof window.addEventListener == "undefined" && typeof document.querySelectorAll == "undefined",
		ltIE8:typeof window.addEventListener == "undefined" && typeof document.getElementsByClassName == "undefined",
		IE:document.uniqueID,
		Firefox:window.sidebar,
		Opera:window.opera,
		Webkit:!document.uniqueID && !window.opera && !window.sidebar && window.localStorage && typeof window.orientation == "undefined",
		Mobile:typeof window.orientation != "undefined"
	}
})();

var _isMobile = {
	Android: function() {return navigator.userAgent.match(/Android/i);},
	BlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i);},
	iOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},
	iPhone: function() {return navigator.userAgent.match(/iPhone/i);},
	iPad: function() {return navigator.userAgent.match(/iPad/i);},
	iPod: function() {return navigator.userAgent.match(/iPod/i);},
	Opera: function() {return navigator.userAgent.match(/Opera Mini/i);},
	Windows: function() {return navigator.userAgent.match(/IEMobile/i);},
	any: function() {return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());}
};

jQuery.easing.easeOutQuart = function(j,i,b,c,d){return -c*((i=i/d-1)*i*i*i-1)+b;}

$(function() {
	$('a[href^="#"]').not('a[href="#"]').not('a.tabLink').click(function() {
		var hash = this.hash;
		if(!hash || hash == "#")
			return false;
			
		if ($(this).hasClass("andOpen")) {
			var _index = $(".sectionTglBtn").index($(hash));
			$(".sectionTglBtn").eq(_index).addClass("open");
			if (!$(".toggleBlock").eq(_index).is(":visible")) $(".toggleBlock").eq(_index).slideDown(500);
		}
		
		$((_ua.Webkit || _isMobile.iOS() || _isMobile.Android()) ? 'body' : 'html')
		.animate({scrollTop: $(hash).offset().top}, 500, "swing");
		return false;
	}); 
	
	$('area.tabLink, a.tabLink').each(function(index, element) {
		$(this).click(function() {
			var _index = index;
			if (_index > 2) _index = _index - 3;
			$(".sectionTglBtn").eq(1).addClass("open");
			if (!$(".toggleBlock").eq(1).is(":visible")) $(".toggleBlock").eq(1).slideDown(500);
			
			$(".toggleBlock").eq(1).find(".tabPage").hide();
			$(".toggleBlock").eq(1).find(".tabList .col a").removeClass("current");
			$(".toggleBlock").eq(1).find(".tabPage").eq(_index).show();
			$(".toggleBlock").eq(1).find(".tabList .col a").eq(_index).addClass("current");
			
		var hash = "#section01";
		if(!hash || hash == "#")
			return false;
		$((_ua.Webkit || _isMobile.iOS() || _isMobile.Android()) ? 'body' : 'html')
		.animate({scrollTop: $(hash).offset().top}, 500, "swing");
		return false;
	}); 
	});
	
	if ($(".toggleBlock").length > 0) {
		$(".toggleBlock").each(function() {
			$(this).find(".tabPage").hide().eq(0).show();
		});
		
		$(".toggleBlock .tabList .col a").click(function() {
			$(this).parent(".col").parent(".tabList").parent(".toggleBlock").find(".tabPage").hide();
			$(this).parent(".col").parent(".tabList").find(".col a").removeClass("current");
			$(this).parent(".col").find("a").addClass("current");
			var tabID = $(this).parent(".col").parent(".tabList").find(".col").index($(this).parent(".col"));
			$(this).parent(".col").parent(".tabList").parent(".toggleBlock").find(".tabPage:eq(" + tabID + ")").show();
			return false;
		});
	}
	
	var openFlgs = [];
	$(".toggleBlock").hide();
	$(".sectionTglBtn").css("cursor","pointer");
	$(".sectionTglBtn").click(function() {
		$(this).toggleClass("open");
		$(this).next(".toggleBlock").slideToggle(500);
		
		//他が開いているか判定
		$(".sectionTglBtn").each(function() {
			var _openFlg = false;
			if($(this).hasClass("open")) _openFlg = true;
			openFlgs.push(_openFlg);
		});
		if (openFlgs.indexOf(false) >= 0) {
			$(".allChangeBtn").removeClass("close").addClass("open");
			$(".allChangeBtn a").text("すべて開く");
		} else {
			$(".allChangeBtn").removeClass("open").addClass("close");
			$(".allChangeBtn a").text("すべて閉じる");
		}
		openFlgs.length = 0;
		
		return false;
	});
	
	$(".allChangeBtn a").click(function() {
		if ($(this).parent(".allChangeBtn").hasClass("open")) {
			$(".toggleBlock").slideDown(500);
			$(".allChangeBtn").removeClass("open").addClass("close");
			$(".sectionTglBtn").addClass("open");
			$(".allChangeBtn a").text("すべて閉じる");
		} else {
			$(".toggleBlock").slideUp(500);
			$(".allChangeBtn").removeClass("close").addClass("open");
			$(".sectionTglBtn").removeClass("open");
			$(".allChangeBtn a").text("すべて開く");
		}
		return false;
	});
	
	$(".printPage").click(function() {
		$(".toggleBlock").show();
		$(".sectionTglBtn").addClass("open");
		$(".allChangeBtn").removeClass("open").addClass("close");
		$(".allChangeBtn a").text("すべて閉じる");
		window.print();
		return false;
	});
	
});