import styled from 'styled-components'

export const Container = styled.button`
  width: 100%;
  height: 56px;
  color: #ffffff;
  font-family: Poppins;
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  background-color: ${({ theme }) => theme.COLORS.RED_TOMATO};
  border: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  > svg {
  }

  &:hover {
    background-color: #4f0009;
  }
`
