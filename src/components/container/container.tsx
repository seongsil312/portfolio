import { Outlet } from 'react-router-dom';
import { tw } from 'twind';

function Container() {
  return (
    <div className={tw`w-full h-screen`}>
      <div className={tw`h-full relative`}>
        <Outlet />
      </div>
    </div>
  );
}

export default Container;
