darktooltip
===========
![bower badge](https://badge.fury.io/bo/darktooltip.svg "bower badge")

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

###Options
Option | Values | Default
------ | ------ | -------
opacity| 0 – 1  | 0.9
content | Tooltip message | empty
size	|small, medium, large | medium
gravity	|south, west, north, east |south
theme	|dark, light | dark
trigger	|hover, click	|hover
animation|	none, flipIn, fadeIn	|none
confirm	|true, false	|false
yes	|Label for ‘Yes’ option	|‘Yes’
no	|Label for ‘No’ option	|‘No’
finalMessage|	A message that appears at the end of the action for the confirm	|”
finalMessageDuration|	Duration of the final message in ms	|1000
onYes|	Function that is triggered when clicking ‘Yes’ on confirm	|empty
onNo |	Function that is triggered when clicking ‘No’ on confirm	|empty

###Demo and examples
[rubentd.com/darktooltip](http://rubentd.com/darktooltip)


