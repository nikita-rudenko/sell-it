import axios from 'axios';

export default {
  setupInterceptors: (store, history) => {
    axios.interceptors.response.use(
      response => {
        return response;
      },
      error => {
        if (error.response.status === 401) {
          console.log('Not authorized!');
          //   store.dispatch(logoutUser());
        }

        if (error.response.status === 404) {
          history.push('/default');
        }

        return Promise.reject(error);
      }
    );
  }
};
