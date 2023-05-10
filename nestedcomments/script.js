function addInput() {
  let inputdiv = document.createElement("div");
  inputdiv.classList.add("replydiv");
  inputdiv.innerHTML += ` <input id="userval" placeholder="enter the text" />
  <button class="btn" type="button">Submit</button>`;
  return inputdiv;
}
function addcomment(val) {
  let commentdiv = document.createElement("div");
  commentdiv.classList.add("commentslist");
  commentdiv.innerHTML += `
  <div class="comment">
  <h3>${val}</h3>
  <span class="addreplybtn">Add Reply</span><div>`;
  return commentdiv;
}
document.querySelector(".main-container").addEventListener("click", (e) => {
  let replybtn = e.target.classList.contains("addreplybtn");
  let submitbtn = e.target.classList.contains("btn");

  //the key part here is the use of closest because there are many elements with class name commentlist but we need the exact div where we need to add the comment
  //closest will search the div with commentlist from bottom to top of the dom tree

  let commentcontainer = e.target.closest(".commentslist");
  if (replybtn) {
    commentcontainer.appendChild(addInput());
  }
  if (submitbtn) {
    let inputdiv = e.target.closest(".replydiv");
    if (e.target.closest(".replydiv").children[0].value) {
      commentcontainer.appendChild(
        addcomment(e.target.closest(".replydiv").children[0].value)
      );
      inputdiv.remove();
    }
  }
});
