import React, { useEffect, useState } from "react";

const useCheckMobileScreen = () => {
    const [width, setWidth] = useState(0);
    const handleWindowSizeChange = () => {
        setWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('DOMContentLoaded', handleWindowSizeChange);
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('DOMContentLoaded', handleWindowSizeChange);
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    return (width <= 768);
}

export default useCheckMobileScreen