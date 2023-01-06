const listaFinal = document.querySelector(".listaInvitados")
const inputTarea = document.querySelector("#nuevoInvitado")
const agregarButton = document.querySelector("#agregarInvitado")
const contadorTotalTareas = document.querySelector("#cuenta-tareas")
const contadorTareasRealizadas = document.querySelector("#cuenta-realizadas")
const listaTareas = [
    {
        id: 666,
        nombre: "Lavarse la cara",
        realizado: false
    },
    {
        id: 667,
        nombre: "Lavarse los dientes",
        realizado: false
    },
    {
        id: 668,
        nombre: "Jugar Genshin Impact",
        realizado: false
    }
]

agregarButton.addEventListener("click", () => {
    agregarInvitado()
})

inputTarea.addEventListener("keydown", (e) => {
    if (e.keyCode == 13) {
        agregarInvitado()
    }
})

const agregarInvitado = () => {
    if (inputTarea.value == "") {
        alert("coloque algo no sea bobo, anda pa asha")
    }
    else {
        const nombreTarea = { id: Date.now(), nombre: inputTarea.value, realizado: false }
        listaTareas.push(nombreTarea)
        inputTarea.value = ""
        renderInvitados()
    }
}

function borrar(id) {
    const index = listaTareas.findIndex((ele) => ele.id == id)
    listaTareas.splice(index, 1)
    if (contadorTareasRealizadas.innerHTML == 0) {
        
    }
    else {
        contadorTareasRealizadas.innerHTML -= 1
    }
    renderInvitados()
}

function realizadoButton(id) {
    const index = listaTareas.findIndex((ele) => ele.realizado == false)
    console.log(index)
    listaTareas[index].realizado = true
    console.log(index)
    const result = listaTareas.filter(tarea => tarea.realizado == true).length
    console.log(result)
    contadorTareasRealizadas.innerHTML = result
    renderInvitados()
}

function renderInvitados() {
    let html = ""
    let totalTareas = 0
    listaTareas.forEach(tarea => {
        html += `
            <li>${tarea.nombre} <button class="buttonRealizado" onclick="realizadoButton()"><i class="fa-solid fa-check"></i></button> <button class="buttonBorrar" onclick="borrar(${tarea.id})"><i class="fa-solid fa-xmark"></i></button> </li>
        `
        totalTareas += 1
    })
    listaFinal.innerHTML = html
    contadorTotalTareas.innerHTML = totalTareas
}