import React from "react";
import Button from "../Button";

const checkem = isFollowing => {
  console.log(typeof isFollowing);
  return isFollowing ? "Unfollow" : "Follow";
};

export default ({ isFollowing, onClick }) => (
  <Button text={isFollowing ? "Unfollow" : "Follow"} onClick={onClick} />
);
