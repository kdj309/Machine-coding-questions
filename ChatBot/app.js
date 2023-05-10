let chatcontent = `<div class="card chatrespnse my-2">
<div class="card-body">
  <h5 class="card-title">What's happening</h5>
  <p class="card-text">Let's start chatting</p>
</div>
</div>`;
window.onload = function () {
  document.getElementById("chatdiv").innerHTML += chatcontent;
};

document.getElementById("submitbtn").addEventListener("click", () => {
  let usertext = document.getElementById("usertext").value;
  addUserResponse(usertext);
  disabletextarea();
  getResponse(parseInt(usertext));
  document.getElementById("usertext").value = "";
  enableTextarea();
});
function addUserResponse(usertext) {
  let userinput = `<div class="align-self-end p-3 mb-2 bg-secondary text-white bg-opacity-75 userquestion"><h2>${usertext}</h2></div>`;
  document.getElementById("chatdiv").innerHTML += userinput;
}
function enableTextarea() {
  setTimeout(() => {
    document.getElementById("usertext").disabled = false;
    document.getElementById("submitbtn").disabled = false;
  }, 2000);
}
function disabletextarea() {
  document.getElementById("usertext").disabled = true;
  document.getElementById("submitbtn").disabled = true;
}
async function getResponse(id) {
  let res = await fetch(
    `https://jsonplaceholder.typicode.com/comments?postId=${id}`
  );
  let data = await res.json();
  AddResponseToChat(data);
}
function AddResponseToChat(data) {
  let chatresponse = `<div class="card chatrespnse my-2">
        <div class="card-body">
          <h5 class="card-title">${data[0].email}</h5>
        </div>
        </div>`;
  document.getElementById("chatdiv").innerHTML += chatresponse;
}
