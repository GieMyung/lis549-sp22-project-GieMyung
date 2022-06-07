$('img').attr("data-bs-toggle", "modal");
$('img').attr("data-bs-target", "#myModal");


myModal.addEventListener('shown.bs.modal', function (event) {
        const imageClicked = $(event.relatedTarget);
            $('#modalImage').attr("src", imageClicked.attr("src"));
            $('#modalImage').attr("alt", imageClicked.attr("alt"));
        
})