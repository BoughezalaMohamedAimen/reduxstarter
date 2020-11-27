import './css/styles.css';
import { useSelector } from 'react-redux';

import Counter from './components/counter'
function App() {
  return (
    <div className="App">
      { (useSelector(state => state.sessions.isLoggedIn)) ? <h1>authenticated welcome</h1> : <h1> not authenticated</h1>}
      <Counter/>
    </div>
  );
}

export default App;
