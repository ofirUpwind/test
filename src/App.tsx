import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { S3 } from 'aws-sdk';

function App() {
  const s3 = new S3({
    // accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
    // secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
    // sessionToken: process.env.REACT_APP_AWS_SESSION_TOKEN,
    region: 'us-east-1'
});
  useEffect(() => {
    s3.getObject(
      { Bucket: 'ofirtest1', Key: 'snooze_config.json' },
      (err, data) => {
        if (err) {
          console.log(err, err.stack); // an error occurred
        } else if (data.Body) {
          // Make sure data.Body is not undefined
          const objectData = data.Body.toString('utf-8'); // Assuming utf-8 encoding
          console.log(objectData);
        }
      }
    );
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.

        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
