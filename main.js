//bind to submit button
const submitButton = document.getElementById('send-email');
if (!submitButton) { console.warn("submit button not found") };
console.log(submitButton);

//bind to form
const form = document.getElementById('formjs');

//add form submit event listener to form
if (!form) {
  console.warn("form not found");
} else {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
  });
};

console.log(form);





// function init(formID) {
//   const form = document.getElementById(formID)
//   if (!form) {
//     console.log('Form not found')
//     return
//   }
//   console.log('Form Found')

//   form.addEventListener('submit', (event) => {
//     event.preventDefault()
//     sendMail(form)
//   })
// }

// function sendMail(form) {
//   console.log('sendMail()')
//   emailjs.sendForm('default_service', 'template_j9drx49', form, 'OfCYmZsIy-mQT7yaE').then(
//     (res) => {
//       console.log('res', res)
//     },
//     (err) => {
//       console.log('err', err)
//     }
//   )
// }

// init('formjs')
