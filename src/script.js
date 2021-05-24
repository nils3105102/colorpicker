$( function() {
    let bgColor = { red: 255, green: 255, blue: 255 };
    let textColor = { red: 255, green: 255, blue: 255 };

    function hexFromRGB(r, g, b) {
      var hex = [
        r.toString( 16 ),
        g.toString( 16 ),
        b.toString( 16 )
      ];
      
      $.each( hex, function( nr, val ) {
        if ( val.length === 1 ) {
          hex[ nr ] = "0" + val;
        }
      });

      return hex.join( "" ).toUpperCase();
    }
    function refreshSwatch() {
      var red = $( "#red" ).slider( "value" ),
        green = $( "#green" ).slider( "value" ),
        blue = $( "#blue" ).slider( "value" ),
        hex = hexFromRGB( red, green, blue );

        if ($('#bgColor').hasClass('ui-state-active')) {
            bgColor = { red, green , blue }
            $( "#swatch" ).css( "background-color", "#" + hex );
        } else if ($('#textColor').hasClass('ui-state-active')) {
          textColor = { red, green , blue };
          $( "#swatch" ).css( "color", "#" + hex );
      }
    }
 
    $( "#red, #green, #blue" ).slider({
      orientation: "horizontal",
      range: "min",
      max: 255,
      slide: refreshSwatch,
      change: refreshSwatch
    });

    function refreshColor(red, green, blue) {
      $( "#red" ).slider( "value", red );
      $( "#green" ).slider( "value", green );
      $( "#blue" ).slider( "value", blue );
    }

    refreshColor(255,255,255);

    $('#bgColor').click(function() {
      $("#bgColor").addClass("ui-state-active");
      $("#textColor").removeClass("ui-state-active");
      refreshColor(bgColor.red, bgColor.green, bgColor.blue);
    });

    $('#textColor').click(function() {
      $("#textColor").addClass("ui-state-active");
      $("#bgColor").removeClass("ui-state-active");
      refreshColor(textColor.red, textColor.green, textColor.blue);
    });
  } );
  
 

  