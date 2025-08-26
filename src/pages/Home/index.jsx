import { Link } from 'react-router-dom';

import MainSectionImg from '@/assets/imgs/Img_home_01.png';
import MainSectionImg2 from '@/assets/imgs/Img_home_02.png';
import MainSectionImg3 from '@/assets/imgs/Img_home_03.png';
import HomeBottomImg from '@/assets/imgs/Img_home_bottom.png';
import HomeTopImg from '@/assets/imgs/Img_home_top.png';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <>
      <main>
        <section className='section-blue'>
          <div className='section-blue__container'>
            <div className='section-blue__info'>
              <h1 className='section-blue__title'>
                일상의 모든 물건을 거래해 보세요
              </h1>
              <Link
                className='section-blue__btn'
                to='items'
                aria-label='거래 화면으로 이동'
              >
                구경하러 가기
              </Link>
            </div>
            <img
              className='section-blue__img'
              src={HomeTopImg}
              alt='판다가 인사하는 그림'
            />
          </div>
        </section>
        <section className='section-main'>
          <div className='section-main__wrapper'>
            <img
              className='section-main__img'
              src={MainSectionImg}
              alt='판다가 쇼핑하는 그림'
            />
            <div className='section-main__container'>
              <div className='section-main__hot-badge'>Hot item</div>
              <h2 className='section-main__title'>인기 상품을 확인해 보세요</h2>
              <div className='section-main-description'>
                가장 HOT한 중고거래 물품을
                <br />
                판다 마켓에서 확인해 보세요
              </div>
            </div>
          </div>
        </section>
        <section className='section-main'>
          <div className='section-main__wrapper section-main__wrapper__reverse'>
            <div className='section-main__container'>
              <div className='section-main__hot-badge'>Search</div>
              <h2 className='section-main__title'>
                구매를 원하는 상품을 검색하세요
              </h2>
              <div className='section-main-description'>
                구매하고 싶은 물품은 검색해서
                <br />
                쉽게 찾아보세요
              </div>
            </div>
            <img
              className='section-main__img'
              src={MainSectionImg2}
              alt='상품을 돋보기로 찾는 그림'
            />
          </div>
        </section>
        <section className='section-main'>
          <div className='section-main__wrapper'>
            <img
              className='section-main__img'
              src={MainSectionImg3}
              alt='컴퓨터 폴더에서 상품 이미지를 등록하는 그림'
            />
            <div className='section-main__container'>
              <div className='section-main__hot-badge'>Register</div>
              <h2 className='section-main__title'>
                판매를 원하는 상품을 등록하세요
              </h2>
              <div className='section-main-description'>
                어떤 물건이든 판매하고 싶은 상품을
                <br />
                쉽게 등록하세요
              </div>
            </div>
          </div>
        </section>
        <section className='section-blue'>
          <div className='section-blue__container'>
            <div className='section-blue__info__bottom'>
              <h1 className='section-blue__title'>
                믿을 수 있는 판다마켓 중고 거래
              </h1>
            </div>
            <img
              className='section-blue__img'
              src={HomeBottomImg}
              alt='두 판다가 서로 인사하는 그림'
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
