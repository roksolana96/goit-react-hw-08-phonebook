import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { persistor, store } from './redux/store';
import { Provider } from 'react-redux';

import './index.css';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="/goit-react-hw-08-phonebook">
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);


// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { App } from 'components/App';
// import './index.css';

// import { store } from './redux/store'
// import { Provider } from 'react-redux'
// // import { persistor } from './redux/store'
// // import { PersistGate } from 'redux-persist/integration/react';

// ReactDOM.createRoot(document.getElementById('root')).render(
  
//   <React.StrictMode>
//     <Provider store={store}>
//       {/* <PersistGate persistor={persistor}> */}
//         <App />
//       {/* </PersistGate> */}
//     </Provider>
//   </React.StrictMode>
// );  