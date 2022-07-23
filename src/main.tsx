import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import globalStyles from 'styles/global';
import { tw } from 'twind';

import App from './App';
import './twind.config';

const rootElement = document.getElementById('root') as HTMLDivElement;
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      <div className={tw(globalStyles)}>
        <App />
      </div>
    </BrowserRouter>
  </StrictMode>,
);
