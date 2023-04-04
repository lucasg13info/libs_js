// function alertaa_mensagem(){
//     let select_eletement_buttos = document.getElementById("sweetAlert")
//     select_eletement_buttos.Swal.fire(
//         'Good job!',
//         'You clicked the button!',
//         'success'
//       )
// }
    


const btn = document.querySelector('#myBtn')

const btn2 = document.querySelector('#myFail')


btn.addEventListener('click', () => {
    Swal.fire({
        title: 'Boa!!',
        text: 'Você está usando a lib Sweetalert2!',
        icon: 'success',
        confirmButtonText: 'Cool'
    })
})

    

btn2.addEventListener('click', () => {
    Swal.fire({
        title: 'Boa!!',
        text: 'Infelizmente você não consegue inserir os dados!',
        icon: 'error',
        confirmButtonText: 'Cool'
    })
})

   



