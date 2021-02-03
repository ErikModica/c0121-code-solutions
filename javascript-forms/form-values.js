var $contactForm = document.querySelector('#contact-form');

$contactForm.addEventListener('submit', function (event) {
  event.preventDefault();

  var contactInfo = {};

  contactInfo[$contactForm[0].name] = $contactForm[0].value;

  contactInfo[$contactForm[1].name] = $contactForm[1].value;

  contactInfo[$contactForm[2].name] = $contactForm[2].value;

  $contactForm.reset();

  console.log('Form Data: ', contactInfo);

});
