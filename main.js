document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault();
  document.querySelectorAll("input").forEach(campo => {campo.value=""});
  let text = document.getElementById("textarea").value = "";
  // return;
  emailjs.sendForm("service_lpj4scn", "template_a60b3db", this)
    .then(function() {
      alert("Te contactaremos! ❤️");
    }, function(error) {
      alert("Hubo un error al enviar el mensaje: " + JSON.stringify(error));
    });
});
