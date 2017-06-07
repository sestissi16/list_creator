const celebForm = document.querySelector('#celebForm')

//create object for each celeb
//function createCelebObj(celebName){
//    const celebObj = {}
//   celebObj.name = celebName
//}

//create function to handle the submit
function handleSubmit(ev){
    ev.preventDefault()
    const f = ev.target
    const listSection = document.querySelector('#listSection')
    const celebName = f.celebChoice.value
    debugger
    listSection.appendChild(makeList(celebName))
}

//create function to make list item
function makeListItem(value){
    const item = document.createElement('li')
    item.innerHTML =`${value}`
    //add buttons to the list item
    const favButton = document.createElement('button')
    favButton.innerHTML = `<img src="http://weknownyourdreamz.com/images/star/star-02.jpg">`
    item.appendChild(favButton)
    return item
}

//create function to make the list
function makeList(cName){
    const list = document.createElement('ul')
    const item = makeListItem(cName)
    list.appendChild(item)
    return list
}

celebForm.addEventListener('submit', handleSubmit)