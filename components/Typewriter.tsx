'use client'
import { FC, useEffect, useState } from 'react'

const Typewriter: FC<{ text: string, startDelay: number, keyDelay: number, disabled?: boolean, cancelled: boolean }> = ({ text, startDelay, keyDelay, disabled, cancelled }) => {

  const [body, setBody] = useState<string>("‌‌");

  const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

  useEffect(() => {
    if (disabled) return;
    const playNameAnimation = async () => {
      await sleep(startDelay);
      let tmp = body;
      for (let i = 0; i < text.length; i++) {
        if (cancelled) break;
        await sleep(keyDelay);
        tmp += text[i];
        setBody(tmp);
      }
    };
    const onPageLoad = () => {
      playNameAnimation();
    };

    // Check if the page has already loaded
    if (document.readyState === "complete") {
      onPageLoad();
    } else {
      window.addEventListener("load", onPageLoad);
      // Remove the event listener when component unmounts
      return () => window.removeEventListener("load", onPageLoad);
    }
  }, [disabled, keyDelay, startDelay, text, cancelled]);

  if (disabled) return '';

  return <span>{cancelled ? text : body}</span>;

}

export default Typewriter;
