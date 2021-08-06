$(() => {
    var valores = window.location.search

    if (valores !== "") valores = valores.split("=")
    else window.location.href = "../index.html"

    const nombre = valores[1].replace('&apellido', '')
    const apellido = valores[2]

    $('#username').html(`${nombre} ${apellido}`)

    var contadorPreguntas = 2
    var contadorPreguntasCorrectas = 0

    $('#btnSiguiente').on('click', () => {
        esconderComponentes(contadorPreguntas)

        switch (contadorPreguntas) {
            case 2:
                contadorPreguntasCorrectas += ($('input[name=radio1]:checked', '#form1').val() !== "") ? 1 : 0
                break;
            case 3:
                contadorPreguntasCorrectas += ($('input[name=radio2]:checked', '#form2').val() !== "") ? 1 : 0
                break;
            case 4:
                contadorPreguntasCorrectas += ($('input[name=radio3]:checked', '#form3').val() !== "") ? 1 : 0
                break;
            case 5:
                contadorPreguntasCorrectas += ($('input[name=radio4]:checked', '#form4').val() !== "") ? 1 : 0
                break;
            case 6:
                contadorPreguntasCorrectas += ($('input[name=radio5]:checked', '#form5').val() !== "") ? 1 : 0
                break;
            case 7:
                contadorPreguntasCorrectas += ($('input[name=radio6]:checked', '#form6').val() !== "") ? 1 : 0
                break;
            case 8:
                contadorPreguntasCorrectas += ($('input[name=radio7]:checked', '#form7').val() !== "") ? 1 : 0
                break;
            case 9:
                contadorPreguntasCorrectas += ($('input[name=radio8]:checked', '#form8').val() !== "") ? 1 : 0
                break;
            case 10:
                contadorPreguntasCorrectas += ($('input[name=radio9]:checked', '#form9').val() !== "") ? 1 : 0
                break;
        }

        contadorPreguntas++

        document.getElementById('item').innerHTML = contadorPreguntas - 1
        document.getElementById('barra').value += 10
        if (contadorPreguntas === 11) {
            $('#btnEnviar').show()
            $('#btnSig').hide()
            document.getElementById('barra').value = 100
        }
    })


    $('#btnEnviarRespuesta').on('click', () => {
        document.getElementById('correctas').innerHTML = `<b>${contadorPreguntasCorrectas} PREGUNTAS CORRECTAS </b>`
        document.getElementById('incorrectas').innerHTML =  `<b>${9-contadorPreguntasCorrectas} PREGUNTAS INCORRECTAS </b>`
    })


    for (let i = 2; i <= 9; i++) $(`#pregunta${i}`).hide()
    document.getElementById("item1").style.backgroundColor = 'rgb(0, 255, 128)'
    document.getElementById("item1").style.borderBottom = '10px solid rgb(128, 128, 128)'

    $('#btnEnviar').hide()


    function esconderComponentes(contador) {
        for (let i = 1; i <= 9; i++) {
            if (contador !== i) {
                $(`#pregunta${i}`).hide()
                document.getElementById(`item${i}`).style.backgroundColor = 'none'
                document.getElementById(`item${i}`).style.borderBottom = 'none'
            } else {
                $(`#pregunta${i}`).show()
                document.getElementById(`item${i}`).style.backgroundColor = 'rgb(0, 255, 128)'
                document.getElementById(`item${i}`).style.borderBottom = '10px solid rgb(128, 128, 128)'
            }
        }
    }
})