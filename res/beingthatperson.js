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
                mp3: "music/parts.mp3", 
                oga: "music/parts.ogg" 
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
            mp3: "music/parts.mp3", 
            oga: "music/parts.ogg" 
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
$('#part1').hide().css('fontSize', '');
    $('#part2').hide().css('fontSize', '');
    $('#part3').hide().css('fontSize', '');
    $('#line1').hide().css('fontSize', '');
    $('#line2a').hide().css('fontSize', '');
 $('#line2b').hide().css('fontSize', '');
$('#line3a').hide().css('fontSize', '');
$('#line3b').hide().css('fontSize', '');
$('#line4a').hide().css('fontSize', '');
$('#line4b').hide().css('fontSize', '');
$('#line5a').hide().css('fontSize', '');
$('#line5b').hide().css('fontSize', '');;
$('#line6a').hide().css('fontSize', '');
$('#line7a').hide().css('fontSize', '');
$('#line7b').hide().css('fontSize', '');
$('#line8a').hide().css('fontSize', '');
$('#line8b').hide().css('fontSize', '');
$('#line9a').hide().css('fontSize', '');
$('#line9b').hide().css('fontSize', '');
$('#line10a').hide().css('fontSize', '');
$('#line10b').hide().css('fontSize', '');
$('#line11a').hide().css('fontSize', '');
$('#line11b').hide().css('fontSize', '');
$('#line12a').hide().css('fontSize', '');
$('#line12b').hide().css('fontSize', '');
$('#line13a').hide().css('fontSize', '');
$('#line13b').hide().css('fontSize', '');
$('#line13c').hide().css('fontSize', '');
$('#line13d').hide().css('fontSize', '');
$('#line14a').hide().css('fontSize', '');
$('#line15a').hide().css('fontSize', '');
$('#line15b').hide().css('fontSize', '');
$('#line16a').hide().css('fontSize', '');
$('#line16b').hide().css('fontSize', '');
$('#line17a').hide().css('fontSize', '');
$('#line17b').hide().css('fontSize', '');
$('#line18a').hide().css('fontSize', '');
$('#line19a').hide().css('fontSize', '');
$('#line20a').hide().css('fontSize', '');
$('#endlinks').hide().css('fontSize', '');


    currentTrigger = 0;
    
    
}

