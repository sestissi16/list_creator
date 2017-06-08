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
    //prepend function to add things to top of list
    const madeList = makeList(celebName)
    listSection.insertBefore(madeList, listSection.firstChild)
}

//create function to make list item
function makeListItem(value){
    const item = document.createElement('li')
    item.innerHTML =`${value}`
    //add buttons to the list item
    const favButton = document.createElement('input')
    //create attribute for button so that I can differentiate buttons in the future
    favButton.value = 'Fav'
    const typeAtt = document.createAttribute('type')
    typeAtt.value = 'button'
    favButton.setAttributeNode(typeAtt)
    const clickAtt = document.createAttribute('onclick')
    clickAtt.value = "this.parentElement.style.backgroundColor = '#FEEC49'"
    favButton.setAttributeNode(clickAtt)
    const doubleClickAtt = document.createAttribute('ondblclick')
    doubleClickAtt.value = "this.parentElement.style.backgroundColor = '#FFFFFF'"
    favButton.setAttributeNode(doubleClickAtt)
    //favButton.style.backgroundImage = 'url(http://weknownyourdreamz.com/images/star/star-02.jpg)'
    const delButton = document.createElement('input')
    delButton.value = 'Del'
    const delTypeAtt = document.createAttribute('type')
    delTypeAtt.value = 'button'
    delButton.setAttributeNode(delTypeAtt)
    const delClickAtt = document.createAttribute('onclick')
    delClickAtt.value = "this.parentElement.remove()"
    delButton.setAttributeNode(delClickAtt)
    item.appendChild(favButton)
    item.appendChild(delButton)
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