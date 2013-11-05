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
                mp3: "music/danni.mp3", 
                oga: "music/danni.ogg" 
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
            mp3: "music/danni.mp3", 
            oga: "music/danni.ogg" 
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
    $('#line2a').hide().css('fontSize', '');
 $('#line2b').hide().css('fontSize', '');
$('#line3a').hide().css('fontSize', '');
$('#line3b').hide().css('fontSize', '');
$('#line4a').hide().css('fontSize', '');
$('#line4b').hide().css('fontSize', '');
$('#line4c').hide().css('fontSize', '');
$('#line5a').hide().css('fontSize', '');
$('#line5b').hide().css('fontSize', '');
$('#line5c').hide().css('fontSize', '');
$('#line6a').hide().css('fontSize', '');
$('#line6b').hide().css('fontSize', '');
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
$('#line14a').hide().css('fontSize', '');
$('#line14b').hide().css('fontSize', '');
$('#line15a').hide().css('fontSize', '');
$('#line15b').hide().css('fontSize', '');
$('#line16a').hide().css('fontSize', '');
$('#line16b').hide().css('fontSize', '');
$('#line17a').hide().css('fontSize', '');
$('#line17b').hide().css('fontSize', '');
$('#line18a').hide().css('fontSize', '');
$('#line18b').hide().css('fontSize', '');
$('#line18c').hide().css('fontSize', '');
$('#line18d').hide().css('fontSize', '');
$('#line18e').hide().css('fontSize', '');
$('#line19a').hide().css('fontSize', '');
$('#line19b').hide().css('fontSize', '');
$('#line20a').hide().css('fontSize', '');
$('#line20b').hide().css('fontSize', '');
$('#line21a').hide().css('fontSize', '');
$('#line21b').hide().css('fontSize', '');
$('#line22a').hide().css('fontSize', '');
$('#line22b').hide().css('fontSize', '');
$('#line23a').hide().css('fontSize', '');
$('#line23b').hide().css('fontSize', '');
$('#line24a').hide().css('fontSize', '');
$('#line24b').hide().css('fontSize', '');
$('#line25a').hide().css('fontSize', '');
$('#line25b').hide().css('fontSize', '');
$('#line26a').hide().css('fontSize', '');
$('#line26b').hide().css('fontSize', '');
$('#line27a').hide().css('fontSize', '');
$('#line27b').hide().css('fontSize', '');
$('#line28a').hide().css('fontSize', '');
$('#line28b').hide().css('fontSize', '');
$('#line29a').hide().css('fontSize', '');
$('#line29b').hide().css('fontSize', '');
$('#line30a').hide().css('fontSize', '');
$('#line30b').hide().css('fontSize', '');
$('#line31a').hide().css('fontSize', '');
$('#line31b').hide().css('fontSize', '');
$('#line31c').hide().css('fontSize', '');
$('#line31d').hide().css('fontSize', '');
$('#line31e').hide().css('fontSize', '');
$('#line32a').hide().css('fontSize', '');
$('#line32b').hide().css('fontSize', '');

    currentTrigger = 0;
    
    
}



