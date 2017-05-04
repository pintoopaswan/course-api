
var container=$('div.container');

function startTest(){
	console.log("method called");
	     $.ajax({
			 dataType: "json",
            url: "http://localhost:8080/topics",
            type: 'GET',
            success: function(data) {
                console.log(data);
				localStorage.setItem('myArray', data);
				var items=[];
				$.each(data,function(key,val){
						items.push("<tr>");
						items.push("<td id=''"+key+"''>"+val.id+"</td>");
						items.push("<td id=''"+key+"''>"+val.name+"</td>");
						items.push("<td id=''"+key+"''>"+val.description+"</td>");
						items.push("</tr>");
					});
					
					$("<tbody/>",{html: items.join("")}).appendTo("table");
			
            }
        });
	//location.href = "page2.html";
	
}


