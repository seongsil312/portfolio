import img2 from 'assets/chungjungwon/4-1.png';
import img3 from 'assets/chungjungwon/4-2.png';
import img4 from 'assets/chungjungwon/4-3.png';
import img5 from 'assets/chungjungwon/4-4.png';
import img1 from 'assets/chungjungwon/4.png';
import { ReactComponent as Top } from 'assets/top.svg';
import { MdOutlineClose } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { tw } from 'twind';

function Chungjungwon() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <header
        className={tw`w-full py-6 absolute flex justify-center items-center fixed cursor-pointer closeHeader`}
        onClick={() => navigate(-1)}
      >
        <MdOutlineClose className={tw`w-3.5 h-3.5 mr-1`} />
        <span>close</span>
      </header>
      <section>
        <img src={img1} alt="img1" loading="lazy" />
        <img src={img2} alt="img1" loading="lazy" />
        <img src={img3} alt="img1" loading="lazy" />
        <img src={img4} alt="img1" loading="lazy" />
        <img src={img5} alt="img1" loading="lazy" />
      </section>
      <i
        className="top-icon"
        onClick={() => {
          window.scroll({
            top: 0,
            behavior: 'smooth',
          });
        }}
      >
        <Top />
      </i>
    </div>
  );
}

export default Chungjungwon;
