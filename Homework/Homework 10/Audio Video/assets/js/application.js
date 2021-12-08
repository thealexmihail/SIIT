$("table").on("click", ".remove-actor", function () {
  $(this).closest("tr").remove();
});

$(document).ready(function () {
  var allActors;

  function createTable(actors) {
    actors.forEach(
      ({
        id,
        characterName,
        actorName,
        pictureUrl,
        yearOfBirth = "Not provided",
      }) => {
        var row = `<tr>
        <td>${id}</td>
        <td>${characterName}</td>
        <td>${actorName}</td>
        <td>${yearOfBirth}</td>
        <td><img src="${pictureUrl}"/></td>
        <td><button class="remove-actor btn btn-danger">Remove</button></td></tr>`;
        $("#crew-list tbody").append(row);
      }
    );
    allActors = actors;
  }

  function onError(error) {
    console.log("Error: ", error);
  }

  $("#show-crew").on("click", function () {
    $("#table-head").slideDown();
    $.ajax("/actors.json", {
      method: "GET",
      success: createTable,
      error: onError,
    });

    $(this).remove();

    $("#add-crew")
      .show()
      .on("click", function () {
        $("#crew-form").slideDown();
      });
  });

  $("#add-actor").on("click", function () {
    var actor = {
      id: Object.keys(allActors).length + 1,
      characterName: $("#crew-form").find('input[name="character-name"]').val(),
      actorName: $("#crew-form").find('input[name="actor-name"]').val(),
      yearOfBirth:
        $("#crew-form").find('input[name="actor-birth"]').val() ||
        "Not provided",
      pictureUrl: $("#crew-form").find('input[name="picture"]').val(),
    };

    var tableBody = $("#crew-list > tbody");
    var row = `<tr>
                    <td>${actor.id}</td>
                    <td>${actor.characterName}</td>
                    <td>${actor.actorName}</td>
                    <td>${actor.yearOfBirth}</td>
                    <td><img src="${actor.pictureUrl}"/></td>
                    <td><span><button class="remove-actor btn btn-danger">Remove</button></span></td>
               </tr>`;
    tableBody.append(row);
    allActors.push(actor);
    $("#crew-form").slideUp();
  });
});
