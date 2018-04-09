axios.get('https://api.gitub.com/users/daniloagostinho')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });