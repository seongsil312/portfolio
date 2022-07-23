import arrowUrl from 'assets/arrow.png';
import rotateUrl from 'assets/rotate.png';
import ContactMe from 'components/contact-me';
import Header from 'components/header';
import { useNavigate } from 'react-router-dom';
import { tw } from 'twind';
import { animation } from 'twind/css';

const spin = animation('6s linear infinite', {
  from: {
    transform: 'rotate(0deg)',
  },
  to: {
    transform: 'rotate(360deg)',
  },
});

const BodyFontStyle = tw`text-9xl font-extrabold`;

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <Header />
      <section className={tw`py-32`}>
        <h1 className={BodyFontStyle}>2022 Ver.</h1>
        <h1 className={BodyFontStyle}>HAN SEONGSIL</h1>
        <h1 className={BodyFontStyle}>PORTFOLIO</h1>
      </section>
      <footer className={tw`flex justify-between items-end mt-12`}>
        <ContactMe />
        <div className={tw`relative`}>
          <img src={rotateUrl} alt="rotate text" className={tw`${spin}`} />
          <img
            src={arrowUrl}
            alt="arrow"
            className={tw`absolute left-1/2 top-1/2 -translate-1/2 cursor-pointer`}
            onClick={() => navigate('/main')}
          />
        </div>
      </footer>
    </div>
  );
}

export default Home;
