//animate div for expanding from 100px to 200px in 3 seconds
$("#expander").animate({width:"200px"}, 3000);

//method chaining: Allows you to perform various operations(bind event, add/change css) to an element in sequential manner. It also improves performance by selecting
//that element from DOM only once and then perform all operations.
//$("#expander").on("click",function(){}).css("width:100").show();

//jquery ajax provides various options such as success, failure, url, wait before response etc. jquery get uses jquery ajax underneath
//$.ajax({url: "", success: function(){}, })
