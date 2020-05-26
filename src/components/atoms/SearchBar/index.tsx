import React, { useState } from 'react';
import './style.scss';

interface Props {
  /**
   * Submit 이벤트 핸들러
   */
  onSubmit: () => void;
}

const SearchBar = (props: Props) => {
  const [keyword, setKeyword] = useState('');
  const { onSubmit } = props;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  return (
    <form className="search_bar" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="검색해보세요"
        value={keyword}
        onChange={handleChange}
      />
      <button>검색</button>
    </form>
  );
};

export default SearchBar;
