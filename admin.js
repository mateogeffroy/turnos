document.addEventListener("DOMContentLoaded", function () {
    // En la página de administración (htmlAdmin.html), muestra la lista de turnos
    var listaTurnos = JSON.parse(localStorage.getItem("listaTurnos")) || [];
    var listaTurnosElement = document.getElementById("listaTurnos");

    listaTurnos.forEach(function (valor) {
        var li = document.createElement("li");
        li.textContent = valor;
        listaTurnosElement.appendChild(li);
    });
});