// http://plentz.github.io/jquery-maskmoney/
console.clear();


function updateDatepickers(){
  $('.money').maskMoney({allowNegative: false, thousands:'.', decimal:','});
  $('.datepicker').each(function(){
    $(this).datepicker({language: 'pt-BR',autoHide:'true'});
  });
  /*
  JQUERY DATEPICKER
  $( ".datepicker" ).each(function(){
    $(this).datepicker({
      dateFormat: 'dd/mm/yy',
      changeMonth: true,
      changeYear: true,
      dayNames: ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado','Domingo'],
      dayNamesMin: ['D','S','T','Q','Q','S','S','D'],
      dayNamesShort: ['Dom','Seg','Ter','Qua','Qui','Sex','Sáb','Dom'],
      monthNames: ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
      monthNamesShort: ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez']
    });
  });
  */
  $("#itemdate").attr("placeholder", today);
  $("#itemdate").val(today);
}


let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
let yyyy = today.getFullYear();
today = dd + '/' + mm + '/' + yyyy;

/*

$(".app").on("click",".add", function(){
  let entry = {};
  let itemdate = $(this).parent().find("#itemdate").val();
  let itemname = $(this).parent().find("#itemname").val();
  let itemvalue = $(this).parent().find("#itemvalue").val();
  let itemparcels = $(this).parent().find("#itemparcels").val();

  entry.itemdate = itemdate;
  entry.itemname = itemname;
  entry.itemvalue = itemvalue.replace(/R\$/g,'').replace(/,/g,'.');
  entry.itemparcels = itemparcels;
  let itemparcelvalue = itemvalue.replace(/R\$/g,'').replace(/,/g,'.') / itemparcels;
  itemparcelvalue = itemparcelvalue.toFixed(2);
  entry.itemparcelvalue = itemparcelvalue;
  if(itemname !== "" && itemvalue !== "" && itemparcels !== ""){
    console.log(entry)
    entries.push(entry);
    update();
    resetInputs();
  }
});
*/
function resetInputs(){
  $(".app input").each(function(){
    let placeholder = $(this).attr("placeholder");
    $(this).val("");
    if($(this).attr('id') === "itemdate"){$(this).val(today)}
    if($(this).attr('id') === "parcelSwitcher"){
      $(this).prop("checked", false);
      $('.itemparcelsblock').fadeOut({queue: false, duration: '75'});
    }

  });
}

const entries = {};
function update(){
  let html = "";
  for(let i = 0; i < entries.length;i++){
    let id = i +1;
    let itemvalue = entries[i].itemvalue;
    itemvalue = itemvalue.replace(/\./g,',');
    let itemparcelvalue = entries[i].itemparcelvalue;
    let itemparcelhtml = "";
    if(itemparcelvalue){
      let itemparcelsAll = entries[i].itemparcelsAll;
      let itemparcelsCurrent = entries[i].itemparcelsCurrent;

      itemparcelvalue = itemparcelvalue.replace(/\./g,',');
      itemparcelhtml = `
<span class="itemparcels">${entries[i].itemparcels}x</span>
<span class="itemparcelvalue">R$ ${itemparcelsAll[itemparcelsCurrent]}</span>`;
    }

    html += `
<div class="list">
<span class="itemId">#${id}</span>
<span class="itemname">${entries[i].itemdate}</span>
<span class="itemname">${entries[i].itemname}</span>
<span class="itemvalue">R$ ${itemvalue}</span>
${itemparcelhtml}
</div>
`;
  }
  $('.events').html(html);
}

let accounts = [
  {name: "Conta inicial",balance: 0}
];

$(".walletapp").on("click",".addwallet", function(){
  let walletName = $(this).parent().find("#walletName").val();
  let walletValue = $(this).parent().find("#walletValue").val();
  if(walletName.length && walletValue.length){
    Wallet.walletName = walletName;
    Wallet.walletValue = walletValue;
    console.log(Wallet)
    $(this).parent().find("input").val("");
  }
});

