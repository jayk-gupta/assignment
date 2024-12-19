import styles from "./App.module.css"
import LeaderBoard from './components/Leaderboard/LeaderBoard'
import MetricsDetails from './components/Metrics Details/MetricsDetails'
import TradingLog from './components/Trading log/TradingLog'
import { useEffect, useState } from "react";
import userData from "./data/users/data.json";

function App() {
  const [selectedTrader, setSelectedTrader] = useState<any>(null); // Holds the selected trader

  // Set the default trader to Rank 1
  useEffect(() => {
     setSelectedTrader(userData.users[0]);
  },[])
 
   const handleTraderSelect = (trader: any) => {
     setSelectedTrader(trader); // Update selected trader
   };
  
  return (
    <div className={styles.container}>
      <h1 className={styles.title }>FunderPro Leaderboard</h1>
      <main className={styles.main }>
        <div className={styles.flexLayout}>
          <LeaderBoard onTraderSelect={handleTraderSelect} />
          <MetricsDetails selectedTrader={selectedTrader} />
        </div>
        <div className="">
          <TradingLog selectedTrader={selectedTrader} />
        </div>
      </main>
    </div>
  );
}

export default App