import { useState, useEffect, useRef } from 'react';

const useSticky = () => {
 const [isSticky, setIsSticky] = useState(false);
 const elementRef = useRef(null);

 const handleScroll = () => {
    if (elementRef.current) {
      setIsSticky(window.scrollY > elementRef.current.offsetTop);
    }
 };

 useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
 }, []);

 return { isSticky, elementRef };
};

export default useSticky;
