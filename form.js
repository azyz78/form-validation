let username = document.querySelector('#username')
let address = document.querySelector('#address')
let email = document.querySelector('#email')
let password = document.querySelector('#password')
let comment = document.querySelector('#comment')

let sendBtn = document.querySelector('.send-btn')

sendBtn.addEventListener('click', function(e){
    e.preventDefault()
    if(username.value === '' || address.value === '' || email.value === '' || password.value === '' || comment.value === ''){
        alert('All fields are required')
    }
    if(!(password.value.match(/[a-zA-Z]{8,}/))){
        alert('The password must have at least 8 characters')
    }
    if(!(email.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/))) {
        alert('You have entered an invalid email address!')
    }
})
