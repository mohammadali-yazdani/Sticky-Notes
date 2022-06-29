// Elements
const notesContainer = document.querySelector('#notes-container')
const addNoteContainer = document.querySelector('.add-note')
const addNoteBtn = document.querySelector('.add-note-btn')

// Show Data in DOM
getNotes().forEach((item) => {
    const noteElement = createNoteElement(item.id, item.content, item.theme)
    notesContainer.insertBefore(noteElement, addNoteContainer)
})

addNoteBtn.addEventListener('click', () => addNote())

// Get Data From LS
function getNotes() {
    return JSON.parse(localStorage.getItem('notes') || '[]')
}

// Save Data in LS
function saveNotes(notes) {
    localStorage.setItem('notes', JSON.stringify(notes))
}

function createNoteElement(id, content, theme) {

    const col = document.createElement('div')
          colCard = document.createElement('div')

          colCardHeader = document.createElement('header')
          colCardHeaderInner = document.createElement('div')
          colCardHeaderInnerOptions = document.createElement('div')
          optionsToggler = document.createElement('button')
          colCardHeaderInnerOptionsWrapper = document.createElement('div')
          inner = document.createElement('div')
          colCardHeaderInnerOptionsWrapperColors = document.createElement('div')
          colCardHeaderInnerOptionsWrapperDelete = document.createElement('div')
          deleteBtn = document.createElement('button')
          outer = document.createElement('div')

          colCardBody = document.createElement('div')
          colCardBodyTextarea = document.createElement('div')

          colCardFooter = document.createElement('footer')
          colCardFooterInner = document.createElement('div')
          colCardFooterInnerFont = document.createElement('div')
          colCardFooterInnerFontBoldBtn = document.createElement('button')
          colCardFooterInnerFontItalicBtn = document.createElement('button')
          colCardFooterInnerFontUnderlineBtn = document.createElement('button')
          colCardFooterInnerFontStrikethroughBtn = document.createElement('button')

          // Theme
          yellowInput = document.createElement('input')
          yellowLabel = document.createElement('label')
          greenInput = document.createElement('input')
          greenLabel = document.createElement('label')
          pinkInput = document.createElement('input')
          pinkLabel = document.createElement('label')
          purpleInput = document.createElement('input')
          purpleLabel = document.createElement('label')
          blueInput = document.createElement('input')
          blueLabel = document.createElement('label')
          grayInput = document.createElement('input')
          grayLabel = document.createElement('label')
          charcoalInput = document.createElement('input')
          charcoalLabel = document.createElement('label')

    // col
    col.className = 'col-12 col-xs-6 col-md-4 col-lg-3 col-xl-2-4'
    
    // colCard
    colCard.className = `sticky-notes--wrapper__card bg-ultra-${theme == 'charcoal' ? 'dark' : 'light'} bg-ultra-light-${theme}`

    // colCardHeader
    colCardHeader.className = 'sticky-notes--wrapper__card__header'
    colCardHeaderInner.className = 'sticky-notes--wrapper__card__header__inner'
    colCardHeaderInnerOptions.className = 'sticky-notes--wrapper__card__header__inner__options'
    optionsToggler.className = 'btn options-toggler p-0'
    colCardHeaderInnerOptionsWrapper.className = 'sticky-notes--wrapper__card__header__inner__options__wrapper'
    inner.className = 'inner'
    colCardHeaderInnerOptionsWrapperColors.className = 'sticky-notes--wrapper__card__header__inner__options__wrapper__colors'
    colCardHeaderInnerOptionsWrapperDelete.className = 'sticky-notes--wrapper__card__header__inner__options__wrapper__delete'
    deleteBtn.className = 'btn delete-btn w-100 text-danger'
    outer.className = 'outer'

    colCardBodyTextarea.setAttribute('data-placeholder', 'یادداشتی بنویسید...')
    colCardBodyTextarea.setAttribute('contenteditable', 'true')
    colCardBodyTextarea.setAttribute('spellcheck', 'false')
    colCardBodyTextarea.setAttribute('data-id', `${id}`)
    
    yellowInput.className = 'd-none'
    yellowLabel.className = 'bg-color bg-bs-yellow p-0 m-0 rounded-0'
    greenInput.className = 'd-none'
    greenLabel.className = 'bg-color bg-bs-green p-0 m-0 rounded-0'
    pinkInput.className = 'd-none'
    pinkLabel.className = 'bg-color bg-bs-pink p-0 m-0 rounded-0'
    purpleInput.className = 'd-none'
    purpleLabel.className = 'bg-color bg-bs-purple p-0 m-0 rounded-0'
    blueInput.className = 'd-none'
    blueLabel.className = 'bg-color bg-bs-blue p-0 m-0 rounded-0'
    grayInput.className = 'd-none'
    grayLabel.className = 'bg-color bg-bs-gray p-0 m-0 rounded-0'
    charcoalInput.className = 'd-none'
    charcoalLabel.className = 'bg-color bg-bs-charcoal p-0 m-0 rounded-0'

    yellowInput.setAttribute('id', `yellow${id}`)
    greenInput.setAttribute('id', `green${id}`)
    pinkInput.setAttribute('id', `pink${id}`)
    purpleInput.setAttribute('id', `purple${id}`)
    blueInput.setAttribute('id', `blue${id}`)
    grayInput.setAttribute('id', `gray${id}`)
    charcoalInput.setAttribute('id', `charcoal${id}`)

    yellowInput.setAttribute('name', `colors${id}`)
    greenInput.setAttribute('name', `colors${id}`)
    pinkInput.setAttribute('name', `colors${id}`)
    purpleInput.setAttribute('name', `colors${id}`)
    blueInput.setAttribute('name', `colors${id}`)
    grayInput.setAttribute('name', `colors${id}`)
    charcoalInput.setAttribute('name', `colors${id}`)

    yellowInput.setAttribute('type', 'radio')
    greenInput.setAttribute('type', 'radio')
    pinkInput.setAttribute('type', 'radio')
    purpleInput.setAttribute('type', 'radio')
    blueInput.setAttribute('type', 'radio')
    grayInput.setAttribute('type', 'radio')
    charcoalInput.setAttribute('type', 'radio')

    yellowInput.setAttribute('value', 'yellow')
    greenInput.setAttribute('value', 'green')
    pinkInput.setAttribute('value', 'pink')
    purpleInput.setAttribute('value', 'purple')
    blueInput.setAttribute('value', 'blue')
    grayInput.setAttribute('value', 'gray')
    charcoalInput.setAttribute('value', 'charcoal')

    yellowLabel.setAttribute('for', `yellow${id}`)
    greenLabel.setAttribute('for', `green${id}`)
    pinkLabel.setAttribute('for', `pink${id}`)
    purpleLabel.setAttribute('for', `purple${id}`)
    blueLabel.setAttribute('for', `blue${id}`)
    grayLabel.setAttribute('for', `gray${id}`)
    charcoalLabel.setAttribute('for', `charcoal${id}`)

    optionsToggler.innerHTML = '<i class="fa-solid fa-ellipsis"></i>'

    deleteBtn.innerHTML = '<i class="fa-solid fa-trash-can text-danger"></i><span>حذف کردن یادداشت</span>'

    colCardHeaderInnerOptionsWrapperColors.appendChild(yellowInput)
    colCardHeaderInnerOptionsWrapperColors.appendChild(yellowLabel)
    colCardHeaderInnerOptionsWrapperColors.appendChild(greenInput)
    colCardHeaderInnerOptionsWrapperColors.appendChild(greenLabel)
    colCardHeaderInnerOptionsWrapperColors.appendChild(pinkInput)
    colCardHeaderInnerOptionsWrapperColors.appendChild(pinkLabel)
    colCardHeaderInnerOptionsWrapperColors.appendChild(purpleInput)
    colCardHeaderInnerOptionsWrapperColors.appendChild(purpleLabel)
    colCardHeaderInnerOptionsWrapperColors.appendChild(blueInput)
    colCardHeaderInnerOptionsWrapperColors.appendChild(blueLabel)
    colCardHeaderInnerOptionsWrapperColors.appendChild(grayInput)
    colCardHeaderInnerOptionsWrapperColors.appendChild(grayLabel)
    colCardHeaderInnerOptionsWrapperColors.appendChild(charcoalInput)
    colCardHeaderInnerOptionsWrapperColors.appendChild(charcoalLabel)
    inner.appendChild(colCardHeaderInnerOptionsWrapperColors)
    inner.appendChild(colCardHeaderInnerOptionsWrapperDelete)
    colCardHeaderInnerOptionsWrapperDelete.appendChild(deleteBtn)
    colCardHeaderInnerOptionsWrapper.appendChild(inner)
    colCardHeaderInnerOptionsWrapper.appendChild(outer)
    colCardHeaderInnerOptions.appendChild(optionsToggler)
    colCardHeaderInnerOptions.appendChild(colCardHeaderInnerOptionsWrapper)
    colCardHeaderInner.appendChild(colCardHeaderInnerOptions)
    colCardHeader.appendChild(colCardHeaderInner)

    // colCardBody
    colCardBody.className = 'sticky-notes--wrapper__card__body'
    colCardBodyTextarea.className = 'sticky-notes--wrapper__card__body__textarea'

    colCardBodyTextarea.innerHTML = content

    // colCardFooter
    colCardFooter.className = 'sticky-notes--wrapper__card__footer'
    colCardFooterInner.className = 'sticky-notes--wrapper__card__footer__inner'
    colCardFooterInnerFont.className = 'sticky-notes--wrapper__card__footer__inner__font'
    colCardFooterInnerFontBoldBtn.className = 'btn'
    colCardFooterInnerFontItalicBtn.className = 'btn'
    colCardFooterInnerFontUnderlineBtn.className = 'btn'
    colCardFooterInnerFontStrikethroughBtn.className = 'btn'

    colCardFooterInnerFontBoldBtn.innerHTML = '<i class="fa-solid fa-bold"></i>'
    colCardFooterInnerFontItalicBtn.innerHTML = '<i class="fa-solid fa-italic"></i>'
    colCardFooterInnerFontUnderlineBtn.innerHTML = '<i class="fa-solid fa-underline"></i>'
    colCardFooterInnerFontStrikethroughBtn.innerHTML = '<i class="fa-solid fa-strikethrough"></i>'

    colCardFooterInnerFont.appendChild(colCardFooterInnerFontBoldBtn)
    colCardFooterInnerFont.appendChild(colCardFooterInnerFontItalicBtn)
    colCardFooterInnerFont.appendChild(colCardFooterInnerFontUnderlineBtn)
    colCardFooterInnerFont.appendChild(colCardFooterInnerFontStrikethroughBtn)
    colCardFooterInner.appendChild(colCardFooterInnerFont)
    colCardFooter.appendChild(colCardFooterInner)

    colCardBody.appendChild(colCardBodyTextarea)
    colCard.appendChild(colCardHeader)
    colCard.appendChild(colCardBody)
    colCard.appendChild(colCardFooter)
    col.append(colCard)

    colCard.addEventListener('click', (e) => {
        if (e.target.classList.contains('options-toggler')) {
            const optionsWrapper = e.target.nextElementSibling
            optionsWrapper.classList.add('show')
        }
        if (e.target.classList.contains('outer')) {
            const optionsWrapper = e.target.parentElement
            optionsWrapper.classList.remove('show')
        }
    })

    colCardBodyTextarea.addEventListener('input', (e) => {
        // Be Textarea Empty
        if (e.target.textContent === '') {
            e.target.innerHTML = ''
        }

        updateNote(id, e.target.innerHTML)
    })

    const colors = [yellowInput,
        greenInput,
        pinkInput,
        purpleInput,
        blueInput,
        grayInput,
        charcoalInput]

    colors.forEach((item) => {
        item.addEventListener('click', (e) => {
            const card = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement
            card.className = `sticky-notes--wrapper__card bg-ultra-${e.target.value == 'charcoal' ? 'dark' : 'light'} bg-ultra-light-${e.target.value}`
            updateTheme(id, e.target.value)
        })
    })



    // Font Btns
    colCardFooterInnerFontBoldBtn.addEventListener('click', () => {
        document.execCommand('bold')
    })
    colCardFooterInnerFontItalicBtn.addEventListener('click', () => {
        document.execCommand('italic')
    })
    colCardFooterInnerFontUnderlineBtn.addEventListener('click', () => {
        document.execCommand('underline')
    })
    colCardFooterInnerFontStrikethroughBtn.addEventListener('click', () => {
        document.execCommand('strikethrough')
    })

    deleteBtn.addEventListener('click', () => {
        deleteNote(id, col)
    })

    return col
}

// Add Note
function addNote() {
    const notes = getNotes()

    const noteItem = {
        id: Math.floor(Math.random() * 100000),
        content: '',
        theme: 'yellow'
    }

    const noteElement = createNoteElement(noteItem.id, noteItem.content, noteItem.theme)
    notesContainer.insertBefore(noteElement, addNoteContainer)

    notes.push(noteItem)

    saveNotes(notes)
}

// Update Note
function updateNote(id, newContent) {
    const notes = getNotes() // When note updated, we have a new note and should add it to prev array
    
    const updatedNote = notes.filter((item) => item.id === id)[0]

    updatedNote.content = newContent

    saveNotes(notes)
}

// Update Theme
function updateTheme(id, newTheme) {
    const notes = getNotes() // When note updated, we have a new note and should add it to prev array

    const updatedNote = notes.filter((item) => item.id === id)[0]

    updatedNote.theme = newTheme

    saveNotes(notes)
}

// Delete Note
function deleteNote(id, element) {
    const notes = getNotes().filter((item) => item.id != id) // All notes except deleted note

    saveNotes(notes)

    notesContainer.removeChild(element)
}