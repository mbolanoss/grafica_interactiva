document.addEventListener("DOMContentLoaded", (event) => {
  let svgObject = document.getElementById("svg");

  svgObject.onload = () => {
    let test = svgObject.contentDocument;
    // console.log(test.getElementById("image647"));
    test.getElementById("image647").addEventListener("click", () => {
      console.log("clickk");
    });
  };
});
