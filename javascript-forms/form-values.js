var $contactForm = document.querySelector('#contact-form');

$contactForm.addEventListener('submit', function (event) {
  event.preventDefault();

  var contactInfo = {};

  contactInfo[$contactForm.elements.name.name] = $contactForm.elements.name.value;

  contactInfo[$contactForm.elements.email.name] = $contactForm.elements.email.value;

  contactInfo[$contactForm.elements.message.name] = $contactForm.elements.message.value;

  $contactForm.reset();

  console.log('Form Data: ', contactInfo);

});
