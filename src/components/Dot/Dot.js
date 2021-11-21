import React from "react";
import cx from "classnames";
import s from "./Dot.module.scss";

export default function Dot({ size = "medium", color = "#AF478A", style }) {
  return (
    <div
      className={cx(s.dotBase, {
        [s.dotBase]: size === "medium",
        [s.dotLarge]: size === "large"
      })}
      style={{
        backgroundColor: color,
        ...style
      }}
    />
  );
}
