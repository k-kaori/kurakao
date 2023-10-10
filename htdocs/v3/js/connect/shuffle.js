$(document).ready(function() {
	var $grid = $('#grid');
	
	$grid.shuffle({
		itemSelector: '.picture-item',
		group: 'all',
		speed: 300,
		easing: 'ease-in-out'
	});
	
	
	
	$('#btn li').on('click', function() {
		var $this = $(this),
		group = $this.data('group');
	
		$('#btn .active').removeClass('active');
		$this.addClass('active');
	
		if(group != 'all'){
			$grid.shuffle('shuffle', function($el, shuffle) {
				return group.indexOf($el.data('groups')) > -1
			});
		}else{
				$grid.shuffle( 'shuffle', 'all' );
		}

	});
});