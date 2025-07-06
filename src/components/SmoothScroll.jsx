import { useEffect, useRef } from 'react';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import LocomotiveScroll from 'locomotive-scroll';
let scroll = null;

export default function SmoothScrollClient({ children }) {
    const containerRef = useRef(null);


    useEffect(() => {
        const initScroll = async () => {
            try {
                if (containerRef.current) {
                    // Initialize Locomotive Scroll
                    scroll = new LocomotiveScroll({
                        el: containerRef.current,
                        smooth: true,
                        multiplier: 1,
                        class: 'is-inview',
                        scrollFromAnywhere: true,
                        smartphone: {
                            smooth: true
                        },
                        tablet: {
                            smooth: true
                        }
                    });
                    
                    // Update scroll on window resize
                    window.addEventListener('resize', () => {
                        scroll.update();
                    });
                }
            } catch (error) {
                console.error('Failed to initialize Locomotive Scroll:', error);
            }
        };
        
        initScroll();
        
        // Cleanup function
        return () => {
            if (scroll) {
                scroll.destroy();
                scroll = null;
            }
        };
    }, []);

    return (
        <div id="scroll-container" data-scroll-container 
            data-scroll-speed="1.5"
            ref={containerRef}>
            {children}
        </div>
    );
}
