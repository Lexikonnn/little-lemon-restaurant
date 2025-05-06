import { Helmet } from 'react-helmet';

function App() {
  return (
    <>
      <Helmet>
        <meta name="description" content="Best and cozy family restaurant in city, best prices." />
        <meta property="og:title" content="Wonderful family Little Lemon restaurant" />
        <meta property="og:description" content="Best and cozy family restaurant in city, best prices and service." />
      </Helmet>
    </>
  );
}

export default App;
