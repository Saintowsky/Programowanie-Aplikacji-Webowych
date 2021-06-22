const renderNotes =() => {
    let notesInStorage: string[] = JSON.parse(localStorage.getItem('notes'));
    let userNotesElement: HTMLElement = document.getElementById('userNotes');
    while (userNotesElement.firstChild) {
        userNotesElement.removeChild(userNotesElement.lastChild);
    }

    notesInStorage.map(element => {
        const note = document.createElement('div');
        const title = document.createElement('p');

        title.innerHTML = element;
        note.classList.add('userNote');

        note.appendChild(title);
        userNotesElement.appendChild(note);
    })
}

const showFormAdd = () => {
    const container = document.createElement('div');
    let noteTitle = document.createElement('p');
    let inputName = document.createElement('input');
    let btnCancel = document.createElement('button');
    let btnConfirm = document.createElement('button');

    noteTitle.innerHTML = "New note";
    btnCancel.innerHTML = "Cancel";
    btnConfirm.innerHTML = "Add";

    btnCancel.addEventListener('click', cancelNote);
    btnConfirm.addEventListener('click', () => createNote(inputName.value));

    container.appendChild(noteTitle);
    container.appendChild(inputName);
    container.appendChild(btnCancel);
    container.appendChild(btnConfirm);

    container.classList.add('newNoteForm');
    document.body.appendChild(container);
}

const showFormDelete = () => {
    const container = document.createElement('div');
    let noteTitle = document.createElement('p');
    let inputName = document.createElement('input');
    let btnCancel = document.createElement('button');
    let btnConfirm = document.createElement('button');

    noteTitle.innerHTML = "Type note title to remove";
    btnCancel.innerHTML = "Cancel";
    btnConfirm.innerHTML = "Delete";

    btnCancel.addEventListener('click', cancelNote);
    btnConfirm.addEventListener('click', () => deleteNote(inputName.value));

    container.appendChild(noteTitle);
    container.appendChild(inputName);
    container.appendChild(btnCancel);
    container.appendChild(btnConfirm);

    container.classList.add('newNoteForm');
    document.body.appendChild(container);
} 

const storage: string = localStorage.getItem('notes');
if (storage !== null) {
    renderNotes();
}

const cancelNote = () => {
    document.body.removeChild(document.body.lastChild);
}

const createNote = (text: string) => {
    if (text !== "") {
        let values: string[] = [];

        if (localStorage.getItem('notes') !== null) {
            values = JSON.parse(localStorage.getItem('notes'));
            values.push(text);
        }
        else {
            values.push(text);
        }

        localStorage.setItem('notes', JSON.stringify(values));
        renderNotes();
    }
    else {
        alert("Please provide name for note.");
    }
}

const deleteNote = (title: string) => {
    let values: string[] = [];

    if (localStorage.getItem('notes') !== null) {
        values = JSON.parse(localStorage.getItem('notes'));
        
        if (values.length !== 0) {
            
            values = values.filter((v: string) => {
                return v !== title;
            })
    
            localStorage.setItem('notes', JSON.stringify(values));
            renderNotes();
        }

        else {
            alert("No notes to delete!");
        }
    }
    else {
        alert("No notes to delete!");
    }
}

let btnNewNote = document.getElementById('btnNewNote');
let btnDeleteNote = document.getElementById('btnDeleteNote');
btnNewNote.addEventListener('click', showFormAdd);
btnDeleteNote.addEventListener('click', showFormDelete);