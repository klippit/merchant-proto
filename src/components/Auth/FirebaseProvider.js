import 'firebase/auth';
import 'firebase/firestore';
import PropTypes from 'prop-types';
import firebase from 'firebase/app';
import { store } from 'src/redux/store';
import useAuth from 'src/hooks/useAuth';
import React, { useEffect } from 'react';
import { firebaseConfig } from 'src/config';
import { createFirestoreInstance } from 'redux-firestore';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';

// ----------------------------------------------------------------------

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
  firebase.firestore();
}

const rrfProps = {
  firebase,
  config: {
    userProfile: 'users',
    useFirestoreForProfile: true
  },
  dispatch: store.dispatch,
  createFirestoreInstance
};

const ADMIN_EMAILS = ['demo@minimals.cc'];

// ----------------------------------------------------------------------

FirebaseProvider.propTypes = {
  children: PropTypes.node
};

function FirebaseProvider({ children }) {
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    const getInitialize = async () => {
      try {
        firebase.auth().onAuthStateChanged((user) => {
          if (user && isAuthenticated) {
            firebase
              .firestore()
              .collection('users')
              .doc(user.uid)
              .set(
                {
                  role: ADMIN_EMAILS.includes(user.email) ? 'admin' : 'user'
                },
                { merge: true }
              );
          }
        });
      } catch (error) {
        console.error(error);
      }
    };

    getInitialize();
  }, [isAuthenticated]);

  return (
    <ReactReduxFirebaseProvider {...rrfProps}>
      {children}
    </ReactReduxFirebaseProvider>
  );
}

export default FirebaseProvider;
