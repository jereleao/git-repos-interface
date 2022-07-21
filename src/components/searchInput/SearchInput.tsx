import React from 'react';
import styled from 'styled-components';
import { SearchIcon } from '../commom';

interface ISearchInputProps {
  onSearch: (searchInputValue: string) => void;
  disabled?: boolean;
}

const Button = styled.button`
  margin: 0 3px;
`;

export const SearchInput: React.FC<ISearchInputProps> = ({
  onSearch,
  disabled = false,
}) => {
  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;

    const { value: searchInputValue } = form.elements.namedItem(
      'searchInput'
    ) as HTMLInputElement;

    if (!searchInputValue) return;

    onSearch(searchInputValue);
  };

  return (
    <form onSubmit={submitHandler}>
      <input type="search" name="searchInput" disabled={disabled} />
      <Button type="submit" disabled={disabled}>
        <SearchIcon />
      </Button>
    </form>
  );
};
