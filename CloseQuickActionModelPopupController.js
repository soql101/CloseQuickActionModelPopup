({
    doInit:function(component, event,helper){
        var w = 600;
        var h = 320;
        var left = (screen.width/2)-(w/2);
        var top = (screen.height/2)-(h/2);
        window.open("/apex/SetAsProspectPopup?id="+component.get("v.recordId"), "title", 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width='+w+', height='+h+', top='+top+', left='+left);
        setTimeout(function(){
            $A.get("e.force:closeQuickAction").fire(); 
        }, 1000);
    },
})
