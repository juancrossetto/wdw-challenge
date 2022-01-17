import React from 'react';
import { FC, InputHTMLAttributes } from 'react';
import { iconSearch } from '../../../assets/images';
import Input from '../../Input';
import './input-search.scss';

interface InputSearchProps extends InputHTMLAttributes<HTMLInputElement> {
  type?: string;
  onChange: (e: any) => void;
  width?: string;
  height?: string;
}

const InputSearch: FC<InputSearchProps> = ({ type, onChange, width, height }) => {
  return (
    <div className="input-group input-search">
      <Input
        type={type || 'text'}
        onChange={onChange}
        className="form-control bg-red input-search__input"
        style={{ borderRadius: '10px' }}
        data-testid="input-search-test"
      />
      <div className="input-group-prepend input-search__icon">
        <img src={iconSearch} alt="Search Post" className="input-search__img" />
      </div>
    </div>
  );
};

export default InputSearch;
