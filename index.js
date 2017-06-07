const celebForm = document.querySelector('#celebForm')

//create object for each celeb
function createcelebObj(celebname){
    const celebObj = {}
    celebObj.name = celebname
}

//create function to handle the submit
function handleSubmit(ev){
    ev.preventDefault()
    const f = ev.target
    const listSection = document.querySelector('#listSection')
}