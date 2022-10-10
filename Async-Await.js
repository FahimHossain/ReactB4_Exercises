async function getData() {
  try {
    const response = await getCustomer();
    console.log(response);

    const getTopMoviess = await getTopMovies(response);
    console.log(getTopMoviess);

    const sendMail = await sendEmail(response.email)
    console.log(sendMail)
  }
  catch(err) {
    console.log(err)
  }
}

getData();

function getCustomer() {
  return new Promise ((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: 1,
        name: 'Iqbal',
        isPremium: true,
        email: 'iqbal@email.com'
      });
    }, 1000);
  })
}

function getTopMovies(customer) {
  return new Promise ((resolve, reject) => {
    setTimeout(() => {
      if (customer.isPremium) {
        console.log('Top Movies: ');
      resolve(['movie1', 'movie2']);
      }
      else {
        reject("Customer requires premium to view Top Movies")
      }
    }, 2000)
  })
}

function sendEmail(email) {
  return new Promise ((resolve, reject) => {
  setTimeout(() => {
    resolve('Movie ticket sent to ' + email);
  }, 3000)
})
} 
