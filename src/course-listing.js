let listRef = document.getElementById('course-list');
listRef.addEventListener('click', function (event) {
  const listItem = event.target;
  console.log(`You clicked on ${listItem.textContent}.`);
});
