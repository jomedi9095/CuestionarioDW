$(() => {
    $('#btnIniciar').on('click', (e) => {
        e.preventDefault();
        const nombre = $('#nombre').val()
        const apellido = $('#apellido').val()

        if ((nombre==="") || (apellido==="")) {
            alert("Digite todos los campos para poder iniciar el cuestionario !!")
        } else {
            window.location.href = `../ProyectoProgramacion/page/preguntas.html?nombre=${nombre}&apellido=${apellido}`
        }
    })
})