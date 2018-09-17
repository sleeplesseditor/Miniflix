import React from 'react';
import ReactDOM from 'react-dom';
import Upload from './components/Upload';
import Display from './components/Display';
import Callback from './components/Callback';
import registerServiceWorker from './registerServiceWorker';
import { Route, BrowserRouter } from 'react-router-dom';
import { requireAuth } from './utils/AuthService';

const Root = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <div>
          <Route path="/" component={Display}/>
          <Route path="/upload" component={Upload} onEnter={requireAuth} />
          <Route path="/callback" component={Callback} />
        </div>
      </BrowserRouter>
    </div>
  )
}

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();