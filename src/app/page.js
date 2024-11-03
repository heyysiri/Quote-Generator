"use client";
import { useState, useEffect } from "react";
import RefreshButton from "@/components/ui/Refreshbutton";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "@/components/ui/text-reveal-card";

export default function Home() {
  const quotes = [
    { text: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
    { text: "Do not wait to strike till the iron is hot, but make it hot by striking.", author: "William Butler Yeats" },
    { text: "The best way to predict the future is to invent it.", author: "Alan Kay" },
    { text: "Life is 10% what happens to us and 90% how we react to it.", author: "Charles R. Swindoll" },
    { text: "Success is not the key to happiness. Happiness is the key to success.", author: "Albert Schweitzer" },
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "In the end, we will remember not the words of our enemies, but the silence of our friends.", author: "Martin Luther King Jr." },
    { text: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.", author: "Ralph Waldo Emerson" },
    { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
    { text: "What lies behind us and what lies before us are tiny matters compared to what lies within us.", author: "Ralph Waldo Emerson" },
    { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
    { text: "You miss 100% of the shots you don't take.", author: "Wayne Gretzky" },
    { text: "Your time is limited, don't waste it living someone else's life.", author: "Steve Jobs" },
    { text: "The purpose of our lives is to be happy.", author: "Dalai Lama" },
    { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
    { text: "Get busy living or get busy dying.", author: "Stephen King" },
    { text: "You have within you right now, everything you need to deal with whatever the world can throw at you.", author: "Brian Tracy" },
    { text: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
    { text: "If you cannot do great things, do small things in a great way.", author: "Napoleon Hill" },
    { text: "The journey of a thousand miles begins with one step.", author: "Lao Tzu" },
  ];
  const [quote, setQuote] = useState({ text: "", author: "" });

  const getRandomQuote = () => {
    if (quotes.length > 0) {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      setQuote(quotes[randomIndex]);
    }
  };

  useEffect(() => {
    getRandomQuote()
  }, []);

  return (
    <div className="flex flex-col items-center justify-center bg-[#0E0E10] h-screen w-full space-y-4">
      <TextRevealCard text="Hover over this text to reveal quote" revealText={quote.text}>
        <TextRevealCardTitle>This is a random quote generator.</TextRevealCardTitle>
        <TextRevealCardDescription>Author: {quote.author}</TextRevealCardDescription>
      </TextRevealCard>

      <RefreshButton onClick={getRandomQuote} />
    </div>
  );
}
