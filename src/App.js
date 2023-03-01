import './App.css';
import Nav from './components/Nav';
import TransactionList from './components/TransactionList';
import Distribution from './components/Distribution';
import Spending from './components/Spending';
import YearMonthSelector from './components/YearMonthSelector';

function App() {
  return (
    <div>
      <Nav heading="Accounts"/>
      <YearMonthSelector />
      <Distribution />
      <Spending />
      <TransactionList />
    </div>
  );
}

export default App;
