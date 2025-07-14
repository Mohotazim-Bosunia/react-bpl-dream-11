const handleSelectBtn = () =>{
    document.getElementById('select-container').classList.remove('hidden')
    document.getElementById('moreAddBtn-container').classList.remove('hidden')

    document.getElementById('available-container').classList.add('hidden')
    document.getElementById('remove-available').classList.add('hidden')
    document.getElementById('add-selectplayer').classList.remove('hidden')
}
const handleAvailable = () =>{
    document.getElementById('available-container').classList.remove('hidden')
    document.getElementById('select-container').classList.add('hidden')
    document.getElementById('moreAddBtn-container').classList.add('hidden')
    document.getElementById('add-selectplayer').classList.add('hidden')
    document.getElementById('remove-available').classList.remove('hidden')
}
const handleMoreAddbtn =() =>{
    document.getElementById('available-container').classList.remove('hidden')
    document.getElementById('select-container').classList.add('hidden')
    document.getElementById('moreAddBtn-container').classList.add('hidden')
    document.getElementById('add-selectplayer').classList.add('hidden')
    document.getElementById('remove-available').classList.remove('hidden')

}


export{handleSelectBtn,handleAvailable,handleMoreAddbtn}
