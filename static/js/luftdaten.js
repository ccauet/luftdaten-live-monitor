$(document).ready(function() {
    $.ajax({
        url: "https://api.luftdaten.info/v1/sensor/16299/"
    }).then(function(data) {
       $('#current-temperature').prepend(parseFloat(data[0].sensordatavalues[0].value));
       $('#current-humidity').prepend(parseFloat(data[0].sensordatavalues[1].value));
    });
});