function updateWallet(){
  let html = `
<p class="walletName">${Wallet.walletName}</p>
<p class="walletName">${Wallet.walletName}</p>
`;
  $(".wallet").html();
}



var getMonth = function(idx) {

  var objDate = new Date();
  objDate.setDate(1);
  objDate.setMonth(idx-1);

  var locale = "pt-br",
      month = objDate.toLocaleString(locale, { month: "long" });

  return month;
}
//console.log(getMonth(1));

let weekdate = new Date();
let weekdaylong = weekdate.toLocaleString(window.navigator.language, {weekday: 'long'});
let weekdayshort = weekdate.toLocaleString(window.navigator.language, {weekday: 'short'});
//console.log(weekdaylong);
//console.log(weekdayshort);

let locale = "pt-br";
let date = new Date();

let eventStore = {};

function showStore(data){
  let year = $('.dateinfo .year').html();
  let month = $('.dateinfo .month').html();
  let totalBalanceMoney;
  console.log("Show Store:")
  console.log(year);
  console.log(month);
  console.log("Current stored:")
  console.log(eventStore)
  if(eventStore[year]){
    console.log("Found Year "+year);
    if(eventStore[year][month]){
      console.log("Found Month "+month);
      let storedData = data[year][month];
      console.log("Data Stored so far:")
      console.log(storedData);
      let html = "";
      if(storedData){
        for(let i = 0; i < storedData.length;i++){
          let id = i +1;
          let itemvalueraw = storedData[i].itemvalue;
          let itemvalue = itemvalueraw.toLocaleString('pt-br', {minimumFractionDigits: 2});
          let itemparcelvalue = storedData[i].itemparcelvalue;

          if(itemparcelvalue){
            itemparcelvalue = itemparcelvalue.toLocaleString('pt-br', {minimumFractionDigits: 2});
            let itemparcelsAll = storedData[i].itemparcelsAll;
            let itemparcelsCurrent = storedData[i].itemparcelsCurrent;
            let currentparcel = itemparcelsAll[itemparcelsCurrent];
            currentparcel = Number(currentparcel).toLocaleString('pt-br', {minimumFractionDigits: 2});
            html += `
<div class="list" data-entry="${id}">
<div class="listentrytype">
<i class="mdi mdi-checkbox-blank-circle"></i>
</div>
<div class="listentry">
<p class="entryname">
<span class="itemname">${storedData[i].itemname}</span>
<span class="itemparcels">${itemparcelsCurrent}/${storedData[i].itemparcels}</span>
</p>
<p class="entrydetails">
<span class="itemdate">${storedData[i].itemdate}</span>
<span class="itemtotalvalue">Total: R$ ${itemvalue}</span>
</p>
</div>
<div class="listentryvalue">
<span class="itemparcelvalue">R$ ${currentparcel}</span>
</div>
</div>
`;
          }
          else {
            console.log("Math")
            console.log(totalBalance)
            console.log(itemvalueraw)
            html += `
<div class="list" data-entry="${id}">
<div class="listentrytype">
<i class="mdi mdi-checkbox-blank-circle"></i>
</div>
<div class="listentry">
<p class="entryname">
<span class="itemname">${storedData[i].itemname}</span>
</p>
<p class="entrydetails">
<span class="itemdate">${storedData[i].itemdate}</span>
</p>
</div>
<div class="listentryvalue">
<span class="itemvalue">R$ ${itemvalue}</span>
</div>
</div>
`;
          }
        }
        $('.events').html(html);
        $('.events').hide().fadeIn({queue: false, duration: '150'});

      }


    } else {
      let noEntries = `<span class="noentries">Sem entradas neste mês</span>`
      $('.events').html(noEntries);
    }
  } else {
    let noEntries = `<span class="noentries">Sem entradas neste mês</span>`
    $('.events').html(noEntries);
  }
  /*
  $.each(eventStore, function( key, value ) {
    console.log("key")
    console.log(key)
    console.log("value")
    console.log(value)

  });
  */
  /*
  let html = "";
  for(let i = 0; i < entries.length;i++){
    let id = i +1;
    let itemvalue = entries[i].itemvalue;
    itemvalue = itemvalue.replace(/\./g,',');
    let itemparcelvalue = entries[i].itemparcelvalue;
    let itemparcelhtml = "";
    if(itemparcelvalue){
      itemparcelvalue = itemparcelvalue.replace(/\./g,',');
      itemparcelhtml = `
<span class="itemparcels">${entries[i].itemparcels}x</span>
<span class="itemparcelvalue">R$ ${itemparcelvalue}</span>`;
    }

    html += `
<div class="list">
<span class="itemId">#${id}</span>
<span class="itemname">${entries[i].itemdate}</span>
<span class="itemname">${entries[i].itemname}</span>
<span class="itemvalue">R$ ${itemvalue}</span>
${itemparcelhtml}
</div>
`;
  }
  $('.events').html(html);
  */
}

