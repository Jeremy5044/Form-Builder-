import $ from 'jquery';
console.log("loaded");
 var Containerbox = $(".containerbox");


function selectTem () {
 	var ajax = $.ajax({
 		url: "http://json-data.herokuapp.com/forms",
 		dataType: 'json',
 		success: processData
 	})	

	
};

selectTem();

function selectTemplate (item) {
	var HTML = `<div class="box"><select>`;
	for (var count=0; count < item.options.length; count++) {
		HTML = HTML + `
		<option> Select language...${item.options[count].label}
			</option>`;
}
		HTML = HTML + "</select>  </div>";
	

	return HTML;
}

function processData(data){
	console.log(data);
	for(var i = 0; i < data.length; i++) {
		if (data[i].type === "select") {
			var HTML = selectTemplate(data[i]);
		} else if (data[i].type === "textarea") {
			var HTML = `
				<div class="box">
			    	<i class="fa ${data[i].icon}"></i>
			     	<textarea placeholder="${data[i].label}" ></textarea>
				</div>`;
		} else {
			var HTML = `
			    <div class="box">
				    <i class="fa ${data[i].icon}"></i>
			    	<input placeholder= "${data[i].label}">
			    	
			    </div>
			  `;
		}

		Containerbox.append(HTML);
	}
}
