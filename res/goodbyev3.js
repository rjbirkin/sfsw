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
                mp3: "res/goodbye.mp3", 
                oga: "res/vilifyogg.ogg" 
            });
        },
        volume: 0.9,
        supplied: "mp3, oga",
        swfPath: "./res/"
    });
    
    noauto = true;
        
    }
    else {
        $("#jpId").jPlayer( {
        ready: function () {
          $(this).jPlayer("setMedia", {
            mp3: "res/goodbye.mp3", 
            oga: "res/vilifyogg.ogg" 
          }).jPlayer("play");
        },
        volume: 0.9,
        supplied: "mp3, oga",
        swfPath: "./res/"
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
    $('#play').text('play');
    });
    
    $('#play').click(function() {
    $('#jpId').jPlayer('play');
    });
  
 $('#pause').click(function() {
    $('#jpId').jPlayer('pause');
$('#play').text('play');
    });

  $('#jpId').bind($.jPlayer.event.playing, function(event) {
     $('#play').text('playing');
     startLyrics();
  });
  $('#jpId').bind($.jPlayer.event.loadstart, function(event) {
     $('#play').text('loading...');
  });
  $('#jpId').bind($.jPlayer.event.suspend, function(event) {
     $('#play').text('play');
  });

  
  $('#jpId').bind($.jPlayer.event.ended, function(event) {
     $('#jpId').jPlayer('play');
     $('#play').text('play');
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
    $('#line2').hide().css('fontSize', '');
 $('#line2b').hide().css('fontSize', '');
$('#line2bc').hide().css('fontSize', '');
$('#line2d').hide().css('fontSize', '');
$('#line2e').hide().css('fontSize', '');
$('#line3').hide().css('fontSize', '');
 $('#line3b').hide().css('fontSize', '');
$('#line4').hide().css('fontSize', '');
$('#line4b').hide().css('fontSize', '');
$('#line5').hide().css('fontSize', '');
$('#line5b').hide().css('fontSize', '');
$('#line5c').hide().css('fontSize', '');
$('#line5d').hide().css('fontSize', '');
$('#line5e').hide().css('fontSize', '');
$('#line6').hide().css('fontSize', '');
$('#line7').hide().css('fontSize', '');


    currentTrigger = 0;
    
    
}

function fireTrigger(trigger) {
    switch (trigger) {
            case 0:
                $('#line1').html(lyrics[0]).fadeIn(1000).delay(15000).fadeOut(1000);
                break;
                
            case 1:
                $('#line2').html(lyrics[1]).fadeIn(000).delay(14000).fadeOut(1000);
                                break;
                
            case 2:
                $('#line2b').html(lyrics[2]).fadeIn(1000).delay(11000).fadeOut(1000);
$('#line3').html(lyrics[3]).fadeIn(1000).delay(11000).fadeOut(1000);
		break;
                
            case 3:
                $('#line3b').html(lyrics[4]).fadeIn(000).delay(10000).fadeOut(1000);
                break;
            case 4:
$('#line4').html(lyrics[5]).fadeIn(1000).delay(7000).fadeOut(1000);
                                break;
            case 5:
                $('#line5').html(lyrics[6]).fadeIn(1000).delay(5000).fadeOut(1000);
                                break;
            case 6:
                $('#line6').html(lyrics[7]).fadeIn(1000).delay(3000).fadeOut(1000);
                break;
            case 7:
                $('#line1').html(lyrics[8]).fadeIn(0000).delay(12000).fadeOut(1000);
             
                break;
            case 8:
                $('#line2').html(lyrics[9]).fadeIn(000).delay(10000).fadeOut(1000);
                break;
            case 9:
                $('#line3').html(lyrics[10]).fadeIn(000).delay(9000).fadeOut(1000);
                                break;
            case 10:
                $('#line3b').html(lyrics[11]).fadeIn(000).delay(7000).fadeOut(1000);
                break;
            case 11:
                $('#line4').html(lyrics[12]).fadeIn(000).delay(5000).fadeOut(1000);
                
                break;
            case 12:
                $('#line4b').html(lyrics[13]).fadeIn(1000).delay(2000).fadeOut(1000);
                break;
            case 13:
                $('#line5').html(lyrics[14]).fadeIn(000).delay(1500).fadeOut(1000);
                
                break;
            case 14:
                $('#line5b').html(lyrics[15]).fadeIn(000).delay(1000).fadeOut(1000);
                break;
            case 15:
                $('#line5c').html(lyrics[16]).fadeIn(000).delay(500).fadeOut(1000);
                
                break;
            case 16:
                $('#line5d').html(lyrics[17]).fadeIn(1000).delay(2000).fadeOut(1000);

                break;
            case 17:
                $('#line1').html(lyrics[18]).fadeIn(1000).delay(12000).fadeOut(1000);
                break;
            case 18:
                $('#line2').html(lyrics[19]).fadeIn(1000).delay(10000).fadeOut(1000);
                
                break;
            case 19:
                $('#line2b').html(lyrics[20]).fadeIn(000).delay(9000).fadeOut(1000);
                break;
            case 20:
                $('#line3').html(lyrics[21]).fadeIn(1000).delay(7000).fadeOut(1000);
                $('#line4').html(lyrics[22]).fadeIn(1000).delay(7000).fadeOut(1000);
                break;
            case 21:
                $('#line4b').html(lyrics[23]).fadeIn(000).delay(6000).fadeOut(1000);
                break;
            case 22:
                $('#line5').html(lyrics[24]).fadeIn(000).delay(5000).fadeOut(1000);
                break;
            case 23:
                $('#line5b').html(lyrics[25]).fadeIn(1000).delay(1000).fadeOut(1000);
                break;
            case 24:
                $('#line1').html(lyrics[26]).fadeIn(1000).delay(6000).fadeOut(000);
                $('#line2').html(lyrics[27]).fadeIn(1000).delay(6000).fadeOut(000);
                break;
            case 25:
                $('#line2b').html(lyrics[28]).fadeIn(1000).delay(4000).fadeOut(000);
                $('#line3').html(lyrics[29]).fadeIn(1000).delay(4000).fadeOut(000);
break;
            case 26:
                $('#line4').html(lyrics[30]).fadeIn(000).delay(3000).fadeOut(1000);
                break;
            case 27:
                $('#line4b').html(lyrics[31]).fadeIn(000).delay(2000).fadeOut(1000);
                break;
            case 28:
                $('#line2').html(lyrics[32]).fadeIn(000);
                
                break;
            case 29:
                $('#line3').html(lyrics[33]).fadeIn(000); 
               break;
            case 30:
                $('#line4').html(lyrics[34]).fadeIn(000);
                break;
            case 31:
                $('#line5').html(lyrics[35]).fadeIn(000);
                break;
            case 32:
                $('#line6').html(lyrics[36]).fadeIn(000);
            
                break;
            case 33:
                $('#line7').html(lyrics[37]).addClass('bigtext').fadeIn(000);
                break;
            case 34:
                $('#lyrics2 p').fadeIn(1000).delay(4000).fadeOut(1000);
                $('#lyrics1 p').delay(5000).fadeOut(1000);
                break;
            case 35:
                $('#lyrics1 p').fadeIn(1500).delay(5000).fadeOut(4000);
                break;
            case 36:
                $('#lyrics1 p').css('fontSize', '').html('Exile Vilify').fadeIn(1000);
                $('#lyrics2 p').html('The National').fadeIn(1000);
                break;
                
            default:
                break;
        }

}


  
  timings = new Array();
  timings[0] = 4;
  timings[1] = 6;
  timings[2] = 8;
  timings[3] = 10;
  timings[4] = 12;
  timings[5] = 14;
  timings[6] = 16;
  timings[7] = 22;
  timings[8] = 24;
  timings[9] = 26;
  timings[10] = 28;
  timings[11] = 30;
  timings[12] = 32;
  timings[13] = 34;
  timings[14] = 35;
  timings[15] = 35.5;
  timings[16] = 36;
  timings[17] = 38;
  timings[18] = 40;
  timings[19] = 42;
  timings[20] = 44;
  timings[21] = 46;
  timings[22] = 48;
  timings[23] = 50;
  timings[24] = 52;
  timings[25] = 54;
  timings[26] = 56;
  timings[27] = 57;
  timings[28] = 60;
  timings[29] = 60.5;
  timings[30] = 61;
  timings[31] = 61.3;
  timings[32] = 61.6;
  timings[33] = 63;
  timings[34] = 65
  timings[35] = 67;
  timings[36] = 76; // credits sequence
  
  /*
   * 
   */
  
  


    lyrics = new Array();
    lyrics[0] = 'I hate long goodbyes<br />';
    lyrics[1] = 'and&nbsp;';
    lyrics[2] = "I'm not that hot at";
    lyrics[3] = 'thinking on my feet,&nbsp;';
    
    lyrics[4] = "but";
    lyrics[5] = "I'll write you a retrospective";
    
    lyrics[6] = "If you're prepared to wait";
    lyrics[7] = 'for a couple of weeks.';

    lyrics[8] = "I'd like to tighten up a touch";    
    lyrics[9] = "and change my working style;";
    lyrics[10] = "A bit more&nbsp;";
    
    lyrics[11] = 'exercise';
lyrics[12] = 'and focus,&nbsp;';
lyrics[13] = 'a little less&nbsp;';
lyrics[14] = 'Girls&nbsp;';
lyrics[15] = 'Gone&nbsp;';
lyrics[16] = 'Wild.&nbsp;';

lyrics[17] = "I'm learning, remember,";
lyrics[18] = 'nothing stays';
lyrics[19] = 'and nothing waits til later&nbsp;';
lyrics[20] = 'so';
lyrics[21] = "I'd like to be";
lyrics[22] = 'less of a theorist&nbsp;';
lyrics[23] = 'and more a';
lyrics[24] = 'demonstrator';
lyrics[25] = ": I'm not the future anymore,";
lyrics[26] = "I'm just another";
lyrics[27] = 'generation&nbsp;';
lyrics[28] = 'trying to';
lyrics[29] = 'cipher out a message under all this&nbsp;';
lyrics[30] = 'misinformation&nbsp;';
lyrics[31] = 'because';
lyrics[32] = 'we&nbsp;';
lyrics[33] = 'all&nbsp;';
lyrics[34] = 'need&nbsp;';
lyrics[35] = 'to&nbsp;';
lyrics[36] = 'work&nbsp;';
lyrics[37] = 'together;';
lyrics[38] = 'that means';
lyrics[39] = 'everybody has to do it';
lyrics[40] = 'my way';
lyrics[41] = 'but I say this with love&nbsp;';
lyrics[42] = 'so';
lyrics[43] = 'that pretty much makes it okay.';

lyrics[44] = 'As we break bread';
lyrics[45] = "I'll ask the question,";

lyrics[46] = 'if I was';
lyrics[47] = 'leaving here tonight';
lyrics[48] = 'would you tell me what a fool I was';
lyrics[49] = 'or would you';
lyrics[50] = 'drive me to the flight?';

lyrics[51] = 'Thanks for the lift,&nbsp;';
lyrics[52] = 'by the way.';




});
