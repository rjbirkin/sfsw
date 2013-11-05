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
                mp3: "music/goodbye.mp3", 
                oga: "music/goodbye.ogg" 
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
            mp3: "music/goodbye.mp3", 
            oga: "music/goodbye.ogg" 
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
$('#line32a').hide().css('fontSize', '');
$('#line32b').hide().css('fontSize', '');

    currentTrigger = 0;
    
    
}



function fireTrigger(trigger) {
    switch (trigger) {
            
            case 0:
            $('html, body').animate({ scrollTop: 0 }, 000, function() {
    
});
$('#line1').html(lyrics[0]).addClass('titlefade').fadeIn(1000).delay(2000).fadeOut(2000);
                		break;
                
			case 1: 
				$('#line1').html(lyrics[1]).removeClass('titlefade').fadeIn(1000);
                break;
                
            case 2:
                $('#line2a').html(lyrics[2]).fadeIn(000);
                break;
                
            case 3:
                $('#line2b').html(lyrics[3]).fadeIn(1000);
				$('#line3a').html(lyrics[4]).fadeIn(1000);
				$('html, body').animate({ scrollTop: $(document).height() - $(window).height() }, 60000, function() {
});
				break;
                
            case 4:
                $('#line3b').html(lyrics[5]).fadeIn(000);
                break;
                
            case 5:
				$('#line4a').html(lyrics[6]).fadeIn(1000);
                break;
            
            case 6:
                $('#line5a').html(lyrics[7]).fadeIn(1000);
				$('#line6a').html(lyrics[8]).fadeIn(1000);
                break;
			
			case 7:
                $('#line7a').html(lyrics[9]).fadeIn(1000);
                break;
 			
 			case 8:
                $('#line8a').html(lyrics[10]).fadeIn(1000);
                break;
            
            case 9:
                $('#line9a').html(lyrics[11]).fadeIn(0000);
              $('#line10a').html(lyrics[12]).fadeIn(1000);
                break;
                
            case 10:
                $('#line10b').html(lyrics[13]).fadeIn(1000);
				break;
				
            case 11:
                $('#line11a').html(lyrics[14]).fadeIn(000);
                break;
                
            case 12:
                $('#line11b').html(lyrics[15]).fadeIn(1000);
                break;
                
            case 13:
                $('#line12a').html(lyrics[16]).fadeIn(000);
                break;
                
            case 14:
                $('#line13a').html(lyrics[17]).fadeIn(1000);
                break;
                
            case 15:
                $('#line13b').html(lyrics[18]).fadeIn(000);
                break;
                
            case 16:
                $('#line14a').html(lyrics[19]).fadeIn(1000);
              	$('#line15a').html(lyrics[20]).fadeIn(1000);
                break;
            
            case 17:
                $('#line16a').html(lyrics[21]).fadeIn(000);
				break;
				
            case 18:
                $('#line16b').html(lyrics[22]).fadeIn(1000);
              	$('#line17a').html(lyrics[23]).fadeIn(1000);
              	$('#line18a').html(lyrics[24]).fadeIn(1000);
				break;
				
            case 19:
                $('#line18b').html(lyrics[25]).fadeIn(1000);
                $('#line19a').html(lyrics[26]).fadeIn(1000);
				break;
				
            case 20:
                $('#line20a').html(lyrics[27]).fadeIn(1000);
                break;
                
            case 21:
                $('#line20b').html(lyrics[28]).fadeIn(000);
                break;
                
            case 22:
				$('#line21a').html(lyrics[29]).fadeIn(1000);
                $('#line22a').html(lyrics[30]).fadeIn(1000);
                $('#line23a').html(lyrics[31]).fadeIn(1000);
                break;
                
            case 23:
                $('#line24a').html(lyrics[32]).fadeIn(1000);
                break;
                
            case 24:
                $('#line24b').html(lyrics[33]).fadeIn(000);
                break;
                
            case 25:
                $('#line25a').html(lyrics[34]).fadeIn(1000);
                break;
                
            case 26:
                $('#line26a').html(lyrics[35]).fadeIn(1000);
                $('#line27a').html(lyrics[36]).fadeIn(1000);
				break;
				
            case 27:
                $('#line27b').html(lyrics[37]).fadeIn(1000);
                $('#line28a').html(lyrics[38]).fadeIn(1000);
                break;
                
            case 28:
                $('#line29a').html(lyrics[39]).fadeIn(000);
                break;
                
            case 29:
                $('#line30a').html(lyrics[40]).fadeIn(1000);
                $('#line31a').html(lyrics[41]).fadeIn(1000);
              	break;
              	
            case 30:
                $('#line32a').html(lyrics[42]).fadeIn(000); 
               break;
               
        		case 31:
        		    $('#line1').fadeOut(2000);
        		    $('#line2a').fadeOut(2000);
        		    $('#line2b').fadeOut(2000);
        		    $('#line3a').fadeOut(2000);
        		    $('#line3b').fadeOut(2000);
        		    $('#line4a').fadeOut(2000);
        		    $('#line4b').fadeOut(2000);
        		    $('#line5a').fadeOut(2000);
        		    $('#line5b').fadeOut(2000);
        		    $('#line6a').fadeOut(2000);
        		    $('#line6b').fadeOut(2000);
        		    $('#line7a').fadeOut(2000);
        		    $('#line7b').fadeOut(2000);
        		    $('#line8a').fadeOut(2000);
        		    $('#line8b').fadeOut(2000);
        		    $('#line9a').fadeOut(2000);
        		    $('#line9b').fadeOut(2000);
        		    $('#line10a').fadeOut(2000);
        		    $('#line10b').fadeOut(2000);
        		    $('#line11a').fadeOut(2000);
        		    $('#line11b').fadeOut(2000);
        		    $('#line12a').fadeOut(2000);
        		    $('#line12b').fadeOut(2000);
        		    $('#line13a').fadeOut(2000);
        		    $('#line13b').fadeOut(2000);
        		    $('#line14a').fadeOut(2000);
        		    $('#line14ba').fadeOut(2000);
        		    $('#line15a').fadeOut(2000);
        		    $('#line15b').fadeOut(2000);
        		    $('#line16a').fadeOut(2000);
        		    $('#line16b').fadeOut(2000);
        		    $('#line17a').fadeOut(2000);
        		    $('#line17b').fadeOut(2000);
        		    $('#line18a').fadeOut(2000);
        		    $('#line18b').fadeOut(2000);
        		    $('#line19a').fadeOut(2000);
        		    $('#line19b').fadeOut(2000);
        		    $('#line20a').fadeOut(2000);
        		    $('#line20b').fadeOut(2000);
        		    $('#line21a').fadeOut(2000);
        		    $('#line22a').fadeOut(2000);
        		    $('#line23a').fadeOut(2000);
        		    $('#line23b').fadeOut(2000);
        		    $('#line24a').fadeOut(2000);
        		    $('#line24b').fadeOut(2000);
        		    $('#line25a').fadeOut(2000);
        		    $('#line25b').fadeOut(2000);
        		    $('#line26a').fadeOut(2000);
        		    $('#line26b').fadeOut(2000);
        		    $('#line27a').fadeOut(2000);
        		    $('#line27b').fadeOut(2000);
        		    $('#line28a').fadeOut(2000);
        		    $('#line28b').fadeOut(2000);
        		    $('#line29a').fadeOut(2000);
        		    $('#line29b').fadeOut(2000);
        		    $('#line30a').fadeOut(2000);
        		    $('#line30b').fadeOut(2000);
        		    $('#line31a').fadeOut(2000);
        		    $('#line31b').fadeOut(2000);
        		    $('#line32a').fadeOut(2000);
        		    $('#line32b').fadeOut(2000);
        		
        		    break;
             
               case 32:
              $('html, body').animate({ scrollTop: 0 }, 000, function() {
    
});
              break;
              
              case 33: 
			$('#line1').html(lyrics[43]).removeClass('titlefade').fadeIn(1000);
                break;
                
                case 34:
                $('#line2a').html(lyrics[44]).removeClass('titlefade').delay(1500).fadeIn(000);
                break; 
                
            case 35:
                $('#line3a').html(lyrics[45]).fadeIn(1000);
                break;
                
            case 36:
                $('#line3b').html(lyrics[46]).fadeIn(000);
				break;
            
        		case 37:
                $('#line4a').html(lyrics[47]).fadeIn(1000);
				break;  
				
			case 38:
			$('html, body').animate({ scrollTop: $(document).height() - $(window).height() }, 60000, function() {
});
                $('#line5a').html(lyrics[48]).fadeIn(1000);
                $('#line5b').html(lyrics[49]).delay(800).fadeIn(1000);
                $('#line5c').html(lyrics[50]).delay(2400).fadeIn(1000);
				break;
			
			case 39:
                $('#line6a').html(lyrics[51]).fadeIn(1000);
                $('#line6b').html(lyrics[52]).delay(1500).fadeIn(1000);
				break;
			
			case 40:
                $('#line7a').html(lyrics[53]).fadeIn(000);
                $('#line7b').html(lyrics[54]).delay(600).fadeIn(1000);
				break;	
			
			case 41:
                $('#line8a').html(lyrics[55]).fadeIn(000);
				break;	
				
			case 42:
                $('#line9a').html(lyrics[56]).fadeIn(1000);
                $('#line10a').html(lyrics[57]).fadeIn(1800);
				break;
				
			case 43:
                $('#line11a').html(lyrics[58]).fadeIn(1000);
				break;
			
			case 44:
                $('#line12a').html(lyrics[59]).fadeIn(000);
				break;
			
			case 45:
			$('#line1').fadeOut(2000);
        		    $('#line2a').fadeOut(2000);
        		    $('#line3a').fadeOut(2000);
        		    $('#line3b').fadeOut(2000);
        		    $('#line4a').fadeOut(2000);
        		    $('#line5a').fadeOut(2000);
        		    $('#line5b').fadeOut(2000);
        		    $('#line5c').fadeOut(2000);
        		    $('#line6a').fadeOut(2000);
        		    $('#line6b').fadeOut(2000);
        		    $('#line7a').fadeOut(2000);
        		    $('#line7b').fadeOut(2000);
        		    $('#line8a').fadeOut(2000);
        		    $('#line9a').fadeOut(2000);
        		    $('#line10a').fadeOut(2000);
        		    $('#line11a').fadeOut(2000);
        		    $('#line12a').fadeOut(2000);
        		    
        		    break;
        		    
        		case 46:
        		$('html, body').stop({ scrollTop: $(document).height() - $(window).height() }, 000, function() {
});
              $('html, body').animate({ scrollTop: 0 }, 000, function() {
  
      
});

              break;
              
            case 47: 
            
            $('html, body').animate({ scrollTop: $(document).height() - $(window).height() }, 60000, function() {
});

			$('#line1').html(lyrics[60]).fadeIn(000);
			$('#line2a').html(lyrics[61]).fadeIn(000);
                break;
              
            case 48: 
			$('#line3a').html(lyrics[62]).fadeIn(1000);
                break;   
            
            case 49: 
			$('#line4a').html(lyrics[63]).fadeIn(000);
                break; 
           
            case 50: 
			$('#line5a').html(lyrics[64]).fadeIn(1000);
			$('#line6a').html(lyrics[65]).fadeIn(1000);
                break;
             
            case 51: 
			$('#line7a').html(lyrics[66]).fadeIn(1000);
			break;  
            
          	case 52: 
			$('#line8a').html(lyrics[67]).fadeIn(1000);
			$('#line9a').html(lyrics[68]).fadeIn(1000);
			break;  
			
		    case 53: 
			$('#line9b').html(lyrics[69]).fadeIn(000);
			break; 
			
			case 54: 
			$('#line10a').html(lyrics[70]).fadeIn(1000);
			break;    
			
		    case 55: 
			$('#line11a').html(lyrics[71]).fadeIn(000);
			break;
			
			case 56: 
			$('#line11b').html(lyrics[72]).fadeIn(1000);
			break;
			
			case 57: 
			$('#line12a').html(lyrics[73]).fadeIn(1000);
			break;
 
 			case 58: 
			$('#line13a').html(lyrics[74]).fadeIn(1000);
			break;
 			
 			case 59: 
			$('#line14a').html(lyrics[75]).fadeIn(1000);
			break;
			
			case 60: 
			$('#line15a').html(lyrics[76]).fadeIn(1000);
			$('#line16a').html(lyrics[77]).fadeIn(1000);
			break;
			
			case 61:
			$('#line17a').html(lyrics[78]).fadeIn(000);
			break;
			
			case 62:
			$('#line17b').html(lyrics[79]).fadeIn(1000);
			break;
			
			case 63:
			$('#line18a').html(lyrics[80]).fadeIn(000);
			break;
			
			case 64:
			$('#line19a').html(lyrics[81]).fadeIn(000);
			break;
			
			case 65:
			$('#line19b').html(lyrics[82]).fadeIn(000);
			$('#line20a').html(lyrics[83]).delay(500).fadeIn(000);
			
			case 66:
			$('#line20b').html(lyrics[84]).fadeIn(000);
			break;
			
			case 67:
			$('#line21a').html(lyrics[85]).fadeIn(1000);
			break;
			
			case 68:
			$('#line21b').html(lyrics[86]).fadeIn(000);
			break;
			
			case 69:
			$('#line1').fadeOut(2000);
			$('#line2a').fadeOut(2000);
        		    $('#line3a').fadeOut(2000);
        		    $('#line4a').fadeOut(2000);
        		    $('#line5a').fadeOut(2000);
        		    $('#line6a').fadeOut(2000);
        		    $('#line7a').fadeOut(2000);
        		    $('#line8a').fadeOut(2000);
        		    $('#line9a').fadeOut(2000);
        		    $('#line9b').fadeOut(2000);
        		    $('#line10a').fadeOut(2000);
        		    $('#line11a').fadeOut(2000);
        		    $('#line11b').fadeOut(2000);
        		    $('#line12a').fadeOut(2000);
        		    $('#line13a').fadeOut(2000);
        		    $('#line14a').fadeOut(2000);
        		    $('#line15a').fadeOut(2000);
        		  	$('#line16a').fadeOut(2000);
        		    $('#line17a').fadeOut(2000);
        		    $('#line17b').fadeOut(2000);
        		    $('#line18a').fadeOut(2000);
        		    $('#line19a').fadeOut(2000);
        		  	$('#line19b').fadeOut(2000);
        		    $('#line20a').fadeOut(2000);
        		    $('#line20b').fadeOut(2000);
        		    $('#line21a').fadeOut(2000);
        		    $('#line21b').fadeOut(2000);
				break;
			
			case 70:
			$('html, body').stop({ scrollTop: $(document).height() - $(window).height() }, 000, function() {
});

              $('html, body').animate({ scrollTop: 0 }, 500, function() {
    });
              break;
              
            case 71:
			$('#line1').addClass('quote').html(lyrics[87]).fadeIn(000);
			break; 
			
			case 72:
			$('#line1b').html(lyrics[88]).fadeIn(000);
			break; 
			
			case 73:
			$('#line2a').html(lyrics[89]).fadeIn(1000);
			break; 
			
			case 74:
			$('#line3a').html(lyrics[90]).fadeIn(000);
			break; 
			
			case 75:
			$('#line3b').html(lyrics[91]).fadeIn(1000);
			break; 
			
			case 76:
			$('#line4a').html(lyrics[92]).fadeIn(500);
			break;
			
			case 77:
			$('#line4b').html(lyrics[93]).fadeIn(000);
			break;
			
			case 78:
			$('#line4c').html(lyrics[94]).fadeIn(500);
			break;
			
			case 79:
			$('#line5a').html(lyrics[95]).fadeIn(500);
			break;
			
			case 80:
			$('#line6a').html(lyrics[96]).fadeIn(000);
			break;
			
			case 81:
			$('#line6b').html(lyrics[97]).fadeIn(1000);
			$('#line7a').html(lyrics[98]).fadeIn(1500);
			break;
			
			case 82:
			$('#line8a').html(lyrics[99]).fadeIn(000);
			break;
			
			case 83:
			$('#line8b').html(lyrics[100]).fadeIn(000);
			break;
			
			case 84:
			$('#line9a').html(lyrics[101]).fadeIn(1000);
			break;
			
			case 85:
			$('#line10a').html(lyrics[102]).fadeIn(1000);
			break;
			
			case 86:
			$('#line11a').html(lyrics[103]).fadeIn(1000);
			break;
			
			case 87:
			$('#line12a').html(lyrics[104]).fadeIn(1000);
			break;
			
			case 88:
			$('#line13a').html(lyrics[105]).fadeIn(000);
			break;
			
			case 89:
			$('#line13b').html(lyrics[106]).fadeIn(1000);
			break;
			
			case 90:
			$('#line14a').html(lyrics[107]).fadeIn(1000);
			break;
			
			case 91:
			$('#line1').fadeOut(4000);
        		    $('#line1b').fadeOut(4000);
        		    $('#line2a').fadeOut(4000);
        		    $('#line3a').fadeOut(4000);
        		    $('#line3b').fadeOut(4000);
        		    $('#line4a').fadeOut(4000);
        		    $('#line4b').fadeOut(4000);
        		    $('#line4c').fadeOut(4000);
        		    $('#line5a').fadeOut(4000);
        		    $('#line6a').fadeOut(4000);
        		    $('#line6b').fadeOut(4000);
        		    $('#line7a').fadeOut(4000);
        		    $('#line8a').fadeOut(4000);
        		    $('#line8b').fadeOut(4000);
        		    $('#line9a').fadeOut(4000);
        		  	$('#line10a').fadeOut(4000);
        		    $('#line11a').fadeOut(4000);
        		    $('#line12a').fadeOut(4000);
        		    $('#line13a').fadeOut(4000);
        		    $('#line13b').fadeOut(4000);
        		  	$('#line14a').fadeOut(4000);
        		  	$('#line1').removeClass('quote');
			break;
		
		
		
									
            default:
                break;
        }

}


  
  timings = new Array();
  timings[0] = 1; // title 
  timings[1] = 08.706; // i hate long goodbyes
  timings[2] = 11.05; // and
  timings[3] = 12.050; // i'm not that hot at thinking on my feet
  timings[4] = 14.06; // but
  timings[5] = 15; // i'll write you a retrospective
  timings[6] = 16.5; // if you're prepared to wait for a couple of weeks
  timings[7] = 19; // i'd like to tighten up a touch
  timings[8] = 20.8; // and change my working style
  timings[9] = 22.6; // a bit more exercise and focus
  timings[10] = 24; // a little less
  timings[11] = 25.7; // girls gone wild 
  timings[12] = 28; // I'm learning remember
  timings[13] = 30; // nothing stays
  timings[14] = 31; // and nothing waits til later
  timings[15] = 32.7; // so 
  timings[16] = 33.5; // i'd like to be less of a theorist and more a
  timings[17] = 35.5; // demonstrator
  timings[18] = 37; // i'm not the future anymore i'm just another generation
  timings[19] = 40.6; // trying to cipher out a message under all this
  timings[20] = 43; // misinformation
  timings[21] = 45; // because
  timings[22] = 47.4; // we all need to work together that means everybody has to do it my way
  timings[23] = 50.8; // but i say this with love
  timings[24] = 51.7; // so
  timings[25] = 52.7; // that pretty much makes it okay
  timings[26] = 55.7 // as we break bread i'll ask the question
  timings[27] = 58.5; // if i was leaving here tonight
  timings[28] = 60.9; // would you tell me what a fool i was
  timings[29] = 64.1; // or would you drive me to the flight
  timings[30] = 69; // thanks for the lift by the way
  timings[31] = 71; // FADE VERSE ONE
  timings[32] = 73; // SCROLL TO TOP
  timings[33] = 77; // I can't change the past
  timings[34] = 78; // and thats hard to accept
  timings[35] = 80.5; // but now i'm here and
  timings[36] = 81.5; // and
  timings[37] = 82; // ive got love to give
  timings[38] = 83.2; // we move, and we change course, and we lose touch 
  timings[39] = 86.5; // and we miss us, we miss you
  timings[40] = 89.6; // and, we can be in two places at once but
  timings[41] = 92.84; // not physically
  timings[42] = 94.7; // and we can work for cheese and weep like superheroe	s
  timings[43] = 97; // but i cant be everything
  timings[44] = 99; // to anyone
  timings[45] = 100.5; // FADE VERSE TWO
  timings[46] = 102.5; // SCROLL TO TOP
  timings[47] = 102.74; // My pads are full of things i shouldve said
  timings[48] = 105.6; // this is for coming home and realising that
  timings[49] = 108; // nothing really changed that much
  timings[50] = 109.9; // if i was leaving tonight would you let me go
  timings[51] = 112.8; // or would you cause a fuss
  timings[52] = 114.85; // would you talk in riddles to keep some control
  timings[53] = 117.3; // because
  timings[54] = 118; // maybe its you that cant let go
  timings[55] = 120; // would it end with ellipsis
  timings[56] = 122.65; // or kisses
  timings[57] = 123.5; // or questions
  timings[58] = 125.3; // would there be tears for what weve lost
  timings[59] = 127.2; // would there be joy for what weve gained
  timings[60] = 129.1; // and would we hold hands and that would be enough love
  timings[61] = 131.4; // because
  timings[62] = 132; // tonights michael isnt performing
  timings[63] = 133.5; // hes wishing there was more time
  timings[64] = 134.5; // and
  timings[65] = 135.5; // hes trying to figure out how to say goodbye without it becoming a sermon
  timings[66] = 138.5; // and
  timings[67] = 140; // hes afraid
  timings[68] = 140.5; // and
  timings[69] = 141.5; // FADE VERSE THREE
  timings[70] = 143.5; // SCROLL TO TOP
  timings[71] = 143.5; // people arent wearing enough hats
  timings[72] = 144.5; // -
  timings[73] = 145.6; // this is my text message to say that
  timings[74] = 147.5; // in here
  timings[75] = 148.5; // all this fits together
  timings[76] = 151; // its messy
  timings[77] = 151.8; // but 
  timings[78] = 152.4; //its my mess
  timings[79] = 153.1; // and i know my way around
  timings[80] = 155; // so
  timings[81] = 156; // if you take nothing else from this take my word for it
  timings[82] = 161; // do i think about it
  timings[83] = 162.5; // yes
  timings[84] = 163.9; // i think about it everyday
  timings[85] = 166.5; // and if i was leaving tonight
  timings[86] = 168.9; // or if i was staying forever
  timings[87] = 173; // im grateful
  timings[88] = 175.6; // and
  timings[89] = 176.5; // i hate long goodbyes
  timings[90] = 179.6; // so forgive me
  timings[91] = 185; // FIN
  /*
   * 
   */
  
  


    lyrics = new Array();
    lyrics[0] = 'Goodbye';
	lyrics[1] = 'I hate long goodbyes';
    lyrics[2] = 'and&nbsp;';
    lyrics[3] = "I'm not that hot at";
    lyrics[4] = 'thinking on my feet,&nbsp;';
	lyrics[5] = "but";
    lyrics[6] = "I'll write you a retrospective";
    lyrics[7] = "If you're prepared to wait";
    lyrics[8] = 'for a couple of weeks.';
	lyrics[9] = "I'd like to tighten up a touch";    
    lyrics[10] = "and change my working style;";
    lyrics[11] = "A bit more exercise";
   	lyrics[12] = 'and focus,&nbsp;';
	lyrics[13] = 'a little less&nbsp;';
	lyrics[14] = 'Girls Gone Wild.&nbsp;';
	lyrics[15] = "I'm learning, remember,";
	lyrics[16] = 'nothing stays';
	lyrics[17] = 'and nothing waits til later&nbsp;';
	lyrics[18] = 'so';
	lyrics[19] = "I'd like to be";
	lyrics[20] = 'less of a theorist and more a';
	lyrics[21] = "demonstrator;&nbsp;";
	lyrics[22] = "I'm not the future anymore,";
	lyrics[23] = "I'm just another";
	lyrics[24] = 'generation&nbsp;';
	lyrics[25] = 'trying to';
	lyrics[26] = 'cipher out a message under all this&nbsp;';
	lyrics[27] = 'misinformation&nbsp;';
	lyrics[28] = 'because';
	lyrics[29] = 'we all need to work together;';
	lyrics[30] = 'that means';
	lyrics[31] = 'everybody has to do it my way';
	lyrics[32] = 'but I say this with love&nbsp;';
	lyrics[33] = 'so';
	lyrics[34] = 'that pretty much makes it okay.';
	lyrics[35] = 'As we break bread';
	lyrics[36] = "I'll ask the question,&nbsp;";
	lyrics[37] = 'if I was';
	lyrics[38] = 'leaving here tonight';
	lyrics[39] = 'would you tell me what a fool I was';
	lyrics[40] = 'or would you';
	lyrics[41] = "drive me to the flight?";
	lyrics[42] = "Thanks for the lift, by the way.";
	
	lyrics[43] = "I can't change the past";
	lyrics[44] = "and that's hard to accept,";
	lyrics[45] = "but now I'm here&nbsp;";
	lyrics[46] = "and";
	lyrics[47] = "I've got love to give.";
	lyrics[48] = 'We move&nbsp;';
	lyrics[49] = 'and we change course&nbsp;';
	lyrics[50] = 'and we lose touch';
	lyrics[51] = "and we miss us,&nbsp;";
	lyrics[52] = "we miss you,";
	lyrics[53] = "and&nbsp;";
	lyrics[54] = "we can be in two places at once but";
	lyrics[55] = "not physically."
	lyrics[56] = "And we can work for cheese";
	lyrics[57] = "and weep like superheroes";
	lyrics[58] = "but I can't be everything";
	lyrics[59] = 'to anyone.';
	
	lyrics[60] = 'My pads are full of things';
	lyrics[61] = "I should've said;";
	lyrics[62] = "this is for coming home and realising that";
	lyrics[63] = "nothing really changed that much.";
	lyrics[64] = "If I was leaving tonight";
	lyrics[65] = "would you let me go";
	lyrics[66] = "or would you cause a fuss?";
	lyrics[67] = "Would you talk in riddles";
	lyrics[68] = "to keep some control&nbsp;";
	lyrics[69] = "because";
	lyrics[70] = "maybe it's you that can't seem to let go?";
	lyrics[71] = "Would it end with ellipsis&nbsp;";
	lyrics[72] = "or kisses";
	lyrics[73] = "or questions?";
	lyrics[74] = "Would there be tears for what we've lost,";
	lyrics[75] = "would there be joy for what we've gained?";
	lyrics[76] = "And would we hold hands";
	lyrics[77] = "and that would be enough love";
	lyrics[78] = "because&nbsp;";
	lyrics[79] = "tonight's Michael isn't performing;";
	lyrics[80] = "he's wishing there was more time,";
	lyrics[81] = "and&nbsp;";
	lyrics[82] = "he's trying to figure out how to say goodbye";
	lyrics[83] = "without it becoming a sermon,&nbsp;";
	lyrics[84] = "and";
	lyrics[85] = "he's afraid&nbsp;";
	lyrics[86] = "and...";
	
	lyrics[87] = "&quot;people are not wearing enough hats&quot;";
	lyrics[88] = "&nbsp;&nbsp;&nbsp;&nbsp;&#8599;";
	lyrics[89] = "this is my text message to say that";
	lyrics[90] = "in here&nbsp;";
	lyrics[91] = "all this fits together,";
	lyrics[92] = "it's messy&nbsp;"
	lyrics[93] = "but&nbsp;" 
	lyrics[94] = "it's my mess";
	lyrics[95] = "and I know my way around,";
	lyrics[96] = "so&nbsp;";
	lyrics[97] = "if you take nothing else from this";
	lyrics[98] = "take my word for it,";
	lyrics[99] = "do I think about it?&nbsp;";
	lyrics[100] = "Yes,";
	lyrics[101] = "I think about it everyday,";
	lyrics[102] = "and if I was leaving here tonight";
	lyrics[103] = "or if I was staying forever,";	
	lyrics[104] = "I'm grateful.";
	lyrics[105] = "and&nbsp;";
	lyrics[106] = "I hate long goodbyes";
	lyrics[107] = "so forgive me."				
});
