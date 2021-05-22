import React from 'react';
import { gql, useQuery, ApolloError } from '@apollo/client';

const USER = gql`
  query CurrentUser {
    currentUser {
      id
      username
      units
      name
    }
  }
`;

export default function Dashboard() {
  const [error, setError] = React.useState<ApolloError | null>(null);
  const { data: userData, loading: userLoading, error: userError } = useQuery(USER,{onError: e=>setError(e)});
  return <p>dashboard</p>
}
