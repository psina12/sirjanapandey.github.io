(function () {
    $(document).ready(function () {
        $("#start").click(function () {

            $(".boundary").removeClass("youlose");
            $("#status").text("Start...");

            $(".boundary").on("mouseenter", (function () {
                $(".boundary").addClass("youlose");
                $("#status").text("Sorry, you lost :[");
            }));

            $("#maze").on("mouseleave", function () {
                $(".boundary").addClass("youlose");
                $("status").text("You lose:(");
                $("end").off("mouseover");

            });

            $("#end").mouseover(function () {
                $("#status").text("You win! :]");
            });



        });

    });
}());