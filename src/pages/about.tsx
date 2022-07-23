import profileLeftUrl from 'assets/profile-left.png';
import profileRightUrl from 'assets/profile-right.png';
import { MdOutlineClose } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { tw } from 'twind';

function About() {
  const navigate = useNavigate();

  return (
    <>
      <header
        className={tw`w-full py-6 absolute flex justify-center items-center cursor-pointer`}
        onClick={() => navigate('/')}
      >
        <MdOutlineClose className={tw`w-3.5 h-3.5 mr-1`} />
        <span>close</span>
      </header>
      <section className={tw`h-full flex justify-between items-center`}>
        <div>
          <img src={profileLeftUrl} alt="profile-left" />
        </div>
        <div className={tw`max-h-[765px] overflow-y-scroll`}>
          <img src={profileRightUrl} alt="profile-right" />
        </div>
      </section>
    </>
  );
}

export default About;