function fireTrigger(trigger) {
    switch (trigger) {
            
            case 0:
            $('html, body').animate({ scrollTop: 0 }, 000, function() {
    
});
$('#line1').html(lyrics[0]).addClass('titlefade').fadeIn(500).delay(2000).fadeOut(1000);
                		break;
                
			case 1: 
				$('#line1').html(lyrics[1]).removeClass('titlefade').fadeIn(000);
				$('#line2a').html(lyrics[2]).fadeIn(000);
                break;
                
            case 2:
                $('#line3a').html(lyrics[3]).fadeIn(000);
                break;
                
            case 3:
                $('#line4a').html(lyrics[4]).fadeIn(000);
				$('html, body').animate({ scrollTop: $(document).height() - $(window).height() }, 70000, function() {
});
				break;
                
            case 4:
                $('#line4b').html(lyrics[5]).fadeIn(000);
                break;
                
            case 5:
				$('#line5a').html(lyrics[6]).fadeIn(000);
                break;
            
            case 6:
                $('#line5b').html(lyrics[7]).fadeIn(000);
                break;
			
			case 7:
                $('#line6a').html(lyrics[8]).fadeIn(000);
                break;
 			
 			case 8:
                $('#line7a').html(lyrics[9]).fadeIn(1000);
                break;
            
            case 9:
                $('#line8a').html(lyrics[10]).fadeIn(1000);
              $('#line9a').html(lyrics[11]).fadeIn(1000);
              $('#line10a').html(lyrics[47]).fadeIn(1000);
                break;
                
            case 10:
                $('#line11a').html(lyrics[12]).fadeIn(1000);
				break;
				
            case 11:
                $('#line12a').html(lyrics[13]).fadeIn(000);
                break;
                
            case 12:
                $('#line12b').html(lyrics[14]).fadeIn(1000);
                break;
                
            case 13:
                $('#line13a').html(lyrics[15]).fadeIn(000);
                break;
                
            case 14:
                $('#line14a').html(lyrics[16]).fadeIn(000);
                break;
                
            case 15:
                $('#line14b').html(lyrics[17]).fadeIn(000);
                break;
                
            case 16:
                $('#line15a').html(lyrics[18]).fadeIn(1000);
                break;
            
            case 17:
                $('#line16a').html(lyrics[19]).fadeIn(000);
				break;
				
            case 18:
                $('#line16b').html(lyrics[20]).fadeIn(1000);
              	$('#line17a').html(lyrics[21]).fadeIn(1000);
				break;
				
            case 19:
                $('#line18a').html(lyrics[22]).fadeIn(300);
                $('#line18b').html(lyrics[23]).delay(400).fadeIn(300);
                $('#line18c').html(lyrics[24]).delay(600).fadeIn(300);
                $('#line18d').html(lyrics[25]).delay(900).fadeIn(300);
                $('#line18e').html(lyrics[26]).delay(1200).fadeIn(300);
                
				break;
				
            case 20:
                $('#line19a').html(lyrics[27]).fadeIn(000);
                break;
                
            case 21:
                $('#line19b').html(lyrics[28]).fadeIn(1000);
                $('#line20a').html(lyrics[47]).fadeIn(1000);
                break;
                
            case 22:
				$('#line21a').html(lyrics[29]).fadeIn(1000);
                break;
                
            case 23:
                $('#line22a').html(lyrics[30]).fadeIn(1000);
                break;
                
            case 24:
                $('#line23a').html(lyrics[31]).fadeIn(000);
                $('#line24a').html(lyrics[32]).fadeIn(000);
                break;
                
            case 25:
                $('#line24b').html(lyrics[33]).fadeIn(1000);
                $('#line25a').html(lyrics[47]).fadeIn(1000);
                break;
                
            case 26:
                $('#line26a').html(lyrics[34]).fadeIn(1000);
				break;
				
            case 27:
                $('#line26b').html(lyrics[35]).fadeIn(000);
                break;
                
            case 28:
                $('#line27a').html(lyrics[36]).fadeIn(1000);
                break;
                
            case 29:
                $('#line27b').html(lyrics[37]).fadeIn(1000);
                break;
              	
            case 30:
                $('#line28a').html(lyrics[38]).fadeIn(1000); 
               break;
               
        		case 31:
                $('#line29a').html(lyrics[39]).fadeIn(1000); 
               break;
               
            case 32:
                $('#line29b').html(lyrics[40]).fadeIn(1000); 
               break;
               
            case 33:
                $('#line30a').html(lyrics[41]).fadeIn(1000);
                $('#line31a').html(lyrics[42]).fadeIn(1000); 
               break;
               
            case 34:
                $('#line31b').html(lyrics[43]).fadeIn(500);
                $('#line31c').html(lyrics[44]).delay(500).fadeIn(300);
                $('#line31d').html(lyrics[45]).delay(700).fadeIn(300);
                $('#line31e').html(lyrics[46]).delay(1100).fadeIn(200); 
               break; 
                 
        		case 35:
        		   
        		
        		    break;
             
              
									
            default:
                break;
        }
}
  
  timings = new Array();
  timings[0] = 0; // title
  timings[1] = 6.176; // danni used to take baths so hot
  timings[2] = 11; // Danni used to call me shit fuck
  timings[3] = 12.4; // and i used to say
  timings[4] = 13.21; // you what
  timings[5] = 14; // you what
  timings[6] = 14.435; // shit fuck
  timings[7] = 15.251; // whats that mean
  timings[8] = 16; // and wed laugh 
  timings[9] = 19; // Danni used to be able to see me lies better than i thought she could
  timings[10] = 24; // Danni used to be in my life so completely
  timings[11] = 26.199; // i sometimes felt a bit
  timings[12] = 27.735; // claustrophobic
  timings[13] = 29.75; // Danni used to tickle me
  timings[14] = 30.99; // it seemed
  timings[15] = 31.939; //  just to piss me off
  timings[16] = 34.36; // Danni used to be hot in bed
  timings[17] = 37.29; // I mean
  timings[18] = 37.92; // she used to chase me across the matress to cuddle up to sleep
  timings[19] = 41; // and I would roll and roll away
  timings[20] = 42.75; // because
  timings[21] = 43.479; // I couldnt take the heat
  timings[22] = 46.542 // Danni used to cook pasta and pesto
  timings[23] = 49.005; // and didnt bother much with meat
  timings[24] = 51.691; // Danni used to be funny about
  timings[25] = 53.070; // touching the toilet set
  timings[26] = 58.398; // Danni used to dance like a mermaid
  timings[27] = 60.702; // would
  timings[28] = 62.329; // Danni used to cry
  timings[29] = 63.969; // and I never could
  timings[30] = 65.957; // She would want to talk
  timings[31] = 67.872; // I would want to 
  timings[32] = 69.186; // walk
  timings[33] = 71.024; // Danni used to stop at green lights and
  timings[34] = 73.475; // sometimes go through red ones
  timings[35] = 86.5; // 
  /*
   * 
   */

    lyrics = new Array();
    lyrics[0] = 'Danni used to';
	lyrics[1] = 'Danni used to take baths so hot';
	lyrics[2] = "I couldn't get in after her.";
    lyrics[3] = "Danni used to call me 'shit fuck'";
    lyrics[4] = 'and I used to say,&nbsp';
    lyrics[5] = "&quot;you what?";
    lyrics[6] = "You what?&nbsp";
    lyrics[7] = "Shit fuck?";
    lyrics[8] = "What's that mean?&quot;";
    lyrics[9] = "and we'd laugh.";    
    lyrics[10] = "Danni used to be able to see my lies";
	lyrics[11] = "better than I thought she could.";
    lyrics[12] = 'Danni used to be in my life so completely';
	lyrics[13] = 'I sometimes felt a bit&nbsp;';
	lyrics[14] = 'claustrophobic.';
	lyrics[15] = "Danni used to tickle me,";
	lyrics[16] = 'it seemed,&nbsp;';
	lyrics[17] = 'just to piss me off.';
	lyrics[18] = 'Danni used to be hot in bed.';
	lyrics[19] = 'I mean,&nbsp;';
	lyrics[20] = 'she used to chase me across the matress';
	lyrics[21] = 'trying to cuddle up to sleep,';
	lyrics[22] = 'and I would&nbsp;';
	lyrics[23] = 'roll&nbsp;';
	lyrics[24] = 'and&nbsp;';
	lyrics[25] = 'roll&nbsp;';
	lyrics[26] = 'away';
	lyrics[27] = 'because&nbsp;';
	lyrics[28] = "I couldn't take the heat.";
	lyrics[29] = 'Danni used to cook pasta and pesto';
	lyrics[30] = "and didn't bother much with meat.";
	lyrics[31] = 'Danni used to be funny';
	lyrics[32] = 'about&nbsp;';
	lyrics[33] = 'touching the toilet seat.';
	lyrics[34] = 'Danni used to dance like a mermaid&nbsp;';
	lyrics[35] = 'would.';
	lyrics[36] = 'Danni used to cry&nbsp;';
	lyrics[37] = 'and I never could.';
	lyrics[38] = 'She would want to talk;';
	lyrics[39] = 'I would want to&nbsp;';
	lyrics[40] = 'walk.';
	lyrics[41] = "Danni used to stop at green lights";
	lyrics[42] = 'and&nbsp;';
	lyrics[43] = 'sometimes&nbsp;';
	lyrics[44] = 'go&nbsp;';
	lyrics[45] = 'through&nbsp;'
	lyrics[46] = 'red ones.';
	lyrics[47] = '&nbsp;'
				
});
