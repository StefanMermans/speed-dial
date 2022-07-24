import React from 'react';
import {useExercises} from '../../../hooks/useExercises';

export const ExerciseIndex: React.FC = () => {
  const exercises = useExercises();

  console.log('exercises', exercises);

  return (
    <div className='page'>
      <div className='page-content'>Exercise index</div>
    </div>
  );
};
