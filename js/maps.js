//google MAPS
$.extend({
   google_map_style: [
         {
           "stylers": [
              {"hue": "#000"},
              {"invert_lightness": false},
              {"saturation": -100},
              {"lightness": 0},
              {"gamma": 1}
          ]
       }
   ],

    google_map: function init_map() {
        var map,
            marker,
            points;

        function initialize(point) {
            map = new google.maps.Map(document.getElementById('map'), {
                zoom: 16,
                scrollwheel: false,
                mapTypeControl: false,
                mapTypeControlOptions: {
                    style: google.maps.MapTypeControlStyle.LARGE,
                    mapTypeIds: [
                        google.maps.MapTypeId.HORIZONTAL_BAR,
                        google.maps.MapTypeId.TOP_LEFT
                    ]
                },
                //Zoom-Control
                zoomControl: true,
                zoomControlOptions: {
                    position: google.maps.ControlPosition.RIGHT_CENTER
                },
                 //Street-View-Control
                streetViewControl: false,
                streetViewControlOptions: {
                   position: google.maps.ControlPosition.LEFT_TOP
                },
                //Full-Screen-Control
                fullscreenControl: false,
                center: point,
                styles: $.google_map_style,
                backgroundColor: '#f4f4f4'
            });
        }

        function active_point(point) {
            var ll = {
                lat: parseFloat(point.attr('data-lat')),
                lng: parseFloat(point.attr('data-lng'))
            };
            deletemarker();
            addMarker(new google.maps.LatLng(ll.lat, ll.lng));
            setAllMap(map);

            map.setCenter(new google.maps.LatLng(ll.lat, ll.lng));
            // map.setCenter(new google.maps.LatLng(ll.lat, ll.lng + 1.800));
            // if ($(window).width() <= 1024) {
            //     map.setCenter(new google.maps.LatLng(ll.lat, ll.lng + 0.0030));
            // }
            // if ($(window).width() <= 480) {
            //     map.setCenter(new google.maps.LatLng(ll.lat, ll.lng + 0.0010));
            // }

        }

        // Sets the map on all marker in the array.
        function setAllMap(map) {
            if (typeof marker !== 'undefined')
                marker.setMap(map);
        }

        // Removes the marker from the map, but keeps them in the array.
        function clearmarker() {
            setAllMap(null);
        }

        // Deletes all marker in the array by removing references to them.
        function deletemarker() {
            clearmarker();
            marker = [];
        }

        function addMarker(location) {
            marker = new google.maps.Marker({
                icon: '/img/marker.png',
                position: location,
                map: map
            });
        }

        initialize();

        // $('#map_points button').click(function() { active_point($(this)); });
        active_point(
            $('#map_points button').first()
        );

    }
});

$(document).ready(function() {

    if ($('#map').length) {
        $.google_map();
    }

});
