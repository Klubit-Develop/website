import React from 'react';
import { motion, useInView, type Variants } from 'framer-motion';

interface AnimatedSectionProps {
    children: React.ReactNode;
    variants?: Variants;
    className?: string;
}

function AnimatedSection({ children, variants, className = "" }: AnimatedSectionProps) {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    const defaultVariants: Variants = {
        hidden: { opacity: 0, y: 60 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as const }
        }
    };

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={variants || defaultVariants}
            className={className}
        >
            {children}
        </motion.div>
    );
}

export default AnimatedSection;