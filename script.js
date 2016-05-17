console.log("");

$(document).ready(function() {

  var $beers = $('#beers');

  $.get('http://api.brewerydb.com/v2/styles/?key=2cc4dab6b173f42ef6bcb4822067e001', function(data) {
    var beerData = data.data
    // console.log(beerData)
    $.each(beerData, function (i, beer) {
      $beers.append('<li>Beer Name:'+ beer.description+'</li>')
      // console.log(beer.description);
      for (var i = 0; i < beerData.length; i++) {
      $('#beerName').append("<option value='" + beerData[i].name + "'>" + beerData[i].name+ "</option>");
      }

    })
  $('#beerName').click(function() {
    console.log("here")
    console.log(beerData[0])
    console.log($(this).val())
    for (var i = 0; i < beerData.length; i++) {
  if ($(this).val() === beerData[i].name) {
    return beerData.name.description
      }
    }
  })
  })
})
