import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';

// Pages
import PageApp from './pages/App';

// Styles
import './index.css';

function EntryApp() {
    return (
        <Provider store={store}>
            <PageApp />
        </Provider>
    )
}

const renderApp = () => {
    return ReactDOM.render(<EntryApp />, document.getElementById('root'));
}

if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./pages/App', renderApp)
}

renderApp();
