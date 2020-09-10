// import { useDispatch, useSelector } from 'react-redux';
// import { useIntl } from 'react-intl';
// import { useHistory } from 'react-router-dom';

function useSignInEnhance() {
  // const intl = useIntl();
  // const history = useHistory();
  // const dispatch = useDispatch();

  // const loading = useSelector(makeSelectloading());

  const signInHandler = data => {
    console.log(data);
  };

  // eslint-disable-next-line no-undef
  return { loading, signInHandler };
}

export default useSignInEnhance;
