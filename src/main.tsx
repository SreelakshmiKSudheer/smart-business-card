import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// --- RESTORE saved admin colors from localStorage on load/refresh ---
const savedBg = localStorage.getItem('admin-theme-bg');
const savedDominant = localStorage.getItem('admin-theme-dominant');
const savedSecondary = localStorage.getItem('admin-theme-secondary');

if (savedBg) {
  document.documentElement.style.setProperty('--bg', savedBg);
}
if (savedDominant) {
  document.documentElement.style.setProperty('--dominant', savedDominant);
  // Optional: Update the dominant-alt color dynamically with a fallback alpha transparency
  document.documentElement.style.setProperty('--dominant-alt', `${savedDominant}CC`);
}
if (savedSecondary) {
  document.documentElement.style.setProperty('--secondary', savedSecondary);
}
// -------------------------------------------------------------------

createRoot(document.getElementById('root')!).render(
  <App />
);