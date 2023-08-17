import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { SalesPost } from '../../utils/types';
import '../../app/globals.css'
import Comment from './Comment';

const style = {
  glassBg: 'bg-white backdrop-blur-md bg-opacity-60',
  glassInput: 'backdrop-blur-md bg-opacity-60 shadow-none hover:shadow-none focus:ring-0',
  glassButton: 'backdrop-blur-md bg-opacity-80 hover:bg-opacity-100 focus:ring-0',
};

interface ProductDetailPageProps {
  salesPost: SalesPost;
}

const ProductDetailForm = ({ salesPost }: ProductDetailPageProps) => {
  const [selectedOption, setSelectedOption] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [review, setReview] = useState('');
  const [question, setQuestion] = useState('');
  const [newComment, setNewComment] = useState('');
  const [commentList, setCommentList] = useState<Comment[]>([]);
  const [tags, setTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState('');
  const [category, setCategory] = useState(''); 
  const [imageInput, setImageInput] = useState<File[]>([]);


  const handleSelectOption = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(e.target.value);
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(parseInt(e.target.value));
  };

  const handleReviewChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setReview(e.target.value);
  };

  const handleQuestionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuestion(e.target.value);
  };

  const handleNewCommentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewComment(e.target.value);
  };

  const handleAddTag = () => {
    if (tagInput) setTags([...tags, tagInput]);
    setTagInput('');
  };

  const handleRemoveTag = (removeTag: string) => {
    const newTags = tags.filter(tag => tag !== removeTag);
    setTags(newTags);
  };

  const sliderSettings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };
  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
  };
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newImages = Array.from(e.target.files);
      setImageInput([...imageInput, ...newImages]);
    }
  };

  const handleRemoveImage = (removeIndex: number) => {
    setImageInput(imageInput.filter((_, index) => index !== removeIndex));
  };

   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const payload = {
      salesPostNumber: salesPost.salesPostNumber,
      pmTag: tags,
      pmCategory: category,
      pmPostTitle: salesPost.postTitle,
      pmPostWriter: salesPost.pmPostWriter,
      pmPostContents: salesPost.postContents,
      imageURLs: imageInput.map((image) => URL.createObjectURL(image)), // 이미지를 URL로 변환하여 저장
    };

    console.log('Payload to send:', payload); // 전송될 페이로드 확인

    // 서버 전송 코드 작성 (예: axios.post() 사용)
    setCommentList([
      ...commentList,
      {
        contents: newComment,
        writer: '작성자',
        dateTime: '2023-08-16',
        images: imageInput.map((image) => ({ url: URL.createObjectURL(image) })),
      },
    ]);
    setNewComment('');
    setImageInput([]); // 이미지 초기화
  };

  const handleTagInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.slice(-1) === '#') {
      handleAddTag();
    } else {
      setTagInput(value);
    }
  };

  const sliderImages = [
    { image: salesPost.mainImage },
    ...(Array.isArray(salesPost.descImages) ? salesPost.descImages : []),
  ];

  if (salesPost.result === 'success') {
    return (
      <div className="container mx-auto py-8">
        <h1 className="text-4xl mb-8 font-bold text-gray-700">{salesPost.postTitle}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Product Images Section */}
          <div className={`${style.glassBg} rounded-md shadow-md p-4`}>
            {sliderImages && (
              <Slider {...sliderSettings}>
                {sliderImages.map((image, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center h-full min-h-[300px]" // 여기에 'min-h-[300px]' 클래스 추가
                  >
                    <img
                      className="w-full h-auto object-contain rounded-md"
                      src={image.image}
                      alt={`Product Image ${index}`}
                    />
                  </div>
                ))}
              </Slider>
            )}
          </div>

          {/* Product Info Section */}
          <div className={`${style.glassBg} rounded-md shadow-md p-8`}>
            <div className="mb-4">
              <h2 className="text-2xl mb-2 font-semibold text-gray-600">상품 정보</h2>
              <p className="text-gray-700">{salesPost.postContents}</p>
            </div>

            <div className="mb-4">
              <h2 className="text-2xl mb-2 font-semibold text-gray-600">옵션 선택</h2>
              <select
                value={selectedOption}
                onChange={handleSelectOption}
                className="w-full mb-2 bg-white border border-gray-300 rounded-md text-gray-600"
              >
                <option value="">옵션을 선택하세요</option>
                {salesPost.products &&
                  salesPost.products.map((product, index) => (
                    <option
                      key={index}
                      value={product.detail}
                    >{`${product.detail} - ${product.price}원`}</option>
                  ))}
              </select>
            </div>

            <div className="mb-4">
              <h2 className="text-2xl mb-2 font-semibold text-gray-600">수량</h2>
              <input
                type="number"
                value={quantity}
                onChange={handleQuantityChange}
                min="1"
                className="w-full mb-2 bg-white border border-gray-300 rounded-md text-gray-600"
              />
            </div>

            <div className="mb-4">
              <h2 className="text-2xl mb-2 font-semibold text-gray-600">배송비</h2>
              <p className="text-gray-700">배송비는 상품을 주문할 동네에 따라 차이가 날 수 있습니다.</p>
            </div>

            <button className={`w-full py-2 mb-8 font-semibold text-white bg-blue-500 rounded-md ${style.glassButton}`}>
              상품 주문하기
            </button>
          </div>
        </div>

        {/* Questions and Reviews */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">리뷰</h2>
          <form onSubmit={handleSubmit}>
            <div className={`${style.glassBg} p-4 rounded-md shadow`}>
              <h3 className="text-lg font-bold mb-2">태그 추가</h3>
              <div className="flex items-center">
                <input
                  type="text"
                  value={tagInput}
                  onChange={handleTagInputChange}
                  className={`flex-grow mr-2 py-2 px-3 bg-white border border-gray-300 rounded-md text-gray-600 ${style.glassInput}`}
                  placeholder="태그를 입력하세요 (예: tag1,tag2)"
                />
                <button
                  type="button"
                  onClick={handleAddTag}
                  className={`py-2 px-4 bg-blue-600 text-white rounded-md ${style.glassButton}`}
                >
                  추가
                </button>
              </div>
              <ul className="mt-2 space-y-1">
                {tags.map((tag, index) => (
                  <li
                    key={index}
                    onClick={() => handleRemoveTag(tag)}
                    className="cursor-pointer text-blue-600"
                  >
                    {tag}
                  </li>
                ))}
              </ul>

              <h3 className="text-lg font-bold mb-2">카테고리 선택</h3>
              <select
                value={category}
                onChange={handleCategoryChange}
                className="w-full py-2 px-3 bg-white border border-gray-300 rounded-md text-gray-600"
              >
                <option value="">카테고리를 선택하세요</option>
                <option value="TestCategory">테스트 카테고리</option>
                {/* 다른 카테고리 옵션 추가 */}
              </select>
              <input
                type="text"
                value={newComment}
                onChange={handleNewCommentChange}
                className={`block w-full mb-2 py-2 px-3 bg-white border border-gray-300 rounded-md text-gray-600 ${style.glassInput}`}
                placeholder="댓글을 입력하세요."
              />
              <div className="mb-2">
                <label htmlFor="image-upload" className="cursor-pointer py-2 px-4 bg-blue-600 text-white rounded-md">
                  이미지 추가
                </label>
                <input
                  type="file"
                  id="image-upload"
                  onChange={handleImageChange}
                  multiple
                  accept="image/*"
                  style={{ display: 'none' }}
                />
              </div>
              <div>
                {imageInput.map((image, index) => (
                  <div key={index} className="mb-3">
                    <button
                      className="bg-red-800 text-white rounded-md"
                      style={{ position: 'absolute', zIndex: 10, right: '5%', top: '5%' }}
                      onClick={() => handleRemoveImage(index)}
                    >
                      삭제
                    </button>
                    <img
                      src={URL.createObjectURL(image)}
                      alt={`리뷰 이미지-${index}`}
                      className="w-32 h-auto object-contain rounded-md"
                    />
                  </div>
                ))}
              </div>
              <button
                type="submit"
                className={`w-full py-2 px-4 bg-blue-600 text-white rounded-md ${style.glassButton}`}
              >
                리뷰 및 댓글 등록
              </button>
            </div>
          </form>

          {/* 댓글 목록 */}
          <Comment comments={commentList} />
        </div>
      </div>
    );
  } else {
    return (
      <div className="container mx-auto px-8 py-4">
        <p className="text-center text-2xl text-gray-600">데이터가 없습니다.</p>
      </div>
    );
  }
};

export default ProductDetailForm;

