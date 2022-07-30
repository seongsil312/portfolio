import profileFooter from 'assets/about/foot-img.png';
import profileSecond from 'assets/about/second-img.png';
import profileTop from 'assets/about/top-img.png';
import profileText from 'assets/about/txt.png';
import { MdOutlineClose } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { tw } from 'twind';

function About() {
  const navigate = useNavigate();

  return (
    <>
      <header
        className={tw`w-full py-6 absolute flex justify-center fixed items-center cursor-pointer closeHeader`}
        onClick={() => navigate('/')}
      >
        <MdOutlineClose className={tw`w-3.5 h-3.5 mr-1`} />
        <span>close</span>
      </header>
      <section className={tw`h-full`}>
        <div>
          <img src={profileTop} alt="profile-top" />
        </div>
        <div className="profile-middle-container">
          <div className="profile-second">
            <img src={profileSecond} alt="profile-second" />
          </div>
          <div className="profile-text">
            <img
              className="profile-text-img"
              src={profileText}
              alt="profile-text"
            />
          </div>
        </div>
        <div className="profile-footer">
          <img src={profileFooter} alt="profile-footer" />
        </div>
      </section>
    </>
  );
}

export default About;
