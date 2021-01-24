//React
import { BrowserRouter as Router } from 'react-router-dom';

//Components
import Header from './components/header';
import Instructions from './components/instructions'

function App() {
  return (

    <div className="font-mono">
      <Router>
        <Header /> {/* has to be on every page */}
        <Instructions /> {/* only has to be on home page */}
      </Router>
    </div>

  );
};

export default App;