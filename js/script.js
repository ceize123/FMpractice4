
//因為區域變數的關係，如果把變數擺在function外面就無法取得它輸入的value。

// const email = document.getElementById("inputEmail").value;
// const submit = document.querySelector('.inputSubmit');
// const errorElement = document.querySelector('.error');
// const array = ['@', '.com']

// submit.addEventListener('click', function(){
//   alert(email);
  // if ( array.some(el => email.includes(el)) ) {
  //   errorElement.append('123');
  //   event.preventDefault();
  // };
// });

//
const array = ['@', '.com']

function sendError() {
  var email = document.getElementById("inputEmail").value;
    if ( !email.includes('@') || !email.includes('.com') ) {
    document.getElementById("error").innerHTML = 'Please provide a valid address';
    event.preventDefault();
  };
}
