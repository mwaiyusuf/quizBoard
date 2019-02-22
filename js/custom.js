$(document).ready(function(){
    Event.preventDefault();
    var que1=parseInt($("input[name='option']").val());
    var que2=parseInt($("input[name='option']").val());
    var que3=parseInt($("input[name='option']").val());
    var que4=parseInt($("input[name='option']").val());
       var total = que1 + que2 + que3 + que4;
    document.getElementById('tot').innerHTML="Score is" + total;
    
})