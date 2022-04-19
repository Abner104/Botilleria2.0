const botonNotificaciones = document.getElementById("boton-notificacion");
botonNotificaciones.addEventListener("click", () => {
  Toastify({
    text: "Producto Agregado",
    duration: 1700,
    gravity: "top", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
    onClick: function () { } // Callback after click
  }).showToast();

});