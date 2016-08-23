function doSomething(val) {
  val.preventDefault();
  var city = $ ("#city-type").val();
  city = city.trim().toLowerCase();
  // city = city.trim();
  // city = city.toLowerCase();


  if (city === "london" || city === "ldn") {
    console.log("they chose london");
    $("body").attr("class", "london");
  } else if (city === "austin") {
    console.log("they chose austin");
    $("body").attr("class", "austin");
  } else if (city === "los angeles" || city === "la") {
    console.log("they chose los angeles");
    $("body").attr("class", "la");
  } else if (city === "new york" || city === "ny" || city === "nyc") {
    console.log("they chose new york");
    $("body").attr("class", "nyc");
  } else if (city === "san francisco" || city === "sf" || city === "san fran") {
    console.log("they chose san francisco");
    $("body").attr("class", "sf");
  }

$ ("#city-type").val("");

}

$("form").submit(doSomething);


// || means or in javascript

// document.querySelector("form").onsubmit = doSometing; (this would be the way to do it in simple javascript instead of Ajax.)
