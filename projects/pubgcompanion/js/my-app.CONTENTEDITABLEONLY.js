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
  if (dataPage != null) {
    var noteContent = document.getElementById('content');
    var noteEdit = document.getElementById('note-edit');
    var noteSave = document.getElementById('note-save');
    var noteRemove = document.getElementById('note-remove');

    if (localStorage[dataPage] !== undefined) {

      noteContent.innerHTML = localStorage[dataPage];
    } else {
      noteContent.innerHTML = '<span data-i18n="AddYourNote">Add your note here</span>';
    }

    noteEdit.onclick = function() {edit()};
    noteSave.onclick = function() {save()};
    noteRemove.onclick = function() {remove()};
    
    function edit() {
    noteContent.contentEditable = 'true';
    noteContent.className = 'note-text-edit';
    noteEdit.className = 'btn-hide';
    noteSave.className = '';
    noteRemove.className = '';
    }

    function save() {
    noteContent.contentEditable = 'false';
    noteEdit.className = '';
    noteContent.className = 'note-text';
    noteSave.className = 'btn-hide';
    noteRemove.className = 'btn-hide';
    localStorage[dataPage] = noteContent.innerHTML;
    }

    function remove() {
    noteContent.contentEditable = 'false';
    noteSave.className = 'btn-hide';
    noteRemove.className = 'btn-hide';
    noteEdit.className = '';

    localStorage.removeItem(dataPage);
    noteContent.innerHTML = '<span data-i18n="AddYourNote">Add your note here</span>';
    }
}
 
});