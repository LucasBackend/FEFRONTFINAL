import styled from 'styled-components'

export const Container = styled.div`
  width: 150px;
  height: 32px;
  background: ${({ theme, isactivate }) =>
    isactivate === 'true' ? 'transparent' : theme.COLORS.INGREDIENTS_COLOR};
  border: ${({ isactivate }) =>
    isactivate === 'true' ? '1px dashed #76797B' : 'none'};
  color: white;
  border-radius: 8px;
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;

  ::placeholder {
    color: ${({ isactivate, theme }) =>
      isactivate === 'true' ? '#76797B' : theme.COLORS.INGREDIENTS_COLOR};
  }

  > input {
    width: 100%;
    background: transparent;
    border: none;
    font-size: 1rem;
    font-family: Roboto, sans-serif;
    color: white;
    text-align: center;
    outline: none;
  }

  > svg {
    color: ${({ isactivate }) => (isactivate === 'true' ? '#76797B' : 'white')};
    cursor: pointer;
  }
`
