import React from "react";
import PlaceholderShimmerBox from "../Components/PlaceholderShimmerBox";

import "./Box.css";

const Box = (props) => {
  return (
    <PlaceholderShimmerBox classes="content">
      <div class="parent"></div>
      <div class="padding"></div>
      <div class="title"></div>
      <div class="padding"></div>
      <div class="followers"></div>
      <div class="padding"></div>
      <div class="description"></div>
      <div class="padding"></div>
      <div class="avatar">
        <div class="avatar-image">
          <svg viewBox="0 0 10 10" fill="#fff">
            <path
              class="hole_path"
              d="M0,0 L10,0 L10,10 L0,10 L0,0 Z M0,5 C0,7.76142375 2.23857625,10 5,10 C7.76142375,10 10,7.76142375 10,5 C10,2.23857625 7.76142375,2.22044605e-16 5,0 C2.23857625,-2.22044605e-16 0,2.23857625 0,5 L0,5 Z"
            />
          </svg>
        </div>
      </div>
    </PlaceholderShimmerBox>
  );
};

export default Box;
