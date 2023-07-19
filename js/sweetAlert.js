// (function () {
//   emailjs.init(process.env.EMAIL_KEY);
// })();
// console.log('process');
// window.onload = function () {
//   document
//     .getElementById('email-form')
//     .addEventListener('submit', function (event) {
//       event.preventDefault();
//       this.contact_number.value = (Math.random() * 100000) | 0;

//       emailjs.sendForm('service_n31wb6h', 'template_9tdszj7', this).then(
//         function () {
//           console.log('SUCCESS!');
//           Swal.fire({
//             position: 'center',
//             icon: 'success',
//             title: 'Message sent!',
//             showConfirmButton: false,
//             timer: 1600,
//           }).then(function () {
//             document.getElementById('email-form').reset();
//           });
//         },
//         function (error) {
//           console.log('FAILED...', error);
//           Swal.fire({
//             position: 'center',
//             icon: 'error',
//             title: 'Please try again',
//             showConfirmButton: true,
//             timer: 5000,
//           });
//         }
//       );
//     });
// };
