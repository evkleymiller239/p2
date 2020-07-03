var dateEnd,limit,tim;
  var myDate = new Date();

  function returnEndDate(d,h,m){
    myDate.setDate(myDate.getDate()+d);
    myDate.setHours(myDate.getHours()+h);
    myDate.setMinutes(myDate.getMinutes()+m);
    return myDate;
  }

  if($.cookie("timer")){
    var dateEnd = $.cookie("timer");
    limit = dateEnd;

  }else{
    var dateEnd = returnEndDate(0,2,0);
    $.cookie("timer", Math.floor(dateEnd), {expires: 7});
    limit = Math.floor(new Date(dateEnd));

  }

function processTimer(){
  if (limit > 0) {
    setTimeout("processTimer()",1000);
    limit--;
    $.cookie("timer", limit, {expires: 7});
  }else{
  }
  var limit_str = "";
  var deys = parseInt((limit / 3600) / 24);
  var hours = parseInt((limit-(deys*3600*24))/3600);
  var minutes = parseInt( ((limit-(deys*3600*24))- (hours*3600))/60);
  var seconds = parseInt(limit-(deys*3600*24+hours*3600+minutes*60));
  if (deys < 10) deys = "0" + deys;
  if (hours < 10) hours = "0" + hours;
  if (minutes < 10) minutes = "0" + minutes;
  if (seconds < 10) seconds = "0" + seconds;
  limit_str = "<div class='timer_block'><div class='hours'>"+hours+"</div><div class='minutes'>"+minutes+"</div><div class=seconds>"+seconds+"</div></div>";
  // вывод времени
  el_timer = document.getElementById("timer");
  if (el_timer) el_timer.innerHTML = limit_str;
}
var h = new Date().getHours()*60*60;
var m = new Date().getMinutes()*60;
var s = new Date().getSeconds();
var countZakaz = 360;
//$.cookie("notimer", countZakaz, {expires: 1}); tim = countZakaz;
//Запуск таймера
function processNoTimer(){
  tim = parseInt(countZakaz);
  $('.time-second').html(tim);
  setTimeout("processNoTimer()",12000);
  curTime = parseInt(tim);
  countZakaz = curTime+1;
  //$.cookie("notimer", tim);
}

