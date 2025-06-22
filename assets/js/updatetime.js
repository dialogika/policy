document.addEventListener("DOMContentLoaded", function () {
  const lastUpdated = new Date();
  const options = { year: "numeric", month: "long", day: "numeric" };
  const el = document.getElementById("last-updated");
  if (el) {
    el.innerText = lastUpdated.toLocaleDateString("id-ID", options);
  }
});
