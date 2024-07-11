import axios from 'axios';

const apiUrl = 'https://api.realworld.io/api';

export const registerUser = (username, email, password) => {
  axios
    .post(`${apiUrl}/users`, {
      user: {
        username,
        email,
        password,
      },
    })
    .then((response) => {
      const dataUser = response.data;
      console.log(dataUser);
    })
    .catch((err) => {
      if (err.response.status === 422) {
        console.log('Такой аккаунт уже существует!');
      } else {
        console.log(err.message);
      }
    });
};
