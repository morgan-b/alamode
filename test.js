var alamode3 = {
addVideostoTables: function(o) {

  var tableId = "#" + o["table"],
      imageColumn = o["column"];


  setTimeout(function() {
    drawVideos();
  },1000)

  $(tableId).keyup(function() {
    setTimeout(function() {
      drawVideoss();
    },500)
  });

  $(tableId).mousemove(function() {
    drawVideos();
  })

  function drawVideos() {
    var tableDiv = $(tableId + " table"),
        tableHeader = $(tableId + " .js-header-table"),
        headers = !tableHeader ? $(tableHeader).find("th") : $(tableId + " .js-col-header"),
        rows = tableDiv.find("tr"),
        columnIndex = 0;

    headers.each(function() {
      text = $(this).find(".axel-table-header-label").text()
      if (text == imageColumn) {
        columnIndex = +$(this).attr("data-axel-column")
      }
    })

    rows.each(function() {
      var cells = $(this).find("td");

      cells.each(function(i) {
        if (i == (columnIndex - 1)) {
          var content = $(this).text();

          if ($(this).find("video").length == 0) {
            $(this).css("text-align","center")
            $(this).html("<video height='350' src='" + content + "' type='video/mp4' controls></video>")
          }
        }
      })
    })
  }
}
}

