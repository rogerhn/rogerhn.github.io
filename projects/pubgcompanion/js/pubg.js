$$(document).on('pageInit', function(e) {
	
for (var i = 0; i < PUBGITEMS.length; i++){
  var pubg = PUBGITEMS[i];
  pubg['icon2'] = (pubg['icon2'] == undefined) ? "none" : pubg['icon2'];
  pubg['capacity'] = (pubg['capacity'] == undefined) ? "" : pubg['capacity'];
  pubg['type'] = (pubg['type'] == undefined) ? "" : pubg['type'];
  pubg['amount'] = (pubg['amount'] == undefined) ? "" : pubg['amount'];
  pubg['quantity'] = (pubg['quantity'] == undefined) ? "" : pubg['quantity'];
  pubg['desc'] = (pubg['desc'] == undefined) ? "" : pubg['desc'];
  pubg['bonusbar'] = (pubg['bonusbar'] == undefined) ? "none" : pubg['bonusbar'];
  pubg['bartype'] = (pubg['bartype'] == undefined) ? "" : pubg['bartype'];
  
  $(".listcard-backpacks." + pubg['item']).html
  ('<a href="'+ pubg['item'] +'.html" class="item-list">' +
   '<i class="'+ pubg['icon'] +'"></i>' +
   '<p class="name" datai18n="'+ pubg['i18name'] +'">'+ pubg['name'] +'</p>' +
   '<div class="list-info">'+
   '<p class="info" datai18n="capacity">Capacity</p>'+
   '<p class="info-value">'+pubg.capacity+'</p>'+
   '</div>'+
   '</a>')

  $(".backpacks." + pubg.item).html
  ('<div class="single-item">'+
   '<div class="item-details">'+
   '<p class="name" datai18n="'+pubg.i18name+'">'+pubg.name+'</p>'+
   '<div class="r-details">'+
   '<p>'+
   '<span class="cap" datai18n="Capacity">Capacity:</span>'+
   '<span class="ivalue">'+pubg.capacity+'</span>'+
   '</p>'+
   '</div>'+
   '</div>'+
   '<div class="item-image">'+
   '<i class="'+pubg.icon+'"></i>'+
   '<i class="'+pubg.icon2+'"></i>'+
   '</div>'+
   '<div class="item-desc">'+
   '<span class="description" datai18n="'+pubg.i18desc+'">'+pubg.desc+'</span>'+
   '</div>'+
   '</div>')
   
   $(".listcard-helmets." + pubg['item']).html
  ('<a href="'+ pubg['item'] +'.html" class="item-list">' +
   '<i class="'+ pubg['icon'] +'"></i>' +
   '<p class="name" datai18n="'+ pubg['i18name'] +'">'+ pubg['name'] +'</p>' +
   '<div class="list-info">'+
   '<p class="info" datai18n="'+pubg.i18type+'">'+pubg.type+'</p>'+
   '<p class="info-value">'+pubg.amount+'</p>'+
   '</div>'+
   '</a>')
   
  $(".helmets." + pubg.item).html
  ('<div class="single-item">'+
   '<div class="item-details">'+
   '<p class="name" datai18n="'+pubg.i18name+'">'+pubg.name+'</p>'+
   '<div class="l-details">'+
   '<p>'+
   '<span class="cap" datai18n="Protection">Protection:</span>'+
   '<span class="ivalue">'+pubg.amount+'</span>'+
   '</p>'+
   '</div>'+
   '</div>'+
   '<div class="item-image">'+
   '<i class="'+pubg.icon+'"></i>'+
   '<i class="'+pubg.icon2+'"></i>'+
   '</div>'+
   '<div class="item-desc">'+
   '<span class="description" datai18n="'+pubg.i18desc+'">'+pubg.desc+'</span>'+
   '</div>'+
   '</div>')
   
   $(".listcard-vests." + pubg['item']).html
  ('<a href="'+ pubg['item'] +'.html" class="item-list">' +
   '<i class="'+ pubg['icon'] +'"></i>' +
   '<p class="name" datai18n="'+ pubg['i18name'] +'">'+ pubg['name'] +'</p>' +
   '<div class="list-info">'+
   '<p class="info" datai18n="'+pubg.i18type+'">'+pubg.type+'</p>'+
   '<p class="info-value">'+pubg.amount+'</p>'+
   '</div>'+
   '</a>')
   
  $(".vests." + pubg.item).html
  ('<div class="single-item">'+
   '<div class="item-details">'+
   '<p class="name" datai18n="'+pubg.i18name+'">'+pubg.name+'</p>'+
   '<div class="l-details">'+
   '<p>'+
   '<span class="cap" datai18n="Protection">Protection:</span>'+
   '<span class="ivalue">'+pubg.amount+'</span>'+
   '</p>'+
   '</div>'+
   '<div class="r-details">'+
   '<p>'+
   '<span class="cap" datai18n="Capacity">Capacity:</span>'+
   '<span class="ivalue">'+pubg.capacity+'</span>'+
   '</p>'+
   '</div>'+
   '</div>'+
   '<div class="item-image">'+
   '<i class="'+pubg.icon+'"></i>'+
   '<i class="'+pubg.icon2+'"></i>'+
   '</div>'+
   '<div class="item-desc">'+
   '<span class="description" datai18n="'+pubg.i18desc+'">'+pubg.desc+'</span>'+
   '</div>'+
   '</div>')
   
   $(".listcard-health." + pubg['item']).html
  ('<a href="'+ pubg['item'] +'.html" class="item-list">' +
   '<i class="'+ pubg['icon'] +'"></i>' +
   '<p class="name" datai18n="'+ pubg['i18name'] +'">'+ pubg['name'] +'</p>' +
   '<div class="list-info">'+
   '<p class="info" datai18n="'+pubg.i18type+'">'+pubg.type+'</p>'+
   '<p class="info-value">'+pubg.amount+'</p>'+
   '</div>'+
   '</a>')
   
  $(".health." + pubg.item).html
  ('<div class="single-item">'+
   '<div class="item-details">'+
   '<p class="name" datai18n="'+pubg.i18name+'">'+pubg.name+'</p>'+
   '<div class="l-details">'+
   '<p>'+
   '<span class="type" datai18n="'+pubg.i18type+'">'+pubg.type+':</span>'+
   '<span class="ivalue">'+pubg.amount+'</span>'+
   '</p>'+
   '</div>'+
   '<div class="r-details">'+
   '<p>'+
   '<span class="usagetime" datai18n="UsageTime">Usage time:</span>'+
   '<span class="ivalue">'+pubg.usetime+'</span>'+
   '</p>'+
   '</div>'+
   '<div class="'+pubg.bonusbar+'">'+
   '<div class="'+pubg.bartype[0]+'"></div>'+
   '<div class="bar '+pubg.bartype[1]+'"></div>'+
   '</div>'+
   '</div>'+
   '<div class="item-image">'+
   '<i class="'+pubg.icon+'"></i>'+
   '</div>'+
   '<div class="item-desc">'+
   '<span class="description" datai18n="'+pubg.i18desc+'">'+pubg.desc+'</span>'+
   '</div>'+
   '</div>'
  )
  
  $(".listcard-booster." + pubg['item']).html
  ('<a href="'+ pubg['item'] +'.html" class="item-list">' +
   '<i class="'+ pubg['icon'] +'"></i>' +
   '<p class="name" datai18n="'+ pubg['i18name'] +'">'+ pubg['name'] +'</p>' +
   '<div class="list-info">'+
   '<p class="info" datai18n="'+pubg.i18type+'">'+pubg.type+'</p>'+
   '<p class="info-value">'+pubg.amount+'</p>'+
   '</div>'+
   '</a>')
   
  $(".booster." + pubg.item).html
  ('<div class="single-item">'+
   '<div class="item-details">'+
   '<p class="name" datai18n="'+pubg.i18name+'">'+pubg.name+'</p>'+
   '<div class="l-details">'+
   '<p>'+
   '<span class="type" datai18n="'+pubg.i18type+'">'+pubg.type+':</span>'+
   '<span class="ivalue">'+pubg.amount+'</span>'+
   '</p>'+
   '<p>'+
   '<span class="totalheal" datai18n="TotalHeal">Total Heal:</span>'+
   '<span class="ivalue">'+pubg.totalHeal+'</span>'+
   '</p>'+
   '</div>'+
   '<div class="r-details">'+
   '<p>'+
   '<span class="usagetime" datai18n="UsageTime">Usage time:</span>'+
   '<span class="ivalue">'+pubg.usetime+'</span>'+
   '</p>'+
   '<p>'+
   '<span class="duration" datai18n="Duration">Duration:</span>'+
   '<span class="ivalue">'+pubg.duration+'</span>'+
   '</p>'+
   '</div>'+
   '<div class="'+pubg.bonusbar+'">'+
   '<div class="'+pubg.bartype[0]+'"></div>'+
   '<div class="bar '+pubg.bartype[1]+'"></div>'+
   '</div>'+
   '</div>'+
   '<div class="item-image">'+
   '<i class="'+pubg.icon+'"></i>'+
   '</div>'+
   '<div class="item-desc">'+
   '<span class="description" datai18n="'+pubg.i18desc+'">'+pubg.desc+'</span>'+
   '</div>'+
   '</div>'
  )
  
  $(".listcard-wpns." + pubg['item']).html
  ('<a href="wpns-'+ pubg['item'] +'.html" class="item-list">' +
   '<i class="'+ pubg['item'] +'"></i>' +
   '<p class="name" datai18n="'+ pubg['i18name'] +'">'+ pubg['name'] +'</p>' +
   '</a>')
   
   $(".trowables." + pubg.item).html
  ('<div class="single-item">'+
   '<div class="item-details">'+
   '<p class="name" datai18n="'+pubg.i18name+'">'+pubg.name+'</p>'+
   '<div class="r-details">'+
   '<p>'+
   '<span class="cap" datai18n="Capacity">Capacity:</span>'+
   '<span class="ivalue">'+pubg.capacity+'</span>'+
   '</p>'+
   '</div>'+
   '</div>'+
   '<div class="item-image">'+
   '<i class="'+pubg.icon+'"></i>'+
   '</div>'+
   '<div class="item-desc">'+
   '<span class="description" datai18n="'+pubg.i18desc+'">'+pubg.desc+'</span>'+
   '</div>'+
   '</div>')
   
   
};
// AMMO CARDS
for (var a = 0; a < PUBGITEMS.length; a++){
  var pubg = PUBGITEMS[a];
  var ammofor = "";
  for (var j in PUBGITEMS[a].ammofor) { 
    ammofor += '<div class="listcard-wpns '+ PUBGITEMS[a].ammofor[j]+'"></div>';
  }
  pubg.desc = (pubg.desc == undefined) ? "" : pubg.desc;
  pubg.ammofor = (pubg.ammofor == undefined) ? "" : pubg.ammofor;
  $(".ammocard." + pubg.item).html
  ('<div class="single-item">' +
   '<div class="item-details">' +
   '<p class="name" datai18n="'+ pubg.i18name +'">'+ pubg.name +'</p>' +
   '</div>' +
   '<div class="item-image">' +
   '<i class="'+ pubg.icon +'"></i>' +
   '</div>' +
   '<div class="item-desc">' +
   '<span class="description">'+ pubg.desc +'</span>' +
   '<p class="ammo" datai18n="AmmoFor">Ammo for:</p>' +
   '</div>' +
   '<div class="items-list">' +
   ammofor +
   '</div>'
  )
  $(".listcard-wpns." + pubg['item']).html
  ('<a href="wpns-'+ pubg['item'] +'.html" class="item-list">' +
   '<i class="'+ pubg['item'] +'"></i>' +
   '<p class="name" datai18n="'+ pubg['i18name'] +'">'+ pubg['name'] +'</p>' +
   '</a>')
  };
  
for (var i = 0; i < PUBGITEMS.length; i++){
  var pubgitems = PUBGITEMS[i];
  pubgitems.verified = (pubgitems.verified === undefined) ? "" : pubgitems.verified;
  pubgitems.slots = (pubgitems.slots === undefined) ? "none" : pubgitems.slots;
  var attachs = "";
  for (var j in PUBGITEMS[i].attachs) {
    attachs += '<div class="attach '+ PUBGITEMS[i].attachs[j]+'"></div>';
  }
  var sights = "";
  for (var k in PUBGITEMS[i].attsights) { 
    sights += '<div class="attach '+ PUBGITEMS[i].attsights[k]+'"></div>';
  }


  $(".card." + pubgitems.item).html
  ('<div class="single-item '+ pubgitems.typei18 +' '+ pubgitems.item +'">'+
   '<div class="item-details">'+
   '<p class="name" datai18n="'+ pubgitems.item +'">'+ pubgitems.name +'</p>'+
   '<div class="l-details">'+
   '<p>'+
   '<span class="type" datai18n="'+ pubgitems.typei18 +'">'+ pubgitems.type +'</span>'+
   '</p>'+
   '</div>'+
   '<div class="r-details">'+
   '<p>'+
   '<a href="'+ pubgitems.ammo +'.html" class="ammo">'+
   '<i class="ammo'+ pubgitems.ammoIcon +'"></i>'+
   '<span class="ivalue">'+ pubgitems.ammo +'</span>'+
   '<span class="capacity" data-capacity="'+ pubgitems.capacity +'">'+ pubgitems.capacity +'</span>'+
   '</a>'+
   '</p>'+
   '</div>'+
   '<div class="wpn-image">'+
   '<i class="icon-small '+ pubgitems.item +'"></i>'+
   '<i class="icon-large '+ pubgitems.item +'-large"></i>'+
   '<div class="slots">'+
   '<div class="muzzle-slot">'+
   '<i class="slot '+ pubgitems.slots[0] +'"></i>'+
   '<span class="att-names '+ pubgitems.slots[0] +'-name"></span>'+
   '</div>'+
   '<div class="grip-slot">'+
   '<i class="slot '+ pubgitems.slots[1] +'"></i>'+
   '<span class="att-names '+ pubgitems.slots[1] +'-name"></span>'+
   '</div>'+
   '<div class="mag-slot">'+
   '<i class="slot '+ pubgitems.slots[2] +'"></i>'+
   '<span class="att-names '+ pubgitems.slots[2] +'-name"></span>'+
   '</div>'+
   '<div class="stock-slot">'+
   '<i class="slot '+ pubgitems.slots[3] +'"></i>'+
   '<span class="att-names '+ pubgitems.slots[3] +'-name"></span>'+
   '</div>'+
   '</div>'+
   '<a id="'+ pubgitems.item +'" class="compare">'+
   '<i class="c-icon"></i>'+
   '<span class="c-text" datai18n"Compare">Compare</span>'+
   '</a>'+
   '</div>'+
   '<div class="wpn-desc">'+
   '<span class="description" data-i18n="'+ pubgitems.i18desc +'">'+ pubgitems.desc +'</span>'+
   '</div>'+
   '</div>'+
   '<div class="item-stats">'+
   '<p class="stats">Power</p>'+
   '<div class="outer-bar power" data-value="'+ pubgitems.power +'">'+
   '<span class="value power">'+ pubgitems.power +'</span>'+
   '<div class="bonus-bar power"></div>'+
   '<div class="inner-bar power"></div>'+
   '</div>'+
   '<p class="stats">Range</p>'+
   '<div class="outer-bar range" data-value="'+ pubgitems.range +'">'+
   '<span class="value range">'+ pubgitems.range +'</span>'+
   '<div class="bonus-bar range"></div>'+
   '<div class="inner-bar range"></div>'+
   '</div>'+
   '<p class="stats">Stability</p>'+
   '<div class="outer-bar stability" data-value="'+ pubgitems.stability +'">'+
   '<span class="value stability">'+ pubgitems.stability +'</span>'+
   '<div class="bonus-bar stability"></div>'+
   '<div class="inner-bar stability"></div>'+
   '</div>'+
   '<p class="stats">Firing Rate</p>'+
   '<div class="outer-bar rate" data-value="'+ pubgitems.rate +'">'+
   '<span class="value rate">'+ pubgitems.rate +'</span>'+
   '<div class="bonus-bar rate"></div>'+
   '<div class="inner-bar rate"></div>'+
   '</div>'+
   '</div>'+
   '<div class="attachments">'+
   '<div class="toggle-content attachs">'+
   '<span class="toggle-title attachments-title" datai18n="Attachments">Attachments<i class="show"></i></span>'+
   '<div class="hidden-content">'+ attachs +'</div>'+
   '</div>'+
   '<div class="toggle-content sights">'+
   '<span class="toggle-title attachments-title" datai18n="Sights">Sights<i class="show"></i></span>'+
   '<div class="hidden-content">'+ sights +'</div>'+
   '</div>'+
   '</div>'+
   '</div>')
}

for (var l = 0; l < PUBGITEMS.length; l++){
  var pubg = PUBGITEMS[l];
  $(".listcard." + pubg['item']).html
  ('<a href="'+ pubg['item'] +'.html" class="item-list">' +
   '<i class="'+ pubg['item'] +'"></i>' +
   '<p class="name" datai18n="'+ pubg['i18name'] +'">'+ pubg['name'] +'</p>' +
   '</a>'
  )};
  
for (var i = 0; i < ATTACHMENTS.length; i++){
  var attachitems = ATTACHMENTS[i];
  attachitems.verified = (attachitems.verified === undefined) ? "" : attachitems.verified;
  var capacity = $(".attach." + attachitems.attachment).parent().parent().parent().parent().find('.capacity').data("capacity");
  attachitems.uniqu = (attachitems.unique === undefined) ? "" : attachitems.unique;
  attachitems.capacity = (attachitems.capacity === undefined) ? capacity : attachitems.capacity;
  $(".attach." + attachitems.attachment).html
  ('<div class="attachment-details">'+
   '<i class="'+ attachitems.icon +'"></i>'+
   '<a href="attachments-'+ attachitems.attachment +'.html" datai18n="'+ attachitems.i18n +'" class="name">'+ attachitems.name +'</a>' +
   '<span class="verified">'+ attachitems.verified +'</span>' +
   '<input type="checkbox" class="att '+ attachitems.unique +'" data-bonus="'+ attachitems.bonus +'" data-value="'+ attachitems.value +'" data-capacity="'+ attachitems.capacity +'" />' +
   '<label></label>'+
   '</div>')}
   
for (var s = 0; s < SIGHTS.length; s++){
  var sights = SIGHTS[s];
  $(".attach." + sights.sight).html
  ('<div class="attachment-details">'+
   '<i class="'+ sights.sight +'"></i>'+
   '<a href="'+ sights.sight +'.html" datai18n="'+ sights.sight +'" class="name">'+ sights.name +'</a>' +
   '</div>')}
   
for (var c = 0; c < PUBGCLOTHES.length; c++){
  var pubg = PUBGCLOTHES[c];
  $(".listcard-clothes." + pubg['item']).html
  ('<a href="'+ pubg['item'] +'.html" class="item-list">' +
   '<i class="'+ pubg['item'] +'"></i>' +
   '<p class="name" datai18n="'+ pubg['item'] +'">'+ pubg['name'] +'</p>' +
   '<div class="list-info">'+
   '<p class="info" datai18n="'+pubg.i18type+'">'+pubg.type+'</p>'+
   '<p class="info-value">'+pubg.amount+'</p>'+
   '</div>'+
   '</a>')
  
  $(".listcard-clothes." + pubg.item).html
  ('<a href="clothes-'+ pubg.item +'.html" class="item-list">' +
   '<i class="'+ pubg.item +'"></i>' +
   '<p class="name" datai18n="'+ pubg.item +'">'+ pubg.name +'</p>' +
   '<div class="list-info">'+
   '<p class="info" datai18n="BattlePoints">Battle Points</p>'+
   '<p class="info-value">'+pubg.bp+'</p>'+
   '</div>'+
   '</a>')
   
   $(".clothes." + pubg.item).html
  ('<div class="single-item">'+
   '<div class="item-details">'+
   '<p class="name" datai18n="'+pubg.item+'">'+pubg.name+'</p>'+
   '<div class="l-details">'+
   '<p>'+
   '<span class="bp">'+pubg.bp+'</span>'+
   '</p>'+
   '</div>'+
   '</div>'+
   '<div class="item-image">'+
   '<i class="'+pubg.item+'"></i>'+
   '</div>'+
   '</div>')
   }

$(".bar").html
('<div class="bar1">'+
 '<div class="ibar1"></div>'+
 '</div>'+
 '<div class="bar2">'+
 '<div class="ibar2"></div>'+
 '</div>'+
 '<div class="bar3">'+
 '<div class="ibar3"></div>'+
 '</div>'+
 '<div class="bar4">'+
 '<div class="ibar4"></div>'+
 '</div>');
 
 $(".att").each(function(e){
  $(this).change(function () {
    var classes = $(this).attr('class').split(' ')[1];
    var bonus = $(this).data("bonus");
    var value = $(this).data("value");
    var capacity = $(this).parents('.single-item').find('.capacity').data("capacity");
    var newCapacity = $(this).data("capacity");
    newCapacity = (newCapacity == undefined) ? "" : newCapacity;
    var oldValue = $(this).parent().parent().parent().parent().parent().parent().find('.value.'+bonus).html();
    var newValue = +oldValue + +value;
    var attIcon = $(this).parent().find("i").attr('class');
    var attName = $(this).parent().find("a").html();
    var attNamei18 = $(this).parent().find("a").attr('datai18n');
    if (this.checked) {
      $(this).parents('.single-item').find('.slot.'+classes).addClass(attIcon);
      $(this).parents('.single-item').find('.att-names.'+classes+'-name').attr('datai18n',attNamei18);
      $(this).parents('.single-item').find('.att-names.'+classes+'-name').html(attName);
      $(this).parent().parent().addClass("active");
      $(this).parent().parent().parent().parent().addClass("active");
      $(this).parent().parent().parent().find('.att.'+classes).attr('disabled',true);
      $(this).attr('disabled',false);
      $(this).parent().parent().parent().parent().parent().parent().find('.value.'+bonus).html(newValue);
      $(this).parent().parent().parent().parent().parent().parent().find('.bonus-bar.'+bonus).width((newValue)+'%');
      $(this).parent().parent().parent().parent().parent().parent().parent().find('.capacity').html(newCapacity);
      if (newCapacity > capacity) {
        $(this).parent().parent().parent().parent().parent().parent().find('.capacity').addClass("yellow");
      } else {
        $(this).parent().parent().parent().parent().parent().parent().find('.capacity').removeClass("yellow");
      }
      $(this).parent().parent().parent().parent().parent().parent().find('.value.'+bonus).addClass("yellow");
    } else {
      $(this).parents('.single-item').find('.'+classes).removeClass(attIcon);
      $(this).parents('.single-item').find('.'+classes+'-name').attr('datai18n','');
      $(this).parents('.single-item').find('.'+classes+'-name').html('');
      $('.att').attr('disabled',false);
      $(this).parent().parent().removeClass("active");
      var newValue = $(this).parent().parent().parent().parent().parent().parent().find('.value.'+bonus).html();
      var curValue = +newValue - +value;
      $(this).parent().parent().parent().parent().parent().parent().find('.value.'+bonus).html(curValue);
      $(this).parent().parent().parent().parent().parent().parent().find('.bonus-bar.'+bonus).width((curValue)+'%');
      $(this).parent().parent().parent().parent().parent().parent().parent().find('.capacity').html(capacity);
      $(this).parent().parent().parent().parent().parent().parent().find('.capacity').removeClass("yellow");
      $(this).parent().parent().parent().parent().parent().parent().find('.value.'+bonus).removeClass("yellow");
    }
  });
});

$(".inner-bar").each(function(e){
  var value = $(this).parent().data('value');
  $(this).width((value)+'%');
  $(this).parent().find('.value').html(value);
});

function powerCheck() {
  var powerOne = $(".item-one .value.power").html();
  var powerTwo = $(".item-two .value.power").html();
  if (+powerOne == +powerTwo) {
    $(".item-one .value.power").addClass("default");
    $(".item-two .value.power").addClass("default");
    $(".item-one .outer-bar.power .inner-bar").addClass("default");
    $(".item-two .outer-bar.power .inner-bar").addClass("default");
  }
  else if (+powerOne > +powerTwo) {
    $(".item-one .value.power").addClass("green");
    $(".item-two .value.power").addClass("red");
    $(".item-one .outer-bar.power .inner-bar").addClass("green");
    $(".item-two .outer-bar.power .inner-bar").addClass("red");
  }
  else {
    $(".item-one .value.power").addClass("red");
    $(".item-two .value.power").addClass("green");
    $(".item-one .outer-bar.power .inner-bar").addClass("red");
    $(".item-two .outer-bar.power .inner-bar").addClass("green");
  }
}
function rangeCheck() {
  var rangeOne = $(".item-one .value.range").html();
  var rangeTwo = $(".item-two .value.range").html();
  if (+rangeOne == +rangeTwo) {
    $(".item-one .value.range").addClass("default");
    $(".item-two .value.range").addClass("default");
    $(".item-one .outer-bar.range .inner-bar").addClass("default");
    $(".item-two .outer-bar.range .inner-bar").addClass("default");
  }
  else if (+rangeOne > +rangeTwo) {
    $(".item-one .value.range").addClass("green");
    $(".item-two .value.range").addClass("red");
    $(".item-one .outer-bar.range .inner-bar").addClass("green");
    $(".item-two .outer-bar.range .inner-bar").addClass("red");
  }
  else {
    $(".item-one .value.range").addClass("red");
    $(".item-two .value.range").addClass("green");
    $(".item-one .outer-bar.range .inner-bar").addClass("red");
    $(".item-two .outer-bar.range .inner-bar").addClass("green");
  }
}
function stabilityCheck() {
  var stabilityOne = $(".item-one .value.stability").html();
  var stabilityTwo = $(".item-two .value.stability").html();
  if (+stabilityOne == +stabilityTwo) {
    $(".item-one .value.stability").addClass("default");
    $(".item-two .value.stability").addClass("default");
    $(".item-one .outer-bar.stability .inner-bar").addClass("default");
    $(".item-two .outer-bar.stability .inner-bar").addClass("default");
  }
  else if (+stabilityOne > +stabilityTwo) {
    $(".item-one .value.stability").addClass("green");
    $(".item-two .value.stability").addClass("red");
    $(".item-one .outer-bar.stability .inner-bar").addClass("green");
    $(".item-two .outer-bar.stability .inner-bar").addClass("red");
  }
  else {
    $(".item-one .value.stability").addClass("red");
    $(".item-two .value.stability").addClass("green");
    $(".item-one .outer-bar.stability .inner-bar").addClass("red");
    $(".item-two .outer-bar.stability .inner-bar").addClass("green");
  }
}
function rateCheck() {
  var rateOne = $(".item-one .value.rate").html();
  var rateTwo = $(".item-two .value.rate").html();
  if (+rateOne == +rateTwo) {
    $(".item-one .value.rate").addClass("default");
    $(".item-two .value.rate").addClass("default");
    $(".item-one .outer-bar.rate .inner-bar").addClass("default");
    $(".item-two .outer-bar.rate .inner-bar").addClass("default");
  }
  else if (+rateOne > +rateTwo) {
    $(".item-one .value.rate").addClass("green");
    $(".item-two .value.rate").addClass("red");
    $(".item-one .outer-bar.rate .inner-bar").addClass("green");
    $(".item-two .outer-bar.rate .inner-bar").addClass("red");
  }
  else {
    $(".item-one .value.rate").addClass("red");
    $(".item-two .value.rate").addClass("green");
    $(".item-one .outer-bar.rate .inner-bar").addClass("red");
    $(".item-two .outer-bar.rate .inner-bar").addClass("green");
  }
}


var match = [];
$(".close").click(function(clear){
  var $this = $(".compare");
  $(".item-one").html("");
  $(".item-two").html("");
  $(".wpns-box").removeClass("active");
  $(".wpns-bg").removeClass("active");
  $("body").removeClass("no-scroll");
  $(".compare").removeClass("clicked-once");
  localStorage.removeItem('clonedWpn');
  $this.removeClass("hide");
});
$('.toggle-title').click(function(){
  $(this).toggleClass('active');
  $(this).find('.show').toggleClass('active');
  $(this).next('.hidden-content').slideToggle(500);
});
var removeClass = true;
$('.slots i').click(function(){
  $(this).parent().find('.att-names').toggleClass('active');
  removeClass = false;
});

$("html").click(function () {
    if (removeClass) {
        $(".att-names").removeClass('active');
    }
    removeClass = true;
});

/*
var wpnSelected;
    if (localStorage.getItem['wpn-selected'] !== null) {
      wpnSelected = localStorage['wpn-selected'];
      $("#"+wpnSelected).addClass("hide");
    }
*/	

$(".compare").click(function(){
  //$(this).addClass( "hide" );
  if (match.length == 2) {
    match = [];
  }

  var $this = $(".compare");

  if ($this.hasClass("clicked-once")) {
    $this.on( "click" );
    $this.removeClass("clicked-once");
    $this.removeClass("hide");
    $(this).addClass("hide");
    $(".wpns-box").addClass("active");
    $("body").addClass("no-scroll");
    $(".wpns-bg").addClass("active");
    if ($(".item-two").html().length > 0) {
      $(".item-two").html("");
    } 
    match.push(this.id);
	//localStorage.removeItem('wpn-selected');
	console.log(match);
    // already been clicked once
    var clone = $(".card." + (this.id)).clone();
    // this image only
    // var cloneimg = $(".card." + (this.id) + " .item-icon").clone();
	clonedWeapon = localStorage['clonedWpn'];
    console.log("HTML is: " + clonedWeapon);
    $(".item-one").append(clonedWeapon);
    $(".item-two").append(clone);
    //$('html,body').animate({scrollTop: $(".wpns-box").offset().top},'slow');
    powerCheck();
    rangeCheck();
    stabilityCheck();
    rateCheck();
  }
  else {
    if ($(".item-one").html().length > 0) {
      $(".item-one").html("");
    } 
	match.push(this.id);
	localStorage.setItem('wpn-selected', this.id);
    var clone = $(".card." + (this.id)).clone();
    var clonedWeapon = clone.get(0).outerHTML;
	localStorage.setItem('clonedWpn', clonedWeapon);
	clonedWeapon = localStorage['clonedWpn'];
	var cloneIcon = $(this).parents('.wpn-image').find('.icon-small').attr("class");
	var cloneNamei18n = $(this).parents('.item-details').find('.name').attr("datai18n");
	var cloneName = $(this).parents('.item-details').find('.name').html();
	console.log(cloneNamei18n);
	$(".selectedWpn i").attr('class', cloneIcon);
	$(".selectedWpn .name").attr('datai18n', cloneNamei18n);
	$(".selectedWpn .name").html(cloneName);
	//$(".selectedWpn").addClass("active");
    //$(".item-one").append(clonedWeapon);
    $this.addClass("clicked-once");
    $(".item-two").html("");
	//console.log(clone);
	//console.log(clonedWeapon);
	//var clonedWpn = clone.get(0).outerHTML;
	//localStorage.setItem('clonedWpn', clonedWpn);
	//wpn.push(clone.outerHTML);
	//localStorage["wpn"] = JSON.stringify(wpn);
  }

});
$(".tabs-menu a").click(function(event) {
  event.preventDefault();
  $(this).parent().addClass("current");
  $(this).parent().siblings().removeClass("current");
  var tab = $(this).attr("href");
  $(".tab-content").not(tab).css("display", "none");
  $(tab).fadeIn();
});

$(".radio").change(function() {
    var checked = $(this).is(':checked');
    $(".radio").prop('checked',false);
    if(checked) {
        $(this).prop('checked',true);
    }
});
});