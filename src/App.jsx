import { createRoot } from 'react-dom/client';

import Pet from './Pet';

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet animal="dog" name="Luna" breed="Havanese" />
      <Pet animal="bird" name="Pepper" breed="Cockatiel" />
      <Pet animal="cat" name="Doink" breed="Mixed" />
    </div>
  );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
