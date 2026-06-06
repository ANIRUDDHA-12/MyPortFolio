"use client";

import { useState, useEffect } from "react";

export function useTypewriter(words: string[], typingSpeed = 80, deletingSpeed = 40, delayBetweenWords = 2000) {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);

  useEffect(() => {
    const i = loopNum % words.length;
    const fullText = words[i];

    let timer: NodeJS.Timeout;

    if (!isDeleting && text === fullText) {
      // Pause before deleting
      timer = setTimeout(() => setIsDeleting(true), delayBetweenWords);
    } else if (isDeleting && text === "") {
      // Move to next word
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
    } else {
      // Type or delete characters
      timer = setTimeout(
        () => {
          setText(
            isDeleting
              ? fullText.substring(0, text.length - 1)
              : fullText.substring(0, text.length + 1)
          );
        },
        isDeleting ? deletingSpeed : typingSpeed
      );
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, words, typingSpeed, deletingSpeed, delayBetweenWords]);

  return text;
}
