let buttonEl = document.getElementById('test-button');

let formEl = document.getElementById('new-cookie-form');

function handleClick() {
    console.log("click has occured!!!");
}

buttonEl.addEventListener('click', handleClick);

formEl.addEventListener('submit', function (submit) {
    submit.preventDefault();
    console.log("USER NUMBER on submit", submit.target.number_value.value);
    console.log("USER DATE on submit", submit.target.date_user_input.value);
    console.log("USERNAME on submit", submit.target.username_text.value);
    console.log("USER EMAIL on submit", submit.target.email_text.value);
});

formEl.addEventListener('submit', function (event) {
    event.preventDefault();
    console.log('Some submit occurred!');
    console.log(event.target.number_value);
    let numberValue = event.target.number_value.value;
    console.log(numberValue);
})