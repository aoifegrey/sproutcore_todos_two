TodosTwo.RollingView = SC.LabelView.extend({
	classNames: ['welcome-label'],
    layout: { centerX: 0, centerY: 15, width: 300, height: 24 },
	textAlign: SC.ALIGN_CENTER,
    tagName: "h1",
    value: "Now we're rolling!",
	
	mouseDown: function(evt){
		var someParam = "Woot!";
		
		TodosTwo.statechart.sendAction('proveIt', someParam)}
});