import img2 from 'assets/copy-cat/2-1.png';
import img3 from 'assets/copy-cat/2-2.png';
import img4 from 'assets/copy-cat/2-3.png';
import img5 from 'assets/copy-cat/2-4.png';
import img6 from 'assets/copy-cat/2-5.png';
import img7 from 'assets/copy-cat/2-6.png';
import img8 from 'assets/copy-cat/2-7.png';
import img9 from 'assets/copy-cat/2-8.png';
import img10 from 'assets/copy-cat/2-9.png';
import img11 from 'assets/copy-cat/2-10.png';
import img12 from 'assets/copy-cat/2-11.png';
import img13 from 'assets/copy-cat/2-12.png';
import img14 from 'assets/copy-cat/2-13.png';
import img15 from 'assets/copy-cat/2-14.png';
import img16 from 'assets/copy-cat/2-15.png';
import img1 from 'assets/copy-cat/2.png';
import { ReactComponent as Top } from 'assets/top.svg';
import { MdOutlineClose } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { tw } from 'twind';

function CopyCat() {
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
        <img src={img10} alt="img1" loading="lazy" />
        <img src={img11} alt="img1" loading="lazy" />
        <img src={img12} alt="img1" loading="lazy" />
        <img src={img13} alt="img1" loading="lazy" />
        <img src={img14} alt="img1" loading="lazy" />
        <img src={img15} alt="img1" loading="lazy" />
        <img src={img16} alt="img1" loading="lazy" />
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

export default CopyCat;
