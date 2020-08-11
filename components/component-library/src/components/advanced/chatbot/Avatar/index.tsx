import React from "react";

export interface AvatarProps {
  size: string;
  statusSize: string;
  avatarRoundAmount: string;
  statusRoundAmount: string;
  statusColor: string;
  avatarBorderSize: string;
  statusBorderSize: string;
  image: string;
  statusIsHidden: boolean;
}

export const Avatar = (props: AvatarProps) => {
  let avatar = {
    borderRadius: props.avatarRoundAmount,
    borderWidth: props.avatarBorderSize,
    borderColor: "white",
    height: props.size,
    width: props.size,
  };
  let status = {
    borderRadius: props.statusRoundAmount,
    borderWidth: props.statusBorderSize,
    background: props.statusColor,
    height: props.statusSize,
    width: props.statusSize,
  };

  let image = {
    backgroundImage: props.image,
  };

  return (
    <div className="avatar-profile-container">
      <div className="avatar-container" style={avatar}>
        <div className="avatar-picture" style={image}></div>
      </div>
      <div
        className="avatar-status-indicator avatar"
        hidden={props.statusIsHidden}
        style={status}
      ></div>
    </div>
  );
};

export default Avatar;
