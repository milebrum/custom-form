import React from 'react';
import Layout from './components/Layout/Layout';
import Config from './views/Config/Config';
import Display from './views/Display/Display';

const App: React.FC<{}> = () => (
  <Layout>
    <Config />
    <Display />
  </Layout>
);

export default App;
