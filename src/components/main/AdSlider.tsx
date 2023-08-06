import React from 'react'
import Slider from 'react-slick'

const AdSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // 각 슬라이드 사이의 대기 시간 (ms)
  }

  return (
    <div className="mt-4">
      <Slider {...settings}>
        <div>
          <img src="../../../public/1.jpg" alt="Ad 1" className="w-full" />
        </div>
        <div>
          <img src="../../../public/1.jpg" alt="Ad 2" className="w-full" />
        </div>
        {/* 추가 광고 이미지를 위한 div 요소를 반복하여 추가 */}
      </Slider>
    </div>
  )
}

export default AdSlider
