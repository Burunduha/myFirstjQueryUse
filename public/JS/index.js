!function(e){var a=[];e("#success-of-adding-element").hide(),e("#task-add").click(function(){var t=e("#input-task-text").val();a.push(t),e("#input-task-text").val(""),e("#success-of-adding-element").show().delay(2e3).fadeOut()}),e("#task-show").click(function(){e("#task-list").empty();for(var t=0;t<a.length;t++)e("#task-list").append("<li>"+a[t]+"</li>")})}(jQuery);