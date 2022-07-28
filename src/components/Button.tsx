import React from 'react';
import styled, { css } from 'styled-components';
import { darken, lighten } from 'polished';

interface ButtonStyle {
  theme: any;
  color: string;
  size: string;
  fullWidth: boolean;
  rounding: boolean;
  outline: boolean;
  onClick: () => void;
  className: string;
  type: 'button' | 'submit' | 'reset';
  disabled: boolean;
}

const colorStyles = css`
  ${(props: ButtonStyle) => {
    const selected = props.theme.palette[props.color];
    const bgcolor = props.color;
    return css`
      color: ${bgcolor === 'white' ? 'black' : 'white'};
      border: ${bgcolor === 'white' ? '1px solid #D9D9D9' : '1px solid white'};
      background-color: ${selected};
      &:hover {
        background: ${lighten(0.1, selected)};
      }
      &:active {
        background: ${darken(0.1, selected)};
      }

      ${(props: ButtonStyle) =>
        props.outline &&
        css`
          color: ${selected};
          background: none;
          border: 1px solid ${selected};
          &:hover {
            background: ${selected};
            color: white;
          }
        `}
    `;
  }}
`;

const sizeStyles = css`
  ${(props: ButtonStyle) =>
    props.size === 'large' &&
    css`
      height: 3rem;

      font-size: 1rem;
    `}

  ${(props: ButtonStyle) =>
    props.size === 'medium' &&
    css`
      height: 2.25rem;
      font-size: 0.8rem;
    `}

  ${(props: ButtonStyle) =>
    props.size === 'small' &&
    css`
      height: 1.75rem;
      font-size: 0.7rem;
    `}
`;

const fullWidthStyle = css`
  ${(props: ButtonStyle) =>
    props.fullWidth &&
    css`
      width: 100%;
      justify-content: center;
      & + & {
        margin-left: 0;
        margin-top: 0.5rem;
      }
    `}
`;

const borderStyle = css`
  ${(props: ButtonStyle) =>
    props.rounding &&
    css`
      border-radius: 50px;
    `}
`;

const StyledButton = styled.button`
  /* 공통 스타일 */
  display: inline-flex;
  align-items: center;
  color: white;
  outline: none;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  padding: 0 1rem;

  /* 크기 */
  ${sizeStyles}

  /* 색상 */
  ${colorStyles}

  /* 둥근 스타일 */
  ${borderStyle}
  
  
  /* 기타 */
  & + & {
    margin-left: 0.5rem;
  }

  /* fullWidth */
  ${fullWidthStyle}
`;

type ButtonProps = {
  children: React.ReactNode;
  color: string;
  size: string;
  fullWidth: boolean;
  rounding: boolean;
  outline: boolean;
  onClick: () => void;
  className: string;
  type: 'button' | 'submit' | 'reset';
  disabled: boolean;
};

Button.defaultProps = {
  color: 'black',
  size: 'small',
  fullWidth: false,
  rounding: false,
  outline: false,
  onClick: () => null,
  className: '',
  type: 'button',
  disabled: false,
};

export default function Button({
  children,
  color,
  size,
  fullWidth,
  rounding,
  outline,
  className,
  type,
  disabled,
  ...rest
}: ButtonProps) {
  return (
    <StyledButton
      color={color}
      size={size}
      fullWidth={fullWidth}
      rounding={rounding}
      outline={outline}
      type={type}
      className={className}
      disabled={disabled}
      {...rest}
    >
      {children}
    </StyledButton>
  );
}
