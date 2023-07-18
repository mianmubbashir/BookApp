import React from 'react';
import {Path, Rect, Svg} from 'react-native-svg';

const HeartIcon = (props: any) => {
  const {fill, stroke} = props;
  return (
    <Svg
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Rect
        x="0.0871582"
        y="0.0600586"
        width="25"
        height="25"
        rx="12.5"
        fill="white"
      />
      <Path
        d="M14.6493 17.5648L14.6489 17.5651C14.2537 17.8773 13.8891 18.1608 13.5343 18.3682C13.1793 18.5756 12.8696 18.6851 12.5872 18.6851C12.3048 18.6851 11.9951 18.5755 11.6401 18.368C11.2851 18.1605 10.9205 17.8772 10.5251 17.5656C10.3085 17.3948 10.0868 17.2238 9.86277 17.0511C8.91505 16.3205 7.92661 15.5585 7.11154 14.6408C6.11668 13.5206 5.41058 12.1983 5.41058 10.4792C5.41058 8.78331 6.3691 7.35121 7.69292 6.74618C8.99308 6.15197 10.7138 6.32797 12.3169 7.99419L12.5871 8.27502L12.8574 7.99422C14.4605 6.32837 16.1812 6.15252 17.4814 6.74683C18.8052 7.35196 19.7638 8.78407 19.7638 10.4799C19.7638 12.1987 19.0578 13.521 18.0631 14.6411C17.2467 15.5603 16.2561 16.3233 15.3066 17.0547C15.0844 17.2259 14.8643 17.3954 14.6493 17.5648Z"
        stroke="#D80000"
        stroke-width="0.75"
      />
    </Svg>
  );
};

export default HeartIcon;
