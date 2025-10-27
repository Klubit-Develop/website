import React from 'react';
import { useInView } from 'framer-motion';

interface AnimatedCounterProps {
    value: string;
    suffix?: string;
}

function AnimatedCounter({ value, suffix = "%" }: AnimatedCounterProps) {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });
    const [displayValue, setDisplayValue] = React.useState(0);

    React.useEffect(() => {
        if (isInView) {
            let startTime: number;
            const duration = 2000;
            const startValue = 0;
            const endValue = parseInt(value);

            const animate = (currentTime: number) => {
                if (!startTime) startTime = currentTime;
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);

                // Función de easing más suave (easeOutCubic)
                const easeOutCubic = 1 - Math.pow(1 - progress, 3);
                const current = Math.floor(startValue + (endValue - startValue) * easeOutCubic);

                setDisplayValue(current);

                if (progress < 1) {
                    requestAnimationFrame(animate);
                } else {
                    // Asegurarse de que llegue al valor final exacto
                    setDisplayValue(endValue);
                }
            };

            requestAnimationFrame(animate);
        }
    }, [isInView, value]);

    return (
        <div 
            ref={ref} 
            className="mb-2" 
            style={{ 
                color: '#E5FF88',
                textAlign: 'center' as const,
                fontFamily: '"Helvetica Now Display", -apple-system, BlinkMacSystemFont, sans-serif',
                fontSize: '48px',
                fontStyle: 'normal' as const,
                fontWeight: 500,
                lineHeight: 'normal'
            }}
        >
            +{displayValue}{suffix}
        </div>
    );
}

export default AnimatedCounter;