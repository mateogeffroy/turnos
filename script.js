document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("confirmar").addEventListener("click", function () {
        var horario = document.getElementById("horario");
        var valor = horario.value;

        if (valor !== null && valor.trim() !== "") {
            var listaTurnos = JSON.parse(localStorage.getItem("listaTurnos")) || [];
            listaTurnos.push(valor);
            localStorage.setItem("listaTurnos", JSON.stringify(listaTurnos));
            window.location.href = "confirmacion.html";
        }
    });
});