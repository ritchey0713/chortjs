console.log("Hi there!")

let notes = ["note1", "todo list", "write code"]

const filters = {
    term: ""
}

document.getElementById('create-note').addEventListener('click', (e) => {
    renderForm()
})

const generateForm = () => {
    const form = document.createElement("form")
    const toDoInput = document.createElement("input")
    const submit = document.createElement("button")  
    
    form.id = "new-todo-form"

    toDoInput.id = "new-todo"
    toDoInput.placeholder = "create Todo"
    toDoInput.name = "newtodo"

    submit.classList.add("button")
    submit.textContent = "Create Note!"

    form.appendChild(toDoInput)
    form.appendChild(submit)

    return form
}

const renderForm = () => {
    document.querySelector("#todoform").append(generateForm())
    let button = document.getElementById('create-note')
    button.style.visibility = "hidden"

    addNote()
}


const addNote = () => {
    if (document.querySelector("#new-todo").innerText != ""){
        document.querySelector('#new-todo-form').addEventListener("submit", (e) => {
            e.preventDefault()
            let todo = e.target.elements.newtodo.value

            // post method
            notes.push(todo)

            //document.querySelector(".notes").append(todo)
            const list = document.querySelector(".note-list")

            const li = document.createElement("li")
            li.textContent = todo
            list.appendChild(li)

            e.target.elements.newtodo.value = ""
        })
    }
}


const generateList = (notes, filters) => {
    const notesContainer = document.querySelector(".notes")
    notesContainer.innerHTML = ""
    let searchedNotes;
    if(filters.term != "") {
        searchedNotes = notes.filter((todo) => {
        return todo.toLowerCase().includes(filters.term.toLowerCase())
        })
        return renderList(searchedNotes)
    }

        renderList(notes)
     
} 

const renderList = (notes) => {
    const ul = document.createElement("ul")

        ul.classList.add("note-list")
    
        notes.forEach((note) => {
            const li = document.createElement("li")
            li.textContent = note
            ul.appendChild(li)
        })
    
        document.querySelector(".notes").appendChild(ul)
    }

document.querySelector("#searchTerm").addEventListener("input", (e) => {
    filters.term = e.target.value
    generateList(notes, filters)
})

generateList(notes, filters)