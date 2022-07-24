import {gql} from 'graphql-request';
import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {client} from '../gqlClient';
import {Exercise} from '../models/Workout/Exercise';

export const useExercises = (): Exercise[] => {
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    client
      .request(
        gql`
          query {
            exercise {
              id
              name
            }
          }
        `,
        {},
        {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      )
      .then((data) => setExercises(data.exercise))
      .catch(() => navigate('/login'));
  }, [navigate]);

  return exercises;
};
