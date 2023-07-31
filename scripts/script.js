// grabbing the meme-form
let memeForm = document.getElementById("meme-form");

// function to create meme
function createMeme(evt) {
  evt.preventDefault();

// creating our variables for the meme
  let container = document.getElementById("meme-area");
  let imgUrl = document.getElementById("img-url").value;
  let topText = document.getElementById('top-text-input').value;
  let bottomText = document.getElementById('bottom-text-input').value;

  // parent for all meme contents
  let memeDiv = document.createElement("div");
  memeDiv.classList.add("meme");

  // picture
  let img = document.createElement("img");
  img.src = imgUrl;

  // attaching image to meme container
  memeDiv.appendChild(img);

  // creating top text
  let topTextP = document.createElement('p');
  topTextP.innerText = topText;
  topTextP.classList.add('top-text');
  memeDiv.appendChild(topTextP);

  // creating bottom text
  let bottomTextP = document.createElement('p');
  bottomTextP.innerText = bottomText;
  bottomTextP.classList.add('bottom-text');
  memeDiv.appendChild(bottomTextP);

// creating close button
  let deleteButton = document.createElement('button');
  deleteButton.setAttribute('type', 'button');
  deleteButton.setAttribute('class', 'btn btn-danger');
  deleteButton.innerText = 'Delete Meme';
  memeDiv.appendChild(deleteButton);
  deleteButton.onclick = deleteMeme;

  // attaching meme to website
  container.appendChild(memeDiv);
  memeForm.reset();
}

// function to delete meme
function deleteMeme(evt) {
  evt.target.closest('.meme').remove();
};

// adding event to create meme
memeForm.addEventListener("submit", createMeme);


