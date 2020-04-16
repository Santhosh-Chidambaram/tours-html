
// Funtion  For selecting element
const selectElement = (s) => document.querySelector(s);

// Opening Sidebar
selectElement('.open').addEventListener('click',() =>{
  console.log("clicked");
  selectElement('.nav-list').classList.add('active');

});

// Closing Sidebar
selectElement('.close').addEventListener('click',() =>{
  console.log("clicked");
  selectElement('.nav-list').classList.remove('active');

});
