import $ from 'jquery';

// console.log("loaded");
 var Containerbox = $(".containerbox");


 function selectTem (){
 	var ajax = $.ajax({
 			url:"http://json-data.herokuapp.com/forms",
 			dataType: 'json',
 			success: processData
 		})	

	console.log(ajax);
	};
function processData(data){
	console.log(data);
	for(var i=0;i<data.length;i++){
		Containerbox.append(`
			<div class= box>
			<ul>
			<input type="${data[i].type}" placeholder="${data[i].label}" >
            </ul>
			</div>`);
	}

}
selectTem();
