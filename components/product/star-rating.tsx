import { StarHalfIcon, StarIcon } from "lucide-react";

type Props = {
  rating: number;
  maxStars?: number;
  size?: "small" | "medium" | "large";
  showScore?: boolean;
};

export default function StarRating({
  rating,
  maxStars = 5,
  size = "medium",
  showScore = false,
}: Props) {
  const normalizeRating = Math.max(0, Math.min(5, rating));
  const className = `${
    size === "small" ? "size-4" : size === "medium" ? "size-6" : "size-8"
  } text-transparent`;

  let stars = [];
  for (let i = 1; i <= maxStars; i++) {
    if (i <= normalizeRating)
      stars.push(<StarIcon key={i} fill="var(--star)" className={className} />);
    else if (i - 0.5 <= normalizeRating)
      stars.push(
        <StarHalfIcon key={i} fill="var(--star)" className={className} />
      );
    else
      stars.push(
        <StarIcon key={i} fill="var(--muted)" className={className} />
      );
  }

  return (
    <div className="flex-center gap-2">
      <div className="flex-center gap-0.5">{stars}</div>

      {showScore && (
        <span className="font-heading text-xl">
          {normalizeRating.toFixed(1)}
        </span>
      )}
    </div>
  );
}
