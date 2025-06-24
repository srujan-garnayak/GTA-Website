import './App.css'
import GamingClubStats from './components/Stats';
import TeamLeads from './components/Teams'
import 'pace-js';
import 'pace-js/themes/blue/pace-theme-minimal.css'; // or any theme you like


function App() {

  return (
    <div>
      <GamingClubStats />
      <TeamLeads />
    </div>
  )
}

export default App
