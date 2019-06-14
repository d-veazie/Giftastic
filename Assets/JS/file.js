function displayGifInfo() {
    let gif = $(this).attr("data-name");
    let URL = "https://api.giphy.com/v1/gifs/" + gif + "&api_key=uXQAe2arj6gUtZ2wDLXzZ2hCJKlI3Vng";

    $.ajax({
        url: URL,
        method: 'GET'
    }).then(function(response){
        let reString = JSON.stringify(response);
        console.log(URL);
        console.log(response); 

        $("buttonLocation").text(JSON.stringify(response));

    });




}