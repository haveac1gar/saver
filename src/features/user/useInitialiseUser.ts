import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';

import { firebaseAuth, signIn } from '../../core';
import { useSetUID, useUID } from './state';

export const useInitialiseUser = () => {
  const uid = useUID(),
    setUID = useSetUID();

  useEffect(() => {
    if (uid) {
      return;
    }

    signIn();
  }, [uid]);

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, user => {
      setUID(user?.uid ?? null);
    });
  }, [setUID]);
};
