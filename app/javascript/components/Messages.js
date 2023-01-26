import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreetingsAsync } from '../redux/messages/messages';

const Messages = () => {
  const dispatch = useDispatch();
  const greetings = useSelector((state) => state.message);

  useEffect(() => {
    dispatch(fetchGreetingsAsync());
  }, []);
  console.log(greetings);
  return (
    <div>
      <div>{greetings.message}</div>
    </div>
  );
};

export default Messages;
