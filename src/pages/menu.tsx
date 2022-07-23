import { ReactComponent as AboutFillIcon } from 'assets/about-icon-fill.svg';
import { ReactComponent as AboutIcon } from 'assets/about-icon.svg';
import { ReactComponent as ProjectFillIcon } from 'assets/project-icon-fill.svg';
import { ReactComponent as ProjectIcon } from 'assets/project-icon.svg';
import { useState } from 'react';
import { MdOutlineClose } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { tw } from 'twind';

function Menu() {
  const navigate = useNavigate();
  const [isActiveProjectIcon, setIsActiveProjectIcon] = useState(false);
  const [isActiveAboutIcon, setIsActiveAboutIcon] = useState(false);

  const renderProjectIcon = () => {
    if (isActiveProjectIcon) {
      return <ProjectFillIcon className={tw`cursor-pointer`} />;
    }

    return <ProjectIcon className={tw`cursor-pointer`} />;
  };

  const renderAboutIcon = () => {
    if (isActiveAboutIcon) {
      return <AboutFillIcon className={tw`cursor-pointer`} />;
    }

    return <AboutIcon className={tw`cursor-pointer`} />;
  };

  return (
    <>
      <header className={tw`py-6 absolute right-0`}>
        <MdOutlineClose
          className={tw`w-6 h-6 cursor-pointer`}
          onClick={() => navigate('/')}
        />
      </header>
      <section className={tw`h-full flex justify-between items-center px-40`}>
        <i
          onClick={() => navigate('/main')}
          onMouseEnter={() => {
            setIsActiveProjectIcon(true);
          }}
          onMouseLeave={() => {
            setIsActiveProjectIcon(false);
          }}
        >
          {renderProjectIcon()}
        </i>
        <i
          onClick={() => navigate('/about')}
          onMouseEnter={() => {
            setIsActiveAboutIcon(true);
          }}
          onMouseLeave={() => {
            setIsActiveAboutIcon(false);
          }}
        >
          {renderAboutIcon()}
        </i>
      </section>
      <hr className={tw`fixed w-full left-0 top-1/2`} />
    </>
  );
}

export default Menu;
