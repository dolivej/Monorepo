/*
/ Component : Tag
/ Use : Creates a simple tag with a picture and name   
/ Responsiveness : Static 
*/

import React from "react";

export interface DataBoxProps {
  title: string;
  timeFrame: string;
  isNegative: boolean;
  value: string;
  subtitle: string;
  showArrow: boolean;
  subValue: string;
}

export const DataBox = (props: DataBoxProps) => {
  let src = props.isNegative
    ? "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAb1BMVEX///8AAAClpaWsrKypqan8/PzX19dwcHDy8vLBwcH5+flZWVlRUVGFhYVjY2NgYGBNTU1GRkZAQEBpaWk5OTkzMzNzc3MuLi56enonJycgICAbGxuIiIgVFRWOjo4NDQ2Wlpa1tbXFxcXOzs7d3d3aPsbOAAADMUlEQVR4nO3d61LiQBCG4ckKiuD5fBYP93+Nu67FSpLpyYwEO1/2fX+PqX6qUqhAdUIgIiIiIiIiIiIiIiIiIiKi/7LpZFFV1WIy9R5kW+1Uq3a8R9lOe9VXe97DbKPDar1D73H6b7eqt+s9UO8dNIQH3gP13axqNvMeqef2W8J975F6btISTrxH6rlfLeEv75F6DqF+CPVDqB9C/RDqh1A/hPoh1A+hfgj1Q6gfQv0Q6odQP4T6IdQPoX4I9UOoH0L9EOqHUD+E+iHUD6F+CPVDqB9C/RDqh1A/hPoh1A+hfgj1Q6gfQv0Q6odQP4T6IRxuuWv0yoWrK/c16TfLXqNXLBzIgr78NXqlwvPsK2+1+hq9o9TRQuFR7ehDv2Pn11yjd5w4WyY8bpz1WtDXXKOXIhYJm0CvBX3tNXrVwjxcIly0L+yzoK+9Ri9BLBBGgE4L+tpr9BL3U76wde9/5PNbMSq0iNnCKNBJGLtL/3QSPZwrPIlf1OcujbzS2MRMoQH0WgUav6Gq6jRyNk94alzRa51r8zd+ipgltIB+K3kf8ok5QhPouFb5yJrprHkyQ3hmXez8ZzDxzq2pmsRu4TCBCeJF/Vyn8GKgwPq/iLUua8e6hJfWZQawvT2P2CEcMjCEK5O49uZNUjg1gVc/z4l1Y813/UVMCafX1gVuPDixMogJoQAwQbxdEW3h9FYAmCLOPw+YwrkGsPm221p3n0RLOL+zfnBwT8Awifd/iYZwfi8DTPwZ/vhBjAvnj9YPub1FmuopRYwKbeCTNyaeSXyeRYWzZzFgijiPPN9irgcMYWnNfNfGP5mvoktvRiqTWNDSG5Fuc+LSm9DVpsSlN6C79qtmSRKf7m9ClABuQhQBWp/ZdOf9vYuCvkcUAq5/VyQ/scc+lhPFgCG8FAJfvAcur4woCCwjSgJLiKJA85P+VsIPe8wjCgPziNLAHKI4MITXDuCr94CblyaOABjCWwL45j1cP9nEkQBt4miAFnFEwDhxVMDYd+BG9/j4JnF0wCZxhMA6cZTAEN7/Ad+9R9lW72MHrogjBn4SRw38II4cSERERERERERERERERETk2G/AISOXdBqjawAAAABJRU5ErkJggg=="
    : "https://www.freepngimg.com/thumb/web_design/24677-8-up-arrow-transparent-image.png";

  return (
    <div className="card" style={{ width: "100%", height: "100%" }}>
      <div className="card-header">
        <h3 className="card-header-title is-inline">
          <span>{props.title}</span>
          <span
            className={
              "tag is-pulled-right " +
              (props.isNegative ? " is-danger" : " is-success")
            }
          >
            {props.timeFrame}
          </span>
        </h3>
      </div>
      <div className="card-content">
        <h3 className="title">{props.value}</h3>
        <p>{props.subtitle}</p>
        <p className="mt-2">
          <img
            src={src}
            alt=""
            width="24"
            style={{ display: props.showArrow ? "" : "none" }}
          />
          <span className="ml-2">{props.subValue}</span>
        </p>
      </div>
    </div>
  );
};

export default DataBox;
