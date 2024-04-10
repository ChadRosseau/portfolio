'use client'
import clsx from 'clsx';
import Image from 'next/image';
import { FC, useEffect, useState } from 'react'

const FlippedImage: FC<{ url: string, alt: string, startDelay: number, className?: string, cancelled: boolean }> = ({ url, alt, startDelay, className, cancelled }) => {
  const [hidden, setHidden] = useState<boolean>(true);

  const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

  useEffect(() => {
    const playNameAnimation = async () => {
      await sleep(startDelay);
      setHidden(false);
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
  }, [startDelay]);

  return <div className={clsx(className, !cancelled && hidden ? "rotate-x-450" : "rotate-x-0", !cancelled && "transition-all duration-1000")}>
    <Image
      src={url}
      alt={alt}
      fill
    />
  </div>;

}

export default FlippedImage;
