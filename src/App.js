import 'bulma';
import Header from './component/Header';
import Banking from './component/Banking';
import Balance from './component/Balance';
import AccountType from './component/AccountType';
import Login from './component/Login';

function App() {
  return (
    <div className='section '>
      <Header />
      <Balance />
      <Banking />
      <AccountType />
      <Login />
      
    </div>
  );
}

export default App;
