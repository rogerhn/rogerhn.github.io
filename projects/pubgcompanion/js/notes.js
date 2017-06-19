var dataPage = document.getElementById('PageName').getAttribute('data-page');
var noteContent = document.getElementById('content');
var noteEdit = document.getElementById('edit');
var noteSave = document.getElementById('save');
var noteRemove = document.getElementById('remove');

if (localStorage[dataPage] !== undefined) {
  noteContent.innerHTML = localStorage[dataPage];
} else {
  noteContent.innerHTML = 'Add your note here';
}

noteEdit.onclick = function() {edit()};
noteSave.onclick = function() {save()};
noteRemove.onclick = function() {remove()};

function edit() {
  noteContent.contentEditable = 'true';
  noteEdit.className = 'btn-hide';
  noteSave.className = '';
  noteRemove.className = '';
}

function save() {
  noteContent.contentEditable = 'false';
  noteEdit.className = '';
  noteSave.className = 'btn-hide';
  noteRemove.className = 'btn-hide';
  localStorage[dataPage] = noteContent.innerHTML;
}

function remove() {
  noteContent.contentEditable = 'false';
  noteEdit.className = '';
  noteSave.className = 'btn-hide';
  noteRemove.className = 'btn-hide';
  
  localStorage.removeItem(dataPage);
  noteContent.innerHTML = 'Add your note here';
}