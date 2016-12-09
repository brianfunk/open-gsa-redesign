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
        
        console.log('data : ' + JSON.stringify(data));
     
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