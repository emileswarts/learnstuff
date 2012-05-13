$(function(){
	//1.  create scroll effect
	//2.  handle slider
	//3.  next and prev buttons
	//4.  Support vertical and horizontal
	var $panels = $('#slider .panel');
	var $container = $('#slider .scrollContainer');
	var $scroll = $('#slider .scroll').css("overflow", "hidden");
	var horizontal = true;

    $scroll 
		.before('<img src="images/scroll_left.png" class="scrollButtons left" /> ')
		.after('<img src="images/scroll_right.png" class="scrollButtons right" /> ');

	$('#slider .navigation a').click(selectNav);

	if(horizontal)
	{
		$panels.css({
			'float' : 'left',
			'position' : 'relative'
		});
	}

	$container.css("width", $panels[0].offsetWidth * $panels.length);

	function selectNav(){
		$(this)
			.parents("ul:first")
				.find("a")
					.removeClass("selected")
				.end()
			.end()
			.addClass("selected");
	}

	var scrollOptions = {
		target: $scroll,
		items: $panels,
		navigation: ".navigation a",
		prev: "img.left",
		next: "img.right",
		axis: "xy",
		duration: 500,
		easing: "swing",
		onAfter: trigger
	}

	function trigger(data){
		var el = $("#slider .navigation").find('a[href$="' + data.id + '"]').get(0);
		selectNav.call(el);
	}

	if(window.location.hash){
		trigger(window.location.hash.substr(1));

	}else{
		$("#slider .navigation a:first").click();
	}

	$('#slider').serialScroll(scrollOptions);

	$.localScroll(scrollOptions);
});

