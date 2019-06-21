
let startGifs = ["trippy", "funny", "happy", "crazy"]; 

function getGif() {
    let gif = $(this).attr("data-name");
    let URL = "http://api.giphy.com/v1/gifs/search?q=" + gif + "&api_key=uXQAe2arj6gUtZ2wDLXzZ2hCJKlI3Vng";

    $.ajax({
        url: URL,
        method: 'GET'

    }).then(function(response){
       // let reString = JSON.stringify(response);
        //console.log(URL);
       // console.log(response); 
       let result = response.data; 
       for (let i = 0; i < result.length; i++){
        let gdiv = $("<div>");
        let p = $("<p>").text("rating " + result[i].rating);
        let img = $("<img>");
        img.attr("src", result[i].images.original.url);
        gdiv.append(img); 
        console.log(result[i]);
        gdiv.append(p); 
        $("#gif-view").prepend(gdiv);
       // console.log(z);

       }

       // $("#gif-view").text(JSON.stringify(response));

    });
}





function makeButtons(){ 
	$("#buttons-view").empty();
	for (let i = 0; i < startGifs.length; i++){
		let a = $("<button>") 
		a.addClass("startGifs"); 
		a.attr("data-name", startGifs[i]); 
		a.text(startGifs[i]); 
        $("#buttons-view").append(a); 
      //  console.log(a);
	}
}

$("#addGif").on("click", function(event){
    event.preventDefault();
	
	let newGifs = $("#data-name").val().trim();
	startGifs.push(newGifs);
	makeButtons();
	return false; 
})



makeButtons(); 

$(document).on("click", ".startGifs", getGif); 
