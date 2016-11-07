$(document).ready(function(){
    
    
    $('form').submit(function(e){
        e.preventDefault();
        getJson();
    }); //submit end
    
    $('form').keyup(function(e){
       getJson();
    }); // keyup end
    
    $('li').click()
    
    function getJson(){
       var $title = $('#search').val();
       var $year = $('#year').val();
       var url = "https://www.omdbapi.com/?";
       var data = {
         s: $title,
         y: $year,
         r: "json"
       };
        $.getJSON(url,data,getMovie );
    }
            
    function getMovie(data){
        console.log(data);
        var html = "";
        if (data.Response === "True"){
        //'<li id=' + movie.imdbID + '>';
            $.each(data.Search,function(index, movie){
                html += '<li class= "'+ movie.imdbID+'">';
                html += '<div class="poster-wrap">';
                if (movie.Poster === 'N/A'){
                    html += "<i class='material-icons poster-placeholder'>crop_original</i>";
                } else {
                    html += '<a herf="#"><img class="movie-poster" src="' + movie.Poster + '"></a>';
                }
                
                html += "</div>";
                html += '<span class="movie-title">'+ movie.Title +'</span>';
                html += '<span class="movie-year">' + movie.Year + '</span>';
                html += "</li>";
            });
        } else {

            html += "<li class='no-movies'>";
			html += "<i class='material-icons icon-help'>help_outline</i>No movies found that match: " + $('#search').val();
			html += "</li>";
        }
            
       $('#movies').html(html);
        
    } //getMovie end
           
    
             
    
}); // end ready