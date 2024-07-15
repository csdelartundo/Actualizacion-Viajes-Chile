import "../../node_modules/jquery/dist/jquery.min.js";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.js";

$(function () {

    $("#alertBtn").on("click", function () {
        alert("Mensaje enviado con éxito", "info")
    });

    const alert = (message, type) => {
        //Aqui se definira el html del alert y podremos usar message y type
        const alertHtml =
            `<div class="alert alert-${type}" role="alert">
            ${message}
    </div>`;

        $("#alertContainer").append(alertHtml);

    }
});

// Tooltip
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

//SmoothScroll
$(function() {
    $('a.nav-link').on('click', function(event) {
        var hash = this.hash;
        if (hash) {
            event.preventDefault();
            $('html, body').animate({ scrollTop: $(hash).offset().top }, 100, function() {
                window.location.hash = hash;
            });
        }
    });
});
