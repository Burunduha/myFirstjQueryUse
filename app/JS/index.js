;(function($,undefined){
    var tasks = [];
    $("#success-of-adding-element").hide();
    
    $("#task-add").click(function() {
        var task = $("#input-task-text").val();
        tasks.push(task);
        $("#input-task-text").val("");
        $("#success-of-adding-element").show().delay(2000).fadeOut();
    });
    $("#task-show").click(function() {
        $("#task-list").empty(); 

        for (var i = 0; i < tasks.length; i++) {
          $("#task-list").append("<li>" + tasks[i] + "</li>");
        }
    });
})(jQuery);

