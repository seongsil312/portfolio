import ContactMe from 'components/contact-me';
import Header from 'components/header';
import { useState } from 'react';
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { tw } from 'twind';

function getImageUrl(name: string) {
  return new URL(`../assets/${name}.png`, import.meta.url).href;
}

const changeBackgroundImage = (imageName: string) => ({
  backgroundImage: `url(${getImageUrl(imageName)})`,
});

const pageUrlList = [
  {
    url: '/dental',
    imageName: 'dental-bg',
  },
  {
    url: '/copy-cat',
    imageName: 'copy-cat-bg',
  },
  {
    url: '/joongang',
    imageName: 'joongang-bg',
  },
  {
    url: '/chungjungwon',
    imageName: 'chungjungwon-bg',
  },
];

function Main() {
  const navigate = useNavigate();
  const [pageIndex, setPageIndex] = useState(0);

  const onPrevPage = () => {
    setPageIndex((prev) => {
      const prevIndex = prev - 1;

      if (prev - 1 < 0) {
        return prevIndex + pageUrlList.length;
      }
      return prevIndex % 4;
    });
  };

  const onNextPage = () => {
    setPageIndex((prev) => (prev + 1) % 4);
  };

  return (
    <div className={tw`relative flex justify-between`}>
      <div
        className={tw`w-full h-screen bg(contain no-repeat)`}
        style={changeBackgroundImage(pageUrlList[pageIndex].imageName)}
      >
        <div className={tw`mx-80`}>
          <Header />
          <div className={tw`pt-[30rem]`}>
            <div
              className={tw`w-max border-1 py-4 px-16 cursor-pointer`}
              onClick={() => navigate(pageUrlList[pageIndex].url)}
            >
              View Project Details
            </div>
          </div>
          <footer className={tw`absolute bottom-0 mb-16`}>
            <ContactMe />
          </footer>
        </div>
      </div>
      <div className={tw`absolute flex justify-between w-full top-1/2 px-60`}>
        <MdArrowBackIosNew
          className={tw`text-5xl cursor-pointer`}
          onClick={onPrevPage}
        />
        <MdArrowForwardIos
          className={tw`text-5xl cursor-pointer`}
          onClick={onNextPage}
        />
      </div>
    </div>
  );
}

export default Main;
