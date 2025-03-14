"use client";
import React, { type FC, useEffect, useRef } from "react";

const PageTransition: FC = () => {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.AnimationEvent) {
      return;
    }

    if (pageRef.current) {
      pageRef.current.classList.add("fade-out");
    }
  }, []);

  return (
    <div
      className={"fader"}
      ref={pageRef}
      style={{ animationDuration: "1s" }}
    />
  );
};

export default PageTransition;
