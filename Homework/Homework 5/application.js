$(document).ready(function () {
  var actors = [
    {
      id: 1,
      characterName: "Tokio",
      actorName: "Úrsula Corberó",
      pictureUrl:
        "https://m.media-amazon.com/images/M/MV5BMjBkMTc4ODctY2U1NC00NjQzLTliYTItZDM1MTkwNWNmODRjXkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_UY44_CR6,0,32,44_AL_.jpg",
    },
    {
      id: 2,
      characterName: "El Profesor",
      actorName: "Álvaro Morte",
      pictureUrl:
        "https://m.media-amazon.com/images/M/MV5BZGVlMTQyODEtNTlmZS00MTg1LWEwNmYtZmRlNjFmNzg0MDNhXkEyXkFqcGdeQXVyMTA0MjU0Ng@@._V1_UX32_CR0,0,32,44_AL_.jpg",
    },
    {
      id: 3,
      characterName: "Itziar Ituño",
      actorName: "Raquel Murillo",
      pictureUrl:
        "https://m.media-amazon.com/images/M/MV5BODMzZDNjZjUtYzlhOC00ODNhLWI4NDMtNjc0ZmE1YWNlYzQ0XkEyXkFqcGdeQXVyMTA0MjU0Ng@@._V1_UY44_CR2,0,32,44_AL_.jpg",
    },
  ];

  var removeActor = () => {
    $(".remove-actor").on("click", function () {
      $(this).closest("tr").remove();
    });
  };

  function createTable(actors) {
    var tableBody = document.getElementById("table-data");

    for (var i = 0; i < actors.length; i++) {
      var row = `<tr>
                      <td>${actors[i].id}</td>
                      <td>${actors[i].characterName}</td>
                      <td>${actors[i].actorName}</td>
                      <td><img src="${actors[i].pictureUrl}"/></td>
                      <td><span><button class="remove-actor btn btn-danger">Remove</button></span></td>
                 </tr>`;
      tableBody.innerHTML += row;
    }
    removeActor();
  }

  $("#add-actor").on("click", function () {
    var actor = {
      id: actors.length + 1,
      characterName: $("#crew-form").find('input[name="character-name"]').val(),
      actorName: $("#crew-form").find('input[name="actor-name"]').val(),
      pictureUrl: $("#crew-form").find('input[name="picture"]').val(),
    };

    var tableBody = document.getElementById("table-data");
    var row = `<tr>
                      <td>${actor.id}</td>
                      <td>${actor.characterName}</td>
                      <td>${actor.actorName}</td>
                      <td><img src="${actor.pictureUrl}"/></td>
                      <td><span><button class="remove-actor btn btn-danger">Remove</button></span></td>
                 </tr>`;
    tableBody.innerHTML += row;

    removeActor();
    actors.push(actor);
    $("#crew-form").slideUp();
  });

  $("#show-crew").on("click", function () {
    $("#table-head").slideDown();
    createTable(actors);
    $(this).remove();
    $("#add-crew").show();
  });

  $("#add-crew").on("click", function () {
    $("#crew-form").slideDown();
  });
});
