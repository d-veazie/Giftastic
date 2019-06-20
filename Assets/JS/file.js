

let startGifs = ["trippy", "funny", "happy", "crazy"]; 

function makeButtons(){ 
	$("#buttons-view").empty();
	for (let i = 0; i < startGifs.length; i++){
		let a = $("<button>") 
		a.addClass("startGifs"); 
		a.attr("data-name", startGifs[i]); 
		a.text(startGifs[i]); 
		$("#buttons-view").append(a); 
	}
}

$("#addGif").on("click", function(event){
    event.preventDeafault(); 
	
	let startGifs = $("#startGifs-input").val().trim();
	startGifs.push(startGifs);
	makeButtons();
	return false; 
})

function displayGifInfo() {
    let gif = $(this).attr("data-name");
    let URL = "http://api.giphy.com/v1/gifs/search?q=" + gif + "&api_key=uXQAe2arj6gUtZ2wDLXzZ2hCJKlI3Vng";

    $.ajax({
        url: URL,
        method: 'GET'
    }).then(function(response){
        let reString = JSON.stringify(response);
        console.log(URL);
        console.log(response); 

        $("#buttons-view").text(JSON.stringify(response));

    });

}

function renderButtons() {
    $("#buttons-view").empty();

    for (let i = 0; i < gif.length; i++) {
        let a = $("<button>");
        a.attr("data-name", gif[i]);
        a.text(gif[i]);
        $("#buttons-view").append(a); 


    }

}

makeButtons(); 