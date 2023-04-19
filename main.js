//bind to submit button
const submitButton = document.getElementById('send-email')
if (!submitButton) {
  console.warn('submit button not found')
}

const submitButtonText = document.getElementById('submit-button-text')

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

function updateSubmitButton(status) {
  submitButton.className = status

  if (status === 'pending') {
    submitButtonText.innerText = 'Sending...'
  }

  if (status === 'success') {
    submitButtonText.innerText = 'Message sent!'
  }

  if (status === 'failure') {
    submitButtonText.innerText = 'Something went wrong...'
  }
}

async function submitForm(form) {
  updateSubmitButton('pending')

  //construct the form
  const data = new FormData(form)
  data.append('service_id', 'default_service')
  data.append('template_id', 'template_j9drx49')
  data.append('user_id', 'OfCYmZsIy-mQT7yaE')
  for (const value of data.values()) {
    console.log(value)
  }

  //send the form
  try {
    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send-form', {
      method: 'POST',
      body: data,
    })
    // const response = 200
    const status = response.status

    console.log(status)

    if (status === 200) {
      updateSubmitButton('success')
      form.reset()
    } else {
      updateSubmitButton('failure')
    }
  } catch (error) {
    console.log(`fetch?: ${error}`)
  }
}
