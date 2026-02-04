"use client";

import { Button } from "../Button";

export default function LetterScreen({ onNext }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <h2 className="text-3xl font-semibold mb-6">A Letter, Just for You 💌</h2>

      <p className="max-w-2xl text-lg leading-relaxed mb-10">
        {/* ✨ WRITE YOUR LETTER HERE ✨ */}
       Hiiii my babyyyy❤️❤️, this is your babyyy, he is currently very tireddd (cuz of fatigue u alr know lmao) but also really excited while he makes this for youuu. 

I feel really really bad that I am not there for valentines day and I just forgot to ask you to be my valentine before I left to go to India, but I tried doing something different to make it up (im soooo sorrryyy once againn my babyy) 

Anyways, I wanted to tell you that you will alwayssss be my valentine, it doesnt need to be valentines day for you to be my valentine, because mari mahi will always live in my heart, regardless of what day it is, you are in my heart and on my mind 24/7. 

You know one thing I really wish I did before we started dating, I wish I flirted with you more lol. It would've made it more spicy and fun between us, but issok thoo, I think I dont miss a chance to flirt with my cutie now lmao. 

The way you hold my hand when its cold is so soothing, small things like this mean a lot to me. Also that time when you slept on my shoulder in the auditorium and then you wrapped your arm around my arm and just fell asleep like a cute baby, omg I did not want to move because what if I disturbed my cute baby’s sleep. It was a really cute moment. Another time was when I slept on your shoulder in Zarifi's room, and when it was time to wake me up and go to class, u ran ur fingers in my hair and woke me up in a very cute wayy, omgg that all meant a lot to meee

Okayy this is it for my yap session

Love Neell  ❤️❤️❤️
      </p>

      <Button onClick={onNext}>Continue 💗</Button>
    </div>
  );
}
