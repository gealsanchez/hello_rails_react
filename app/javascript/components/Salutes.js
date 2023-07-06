import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSalutes } from '../redux/salutes/saluteSlice';

const Salutes = () => {
  const dispatch = useDispatch();
  const { loading, salute, error } = useSelector((state) => state.salutes);

  useEffect(() => {
    dispatch(fetchSalutes());
  }, [dispatch]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{ error }</p>;
  }

  return (
    <p>{ salute }</p>
  );
};

export default Salutes;
