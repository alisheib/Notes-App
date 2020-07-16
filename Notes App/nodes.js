const notes = [{
  title: 'My next trip',
  body: 'I would like to go to Spain'
}, {
  title: 'Habits to work on',
  body: 'Exercise, Eating a bit better.'
}, {
  title: 'Office modification',
  body:'Get a new seat'     
}]

// DOM-Document Object Model

// Query and Remove
// const p = document.querySelector('p')
// p.remove()

// Query All and Remove
// const ps = document.querySelectorAll('p')

// ps.forEach(function(p){
  // p.textContent = '*****'
  // console.log(p.textContent)
//   p.remove()
// })

// Add a new element 
// const newParagraph = document.createElement('p')
// newParagraph.textContent = 'This is a new paragraph form JavaScript'
// document.querySelector('body').appendChild(newParagraph)

// This keeps track of the latest data
const filters ={
  searchText:''
}
// This render notes function takes the notes and filters and figures out which one matches the filters
const renderNotes = function (notes,filters) {
  const filteredNotes = notes.filter(function(note){
      return note.title.toLowerCase().includes(filters.searchText.toLowerCase()) 
  })

  // We used this to clear the div making sure to wipe all the previously rendered notes which are now
  // out of date since tehy don't match the latest filters
  document.querySelector('#notes').innerHTML = ''
 
  // Here we added the filtered notes in
  filteredNotes.forEach(function(note){
      const noteEl = document.createElement('p')
      noteEl.textContent = note.title
      document.querySelector('#notes').appendChild(noteEl)
  })
}

// we call this function once right away to make sure something shows up before the user interacts with the page
renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', function(e){
  e.target.textContent = 'The button was clicked'
})

// document.querySelector('#remove-all').addEventListener('click',function(){
  // document.querySelectorAll('.note').forEach(function(note){
      // note.remove()
  // })
// })

//And we call it again when the user interacts with the page which changes the filters
document.querySelector('#search-text').addEventListener('input',function(e){
  filters.searchText = e.target.value
  renderNotes(notes, filters)
})

// document.querySelector('#name-form').addEventListener('submit', function(e){
//     e.preventDefault()
//     console.log(e.target.elements.firstName.value)
//     e.target.elements.firstName.value = ''
// })

document.querySelector('#for-fun').addEventListener('change',function(e){
  console.log(e.target.checked)
})

document.querySelector('#filter-by').addEventListener('change', function(e){
  console.log(e.target.value)
})

document.querySelector("#search-text").addEventListener("input" ,function (e) {
 filters.searchText =e.target.value
 renderNotes(notes ,filters)
})

document.querySelector("#filter-by").addEventListener("change", function(e){
  console.log(e.target.value)
})
