darktooltip
===========

A simple customizable tooltip with confirm option and effects

###Usage

```html
<div style="padding:200px;">
	<a href="#" id="example" data-tooltip="Hello world 1">Example 1</a>
	<a href="#" id="light" data-tooltip="Hello world 2">Example 2</a>
</div>
 
<script>
$(document).ready( function(){
	
	//Basic
	$('#example').darkTooltip();
	
	//With some options
	$('#light').darkTooltip({
		animation:'flipIn',
		gravity:'west',
		confirm:true,
		theme:'light'
	});
});
</script>
```
