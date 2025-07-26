//your JS code here. If required.
const form = document.getElementById('voteForm');
const nameInput = document.getElementById('name');
const ageInput = document.getElementById('age');
const btn = document.getElementById('btn');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const name = nameInput.value.trim();
  const age = ageInput.value.trim();

  if (name === '' || age === '') {
    alert("Please enter valid details.");
    return;
  }

  new Promise(function(resolve, reject) {
    setTimeout(function() {
      if (Number(age) > 18) {
        resolve();
      } else {
        reject();
      }
    }, 4000);
  })
  .then(function() {
    alert(`Welcome, ${name}. You can vote.`);
  })
  .catch(function() {
    alert(`Oh sorry ${name}. You aren't old enough.`);
  });
});