function fireTrigger(trigger) {
    switch (trigger) {
            case 0:
            $('#part1').fadeIn(1000);

                $('#line1').html(lyrics[0]).addClass('titlefade').fadeIn(1000).delay(10000).fadeOut(2000);
                break;
                
			case 1: 
						$('#line1').html(lyrics[1]).removeClass('titlefade').addClass('animated bounceInRight').fadeIn(000);
            break;
                
            case 2:
            $('#line2a').html(lyrics[2]).fadeIn(1000);
            break;
                
            case 3:
            $('#line2b').html(lyrics[3]).fadeIn(1000);
			break;
                
            case 4:
            $('#line3a').html(lyrics[4]).fadeIn(000);
            break;
            
            case 5:
			$('#line3b').html(lyrics[5]).fadeIn(1000);
            break;
            
            case 6:
            $('#line5a').html(lyrics[6]).fadeIn(1000);
            break;
            
            case 7:
 			$('#line5b').html(lyrics[7]).fadeIn(1000);
			break;

			case 8:
            $('#line6a').html(lyrics[8]).fadeIn(1000);
			break;
			
			case 9:
            $('#line6b').html(lyrics[9]).fadeIn(1000);
			break;

  			case 10:
  			$('#part1').addClass('move-left');
  			$('#part2').fadeIn(3000);
 		// 	$('#line2a').fadeOut(2000);
//  			$('#line2b').fadeOut(2000);
//  			$('#line3a').fadeOut(2000);
//  			$('#line3b').fadeOut(2000);
//  			$('#line5a').fadeOut(2000);
//  			$('#line5b').fadeOut(2000);
//  			$('#line6a').fadeOut(2000);
//  			$('#line6b').fadeOut(2000);
 						break;

			case 11:
            $('#line7a').html(lyrics[10]).fadeIn(000);
			break;
			
			case 12:
            $('#line8a').html(lyrics[11]).fadeIn(000);
			break;

			case 13:
            $('#line8b').html(lyrics[12]).fadeIn(1000);
 			break;
  
			case 14:
            $('#line9a').html(lyrics[13]).fadeIn(000);
			break;

			case 15:
            $('#line9b').html(lyrics[14]).fadeIn(1000);
            $('#line10a').html(lyrics[15]).fadeIn(1000);
			break;

			case 16:
            $('#line11a').html(lyrics[16]).fadeIn(000);
			break;

			case 17:
            $('#line13a').html(lyrics[17]).fadeIn(000);
            break;
            
            case 18:
            $('#line13b').html(lyrics[18]).fadeIn(1000);
            break;
            
            case 19:
            $('#line13c').html(lyrics[19]).fadeIn(000);
            break;
            
            case 20:
            $('#line13d').html(lyrics[20]).fadeIn(000);
			break;

			case 21:
			$('#part2').addClass('move-left');
  			$('#part3').fadeIn(3000);
 		// 	$('#line2a').fadeOut(2000);
//  			$('#line2b').fadeOut(2000);
//  			$('#line3a').fadeOut(2000);
//  			$('#line3b').fadeOut(2000);
//  			$('#line4a').fadeOut(2000);
//  			$('#line5a').fadeOut(2000);
//  			$('#line7a').fadeOut(2000);
//  			$('#line7b').fadeOut(2000);
//  			$('#line7c').fadeOut(2000);
//  			$('#line7d').fadeOut(2000);
			break;

			
			case 22:
            $('#line14a').html(lyrics[21]).fadeIn(000);
			break;

			case 23:
        		$('#line15a').html(lyrics[22]).fadeIn(1000);      
			break;

			case 24:
            $('#line15b').html(lyrics[23]).fadeIn(1000);
			break;

			case 25:
            $('#line16a').html(lyrics[24]).fadeIn(000);
			break;

			case 26:
            $('#line16b').html(lyrics[25]).fadeIn(1000);
			break;

			case 27:
            $('#line17a').html(lyrics[26]).fadeIn(1000);
			break;


			case 28:
            $('#line17b').html(lyrics[27]).fadeIn(1000);
			break;

			case 29:
            $('#line18a').html(lyrics[28]).fadeIn(000);
			break;

			case 30:
            $('#line19a').html(lyrics[29]).fadeIn(000);
			break;

			
			case 31:
			$('#line20a').html(lyrics[30]).fadeIn(1000);
			// $('#line1').fadeOut(1000);                 
//  			$('#line2a').fadeOut(1000);
//  			$('#line2b').fadeOut(1000);
//  			$('#line3a').fadeOut(1000);
//  			$('#line3b').fadeOut(1000);
//  			$('#line4a').fadeOut(1000); 
//  			$('#line4b').fadeOut(1000);
//  			$('#line5a').fadeOut(1000);
//  			$('#line6a').fadeOut(1000);
//  			$('#line7a').fadeOut(1000);   
			break;


            default:
                break;
        }

}


  
  timings = new Array();
  timings[0] = 1; // title 
  timings[1] = 19.539; // this is the part where
  timings[2] = 21.5; // she sits
  timings[3] = 22.5; // and picks at her cardigan
  timings[4] = 23.8; // and
  timings[5] = 24.5; // asks me questions i cant answer
  timings[6] = 29; // where silence
  timings[7] = 30; // stretches between us
  timings[8] = 32; // and we dont know how
  timings[9] = 34; // to broach the gap 
  timings[10] = 36; // END VERSE ONE
  timings[11] = 40.4; // this is the part where
  timings[12] = 41.5; // a lie
  timings[13] = 42.4; // starts to snowball
  timings[14] = 44; // and
  timings[15] = 44.6; // before you know it im wishing i was out of this
  timings[16] = 48.56; // out of this and far away
  timings[17] = 52; // and she can tell 
  timings[18] = 53.5; // and thats
  timings[19] = 54.5; // just
  timings[20] = 55.5; // great
  timings[21] = 58; // END VERSE TWO
  timings[22] = 61.04; // this is the part where
  timings[23] = 62.6; // after everything
  timings[24] = 64.05; // im still trying to make it better
  timings[25] = 65.7; // because
  timings[26] = 66.4; // its me that just cant let go
  timings[27] = 69.95; // but this part
  timings[28] = 71.8; // i play myself
  timings[29] = 73.7; // and the others
  timings[30] = 76.76; // theyre out of it
  timings[31] = 79.4; // out of it and far away
  timings[32] = 85; // END VERSE THREE
  timings[33] = 87; // end animations
 
  /*
   * 
   */
  
  


    lyrics = new Array();
    lyrics[0] = 'Parts';
	lyrics[1] = 'This is the part where';
	lyrics[2] = "she sits&nbsp;";
    lyrics[3] = 'and picks at her cardigan';
    lyrics[4] = 'and&nbsp;';
    lyrics[5] = "asks me questions I can't answer.";
    lyrics[6] = "Where silence&nbsp;";
    lyrics[7] = 'stretches between us';
    lyrics[8] = "and we don't know how&nbsp;";
    lyrics[9] = 'to broach the gap.';    
    lyrics[10] = 'This is the part where';
	lyrics[11] = 'a lie&nbsp;';
    lyrics[12] = 'starts to snowball';
    lyrics[13] = 'and&nbsp;';
	lyrics[14] = "before you know it";
	lyrics[15] = "I'm wishing I was out of this;";
	lyrics[16] = "out of this and far away.";
	lyrics[17] = 'And she can tell&nbsp;';
	lyrics[18] = "and that's&nbsp;";
	lyrics[19] = 'just&nbsp;';
	lyrics[20] = 'great.';
	lyrics[21] = 'This is the part where,';
	lyrics[22] = "after everything,&nbsp;";
	lyrics[23] = "I'm still trying to make it better";
	lyrics[24] = 'because&nbsp;';
	lyrics[25] = "it's me that just can't let go.";
	lyrics[26] = "But this part&nbsp;";
	lyrics[27] = "I play myself,";
	lyrics[28] = "and the others,";
	lyrics[29] = "they're out of it.";
	lyrics[30] = "Out of it and far away.";


});
