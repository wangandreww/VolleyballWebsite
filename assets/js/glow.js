var $orbs = $('.orbs span');
$('.end-right').css('left' , '-10%');
$('.end-left').css('left', '110%');
$orbs.velocity({'top': '-300px', scaleX: '.2', scaleY: '.2', color: '#990000'},0);
var orb = 0;
var numOrbs = $orbs.length;



dropOrbs = function(){
  $orbs.eq(orb).velocity({top: '70px'}, 400).velocity({scaleX: 1, scaleY: 1, color: '#fff'}, 1200).css('position', 'relative');
  orb = orb + 1;
  if(orb < numOrbs){
    setTimeout(dropOrbs, 210);
  }
  else{
    setTimeout(function(){$('.glow').velocity({opacity: 1}, 1200);}, 1200);

  }
  
}

setTimeout(dropOrbs, 400);