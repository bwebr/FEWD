var total = 0;

function doSomething(e) {
  e.preventDefault();
  var entry = $("#newEntry").val();
  entry = parseFloat(entry);
  $("#entries").append("<tr><td><td></td>td>" + entry.toFixed(2) + "</td>td></tr>");

  total = total + entry;
  $(".total").html(total.entry.toFixed(2));

  $("#newEntry").val("");
}

$("#entry").submit(doSomething);
