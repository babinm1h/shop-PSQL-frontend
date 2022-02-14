import { observer } from 'mobx-react-lite';
import React from 'react';
import { StoreContext } from '.';
import AppRouter from './components/AppRouter/AppRouter';
import Loader from './components/Loader/Loader';
import Navbar from './components/Navbar/Navbar';

const App = observer(() => {
  const { store } = React.useContext(StoreContext)

  React.useEffect(() => {
    store.userStore.checkAuth()
    store.userStore.setLoading(false)
  }, [])

  if (store.userStore.isLoading) {
    return <div className="loader"><Loader /></div>
  }

  return (
    <div className="wrapper">
      <Navbar />
      <div className="content">
        <AppRouter />
      </div>
    </div>
  );
});

export default App;