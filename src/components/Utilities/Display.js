const handleSelectBtn = () =>{
    document.getElementById('select-container').classList.remove('hidden')

    document.getElementById('available-container').classList.add('hidden')
}
const handleAvailable = () =>{
    document.getElementById('available-container').classList.remove('hidden')
    document.getElementById('select-container').classList.add('hidden')
}


export{handleSelectBtn,handleAvailable}
