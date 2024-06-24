// src/Header.js
import React from 'react';
import { cn } from '@bem-react/classname';
import { Button } from '@consta/uikit/Button';
import { Link } from 'react-router-dom';
import './Header.css';

const cnHeader = cn('Header');
const cnApp = cn('App');

const menuItems = [
    { label: 'Общие требования', to: '/' },
    { label: 'Наряд-заказы', to: '/orders' },  // Добавляем пункт меню Orders
  ];

const Header = () => {
    return (
        <div className={cnHeader('Wrapper')}>
    <div className={cnApp('container')}>
      <div className={cnHeader()}>
      <div className={cnHeader('Logo')}>
        <Link to="/">
        <svg width="273" height="48" version="1.1" shape-rendering="geometricPrecision" text-rendering="geometricPrecision">
  <g>
      <path fill="#006FBA" d="M22.42 30.27c-1.08,-1.49 -1.98,-3.11 -2.69,-4.8 -0.86,-2.23 -1.47,-4.57 -1.79,-6.95 -0.13,-1.09 -0.2,-2.19 -0.2,-3.29 0,-2.6 0.38,-5.19 1.1,-7.69 0.82,-2.67 2.03,-5.23 3.58,-7.57 1.78,2.64 3.11,5.58 3.91,8.67 0.87,3.37 1.06,6.88 0.55,10.31 -0.58,4.07 -2.11,7.95 -4.46,11.32l0 0zm-1.41 -6.5c0,1.91 0.47,3.8 1.34,5.5 0.92,-1.7 1.4,-3.6 1.4,-5.53 0,-0.09 0,-0.18 -0.01,-0.26 -0.06,-1.82 -0.53,-3.61 -1.37,-5.22 -0.89,1.64 -1.36,3.48 -1.36,5.35 0,0.05 0,0.11 0,0.16l0 0zm-1.33 -15.07c-0.48,1.89 -0.78,3.83 -0.89,5.77 0,0.33 -0.01,0.67 -0.01,1.01 0,1.78 0.15,3.57 0.45,5.34 0,-0.13 0,-0.27 0,-0.4 0,-2.07 0.21,-4.14 0.6,-6.17 0.53,-2.43 1.39,-4.8 2.54,-7.01 1.17,2.21 2.05,4.57 2.59,7.01 0.42,2.16 0.59,4.35 0.5,6.54 0.31,-1.5 0.48,-3.04 0.5,-4.57 0,-0.06 0,-0.11 0,-0.16 0,-2.51 -0.33,-5.02 -1,-7.44 -0.63,-2.18 -1.52,-4.29 -2.63,-6.26 -1.11,2.01 -2,4.14 -2.65,6.34l0 0zm63.3 22.57l-2.68 0c-2.25,0 -2.37,-1.85 -2.44,-2.98l0 -10.77c0,-1.22 0.19,-3.01 2.44,-3.01l2.68 0c2.31,0 2.44,1.79 2.44,3.01l0 10.75c0,1.21 -0.18,3 -2.44,3l0 0zm-1.8 -14.44c-0.13,0.11 -0.21,0.26 -0.22,0.43l0.07 11.22c0,0.04 -0.01,0.09 -0.01,0.13 0,0.05 0.01,0.09 0.01,0.14 0.05,0.09 0.12,0.17 0.21,0.23 0.07,0.06 0.14,0.11 0.22,0.15 0.05,0 0.09,0.01 0.13,0.01 0.05,0 0.1,-0.01 0.14,-0.01l0.26 0c0.08,-0.03 0.16,-0.09 0.23,-0.15 0.06,-0.06 0.1,-0.13 0.14,-0.21 0.01,-0.04 0.02,-0.09 0.02,-0.13 0,-0.05 -0.01,-0.09 -0.02,-0.14l0 -11.24c-0.02,-0.17 -0.1,-0.33 -0.24,-0.43 -0.13,-0.11 -0.29,-0.17 -0.46,-0.17 -0.18,0 -0.35,0.06 -0.48,0.17l0 0zm-42.17 -0.24l-2.91 0 0.04 14.68 -3.23 0 0 -16.76 6.1 0 0 2.08zm3.9 10.19l1.56 0 0.24 4.49 3.16 0 -1.68 -16.76 -5.02 0 -1.71 16.76 3.13 0 0.32 -4.49zm0.73 -10.17l0.17 0 0.56 8.38 -1.29 0 0.56 -8.38zm13.22 11.64c0,1.18 -0.21,3 -2.44,3l-2.64 0.02c-2.29,0 -2.44,-1.78 -2.44,-3l0 -2.85 3.16 0 0 3.19c-0.01,0.04 -0.01,0.07 -0.01,0.11 0,0.03 0,0.07 0.01,0.1 0.02,0.07 0.06,0.13 0.11,0.18 0.05,0.06 0.1,0.1 0.17,0.13l0.4 0c0.07,-0.03 0.12,-0.07 0.17,-0.13 0.05,-0.05 0.09,-0.11 0.1,-0.18 0.01,-0.03 0.02,-0.06 0.02,-0.1 0,-0.03 -0.01,-0.06 -0.02,-0.1l0 -3.89c0,-0.53 -0.06,-1.11 -1.28,-1.11l-1.32 0 0 -1.9 1.44 0c0.87,0 1.22,-0.22 1.22,-1.22l0 -3.35c0.01,-0.04 0.01,-0.07 0.01,-0.1 0,-0.03 0,-0.07 -0.01,-0.1 -0.02,-0.07 -0.06,-0.13 -0.11,-0.18l-0.16 -0.12 -0.4 0c-0.06,0.03 -0.12,0.07 -0.17,0.12 -0.05,0.05 -0.09,0.11 -0.11,0.18 -0.01,0.03 -0.02,0.07 -0.02,0.1 0,0.03 0.01,0.07 0.02,0.1l0 2.74 -3.26 0 0 -2.36c0,-1.19 0.19,-3.02 2.44,-3.02l2.68 0c2.28,0 2.44,1.8 2.44,3.02l0 2.73c0.04,0.3 0,0.6 -0.09,0.89 -0.14,0.44 -0.43,0.81 -0.81,1.06 -0.38,0.25 -0.84,0.36 -1.29,0.32l0 0.17c0.3,-0.05 0.61,-0.01 0.9,0.09 0.57,0.2 1.02,0.65 1.22,1.23 0.08,0.29 0.11,0.59 0.07,0.9l0 3.33zm4.98 -11.64l1.48 0 -0.05 14.66 3 0 0 -16.76 -7.43 0 0 16.74 3 0 0 -14.64zm10.02 8.95l0 5.69 -3.25 0.02 0 -16.76 5 0c2.26,0 2.61,1.79 2.61,3.01l0 5.04c0,1.22 -0.35,3 -2.61,3l-1.75 0zm0.84 -9.02l-0.84 0 0 7.13 0.84 0c0.35,0 0.61,-0.31 0.61,-0.83l0 -5.47c0,-0.5 -0.26,-0.83 -0.61,-0.83l0 0zm17.85 4.18l0.11 0 1.61 10.55 2.59 0 1.64 -10.52 0.11 0 0 10.52 3.23 0 0 -16.76 -4.18 0 -2.06 11.77 -2.08 -11.77 -4.2 0 0 16.74 3.23 0 0 -10.53zm-74.43 15.81c0.45,-0.43 0.96,-0.77 1.53,-1 0.56,-0.23 1.17,-0.35 1.78,-0.35 2.58,0 4.68,2.09 4.68,4.68 0,1.23 -0.48,2.41 -1.34,3.28 -1.78,1.88 -4.25,2.95 -6.84,2.95 -5.19,0 -9.39,-4.21 -9.39,-9.4 0,-1.94 0.6,-3.83 1.71,-5.42 0.36,-0.5 0.76,-0.96 1.22,-1.38 0.87,-0.86 1.91,-1.55 3.05,-2.01 1.12,-0.47 2.32,-0.71 3.53,-0.71 0.04,0 0.08,0 0.12,0l0 -12.56c-9.21,0.01 -16.67,7.49 -16.67,16.71 0,2.29 0.47,4.57 1.39,6.67 1.1,2.54 2.82,4.77 5,6.48 2.94,2.3 6.57,3.56 10.31,3.56 4.62,0 9.04,-1.92 12.2,-5.29l0 -11.47 -12.27 0 -0.01 5.26zm49.42 7.31l-0.22 0c-0.39,0 -0.52,-0.09 -0.57,-0.55l0 -2.31c0,-0.41 0.15,-0.52 0.52,-0.52l0.27 0 0 3.38zm2.45 -0.55l0 -2.31 0.01 0c0,-0.43 -0.13,-0.51 -0.51,-0.51l-0.27 0 0 3.39 0.27 0c0.37,-0.04 0.5,-0.15 0.5,-0.57l0 0zm27.2 -0.06l0 0.89 0.01 0c0,0.4 -0.12,0.5 -0.51,0.48l-0.38 0 0 -1.89 0.38 0c0.37,0 0.5,0.09 0.5,0.52l0 0zm-62.31 4.79l66.96 0 0 -11.17 -67.04 0 0.08 11.17zm59.69 -9.36l1.69 0 0 2.85 0.31 0c1.65,0 2.26,0.39 2.26,1.84l0 0.74c0,1.6 -0.72,1.89 -2.56,1.89l-1.7 0 0 -7.32zm-14.11 0l4.27 0 0.01 1.38 -1.31 0 0 5.91 -1.61 0 0 -5.91 -1.36 0 0 -1.38zm-15.32 2.41c0,-1.49 0.72,-1.87 2.44,-1.87l0.01 -0.54 1.67 0 0 0.54c1.72,0 2.44,0.38 2.44,1.87l0 2.27c0,1.48 -0.77,1.87 -2.44,1.87l0 0.74 -1.68 0 0 -0.73c-1.68,0 -2.44,-0.4 -2.44,-1.88l0 -2.27zm-13.01 -2.42l4.09 0 0 1.38 -2.27 0 0 1.44 2.04 0 0 1.37 -2.09 0 0 1.72 2.32 0 0 1.41 -4.09 0 0 -7.32zm-14.28 0l1.71 0 0 2.77 0.98 0 0 -2.8 1.7 0 0 7.31 -1.7 0 0 -3.18 -0.89 0 0 3.22 -1.7 0 -0.1 -7.32zm98.61 -21.12l-3.02 7.82c-0.16,0.43 -0.35,0.78 -0.56,1.05 -0.2,0.27 -0.45,0.49 -0.72,0.65 -0.28,0.16 -0.6,0.27 -0.97,0.33 -0.37,0.06 -0.8,0.1 -1.29,0.1l0 -1.74c0.25,0 0.48,-0.01 0.67,-0.03 0.19,-0.02 0.35,-0.06 0.49,-0.11 0.15,-0.06 0.27,-0.14 0.37,-0.23 0.1,-0.1 0.18,-0.22 0.26,-0.36l-3.36 -7.48 2.21 0 2.1 4.89 1.77 -4.89 2.05 0zm7.76 1.67l-4.46 0 0 1.93 1.52 0c0.65,0 1.21,0.08 1.67,0.24 0.46,0.16 0.84,0.38 1.14,0.67 0.29,0.28 0.51,0.61 0.65,0.99 0.14,0.37 0.21,0.77 0.21,1.2 0,0.43 -0.07,0.83 -0.21,1.21 -0.14,0.38 -0.36,0.71 -0.65,0.99 -0.3,0.28 -0.68,0.5 -1.14,0.67 -0.46,0.16 -1.02,0.25 -1.67,0.25l-3.52 0 0 -9.82 6.46 0 0 1.67zm-4.46 3.61l0 2.86 1.4 0c0.66,0 1.12,-0.13 1.39,-0.39 0.27,-0.25 0.41,-0.61 0.41,-1.05 0,-0.44 -0.14,-0.78 -0.41,-1.04 -0.27,-0.26 -0.73,-0.38 -1.39,-0.38l-1.4 0zm12.94 -5.28l0 1.67 -4.13 0 0 2.23 3.7 0 0 1.67 -3.7 0 0 2.57 4.13 0 0 1.68 -6.12 0 0 -9.82 6.12 0zm3.71 6.36l0 3.46 -1.99 0 0 -9.82 3.51 0c1.13,0 2.02,0.26 2.68,0.78 0.66,0.52 0.99,1.31 0.99,2.36 0,1.04 -0.32,1.84 -0.97,2.39 -0.65,0.55 -1.55,0.83 -2.7,0.83l-1.52 0zm1.24 -1.68c0.69,0 1.19,-0.13 1.5,-0.37 0.31,-0.25 0.46,-0.64 0.46,-1.18 0,-0.47 -0.15,-0.84 -0.46,-1.08 -0.31,-0.25 -0.81,-0.38 -1.5,-0.38l-1.24 0 0 3.01 1.24 0zm7.49 -4.68l0 6.16 4.1 -6.16 1.59 0 0 9.82 -1.99 0 0 -6.1 -4.05 6.1 -1.64 0 0 -9.82 1.99 0zm10.02 3.88l1.06 0c0.57,0 0.97,-0.11 1.21,-0.32 0.24,-0.22 0.36,-0.51 0.36,-0.87 0,-0.34 -0.11,-0.61 -0.33,-0.82 -0.22,-0.22 -0.6,-0.32 -1.14,-0.32 -0.53,0 -0.92,0.11 -1.18,0.33 -0.25,0.22 -0.44,0.5 -0.57,0.85l-1.75 0c0.04,-0.44 0.16,-0.83 0.37,-1.19 0.2,-0.36 0.46,-0.66 0.78,-0.9 0.33,-0.25 0.69,-0.44 1.11,-0.57 0.41,-0.14 0.85,-0.2 1.31,-0.2 0.45,0 0.88,0.05 1.28,0.16 0.41,0.11 0.77,0.27 1.08,0.49 0.32,0.22 0.57,0.5 0.75,0.83 0.19,0.33 0.28,0.71 0.28,1.15 0,0.51 -0.12,0.94 -0.34,1.28 -0.23,0.34 -0.54,0.63 -0.94,0.87 0.48,0.2 0.87,0.49 1.16,0.89 0.29,0.39 0.43,0.88 0.43,1.46 0,0.44 -0.08,0.85 -0.25,1.21 -0.16,0.36 -0.41,0.67 -0.72,0.92 -0.32,0.26 -0.71,0.46 -1.17,0.6 -0.46,0.14 -0.98,0.22 -1.57,0.22 -1.05,0 -1.91,-0.24 -2.58,-0.72 -0.66,-0.48 -1.09,-1.23 -1.28,-2.26l1.91 0c0.18,0.45 0.41,0.77 0.69,0.98 0.28,0.21 0.68,0.32 1.19,0.32 1.19,0 1.79,-0.46 1.79,-1.36 0,-0.9 -0.64,-1.35 -1.91,-1.35l-1.03 0 0 -1.68zm5.56 5.94l3.41 -9.82 1.91 0 3.41 9.82 -2.12 0 -0.6 -1.87 -3.28 0 -0.6 1.87 -2.13 0zm3.25 -3.55l2.22 0 -1.11 -3.46 -1.11 3.46zm8.74 1.87l3.55 0 0 -8.14 1.99 0 0 8.14 1.43 0 0 3.53 -1.81 0 0 -1.85 -7.15 0 0 -9.82 1.99 0 0 8.14zm10.49 -8.14l0 6.16 4.1 -6.16 1.59 0 0 9.82 -1.99 0 0 -6.1 -4.05 6.1 -1.64 0 0 -9.82 1.99 0zm7.19 9.82l2.27 -4.12c-0.6,-0.21 -1.06,-0.53 -1.39,-0.98 -0.32,-0.45 -0.49,-1.03 -0.49,-1.75 0,-1 0.34,-1.74 1.01,-2.23 0.67,-0.5 1.57,-0.74 2.71,-0.74l3.47 0 0 9.82 -1.99 0 0 -3.86 -1.37 0 -2.03 3.86 -2.19 0zm5.59 -5.54l0 -2.61 -1.34 0c-0.61,0 -1.07,0.1 -1.39,0.28 -0.32,0.19 -0.47,0.53 -0.47,1.01 0,0.22 0.02,0.41 0.08,0.58 0.06,0.16 0.16,0.29 0.3,0.4 0.14,0.11 0.33,0.2 0.57,0.25 0.23,0.06 0.54,0.09 0.91,0.09l1.34 0zm-87.62 25.55l0 -3.53 0.63 0c0.12,-0.13 0.24,-0.31 0.35,-0.51 0.11,-0.21 0.2,-0.44 0.29,-0.69 0.06,-0.22 0.13,-0.47 0.18,-0.72 0.06,-0.26 0.11,-0.55 0.14,-0.89 0.04,-0.33 0.07,-0.71 0.09,-1.15 0.02,-0.44 0.03,-0.95 0.03,-1.55l0 -2.63 6.56 0 0 8.14 1.22 0 0 3.53 -1.79 0 0 -1.85 -5.91 0 0 1.85 -1.79 0zm3.1 -4.07c-0.03,0.1 -0.08,0.2 -0.12,0.28 -0.05,0.09 -0.1,0.17 -0.15,0.26l3.44 0 0 -6.46 -2.57 0 0 0.94c0,0.68 -0.01,1.28 -0.04,1.78 -0.03,0.5 -0.07,0.95 -0.12,1.34 -0.04,0.38 -0.11,0.72 -0.18,1.02 -0.08,0.29 -0.16,0.57 -0.26,0.84zm15.11 -2c0,0.75 -0.1,1.4 -0.28,1.95 -0.18,0.54 -0.44,0.99 -0.78,1.35 -0.33,0.35 -0.73,0.62 -1.19,0.79 -0.46,0.17 -0.97,0.26 -1.52,0.26 -0.55,0 -1.06,-0.09 -1.52,-0.26 -0.46,-0.17 -0.85,-0.44 -1.18,-0.79 -0.34,-0.36 -0.59,-0.81 -0.78,-1.35 -0.18,-0.55 -0.28,-1.2 -0.28,-1.95l0 -1.39c0,-0.76 0.1,-1.41 0.28,-1.96 0.19,-0.54 0.44,-0.99 0.78,-1.35 0.33,-0.36 0.72,-0.62 1.18,-0.78 0.46,-0.17 0.97,-0.25 1.52,-0.25 0.55,0 1.06,0.08 1.52,0.25 0.46,0.16 0.86,0.42 1.19,0.78 0.34,0.36 0.6,0.81 0.78,1.35 0.18,0.55 0.28,1.2 0.28,1.96l0 1.39zm-5.54 0c0,0.94 0.15,1.62 0.45,2.04 0.3,0.42 0.74,0.63 1.32,0.63 0.58,0 1.02,-0.21 1.32,-0.63 0.3,-0.42 0.46,-1.1 0.46,-2.04l0 -1.39c0,-0.94 -0.16,-1.62 -0.46,-2.04 -0.3,-0.41 -0.74,-0.62 -1.32,-0.62 -0.58,0 -1.02,0.21 -1.32,0.62 -0.3,0.42 -0.45,1.1 -0.45,2.04l0 1.39zm14.71 -5.6l0 9.82 -1.99 0 0 -8.14 -2.45 0 0 1.08c0,0.82 -0.01,1.51 -0.03,2.07 -0.01,0.56 -0.04,1.03 -0.08,1.42 -0.04,0.39 -0.09,0.72 -0.15,0.99 -0.06,0.26 -0.13,0.51 -0.22,0.74 -0.23,0.6 -0.59,1.06 -1.08,1.4 -0.49,0.34 -1.13,0.53 -1.91,0.57l0 -1.98c0.31,-0.05 0.55,-0.15 0.74,-0.29 0.19,-0.14 0.34,-0.35 0.44,-0.62 0.06,-0.16 0.11,-0.36 0.15,-0.59 0.05,-0.24 0.08,-0.52 0.1,-0.87 0.01,-0.34 0.03,-0.74 0.04,-1.21 0.01,-0.46 0.01,-1 0.01,-1.62l0 -2.77 6.43 0zm9.5 5.6c0,0.75 -0.09,1.4 -0.27,1.95 -0.19,0.54 -0.45,0.99 -0.78,1.35 -0.33,0.35 -0.73,0.62 -1.19,0.79 -0.47,0.17 -0.98,0.26 -1.53,0.26 -0.55,0 -1.05,-0.09 -1.51,-0.26 -0.46,-0.17 -0.86,-0.44 -1.19,-0.79 -0.33,-0.36 -0.59,-0.81 -0.77,-1.35 -0.19,-0.55 -0.28,-1.2 -0.28,-1.95l0 -1.39c0,-0.76 0.09,-1.41 0.28,-1.96 0.18,-0.54 0.44,-0.99 0.77,-1.35 0.33,-0.36 0.73,-0.62 1.19,-0.78 0.46,-0.17 0.96,-0.25 1.51,-0.25 0.55,0 1.06,0.08 1.53,0.25 0.46,0.16 0.86,0.42 1.19,0.78 0.33,0.36 0.59,0.81 0.78,1.35 0.18,0.55 0.27,1.2 0.27,1.96l0 1.39zm-5.53 0c0,0.94 0.15,1.62 0.45,2.04 0.3,0.42 0.74,0.63 1.31,0.63 0.58,0 1.02,-0.21 1.33,-0.63 0.3,-0.42 0.45,-1.1 0.45,-2.04l0 -1.39c0,-0.94 -0.15,-1.62 -0.45,-2.04 -0.31,-0.41 -0.75,-0.62 -1.33,-0.62 -0.57,0 -1.01,0.21 -1.31,0.62 -0.3,0.42 -0.45,1.1 -0.45,2.04l0 1.39zm13.95 -5.6l0 1.68 -2.7 0 0 8.14 -1.99 0 0 -8.14 -2.7 0 0 -1.68 7.39 0zm3.42 3.9l3.39 0 0 -3.9 2 0 0 9.82 -2 0 0 -4.24 -3.39 0 0 4.24 -2 0 0 -9.82 2 0 0 3.9zm14.9 1.7c0,0.75 -0.09,1.4 -0.28,1.95 -0.18,0.54 -0.44,0.99 -0.77,1.35 -0.33,0.35 -0.73,0.62 -1.2,0.79 -0.46,0.17 -0.97,0.26 -1.52,0.26 -0.55,0 -1.05,-0.09 -1.51,-0.26 -0.46,-0.17 -0.86,-0.44 -1.19,-0.79 -0.33,-0.36 -0.59,-0.81 -0.78,-1.35 -0.18,-0.55 -0.27,-1.2 -0.27,-1.95l0 -1.39c0,-0.76 0.09,-1.41 0.27,-1.96 0.19,-0.54 0.45,-0.99 0.78,-1.35 0.33,-0.36 0.73,-0.62 1.19,-0.78 0.46,-0.17 0.96,-0.25 1.51,-0.25 0.55,0 1.06,0.08 1.52,0.25 0.47,0.16 0.87,0.42 1.2,0.78 0.33,0.36 0.59,0.81 0.77,1.35 0.19,0.55 0.28,1.2 0.28,1.96l0 1.39zm-5.53 0c0,0.94 0.15,1.62 0.45,2.04 0.29,0.42 0.73,0.63 1.31,0.63 0.58,0 1.02,-0.21 1.32,-0.63 0.31,-0.42 0.46,-1.1 0.46,-2.04l0 -1.39c0,-0.94 -0.15,-1.62 -0.46,-2.04 -0.3,-0.41 -0.74,-0.62 -1.32,-0.62 -0.58,0 -1.02,0.21 -1.31,0.62 -0.3,0.42 -0.45,1.1 -0.45,2.04l0 1.39zm13.52 -3.92l-4.02 0 0 8.14 -1.99 0 0 -9.82 6.01 0 0 1.68zm8.32 3.92c0,0.75 -0.09,1.4 -0.27,1.95 -0.19,0.54 -0.45,0.99 -0.78,1.35 -0.33,0.35 -0.73,0.62 -1.19,0.79 -0.47,0.17 -0.98,0.26 -1.52,0.26 -0.56,0 -1.06,-0.09 -1.52,-0.26 -0.46,-0.17 -0.86,-0.44 -1.19,-0.79 -0.33,-0.36 -0.59,-0.81 -0.77,-1.35 -0.19,-0.55 -0.28,-1.2 -0.28,-1.95l0 -1.39c0,-0.76 0.09,-1.41 0.28,-1.96 0.18,-0.54 0.44,-0.99 0.77,-1.35 0.33,-0.36 0.73,-0.62 1.19,-0.78 0.46,-0.17 0.96,-0.25 1.52,-0.25 0.54,0 1.05,0.08 1.52,0.25 0.46,0.16 0.86,0.42 1.19,0.78 0.33,0.36 0.59,0.81 0.78,1.35 0.18,0.55 0.27,1.2 0.27,1.96l0 1.39zm-5.53 0c0,0.94 0.15,1.62 0.45,2.04 0.3,0.42 0.74,0.63 1.32,0.63 0.57,0 1.01,-0.21 1.32,-0.63 0.3,-0.42 0.45,-1.1 0.45,-2.04l0 -1.39c0,-0.94 -0.15,-1.62 -0.45,-2.04 -0.31,-0.41 -0.75,-0.62 -1.32,-0.62 -0.58,0 -1.02,0.21 -1.32,0.62 -0.3,0.42 -0.45,1.1 -0.45,2.04l0 1.39zm16.22 -2.56c-0.1,-0.46 -0.28,-0.83 -0.56,-1.09 -0.27,-0.27 -0.65,-0.4 -1.14,-0.4 -0.58,0 -1.01,0.21 -1.31,0.62 -0.3,0.42 -0.45,1.1 -0.45,2.04l0 1.39c0,0.93 0.15,1.6 0.45,2.03 0.3,0.42 0.73,0.64 1.31,0.64 0.51,0 0.89,-0.13 1.15,-0.37 0.26,-0.25 0.44,-0.63 0.55,-1.13l1.89 0c-0.16,1.11 -0.55,1.92 -1.16,2.42 -0.6,0.5 -1.41,0.76 -2.43,0.76 -0.55,0 -1.05,-0.09 -1.51,-0.26 -0.46,-0.17 -0.86,-0.44 -1.19,-0.79 -0.33,-0.36 -0.59,-0.81 -0.77,-1.35 -0.19,-0.55 -0.28,-1.2 -0.28,-1.95l0 -1.39c0,-0.76 0.09,-1.41 0.28,-1.96 0.18,-0.54 0.44,-0.99 0.77,-1.35 0.33,-0.36 0.73,-0.62 1.19,-0.78 0.46,-0.17 0.96,-0.25 1.51,-0.25 0.98,0 1.78,0.26 2.41,0.77 0.63,0.52 1.03,1.32 1.19,2.4l-1.9 0zm9.75 -3.04l0 1.68 -4.12 0 0 2.22 3.7 0 0 1.68 -3.7 0 0 2.56 4.12 0 0 1.68 -6.11 0 0 -9.82 6.11 0zm3.71 6.36l0 3.46 -1.99 0 0 -9.82 3.52 0c1.12,0 2.02,0.26 2.68,0.78 0.66,0.52 0.99,1.31 0.99,2.36 0,1.05 -0.33,1.84 -0.98,2.39 -0.65,0.55 -1.55,0.83 -2.69,0.83l-1.53 0zm1.24 -1.68c0.69,0 1.19,-0.12 1.5,-0.37 0.31,-0.25 0.47,-0.64 0.47,-1.17 0,-0.48 -0.16,-0.84 -0.47,-1.09 -0.31,-0.25 -0.81,-0.37 -1.5,-0.37l-1.24 0 0 3 1.24 0zm8.79 -4.68c1.17,0 2.06,0.21 2.67,0.62 0.61,0.42 0.92,1.07 0.92,1.95 0,0.52 -0.12,0.94 -0.35,1.29 -0.24,0.35 -0.55,0.62 -0.95,0.81 0.51,0.19 0.91,0.47 1.19,0.84 0.28,0.38 0.42,0.87 0.42,1.49 0,0.38 -0.07,0.74 -0.2,1.08 -0.13,0.34 -0.34,0.64 -0.63,0.9 -0.28,0.25 -0.65,0.46 -1.11,0.61 -0.45,0.15 -1,0.23 -1.65,0.23l-3.59 0 0 -9.82 3.28 0zm-1.29 8.14l1.43 0c1.18,0 1.77,-0.43 1.77,-1.3 0,-0.46 -0.16,-0.79 -0.47,-0.99 -0.31,-0.19 -0.81,-0.29 -1.48,-0.29l-1.25 0 0 2.58zm0 -4.26l1.32 0c0.55,0 0.95,-0.1 1.19,-0.3 0.25,-0.2 0.37,-0.47 0.37,-0.82 0,-0.17 -0.02,-0.32 -0.07,-0.46 -0.06,-0.13 -0.15,-0.24 -0.28,-0.34 -0.13,-0.09 -0.31,-0.17 -0.54,-0.21 -0.23,-0.05 -0.52,-0.07 -0.88,-0.07l-1.11 0 0 2.2zm8.96 -3.88l0 6.16 4.09 -6.16 1.6 0 0 9.82 -1.99 0 0 -6.09 -4.06 6.09 -1.63 0 0 -9.82 1.99 0zm13.11 3.04c-0.09,-0.46 -0.28,-0.83 -0.55,-1.09 -0.28,-0.27 -0.66,-0.4 -1.14,-0.4 -0.58,0 -1.02,0.21 -1.32,0.62 -0.3,0.42 -0.44,1.1 -0.44,2.04l0 1.39c0,0.93 0.14,1.6 0.44,2.03 0.3,0.42 0.74,0.64 1.32,0.64 0.5,0 0.88,-0.13 1.14,-0.37 0.26,-0.25 0.45,-0.63 0.55,-1.13l1.89 0c-0.16,1.11 -0.54,1.92 -1.15,2.42 -0.61,0.5 -1.42,0.76 -2.43,0.76 -0.55,0 -1.06,-0.09 -1.52,-0.26 -0.46,-0.17 -0.85,-0.44 -1.18,-0.79 -0.34,-0.36 -0.59,-0.81 -0.78,-1.35 -0.18,-0.55 -0.28,-1.2 -0.28,-1.95l0 -1.39c0,-0.76 0.1,-1.41 0.28,-1.96 0.19,-0.54 0.44,-0.99 0.78,-1.35 0.33,-0.36 0.72,-0.62 1.18,-0.78 0.46,-0.17 0.97,-0.25 1.52,-0.25 0.98,0 1.78,0.26 2.41,0.77 0.63,0.52 1.03,1.32 1.19,2.4l-1.91 0zm2.52 6.78l3.41 -9.82 1.91 0 3.41 9.82 -2.12 0 -0.59 -1.87 -3.29 0 -0.6 1.87 -2.13 0zm3.26 -3.55l2.21 0 -1.11 -3.46 -1.1 3.46z"/>
  </g>
</svg>
        </Link>
      </div>
        <div className={cnHeader('Menu')}>
          {menuItems.map((item, index) => (
            <Button
              key={index}
              as={Link}
              label={item.label}
              view="ghost"
              size="m"
              to={item.to}
              className={cnHeader('MenuItem')}
            />
          ))}
        </div>
        </div>
      </div>
      </div>
    );
  };
  
  export default Header;