// /* eslint-disable no-console */
// import { getToken } from './utils/helpers';
// import store from './redux/store';
// import { actions } from './auth/slice';

// const checkAuthenticated = () =>
//   new Promise((resolve, reject) => {
//     console.log('%c Checking authenticated...', 'color: blue; font-weight: bold;');
//     try {
//       const token = getToken();
//       if (token) {
//         store.dispatch(actions.checkAuth.request());
//         store.subscribe(() => {
//           const authenticated = store.getState(state => state.auth.authenticated);
//           if (authenticated) {
//             resolve(true);
//           }
//         });
//       } else {
//         resolve(false);
//       }
//     } catch (error) {
//       reject(error);
//     }
//   });

// export default function intialBoot() {
//   console.log('%c Initial boot app...', 'color: blue; font-weight: bold;');
//   let status = 'pending';
//   let error;
//   let authenticated;
//   const suspender = checkAuthenticated().then(
//     data => {
//       status = 'success';
//       authenticated = data;
//       console.log('%c Boot app success!', 'color: green; font-weight: bold;');
//     },
//     err => {
//       status = 'error';
//       error = err;
//       console.log('%c Boot app error!', 'color: red; font-weight: bold;');
//     },
//   );
//   return {
//     // eslint-disable-next-line consistent-return
//     booting: () => {
//       if (status === 'pending') {
//         throw suspender;
//       } else if (status === 'error') {
//         throw error;
//       } else if (status === 'success') {
//         return authenticated;
//       }
//     },
//   };
// }
