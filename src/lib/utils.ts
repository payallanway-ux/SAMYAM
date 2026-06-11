import React from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatNormalDash(
  text: string,
  dotColorClass: string = "text-muted-foreground/60",
): React.ReactNode {
  if (!text) return "";

  if (text.includes(" - ")) {
    const parts = text.split(" - ");
    return parts.map((part, index) => {
      const children: React.ReactNode[] = [part];
      if (index < parts.length - 1) {
        children.push(
          React.createElement(
            "span",
            {
              className: `font-sans font-normal ${dotColorClass} mx-1.5 inline-block select-none`,
              key: `dash-${index}`,
            },
            "-",
          ),
        );
      }
      return React.createElement(React.Fragment, { key: index }, ...children);
    });
  }

  if (text.includes("-")) {
    const parts = text.split("-");
    return parts.map((part, index) => {
      const children: React.ReactNode[] = [part];
      if (index < parts.length - 1) {
        children.push(
          React.createElement(
            "span",
            {
              className: "font-sans font-normal text-inherit mx-0.5 inline-block select-none",
              key: `dash-${index}`,
            },
            "-",
          ),
        );
      }
      return React.createElement(React.Fragment, { key: index }, ...children);
    });
  }

  return text;
}
