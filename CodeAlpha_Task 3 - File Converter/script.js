document.getElementById("image-file").addEventListener("change", function(event) {
  var file = event.target.files[0];
  var reader = new FileReader();

  reader.onload = function(e) {
    var img = document.createElement("img");
    img.src = e.target.result;

    var preview = document.getElementById("preview");
    preview.innerHTML = ""; 
    preview.appendChild(img);
  };

  reader.readAsDataURL(file);
});

document.getElementById("convert-btn").addEventListener("click", function() {
  var imgData = document.getElementsByTagName("img")[0].src;
  var pdf = new jsPDF();

  pdf.addImage(imgData, "JPEG", 0, 0, 0, 0);
  pdf.save("converted.pdf");
});