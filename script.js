
var deadline = Date.parse(new Date()) + (47*60*60*1000)+(7*60*1000)+(30*1000);
function getTimeRemaining(deadline){
  var t = deadline - Date.parse(new Date());
  var seconds = Math.floor( (t/1000) % 60 );
  var minutes = Math.floor( (t/1000/60) % 60 );
  var hours = Math.floor( (t/(1000*60*60)) % 24 );
  var days = Math.floor( t/(1000*60*60*24) );
  return {
   'total': t,
   'days': days,
   'hours': hours,
   'minutes': minutes,
   'seconds': seconds
  };
}


function initializeClock(deadline){
	
  var timeinterval = setInterval(function(){
   var t = getTimeRemaining(deadline);
	    var clockDays = document.querySelector('.days'); 
	     var clockHours= document.querySelector('.hours');
	      var clockMinutes= document.querySelector('.minutes');
	       var clockSeconds= document.querySelector('.seconds');
   clockDays.innerHTML =  t.days;
	  clockHours.innerHTML=  t.hours;
	    clockMinutes.innerHTML= t.minutes;
	      clockSeconds.innerHTML= t.seconds;
	
   if(t.total<=0){
    clearInterval(timeinterval);
   }
  },1000);
}
initializeClock(deadline);




