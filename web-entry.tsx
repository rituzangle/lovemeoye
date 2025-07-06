import { registerRootComponent } from 'expo';
import App from './App';

registerRootComponent(App);
// web-entry.tsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const root = createRoot(document.getElementById('root')!);
root.render(<App />);
