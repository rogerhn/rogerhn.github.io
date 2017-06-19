var myApp = new Framework7({
  material: true,
  swipePanel: 'left',
  fastClicks: false,
  //preloader:true,
  //preloaderColor:'white',
  materialRipple: true,
  materialRippleElements: '.ripple, a.link, a.item-link, .button, .modal-button, .tab-link, .label-radio, .label-checkbox, .actions-modal-button, a.searchbar-clear, .floating-button',
  cache: false,
  pushState: true,
  pushStateSeparator: '#/',
  //pushStateRoot: 'http://atlas-rogerhnn996730.codeanyapp.com/',
  /*onAjaxStart: function (xhr) {
        myApp.showIndicator();
    },
    onAjaxComplete: function (xhr) {
        myApp.hideIndicator();
    },*/
});

// Export selectors engine
var $$ = Dom7
var mainView = myApp.addView('.view-main');

$("#splash").delay(1000).fadeOut(500);

var theme;

if (localStorage['theme'] !== undefined) {
  theme = localStorage['theme'];
  $('#theme').addClass(theme);
}

$(document).ready(function() {
  $('.themeChange').click(function() {
    $('#theme').removeClass(theme);
    theme = $(this).attr('id');
    $('#theme').addClass(theme);
    localStorage['theme'] = theme;
  });
});

$$(document).on('pageInit', function(e) {
    // Boost Bars
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
    
  $(document).i18n();

  var dataPage = $$('#nt').attr('data-page');
  if (dataPage != null) {
    var noteContent = document.getElementById('content');
    var noteTextEdit = document.getElementById('contentEdit');
    var noteEdit = document.getElementById('note-edit');
    var noteSave = document.getElementById('note-save');
    var noteRemove = document.getElementById('note-remove');

    // auto adjust the height of textarea
    $$('#contentEdit').on('change keyup keydown paste cut', function(e) {
      $(this).css('height', 'auto');
      $(this).height(this.scrollHeight);
    });
    $('#contentEdit').keydown();

    if (localStorage[dataPage] !== undefined) {
      /*
      noteContent.innerHTML = localStorage[dataPage];
      */
      noteTextEdit.value = localStorage[dataPage];
      noteContent.innerHTML = localStorage[dataPage];
      /*noteContent.value = localStorage[dataPage];*/
    } else {
      /* WEB
      noteContent.innerHTML = '<span data-i18n="AddYourNote">Add your note here</span>';
      */
      /*noteContent.value = "...";*/
      noteTextEdit.value = "...";
      noteContent.innerHTML = '<span data-i18n="AddYourNote">Add your note here</span>';
    }

    noteEdit.onclick = function() {
      edit()
    };
    noteContent.onclick = function() {
      edit()
    };
    noteSave.onclick = function() {
      save()
    };
    noteRemove.onclick = function() {
      remove()
    };

    function edit() {
      /* WEB
      noteContent.contentEditable = 'true';
      */
      noteTextEdit.disabled = false;
      noteTextEdit.className = 'note-text-edit';
      noteContent.className = 'btn-hide';
      noteEdit.className = 'btn-hide';
      noteSave.className = '';
      noteRemove.className = '';
    }

    function save() {
      /* WEB 
      noteContent.contentEditable = 'false';
      */
      noteTextEdit.disabled = true;
      noteContent.className = 'note-text';
      noteTextEdit.className = 'btn-hide';
      noteEdit.className = '';
      noteSave.className = 'btn-hide';
      noteRemove.className = 'btn-hide';
      localStorage[dataPage] = noteTextEdit.value;
      noteContent.innerHTML = localStorage[dataPage];
      /* WEB
    localStorage[dataPage] = noteContent.innerHTML;
    */
    }

    function remove() {
      /* WEB
      noteContent.contentEditable = 'false';
      */
      noteContent.disabled = true;
      noteEdit.className = '';
      noteSave.className = 'btn-hide';
      noteRemove.className = 'btn-hide';

      localStorage.removeItem(dataPage);
      /* WEB
    noteContent.innerHTML = '<span data-i18n="AddYourNote">Add your note here</span>';
    */
      /*noteContent.value = "...";*/
      noteContent.innerHTML = '<span data-i18n="AddYourNote">Add your note here</span>';
      noteTextEdit.value = "...";
    }
  }

});