//your JS code here. If required.
const form = document.getElementById("form");
    const ageInput = document.getElementById("age");
    const nameInput = document.getElementById("name");

    form.addEventListener("submit", function (e) {
      e.preventDefault(); // prevent default form submission

      const age = ageInput.value;
      const name = nameInput.value;

      // Validation: empty inputs
      if (age === "" || name === "") {
        alert("Please enter valid details.");
        return;
      }

      // Promise logic
      const checkVotingEligibility = new Promise((resolve, reject) => {
        setTimeout(() => {
          if (Number(age) > 18) {
            resolve(`Welcome, ${name}. You can vote.`);
          } else {
            reject(`Oh sorry ${name}. You aren't old enough.`);
          }
        }, 4000);
      });

      checkVotingEligibility
        .then((message) => {
          alert(message);
        })
        .catch((error) => {
          alert(error);
        });
    });