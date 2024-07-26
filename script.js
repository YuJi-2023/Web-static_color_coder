//console.log("hello color!");
function searchFunc() {
  let kw = document.querySelector("#searchInput").value;
  let anchor = `#${kw}`;
  window.location.href = anchor;
}
