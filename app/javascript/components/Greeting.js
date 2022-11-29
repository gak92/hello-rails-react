import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGreeting } from '../redux/actions';

const Greeting = () => {
  const dispatch = useDispatch();
  const greeting = useSelector((state) => state.greetingReducer);

  useEffect(() => {
    dispatch(getGreeting());
  }, []);

  return (
    <>
      <h3>Random Greeting</h3>
      <ul>
        <li>{greeting.message}</li>
      </ul>
    </>
  );
};

export default Greeting;
