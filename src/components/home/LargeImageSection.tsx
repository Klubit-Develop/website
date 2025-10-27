
import AnimatedSection from '../common/AnimatedSection';
import discoBackground from '../../assets/images/home/disco.jpg';

function LargeImageSection() {
    const scaleIn = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as any }
        }
    };

    return (
        <section className="py-20">
            <div className="w-full">
                <AnimatedSection variants={scaleIn}>
                    <img
                        src={discoBackground}
                        alt="Club experience"
                        className="w-full max-h-[600px] object-cover"
                    />
                </AnimatedSection>
            </div>
        </section>
    );
}

export default LargeImageSection;