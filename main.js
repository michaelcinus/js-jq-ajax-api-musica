function importaCD() {

    $.ajax({

        url: 'https://flynn.boolean.careers/exercises/api/array/music',
        method: 'GET' ,
        success: function( data, state){

            var success = data['success'];
            var cd = data['response'];
            estraiCD(cd);

        },
        error: function(request,state,error){

        }

    })
}

function estraiCD(cd) {


    for (var i = 0; i < cd.length; i++) {

        var disco = cd[i];
        var genere = disco['genre'];

        var template = $('#template').html();
        var compiled = Handlebars.compile(template);
        var target = $('.cds-container');

        var cdHTML = compiled({

            'img' : disco['poster'],
            'title' : disco['title'],
            'author' : disco['author'],
            'year' : disco['year'],

        });

        target.append(cdHTML); 
        
    }
}

function init(){

    importaCD();

}

$(document).ready(init);