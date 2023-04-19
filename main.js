//bind to submit button
const submitButton = document.getElementById('send-email')
if (!submitButton) {
  console.warn('submit button not found')
}

//bind to form
const form = document.getElementById('formjs')

//add form submit event listener to form
if (!form) {
  console.warn('form not found')
} else {
  form.addEventListener('submit', (event) => {
    event.preventDefault()
    // console.log(event)
    submitForm(form)
  })
}

async function submitForm(form) {
  //construct the form
  const data = new FormData(form)
  data.append('service_id', 'default_service')
  data.append('template_id', 'template_j9drx49')
  data.append('user_id', 'OfCYmZsIy-mQT7yaE')
  for (const value of data.values()) {
    console.log(value)
  }

  //send the form
  // try {
  //   const response = await fetch('https://api.emailjs.com/api/v1.0/email/send-form', {
  //     method: 'POST',
  //     body: data,
  //   })
  //
  //   console.log(response.status)
  // } catch (error) {
  //   console.log(`fetch?: ${error}`)
  // }

  const status = 200
  if (status === 200) {
    // on success, indicate to the user that the message sent was sucessful
    console.log('success')
    submitButton.style.backgroundColor = 'green'
  } else {
    // on failure (400 respose or similar), indicate to the user that the message send was a fail
    console.log('fail')
  }
}
