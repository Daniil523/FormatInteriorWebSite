const form = document.querySelector('#form');
async function formSend(e) {
    e.preventDefault()
    let formData = new FormData(form)
    let response = await fetch('mail.php', {
        method: 'POST',
        body: formData
    })
    if (response.ok) {
        Swal.fire({
            width: 400,
            title: '<h3 class="title">Заявка успешно отправлена!</h3>',
            color: '#373333',
            confirmButtonText: 'Окей',
            showClass: {
                popup: 'animate__animated animate__fadeIn faster'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOut faster'
            },
            customClass: {
                confirmButton: 'btn',
                title: 'title'
            },
            buttonsStyling: false,
        })
        form.reset()
    } else {
        Swal.fire({
            width: 400,
            title: '<h3 class="title">Что-то пошло не так...</h3>',
            text: 'Повоторите попытку позднее',
            color: '#373333',
            confirmButtonText: 'Окей',
            showClass: {
                popup: 'animate__animated animate__fadeIn faster'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOut faster'
            },
            customClass: {
                confirmButton: 'btn',
                title: 'title'
            },
            buttonsStyling: false,
        })
        form.reset()
    }
}
form.addEventListener('submit', formSend)