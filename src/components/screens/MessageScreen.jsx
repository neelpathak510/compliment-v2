"use client";

import { Button } from "../Button";

export default function MessageScreen({ onNext }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center">
      <p className="text-xl mb-8">
        There’s just one more thing I need to ask you…
      </p>

      <Button onClick={onNext}>
        The Million Dollar Question 💖
      </Button>
    </div>
  );
}
