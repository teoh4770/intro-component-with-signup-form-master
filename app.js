/*

Your users should be able to:

- View the optimal layout for the site depending on their device's screen size (done)
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say *"[Field Name] cannot be empty"*
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Looks like this is not an email"* 
  

*/

//  selectors and variables
let inputs = document.querySelectorAll(".sign-up-form input");
let submit = document.querySelector("button[type='submit']");

console.log({inputs, submit});

// based on the id of the input, provide respective event

document.addEventListener('DOMContentLoaded', () => {
  inputs.forEach(input => {
    input['value'] = "";
    //console.log(input.dataset.msgid);
  });
});

// when the value is filled, hides the error msg and icon
inputs.forEach(input => {
  input.addEventListener("input", valueFill);
})
// if the button submit is clicked, then check the value inside each field
submit.addEventListener("click", validateInputs);

function valueFill() {
    let msgDiv = this.parentElement.nextElementSibling;
    let errorIcon = this.nextElementSibling;
    [msgDiv, errorIcon].forEach(element => {
      element.classList.add("hidden");
    });
}

function validateInputs() {
  inputs.forEach(input => {
    let msgDiv = input.parentElement.nextElementSibling;
    let errorIcon = input.nextElementSibling;
    if(input.value === "") {
      let msg = `${input.dataset.msgid} cannot be empty!`;
      msgDiv.textContent = msg;
      [msgDiv, errorIcon].forEach(element => {
        element.classList.remove("hidden");
      });
      // if got error, then remove the hidden classlist from the sibling of the input
    }
    // if the value is filled, then check the value inside
    else {
      if(input['id'] === 'email') {
        console.log('email');
        if(!validEmail(input.value))  {
          let msgDiv = input.parentElement.nextElementSibling;
          let msg = `${input.dataset.msgid}'s format should be 'name@host.tld'!`;
          msgDiv.textContent = msg;
          let errorIcon = input.nextElementSibling;
          [msgDiv, errorIcon].forEach(element => {
            element.classList.remove("hidden");
          });
        }
        else {
          inputs.forEach(input => {
            let id = input.getAttribute('id');
            let val = input.value;
            console.log(id, val);
          });
        }
      }
    }
  })
}


function validEmail(email) {
  let isValid = false;
  if(email) {
    isValid =  (/^[^\s@]+@[^\s@]+\.[tld]+$/).test( email );
  }
  console.log(isValid);
  return isValid;
}




