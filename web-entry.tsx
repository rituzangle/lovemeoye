import { registerRootComponent } from 'expo';
import App from './src/App';
import React from 'react';
import { createRoot } from 'react-dom/client';

registerRootComponent(App);

const root = createRoot(document.getElementById('root')!);
root.render(<App />);
