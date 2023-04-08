function init(formID) {
  const form = document.getElementById(formID)
  if (!form) {
    console.log('Form not found')
    return
  }
  console.log('Form Found')

  form.addEventListener('submit', (event) => {
    event.preventDefault()
    sendMail(form)
  })
}

function sendMail(form) {
  console.log('sendMail()')
  emailjs.sendForm('default_service', 'template_j9drx49', form, 'OfCYmZsIy-mQT7yaE').then(
    (res) => {
      console.log('res', res)
    },
    (err) => {
      console.log('err', err)
    }
  )
}

init('formjs')
