
import React from 'react';
import Component from './component';

const App = () => {
    const data = [/* ...данные... */];
    const startIdx = 0;
    const endIdx = 10;

    return (
        <div className="App">
            <Component data={data} startIdx={startIdx} endIdx={endIdx} />
        </div>
    );
}

export default App;