import React from 'react';

interface AppProps {
  message?: string;
}

const App: React.FC<AppProps> = ({ message }) => {
  return <div>{message}</div>;
};

App.defaultProps = {
  message: 'Hello, default message!',
};

export default App;
