import {GraphQLClient} from 'graphql-request';

export const client = new GraphQLClient(
  `${process.env.REACT_APP_BACKEND_URL}/api/graphql`,
  {
    // headers: {
    //   "Authorization": `Bearer ${localStorage.getItem('token')}`
    // }
  },
);
