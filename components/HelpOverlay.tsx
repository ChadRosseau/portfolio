import clsx from 'clsx';
import { FC } from 'react'

interface HelpOverlayProps {
  active: boolean;
  text: string;
  rotate?: boolean;
  wrap?: boolean;
}

const HelpOverlay: FC<HelpOverlayProps> = ({ active, text, rotate, wrap }) => {
  return <div className={clsx(!active && "opacity-0", "absolute top-0 left-0 w-full h-full bg-dark-100 bg-opacity-90 p-5 text-light flex justify-center items-center pointer-events-none transition-all duration-200 z-10")}>
    <p className={clsx(rotate && "rotate-90", !wrap && "text-nowrap", "text-2xl text-center font-medium")}>{text}</p>
  </div>
}

export default HelpOverlay;
