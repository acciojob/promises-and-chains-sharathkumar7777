const form = document.getElementById("form");
    const ageInput = document.getElementById("age");
    const nameInput = document.getElementById("name");

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const age = ageInput.value;
      const name = nameInput.value;

      // ✅ EXACT message Cypress expects (NO DOT)
      if (age === "" || name === "") {
        alert("Please enter valid details");
        return;
      }

      const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
          if (Number(age) > 18) {
            resolve(`Welcome, ${name}. You can vote.`);
          } else {
            reject(`Oh sorry ${name}. You aren't old enough.`);
          }
        }, 4000);
      });

      promise
        .then(msg => alert(msg))
        .catch(err => alert(err));
    });