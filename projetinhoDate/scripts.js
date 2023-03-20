var currentPage = 1;
var totalPages = document.getElementsByClassName("page").length;

function showPage(pageNumber) {
  var previousPage = currentPage;
  currentPage = pageNumber;
  document.getElementById("page" + previousPage).classList.remove("active");
  document.getElementById("page" + currentPage).classList.add("active");
  updateButtons();
}

function showNextPage() {
  showPage(currentPage + 1);
}

function updateButtons() {
  if (currentPage === totalPages) {
    document.getElementById("next-button").style.display = "none";
  } else {
    document.getElementById("next-button").style.display = "block";
  }
}

updateButtons();

document.getElementById("page1-button").addEventListener("click", function() {
  showPage(2);
});

document.getElementById("page2-button").addEventListener("click", function() {
  showPage(3);
});

document.getElementById("page3-button").addEventListener("click", function() {
  showPage(4);
});

document.getElementById("page4-button").addEventListener("click", function() {
  showPage(1);
});
