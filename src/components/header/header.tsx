import hambergerUrl from 'assets/hamberger.png';
import { useNavigate } from 'react-router-dom';
import { tw } from 'twind';

const HeaderFontStyle = tw`text-xl font-semibold cursor-pointer`;

function Header() {
  const navigate = useNavigate();

  return (
    <header className={tw`flex justify-between items-center py-6 relative`}>
      <div>
        <h3 className={HeaderFontStyle} onClick={() => navigate('/')}>
          Seongsil Folio <br /> UI/UX Designer
        </h3>
      </div>
      <div className={tw`cursor-pointer`} onClick={() => navigate('/menu')}>
        <img src={hambergerUrl} alt="menu icon" />
      </div>
    </header>
  );
}

export default Header;
