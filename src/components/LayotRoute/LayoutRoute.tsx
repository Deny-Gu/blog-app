import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

const LayoutRoute: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default LayoutRoute;
