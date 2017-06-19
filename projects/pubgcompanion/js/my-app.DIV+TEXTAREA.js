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
    var noteTextEdit = document.getElementById('contentEdit');
    var noteEdit = document.getElementById('note-edit');
    var noteSave = document.getElementById('note-save');
    var noteRemove = document.getElementById('note-remove');

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

    noteEdit.onclick = function() {edit()};
    noteSave.onclick = function() {save()};
    noteRemove.onclick = function() {remove()};
    
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