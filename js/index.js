// when the 'enter' key is pressed, the function searchWikipedia runs
$( "#searchbar" ).keypress(function( event ) {
  if ( event.which == 13 || event.keyCode == 13) {
     searchWikipedia();
  }
});

//when the button is clicked, run this function
$("#submitbtn").on("click", searchWikipedia); 

 function searchWikipedia() { 
 // move the search bar, title, and buttons to the top of the page
   $("#box").css({
     "margin-top": "20px"
   })  
// clear out any previous results
    $("#results").empty();
//set the input to var query
    var query = $("#searchbar").val();
// set the api url to var url
    var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+ query + "&limit=10&format=json&callback=?";

//run the ajax 
    $.ajax(

      {
      url: url,
      type: "GET",
      dataType: "json",
      success: function(data){
// loop through the data arrays and set values accordingly, append the html to the div
            for(j = 0; j < 10; j++){  
              $("#results").append("<div class='boxes'><a class='links' href=" + data[3][j] + "><h4>" + data[1][j] + "</h4><p>" + data[2][j] + "</p></a></div>");
            }
        }

});
}
// when the search bar is clicked, the new width becomes set
$("#searchbar").click(function(){
  $("#searchbar").css({
  "width": "167px"
  })
})