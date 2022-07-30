import img2 from 'assets/joongang/3-1.png';
import img3 from 'assets/joongang/3-2.png';
import img4 from 'assets/joongang/3-3.png';
import img5 from 'assets/joongang/3-4.png';
import img6 from 'assets/joongang/3-5.png';
import img7 from 'assets/joongang/3-6.png';
import img8 from 'assets/joongang/3-7.png';
import img9 from 'assets/joongang/3-8.png';
import img1 from 'assets/joongang/3.png';
import { ReactComponent as Top } from 'assets/top.svg';
import { MdOutlineClose } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { tw } from 'twind';

function Joongang() {
  const navigate = useNavigate();

  return (
    <div>
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
        <img src={img6} alt="img1" loading="lazy" />
        <img src={img7} alt="img1" loading="lazy" />
        <img src={img8} alt="img1" loading="lazy" />
        <img src={img9} alt="img1" loading="lazy" />
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

export default Joongang;
