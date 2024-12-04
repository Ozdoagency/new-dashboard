import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import MetricsDashboard from './components/MetricsDashboard'

function App() {
  return (
    <div className="App">
      <MetricsDashboard />
    </div>
  )
}

export default App

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);