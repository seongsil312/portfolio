import hambergerUrl from 'assets/hamberger.png';
import { useNavigate } from 'react-router-dom';
import { tw } from 'twind';

const HeaderFontStyle = tw`text-xl font-semibold`;

function Header() {
  const navigate = useNavigate();

  return (
    <header className={tw`flex justify-between items-center py-6`}>
      <div>
        <h3 className={HeaderFontStyle}>Seongsil Folio</h3>
        <h3 className={HeaderFontStyle}>UI Designer</h3>
      </div>
      <div className={tw`cursor-pointer`} onClick={() => navigate('/menu')}>
        <img src={hambergerUrl} alt="menu icon" />
      </div>
    </header>
  );
}

export default Header;
