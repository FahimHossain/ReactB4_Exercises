getCustomer(1, (customer) => {
    console.log('customer: ', customer);
    if (customer.isPremium) {
      console.log('Top Movies: ', movies);
      sendEmail(customer.email, movies, () => {
        console.log('Email sent...');
      })
    }
   });
  
function getCustomer(id, callback) {
    setTimeout(() => {
        callback({
        id: 1,
        name: 'Iqbal',
        isPremium: true,
        email: 'email'
        });
    }, 4000);
}

function getTopMovies(callback) {
    setTimeout(() => {
        callback(['movie1', 'movie2']);
    }, 3000)
}

function sendEmail(callback) {
    setTimeout(() => {
        callback();
    })
}