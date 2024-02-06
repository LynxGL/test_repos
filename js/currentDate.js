function getDate() {
  const dateBox = document.getElementById("time-js");
  const date = new Date();
  let options = {
    day: 'numeric',
    month: 'long'
  };

  let month = date.toLocaleString("en", options);

  dateBox.innerHTML = month;
}

getDate();
