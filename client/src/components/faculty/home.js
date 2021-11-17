import react, { useState, useEffect } from 'react';
import { validateFacultySession } from '../../services/authentication';
import Loader from '../Misc/Loader';

const FacultyHome = () => {

  const verifiySession = async () => {
    const { data } = await validateFacultySession();
    if (data.verified) {
      window.location.href = `/faculty/feed`;
    } else {
      window.location.href = `/faculty/login`;
    }
  }

  useEffect(() => {
    verifiySession();
  }, []);

  return (
    <Loader />
  );
}

export default FacultyHome;