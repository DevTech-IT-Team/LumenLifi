import '../assets/styles/global.css';
import { AppProvider } from '../context/content';

export default function App({ Component, pageProps }) {
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  );
}
