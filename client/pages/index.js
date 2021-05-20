// import axios from 'axios';
// import buildClient from '../api/build-client';
import Link from 'next/link';

const LandingPage = ({ currentUser, tickets }) => {
  const ticketList = tickets.map((ticket) => {
    return (
      <tr key={ticket.id}>
        <td>{ticket.title}</td>
        <td>{ticket.price}</td>
        <td>
          <Link href="/tickets/[ticketId]" as={`/tickets/${ticket.id}`}>
            <a>View</a>
          </Link>
        </td>
      </tr>
    );
  });
  // axios.get('/api/users/currentuser');

  // return currentUser ? (
  //   <h1>You are signed in</h1>
  // ) : (
  //   <h1>You are NOT signed in</h1>
  // );
  return (
    <div>
      <h1>Tickets</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Price</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>{ticketList}</tbody>
      </table>
    </div>
  );
};

LandingPage.getInitialProps = async (context, client, currentUser) => {
  const { data } = await client.get('/api/tickets');
  // console.log(req.headers);
  // // const response = await axios.get(
  // //   'http://ticketing.dev/api/users/currentuser'
  // // );

  // // return response.data;
  // if (typeof window === 'undefined') {
  //   // we are on the server!
  //   //requests should be made to http://ingress-nginx.ingress-nginx....
  //   const { data } = await axios.get(
  //     // 'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local/api/users/currentuser',
  //     'http://ticketing.dev/api/users/currentuser',
  //     {
  //       headers: req.headers,
  //       // {
  //       //   Host: 'ticketing.dev',
  //       // },
  //     }
  //   );

  //   return data;
  // } else {
  //   // we are on the browser!
  //   // requests can be made with a base url of ''
  //   const { data } = await axios.get('/api/users/currentuser');

  //   return data;
  // }
  // return {};

  // const client = await buildClient(context);

  // const { data } = await client.get('/api/users/currentuser');

  // return data;
  return { tickets: data };
};

export default LandingPage;
