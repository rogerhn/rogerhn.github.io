var myApp = new Framework7({
    swipePanel: 'left',
    cache: 'false',
    pushState: true,
    pushStateSeparator: '#/',
    //pushStateRoot: 'http://atlas-rogerhnn996730.codeanyapp.com/'
});
// Export selectors engine
var $$ = Dom7

var mainView = myApp.addView('.view-main');

$$(document).on('pageInit', function (e) {
  $(document).i18n();

var dataPage = $$('#nt').attr('data-page');
  $(document).ready(function() {
    var text_max = 300;
    $$('#textCounter').html(text_max + ' characters remaining');

    $$('#content').keyup(function() {
        var text_length = $$('#content').val().length;
        var text_remaining = text_max - text_length;

        $('#textCounter').html(text_remaining + ' characters remaining');
    });
});
  
  if (dataPage != null) {
    var noteContent = document.getElementById('content');
    var noteEdit = document.getElementById('note-edit');
    var noteSave = document.getElementById('note-save');
    var noteRemove = document.getElementById('note-remove');

    if (localStorage[dataPage] !== undefined) {
      /*
      noteContent.innerHTML = localStorage[dataPage];
      */
      noteContent.value = localStorage[dataPage];
    } else {
      /* WEB
      noteContent.innerHTML = '<span data-i18n="AddYourNote">Add your note here</span>';
      */
      noteContent.value = "...";
    }

    noteEdit.onclick = function() {edit()};
    noteSave.onclick = function() {save()};
    noteRemove.onclick = function() {remove()};
    
    function edit() {
    /* WEB
    noteContent.contentEditable = 'true';
    */
    noteContent.disabled = false;
    noteContent.className = 'note-text-edit';
    noteEdit.className = 'btn-hide';
    noteSave.className = '';
    noteRemove.className = '';
    }

    function save() {
    /* WEB 
    noteContent.contentEditable = 'false';
    */
    noteContent.disabled = true;
    noteContent.className = 'note-text';
    noteEdit.className = '';
    noteSave.className = 'btn-hide';
    noteRemove.className = 'btn-hide';
    localStorage[dataPage] = noteContent.value;
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
      noteContent.value = "...";
    }
}
 
});