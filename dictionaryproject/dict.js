$(document).ready (function () {
  $("#button").click(function () {
    var term = $("#term").val();
    console.log("called term:" + term);
    $.ajax({
      url: "http://localhost:8080/search",
      type: "GET",
      data: { term: term },
      success: getDataSuccess,
      error: getDataError,
    });
  });

});

  function getDataSuccess(data) {
    $("ul").children().remove();

    parsedData = data;

    for (var i = 0; i < parsedData.length; i++) {
      $("ul").append(
        `<li>${i + 1} (${parsedData[i].wordtype}) :: ${
          parsedData[i].definition
        }</li>`
      );
    }
  }

  function getDataError(err) {
    alert("Cannot Get Error", err);
  }

