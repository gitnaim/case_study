$(function(){
	// 1) navigation 관련
	$("#nav > ul > li").hover(
		function(){
			$(this).parent().addClass("over");
		},
		function(){
			$(this).parent().removeClass("over");
		}
	);
	$("#nav > ul > li").focusin(function(){
		$(this).addClass("over");
	});
	$("#nav > ul > li").focusout(function(){
		$(this).removeClass("over");
	});
	$("#nav > ul > li:first-child").focusin(function(){
		$(this).parent().addClass("over");
	});
	$("#nav li:last-child li:last-child").focusout(function(){
		$(this).parent().parent().removeClass("over");
		$(this).parent().parent().parent().removeClass("over");
	});

	// 2) slider 관련
	var w;
	var total=4;
	var amount=0;

	$(window).resize(function(){
		w=$(window).width();

		if(w > 1200){
			distance=w;
		}
		else{
			distance=1200;
		}
		$(".slider .gallery ul").css({width: distance*total});
	});

	$(window).trigger("resize");

	$(".direction_nav .left").click(function(e){ // right moving
		e.preventDefault();

		if($(".gallery ul").is(":animated")){
			return false;
		}

		$(".gallery ul").prepend($(".gallery ul li").last());
		amount-=distance;
		$(".gallery ul").css({left: amount});

		amount+=distance;
		$(".gallery ul").animate({left: amount}, 500);
	});
	$(".direction_nav .right").click(function(e){ // left moving
		e.preventDefault();

		if($(".gallery ul").is(":animated")){
			return false;
		}

		amount-=distance;

		$(".gallery ul").animate({left: amount}, 500, function(){
			$(".gallery ul").append($(".gallery ul li").first());
			amount+=distance;
			$(".gallery ul").css({left: amount});
		});
	});
});