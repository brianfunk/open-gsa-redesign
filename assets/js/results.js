console.log('results');

$(document).ready(function(){
    
    
    var q = getParameterByName('q');
    
    console.log('q : ' + q);
    
    if (q) { 
        getSearch(q); 
    }
    
}); 

function getSearch(q){
    
    console.log('q : ' + q);
    
    $('#q').val(q);
    $('#q2').val(q);
    
    $.getJSON( 'https://api.github.com/search/code?q='+q+':file+in:file+user:gsa', function( data ) {
      
        console.log('processResult');
        
        //console.log('data : ' + JSON.stringify(data));
        
        
        //$('#search-results').text( JSON.stringify(data) );
        
        
        console.log('data.items.length : ' + data.items.length );
        
        for (var i = 0; i < data.items.length; i++){
            
            
            $('#search-results').append( '<p><strong>'+data.items[i].name+'</strong><br/><em>'+data.items[i].path+'</em><br/><a href="'+data.items[i].repository.html_url+'">'+data.items[i].repository.html_url+'</a></p>' );
            
            console.log('data.items[i].repository.html_url : ' + data.items[i].repository.html_url );
            
        }
    });
}

function getParameterByName(name, url) {
    if (!url) {
      url = window.location.href;
    }
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}