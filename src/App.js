// Import everything needed to use the `useQuery` hook
import { useQuery, gql } from '@apollo/client';

const GET_LOCATIONS = gql`
  query GetContactList {
    contact {
      id
      first_name
      last_name
      phones {
        number
      }
    }
  }
`;

function DisplayLocations() {
  const { loading, error, data } = useQuery(GET_LOCATIONS);

  if (loading) return <p>Loading...</p>;
  if(error){
    console.log(error);
  }
  else if(data){
    console.log(data);
  }
  // if (error) return <p>Error :(</p>;

  return data.locations.map(({ id, first_name, phone }) => (
    <div key={id}>
      <h3>{first_name}</h3>
      <br />
      <b>About this location:</b>
      <p>{phone}</p>
      <br />
    </div>
  ));
}

export default function App() {
  return (
    <div>
      <h2>My first Apollo app 🚀</h2>
      <br/>
      <DisplayLocations />
    </div>
  );
}