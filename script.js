document.getElementById('age-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const day = parseInt(document.getElementById('day').value);
  const month = parseInt(document.getElementById('month').value) - 1; // Because Months are 0-based in JavaScript
  const year = parseInt(document.getElementById('year').value);

  if (isNaN(day) || isNaN(month) || isNaN(year)) {
      alert("Please Enter a Valid Date Of Birth.");
      return;
  }

  const newDate = new Date(year, month, day);
  const today = new Date();
  let age = today.getFullYear() - newDate.getFullYear();
  const monthDiff = today.getMonth() - newDate.getMonth();
  const dayDiff = today.getDate() - newDate.getDate();

  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      age--;
  }

  document.getElementById('result').textContent = `Great ! You are ${age} years old.`;
});
