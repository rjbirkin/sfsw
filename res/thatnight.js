$(document).ready(function() {
    $('html').bind("touchmove", {}, function(event){
  event.preventDefault();
});
    
    currentTrigger = 0;
    noauto = false;
    nolyrics = false;
    
    if (location.hash == '#nolyrics') {
        nolyrics = true;
    }
    
    if (location.hash == '#noauto' || noauto == true) {
        
        $("#jpId").jPlayer( {
        ready: function () {
            $(this).jPlayer("setMedia", {
                mp3: "music/thatnight.mp3", 
                oga: "music/thatnight.ogg" 
            });
        },
        volume: 0.9,
        supplied: "mp3, oga",
        swfPath: "./music/"
    });
    
    noauto = true;
        
    }
    else {
        $("#jpId").jPlayer( {
        ready: function () {
          $(this).jPlayer("setMedia", {
            mp3: "music/thatnight.mp3", 
            oga: "music/thatnight.ogg" 
          }).jPlayer("play");
        },
        volume: 0.9,
        supplied: "mp3, oga",
        swfPath: "./music/"
        });
    }
    
  
  
  $('#credits').click(function () {
      if ($(this).text() == 'Credits') {
          $('#creditsbox').fadeIn(500);
          $(this).text('Hide Credits');
      }
      else {
          $('#creditsbox').fadeOut(500);
          $(this).text('Credits');
      }
  })
  
 
    $('#stop').click(function() {
    $('#jpId').jPlayer('stop');
    $('#play').text('>');
    });
    
    $('#play').click(function() {
    $('#jpId').jPlayer('play');
    });
  
 $('#pause').click(function() {
    $('#jpId').jPlayer('pause');
$('#play').text('>');
    });

  $('#jpId').bind($.jPlayer.event.playing, function(event) {
     $('#play').text('>');
     startLyrics();
  });
  $('#jpId').bind($.jPlayer.event.loadstart, function(event) {
     $('#play').text('loading...');
  });
  $('#jpId').bind($.jPlayer.event.suspend, function(event) {
     $('#play').text('>');
  });

  
  $('#jpId').bind($.jPlayer.event.ended, function(event) {
     $('#jpId').jPlayer('play');
     $('#play').text('>');
  });
  
  $('#jpId').bind($.jPlayer.event.timeupdate, function(event) {
     $('#time').html($.jPlayer.convertTime(event.jPlayer.status.currentTime));
     
     if (event.jPlayer.status.currentTime >= timings[currentTrigger] && nolyrics != true) {
         fireTrigger(currentTrigger);
         currentTrigger++;
     }
     
     
  });
  
  
function startLyrics () {
    $('#line1').hide().css('fontSize', '');
  $('#line1b').hide().css('fontSize', '');
  $('#line1c').hide().css('fontSize', '');
    $('#line2').hide().css('fontSize', '');
 $('#line2b').hide().css('fontSize', '');
$('#line2bc').hide().css('fontSize', '');
$('#line2d').hide().css('fontSize', '');
$('#line2e').hide().css('fontSize', '');
$('#line3').hide().css('fontSize', '');
$('#line3b').hide().css('fontSize', '');
$('#line3c').hide().css('fontSize', '');
$('#line3d').hide().css('fontSize', '');
$('#line3e').hide().css('fontSize', '');
$('#line4').hide().css('fontSize', '');
$('#line4b').hide().css('fontSize', '');
$('#line5').hide().css('fontSize', '');
$('#line5b').hide().css('fontSize', '');
$('#line5c').hide().css('fontSize', '');
$('#line5d').hide().css('fontSize', '');
$('#line5e').hide().css('fontSize', '');
$('#line6').hide().css('fontSize', '');
$('#line7').hide().css('fontSize', '');
$('#endlinks').hide().css('fontSize', '');


    currentTrigger = 0;
    
    
}

function fireTrigger(trigger) {
    switch (trigger) {
            case 0:
                $('#line1').html(lyrics[0]).addClass('titlefade').fadeIn(1000).delay(4000).fadeOut(2000);
                break;
			case 1: 
			$('#line1').html(lyrics[1]).removeClass('titlefade').fadeIn(1000);
            break;
                
            case 2:
            $('#line1b').html(lyrics[2]).fadeIn(1000);
            break;
                
            case 3:
            $('#line2').html(lyrics[3]).fadeIn(1000);
			break;
                
            case 4:
            $('#line3').html(lyrics[4]).fadeIn(1000);
            break;
            
            case 5:
			$('#line4').html(lyrics[5]).fadeIn(1000);
            break;
            
            case 6:
            $('#line1b').fadeOut(1500);
 			$('#line2').fadeOut(1500);
 			$('#line3').fadeOut(1500);
 			$('#line4').fadeOut(1500);
			break;

			case 7:
            $('#line1b').html(lyrics[6]).fadeIn(1000);
            break;

  			case 8:
            $('#line2').html(lyrics[7]).fadeIn(1000);
			break;

			case 9:
            $('#line2b').html(lyrics[8]).fadeIn(1000);
			break;

			case 10:
            $('#line3').html(lyrics[9]).fadeIn(1000);
			break;

			case 11:
            $('#line3b').html(lyrics[10]).fadeIn(1000);
			break;

			case 12:
            $('#line1b').fadeOut(2000);
 			$('#line2').fadeOut(2000);
 			$('#line2b').fadeOut(2000);
 			$('#line3').fadeOut(2000);
 			$('#line3b').fadeOut(2000);
			break;
  
			case 13:
            $('#line1b').html(lyrics[11]).fadeIn(1000);
			break;

			case 14:
            $('#line2').html(lyrics[12]).fadeIn(1000);
			break;

			case 15:
            $('#line3').html(lyrics[13]).fadeIn(1000);
			break;

			case 16:
            $('#line4').html(lyrics[14]).fadeIn(1000);
			break;

			case 17:
            $('#line4b').html(lyrics[15]).fadeIn(1000);
			break;

			case 18:
         	$('#line1b').fadeOut(2000);
 			$('#line2').fadeOut(2000);
 			$('#line3').fadeOut(2000);
 			$('#line4').fadeOut(2000);
 			$('#line4b').fadeOut(2000);       
			break;

			case 19:
            $('#line1b').html(lyrics[16]).fadeIn(1000);
			break;

			case 20:
            $('#line2').html(lyrics[17]).fadeIn(1000);
			break;

			case 21:
            $('#line3').html(lyrics[18]).fadeIn(1000);
			break;

			case 22:
            $('#line4').html(lyrics[19]).fadeIn(1000);
            $('#line4b').html(lyrics[20]).fadeIn(1000);
			break;

			case 23:
        		$('#line1b').fadeOut(1000);
 			$('#line2').fadeOut(1000);
 			$('#line3').fadeOut(1000);
 			$('#line4').fadeOut(1000);
 			$('#line4b').fadeOut(1000);       
			break;

			case 24:
            $('#line1b').html(lyrics[21]).fadeIn(1000);
			break;

			case 25:
            $('#line2').html(lyrics[22]).fadeIn(1000);
			break;

			case 26:
            $('#line3').html(lyrics[23]).fadeIn(1000);
			break;

			case 27:
            $('#line1b').fadeOut(1000);
 			$('#line2').fadeOut(1000);
 			$('#line3').fadeOut(1000); 
			break;

			case 28:
            $('#line1b').html(lyrics[24]).fadeIn(1000);
			break;

			case 29:
            $('#line1c').html(lyrics[25]).fadeIn(1000);
			break;

			case 30:
            $('#line2').html(lyrics[26]).fadeIn(1000);
			break;

			case 31:
         	$('#line3').html(lyrics[27]).fadeIn(1000);     
			break;

			case 32:
            $('#line4').html(lyrics[28]).fadeIn(1000);
			break;

			case 33:
			$('#line1').fadeOut(1000);                 
 			$('#line1b').fadeOut(1000);
 			$('#line1c').fadeOut(1000);
 			$('#line2').fadeOut(1000);
 			$('#line3').fadeOut(1000);
 			$('#line4').fadeOut(1000);  
			break;

			case 34:
            $('#line1').html(lyrics[29]).fadeIn(1000);
			break;

			case 35:
            $('#line2').html(lyrics[30]).fadeIn(1000);
			break;

			case 36:
            $('#line3').html(lyrics[31]).fadeIn(1000);
			break;

			case 37:
         	$('#line3b').html(lyrics[32]).fadeIn(1000);     
			break;

			case 38:
            $('#line3c').html(lyrics[33]).fadeIn(1000);
			break;

			case 39:
            $('#line3d').html(lyrics[34]).fadeIn(1000);   
			break;

			case 40:
            $('#line3e').html(lyrics[35]).fadeIn(1000);
			break;

			case 41:
            $('#line1').fadeOut(1000);
 			$('#line2').fadeOut(1000);
 			$('#line3').fadeOut(1000);
 			$('#line3b').fadeOut(1000);
 			$('#line3c').fadeOut(1000);
			$('#line3d').fadeOut(1000);
			$('#line3e').fadeOut(1000);  
			break;

			case 42:
            $('#line1').html(lyrics[1]).fadeIn(1000);
			$('#line1b').html(lyrics[36]).fadeIn(1000);  
			break;

			case 43:
            $('#line1c').html(lyrics[37]).fadeIn(1000);   
			break;

			case 44:
            $('#line1').fadeOut(4000);
 			$('#line1b').fadeOut(4000);
 			$('#line1c').fadeOut(4000);
			break;

			case 45:
            $('#endlinks').fadeIn(1000);
			break;


            default:
                break;
        }

}


  
  timings = new Array();
  timings[0] = 1; // title 
  timings[1] = 12; // i remember
  timings[2] = 12; // that night
  timings[3] = 14; // the drive to leicester
  timings[4] = 15; // along the A6
  timings[5] = 16; // takes forever
  timings[6] = 18; // clear first stanza
  timings[7] = 19.5; // it's dark when i leave the car
  timings[8] = 20.5; // half on the kerb
  timings[9] = 21.7; // and 
  timings[10] = 22.3; //carry my bags 
  timings[11] = 22.8; //up the driveway
  timings[12] = 25; // clear second stanza
  timings[13] = 28.5; // you meeting me there and
  timings[14] = 30; // taking me inside
  timings[15] = 31; // and up the stairs
  timings[16] = 32; // to the room we've bought
  timings[17] = 33.5; // for the night
  timings[18] = 35.5; // clear third stanza
  timings[19] = 37.5; // you've already ordered the pizza
  timings[20] = 39; // i hang my suit up
  timings[21] = 41; // and throw my bags onto the floor
  timings[22] = 43; // and you sit me down at the foot of the bed.
  timings[23] = 47; // clear fourth stanza
  timings[24] = 48.5; // you kneel down
  timings[25] = 49; // to unlace my shoes
  timings[26] = 50; // and take them off my feet
  timings[27] = 53; // clear fifth stanza
  timings[28] = 56; // I try to stop you
  timings[29] = 57; // and
  timings[30] = 58.5; // i try to lift you up
  timings[31] = 59.5; // to hold you
  timings[32] = 61; // and you ask me what's wrong
  timings[33] = 63.5; // clear sixth stanza
  timings[34] = 65; // And I remember that
  timings[35] = 66; // I can't really speak
  timings[36] = 68; // and then
  timings[37] = 69; // I
  timings[38] = 69.3; // start
  timings[39] = 69.6; // to
  timings[40] = 69.9; // cry
  timings[41] = 72; // clear seventh stanza
  timings[42] = 74; // I remember that
  timings[43] = 77; // I start to cry
  timings[44] = 82; // clear all lines
  timings[45] = 85; // end links
 
  /*
   * 
   */
  
  


    lyrics = new Array();
    lyrics[0] = 'That Night';
	lyrics[1] = 'I remember&nbsp;';
	lyrics[2] = "that night,";
    lyrics[3] = 'the drive to Leicester';
    lyrics[4] = 'along the A6';
    lyrics[5] = 'takes forever.';
    lyrics[6] = "it's dark when I leave the car";
    lyrics[7] = 'half on the kerb&nbsp;';
    lyrics[8] = 'and';
    lyrics[9] = 'carry my bags&nbsp;';    
    lyrics[10] = 'up the driveway.';
	lyrics[11] = 'you meeting me there';
    lyrics[12] = 'and taking me inside';
    lyrics[13] = 'and up the stairs';
	lyrics[14] = "to the room we've bought&nbsp;";
	lyrics[15] = 'for the night.';
	lyrics[16] = "you've already ordered pizza";
	lyrics[17] = 'and I hang my suit up';
	lyrics[18] = 'and throw my bags onto the floor';
	lyrics[19] = 'and you sit me down&nbsp;';
	lyrics[20] = 'at the foot of the bed.';
	lyrics[21] = 'you kneel down';
	lyrics[22] = 'to unlace my shoes';
	lyrics[23] = 'and take them off my feet.';
	lyrics[24] = 'I try to stop you&nbsp;';
	lyrics[25] = 'and';
	lyrics[26] = "I try to lift you up,";
	lyrics[27] = "to hold you,";
	lyrics[28] = "and you ask me what's wrong.";
	lyrics[29] = 'And I remember that';
	lyrics[30] = "I can't really speak,";
	lyrics[31] = 'and then&nbsp;';
	lyrics[32] = 'I&nbsp;';
	lyrics[33] = 'start&nbsp;';
	lyrics[34] = 'to&nbsp;';
	lyrics[35] = 'cry.';
	lyrics[36] = 'that&nbsp;' 
	lyrics[37] = 'I start to cry.';


});
