"use client";

export const ColorfulHeading = ({ text, className = "", size = "2xl" }) => {
  const words = text.split(" ");
  const midpoint = Math.ceil(words.length / 2);
  const firstHalf = words.slice(0, midpoint);
  const secondHalf = words.slice(midpoint);

  const sizeClass = size === "3xl" ? "text-3xl lg:text-4xl" :
                   size === "4xl" ? "text-4xl lg:text-5xl" :
                   "text-2xl";

  return (
    <h2 className={`font-bold ${sizeClass} ${className} flex flex-wrap justify-center`}>
      <span className="text-primary mr-1">
        {firstHalf.join(" ")}
      </span>
      <span className="text-accent ml-1">
        {secondHalf.join(" ")}
      </span>
    </h2>
  );
};

export default ColorfulHeading;