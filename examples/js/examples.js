$(document).ready( function(){

	$('#def').darkTooltip();

	$('#def-html').darkTooltip({
		opacity:1
	});

	$('#click-me').darkTooltip({
		trigger:'click',
		animation:'flipIn',
		gravity:'west'
	});

	$('#confirm').darkTooltip({
		trigger:'click',
		animation:'flipIn',
		gravity:'west',
		confirm:true,
		yes:'Sure',
		no:'No Way'
	});

	$('#small-s').darkTooltip({
		size:'small',
		gravity: 'south'
	});
	$('#small-w').darkTooltip({
		size:'small',
		gravity: 'west'
	});
	$('#small-n').darkTooltip({
		size:'small',
		gravity: 'north'
	});
	$('#small-e').darkTooltip({
		size:'small',
		gravity: 'east'
	});

	$('#medium-s').darkTooltip({
		gravity: 'south'
	});
	$('#medium-w').darkTooltip({
		gravity: 'west'
	});
	$('#medium-n').darkTooltip({
		gravity: 'north'
	});
	$('#medium-e').darkTooltip({
		gravity: 'east'
	});

	$('#large-s').darkTooltip({
		size:'large',
		gravity: 'south'
	});
	$('#large-w').darkTooltip({
		size:'large',
		gravity: 'west'
	});
	$('#large-n').darkTooltip({
		size:'large',
		gravity: 'north'
	});
	$('#large-e').darkTooltip({
		size:'large',
		gravity: 'east'
	});


	$('#effect-none').darkTooltip({
		gravity:'west'
	});
	$('#effect-flipin').darkTooltip({
		animation:'flipIn',
		gravity:'west'
	});
	$('#effect-fadein').darkTooltip({
		animation:'fadeIn',
		gravity:'west'
	});

	$('#theme-dark').darkTooltip();
	$('#theme-light').darkTooltip({
		theme:'light'
	});

});