let totalBalance = 0;
function showdata(selector){
  let output = "";
  let month = date.getMonth();
  let year = date.getFullYear();
  let monthname = date.toLocaleString(locale, { month: "long" });

  let outputFields = `
<label for="itemname">Nome</label>
<input type="text" id="itemname" placeholder="Nome do item"/>
`;

  // SHOW ACCOUNTS BALANCE
  console.warn("Accounts:")
  console.log(accounts);
  for(let a=0;a<accounts.length;a++){
    let accountName = accounts[a].name;
    let accountBalance = accounts[a].balance;
    totalBalance = totalBalance + accountBalance;
  }
  let totalBalanceMoney = totalBalance.toLocaleString('pt-br', {minimumFractionDigits: 2});

  output += `
<div class="appinner">
<div class="balanceInfo">
<span class="balanceText">Saldo geral:</span>
<span class="totalBalance">R$ ${totalBalanceMoney}</span>
</div>
<div class="dateinfo">
<div class="monthchanger">
<span class="prevmonth"><i class="mdi mdi-chevron-left"></i></span>
<div class="monthandYear">
<span class="month" month="${month}">${monthname}</span>
<span class="year">${year}</span>
</div>
<span class="nextmonth"><i class="mdi mdi-chevron-right"></i></span>
</div>
</div>
<div class="eventsblock">
<div class="events"></div>
</div>
<div class="controls">
<div class="button addNewEvent"><i class="mdi mdi-plus-circle"></i></div>
</div>
</div>`;


  let modalAddEvent = `
<div class="modalbg newEvent" style="display:none"></div>
<div class="modal newEvent" style="display:none">
<div class="modalContent">
<div class="modalInnerContent">
<div class="closeModal"><i class="mdi mdi-close-circle"></i></div>
<div class="modalTitle">Nova entrada</div>
<div class="newEntry">
<label for="itemdate">Data</label>
<input type="text" class="datepicker" id="itemdate"/>
<br>
<label for="itemname">Nome</label>
<input type="text" id="itemname" placeholder="Nome do item"/>
<br>
<label for="itemvalue">Valor</label>
<input type="text" id="itemvalue" class="money" data-thousands="." data-decimal="," data-prefix="R$ " placeholder="R$ 0,00"/>
<br>
<span class="inputParcelText">Parcelado</span>
<div class="inputParcel">
<input type="checkbox" id="parcelSwitcher" name="parcelSwitcher" class="switch-input">
<label for="parcelSwitcher" class="switch-label">
<span class="toggle--on">Sim</span>
<span class="toggle--off">Não</span>
</label>
</div>
<div class="itemparcelsblock" style="display:none">
<label for="itemparcels">Parcelas</label>
<input type="number" id="itemparcels" placeholder="0 x"/>
</div>
<div class="modalError" style="display:none"></div>
<button class="buttons insertNewEntry">Salvar</div>
</div>
</div>
</div>
</div>
`;

  output+= modalAddEvent;

  $(selector).html(output);
  // PREVIOUS MONTH
  $(selector).on("click",".prevmonth", function(){
    let currentMonth = date.getMonth();
    date.setMonth(currentMonth - 1);
    let monthNumber = date.getMonth();
    monthname = date.toLocaleString(locale, { month: "long" });
    year = date.getFullYear();
    $('.year').html(year)
    $('.month').html(monthname);
    $('.month').attr("month",monthNumber);
    showStore(eventStore);
  });
  // NEXT MONTH
  $(selector).on("click",".nextmonth", function(){
    let currentMonth = date.getMonth();
    date.setMonth(currentMonth + 1);
    let monthNumber = date.getMonth();
    monthname = date.toLocaleString(locale, { month: "long" });
    year = date.getFullYear();
    $('.year').html(year)
    $('.month').html(monthname);
    $('.month').attr("month",monthNumber);
    showStore(eventStore);
  });
  $(selector).on("click","#itemvalue", function(){
    let $thisValue = $(this).maskMoney('unmasked')[0];
    console.log($thisValue);
  });
  $(selector).on("click",".addNewEvent", function(){
    $('.modal.newEvent').fadeIn({queue: false, duration: '150'});
    $('.modalbg.newEvent').fadeIn({queue: false, duration: '150'});
    let currentYear = $('.dateinfo .year').html();
    let currentMonth = $('.dateinfo .month').attr("month");
    let entryDate = new Date();
    entryDate.setFullYear(currentYear);
    entryDate.setMonth(currentMonth);

    let dd = String(entryDate.getDate()).padStart(2, '0');
    let mm = String(entryDate.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = entryDate.getFullYear();
    let entryDateToShow = dd + '/' + mm + '/' + yyyy;
    $("#itemdate").val(entryDateToShow);
  });
  $(selector).on("click",".closeModal", function(){
    $('.modal.newEvent').fadeOut({queue: false, duration: '75'});
    $('.modalbg.newEvent').fadeOut({queue: false, duration: '75'});
  });
  $(selector).on("click",".modalbg", function(){
    $('.modal.newEvent').fadeOut({queue: false, duration: '75'});
    $('.modalbg.newEvent').fadeOut({queue: false, duration: '75'});
  });
  let newItemParcel = false;
  $(selector).on("change", "#parcelSwitcher", function() {
    if ($(this).is(':checked')) {
      $('.itemparcelsblock').fadeIn({queue: false, duration: '150'});
    }
    else {
      $('.itemparcelsblock').fadeOut({queue: false, duration: '75'});
    }
  });
  $(selector).on("click",".insertNewEntry", function(){
    let entry = {};
    let itemdate = $(this).parents(".newEntry").find("#itemdate").val();
    let itemname = $(this).parents(".newEntry").find("#itemname").val();
    let itemvalue = $(this).parents(".newEntry").find("#itemvalue").val();
    let itemvalueFormatted = $(this).parents(".newEntry").find("#itemvalue").maskMoney('unmasked')[0];
    console.log(itemdate);
    console.log(itemname);
    console.log(itemvalue);
    let itemparcels = 0;
    itemparcels = $(this).parents(".newEntry").find("#itemparcels").val();
    let itemparcelvalue = "";

    if ($("#parcelSwitcher").is(':checked')) {
      if(itemdate !== "" && itemname !== "" && itemvalue !== "" && (itemparcels > 0 && itemparcels !== "")){
        let itemvalueraw = $(this).parents(".newEntry").find("#itemvalue").maskMoney('unmasked')[0];
        totalBalance = totalBalance - itemvalueraw;
        totalBalanceMoney = totalBalance.toLocaleString('pt-br', {minimumFractionDigits: 2});
        console.log("PARCELADO!")
        entry.itemparcels = itemparcels;
        entry.itemparcelsCurrent = "1";
        let itemparcelvalue = $(this).parents(".newEntry").find("#itemvalue").maskMoney('unmasked')[0];
        itemparcelvalue = Number(itemparcelvalue);
        itemparcelvalue = itemparcelvalue / itemparcels;
        itemparcelvalue = itemparcelvalue.toFixed(2);
        entry.itemparcelvalue = itemparcelvalue;
        let itemparcelsAll = {};
        let parcelsSum = 0;
        for(let p=0;p<itemparcels;p++){
          let n = p + 1;
          itemparcelsAll[n] = itemparcelvalue;
          parcelsSum = Number(parcelsSum) + Number(itemparcelvalue);
          console.log(parcelsSum +" in passo " +p);
        }
        parcelsSum = parcelsSum.toFixed(2);
        console.log("Valor de SUM")
        parcelsSum = Number(parcelsSum);
        console.log(parcelsSum)
        let lastparcel;
        let itemvalueFormatted = $(this).parents(".newEntry").find("#itemvalue").maskMoney('unmasked')[0];
        itemvalueFormatted = Number(itemvalueFormatted);
        console.log("itemvalueFormatted");
        console.log(itemvalueFormatted);
        if(parcelsSum < itemvalueFormatted){console.log("SUM é MENOR do que itemvalueFormatted")}
        else if(parcelsSum > itemvalueFormatted){console.log("SUM é MAIOR do que itemvalueFormatted")}
        else {console.log("SUM é IGUAL itemvalueFormatted")}

        if(parcelsSum < itemvalueFormatted){
          console.log("Última parcela maior");
          let itemvalueDiff = Number(parcelsSum) - Number(itemvalueFormatted);
          console.log("itemvalueDiff");
          console.log(itemvalueDiff);
          lastparcel = Number(itemparcelvalue) + Number(itemvalueDiff);
          lastparcel = lastparcel.toFixed(2);
          console.log(lastparcel);
        } else if(parcelsSum > itemvalueFormatted){
          console.log("Última parcela menor");
          let itemvalueDiff = Number(itemvalueFormatted) - Number(parcelsSum);
          lastparcel = Number(itemparcelvalue) + Number(itemvalueDiff);
          lastparcel = lastparcel.toFixed(2);
          console.log(lastparcel);
        } else {
          lastparcel = itemparcelvalue;
        }
        itemparcelsAll[itemparcels] = lastparcel;
        console.log(itemparcelsAll);
        entry.itemparcelsAll = itemparcelsAll;
        /******************************************************************/
        for(let p=0;p<itemparcels;p++){
          let entryParcel = {}
          let n = p + 1;
          let splititemdate = itemdate.split("/");
          let monthentry = splititemdate[1];
          let yearentry = splititemdate[2];

          let storeparcelsdate = new Date();
          storeparcelsdate.setMonth((monthentry -1) + p);
          console.log(storeparcelsdate)

          let parcelDay = String(storeparcelsdate.getDate()).padStart(2, '0');
          let parcelMonth = String(storeparcelsdate.getMonth() + 1).padStart(2, '0'); //January is 0!
          let parcelYear = storeparcelsdate.getFullYear();
          let parcelDate = parcelDay + "/" + parcelMonth + "/" + parcelYear;

          let parcelmonthname = storeparcelsdate.toLocaleString(locale, { month: "long" });
          console.log(parcelmonthname +" in passo " +p);
          entryParcel.itemdate = parcelDate;
          entryParcel.itemname = itemname;
          entryParcel.itemparcels = itemparcels
          entryParcel.itemparcelsAll = itemparcelsAll
          entryParcel.itemparcelsCurrent = String(n);
          entryParcel.itemparcelvalue = itemparcelvalue
          entryParcel.itemvalue = itemvalueFormatted;
          console.log("CURRENT PARCELS "+itemparcels)

          let eventStoreYear;
          if(!eventStore[parcelYear]){
            eventStore[parcelYear] = {};
          } else {
            eventStoreYear = eventStore[parcelYear];
          }
          if(!eventStore[parcelYear][parcelmonthname]){
            eventStore[parcelYear][parcelmonthname] = [];
            eventStore[parcelYear][parcelmonthname].push(entryParcel);
          } else {
            eventStore[parcelYear][parcelmonthname].push(entryParcel);
          }
          console.log(eventStore)
          showStore(eventStore)
          //update();
          resetInputs();
          $('.modal.newEvent').fadeOut({queue: false, duration: '75'});
          $('.modalbg.newEvent').fadeOut({queue: false, duration: '75'});
          $('.totalBalance').html(totalBalance)
        }
      }
      else {
        let errorEmptyFields = `<span class="error">Favor preencher os campos obrigatórios</span>`;
        $('.modalError').html(errorEmptyFields)
        $('.modalError').fadeIn({queue: false, duration: '150'});
        $('#itemname').addClass("highlightError");
        $('#itemdate').addClass("highlightError");
        $('#itemvalue').addClass("highlightError");
        $('#itemparcels').addClass("highlightError");

        setTimeout(function() {
          $('.modalError').fadeOut({queue: false, duration: '75'});
          $('#itemname').removeClass("highlightError");
          $('#itemdate').removeClass("highlightError");
          $('#itemvalue').removeClass("highlightError");
          $('#itemparcels').removeClass("highlightError");
        }, 2000); 
      }

      /****************************************************/
    } else {
      if(itemdate !== "" && itemname !== "" && itemvalue !== ""){
        entry.itemdate = itemdate;
        entry.itemname = itemname;
        entry.itemvalue = itemvalueFormatted;
        
        totalBalance = totalBalance - itemvalueFormatted;
        totalBalanceMoney = totalBalance.toLocaleString('pt-br', {minimumFractionDigits: 2});

        console.log(entry)
        let splititemdate = itemdate.split("/");
        console.log(splititemdate);
        let monthentry = splititemdate[1];
        let yearentry = splititemdate[2];

        let storedate = new Date();
        storedate.setMonth(monthentry -1);
        let storemonthname = storedate.toLocaleString(locale, { month: "long" });

        let eventStoreYear;
        if(!eventStore[yearentry]){
          eventStore[yearentry] = {};
        } else {
          eventStoreYear = eventStore[yearentry];
        }
        if(!eventStore[yearentry][storemonthname]){
          eventStore[yearentry][storemonthname] = [];
          eventStore[yearentry][storemonthname].push(entry);
        } else {
          eventStore[yearentry][storemonthname].push(entry);
        }
        console.log(eventStore)
        showStore(eventStore)
        //update();
        resetInputs();
        $('.modal.newEvent').fadeOut({queue: false, duration: '75'});
        $('.modalbg.newEvent').fadeOut({queue: false, duration: '75'});
        $('.totalBalance').html(totalBalance);
      } else {
        let errorEmptyFields = `<span class="error">Favor preencher os campos obrigatórios</span>`;
        $('.modalError').html(errorEmptyFields)
        $('.modalError').fadeIn({queue: false, duration: '150'});
        $('#itemname').addClass("highlightError");
        $('#itemdate').addClass("highlightError");
        $('#itemvalue').addClass("highlightError");
        $('#itemparcels').addClass("highlightError");

        setTimeout(function() {
          $('.modalError').fadeOut({queue: false, duration: '75'});
          $('#itemname').removeClass("highlightError");
          $('#itemdate').removeClass("highlightError");
          $('#itemvalue').removeClass("highlightError");
          $('#itemparcels').removeClass("highlightError");
        }, 2000); 
      }
    }


  });




  updateDatepickers();
  showStore(eventStore);
}
showdata(".app");


var valor = 1568.52;

//Valor com cifrão
var valorFormatado = valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
console.log('O valor formatado de ' + valor + ' é ' + valorFormatado);

//Valor sem cifrão	
var valorFormatado2 = valor.toLocaleString('pt-BR', { minimumFractionDigits: 2});

console.log('O valor formatado de ' + valor + ' é ' + valorFormatado2);


let currency = "R$ 5.000,00";
var f = currency.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
//sem R$
var f2 = currency.toLocaleString('pt-br', {minimumFractionDigits: 2});
console.log(f)
console.log(f2)