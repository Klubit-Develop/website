import { Globe, User, Award, Tag, Menu, X } from 'lucide-react';
import { useNavigationStore } from '../stores/useNavigationStore';

function Navigation() {
    const { 
        isMenuOpen, 
        isDropdownOpen, 
        isClosing, 
        toggleMenu, 
        toggleDropdown, 
        closeDropdown 
    } = useNavigationStore();

    return (
        <>
            <style>{`
                @keyframes dropdownFadeIn {
                    from {
                        opacity: 0;
                        transform: translateY(-10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                @keyframes dropdownFadeOut {
                    from {
                        opacity: 1;
                        transform: translateY(0);
                    }
                    to {
                        opacity: 0;
                        transform: translateY(-10px);
                    }
                }
                
                .dropdown-menu-enter {
                    animation: dropdownFadeIn 0.3s ease-out forwards;
                }
                
                .dropdown-menu-exit {
                    animation: dropdownFadeOut 0.3s ease-out forwards;
                }
            `}</style>
            
            <nav className="fixed top-0 w-full bg-black/30 backdrop-blur-md z-50 border-b border-white/10">
                <div className="w-full px-8 sm:px-12 lg:px-24">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <img
                                src="https://klubit.fra1.cdn.digitaloceanspaces.com/web/logo.png"
                                alt="KLUBIT"
                                className="h-6 w-auto"
                            />
                        </div>

                        <div className="hidden md:flex items-center space-x-12">
                            <div className="relative">
                                <button
                                    className="dropdown-toggle-button flex items-center hover:transition cursor-pointer"
                                    style={{
                                        color: '#ECF0F5',
                                        fontFamily: '"Helvetica Now Display", -apple-system, BlinkMacSystemFont, sans-serif',
                                        fontSize: '14px',
                                        fontWeight: 700,
                                        lineHeight: 'normal'
                                    }}
                                    onMouseEnter={(e) => e.currentTarget.style.color = '#FF336D'}
                                    onMouseLeave={(e) => e.currentTarget.style.color = '#ECF0F5'}
                                    onClick={toggleDropdown}
                                >
                                    Para quién
                                    <svg 
                                        className="ml-1 w-4 h-4 transition-transform duration-300" 
                                        fill="none" 
                                        stroke="currentColor" 
                                        viewBox="0 0 24 24"
                                        style={{
                                            transform: isDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)'
                                        }}
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>

                                {isDropdownOpen && (
                                    <>
                                        <div
                                            className="fixed inset-0 z-40 cursor-default"
                                            onClick={closeDropdown}
                                            style={{ backgroundColor: 'transparent' }}
                                        />
                                        <div 
                                            className={`dropdown-menu-container absolute left-1/2 -translate-x-1/2 mt-6 w-[680px] rounded-[32px] shadow-2xl px-8 py-10 z-50 ${
                                                isClosing ? 'dropdown-menu-exit' : 'dropdown-menu-enter'
                                            }`}
                                            style={{ 
                                                backgroundColor: '#000000', 
                                                border: '1px solid rgba(243, 243, 244, 0.1)',
                                                top: '100%'
                                            }}
                                        >
                                            <div className="grid grid-cols-2 gap-x-16 gap-y-12">
                                                <div className="space-y-4 cursor-pointer group">
                                                    <div className="flex items-center gap-3" style={{ color: '#ECF0F5' }}>
                                                        <Globe size={24} strokeWidth={1.5} className="group-hover:text-[#FF336D] transition-colors" />
                                                        <h3 style={{
                                                            fontFamily: '"Helvetica Now Display", -apple-system, BlinkMacSystemFont, sans-serif',
                                                            fontSize: '18px',
                                                            fontWeight: 500
                                                        }} className="group-hover:text-[#FF336D] transition-colors">
                                                            Klubs
                                                        </h3>
                                                    </div>
                                                    <p style={{
                                                        color: '#ECF0F5',
                                                        fontFamily: '"Helvetica Now Display", -apple-system, BlinkMacSystemFont, sans-serif',
                                                        fontSize: '14px',
                                                        fontWeight: 400,
                                                        lineHeight: '20px'
                                                    }}>
                                                        Las herramientas inteligentes para tus eventos y espacios.
                                                    </p>
                                                </div>

                                                <div className="space-y-4 cursor-pointer group">
                                                    <div className="flex items-center gap-3" style={{ color: '#ECF0F5' }}>
                                                        <User size={24} strokeWidth={1.5} className="group-hover:text-[#FF336D] transition-colors" />
                                                        <h3 style={{
                                                            fontFamily: '"Helvetica Now Display", -apple-system, BlinkMacSystemFont, sans-serif',
                                                            fontSize: '18px',
                                                            fontWeight: 500
                                                        }} className="group-hover:text-[#FF336D] transition-colors">
                                                            Usuarios
                                                        </h3>
                                                    </div>
                                                    <p style={{
                                                        color: '#ECF0F5',
                                                        fontFamily: '"Helvetica Now Display", -apple-system, BlinkMacSystemFont, sans-serif',
                                                        fontSize: '14px',
                                                        fontWeight: 400,
                                                        lineHeight: '20px'
                                                    }}>
                                                        Descubre todos los beneficios que Klubit tiene para ti.
                                                    </p>
                                                </div>

                                                <div className="space-y-4 cursor-pointer group">
                                                    <div className="flex items-center gap-3" style={{ color: '#ECF0F5' }}>
                                                        <Award size={24} strokeWidth={1.5} className="group-hover:text-[#FF336D] transition-colors" />
                                                        <h3 style={{
                                                            fontFamily: '"Helvetica Now Display", -apple-system, BlinkMacSystemFont, sans-serif',
                                                            fontSize: '18px',
                                                            fontWeight: 500
                                                        }} className="group-hover:text-[#FF336D] transition-colors">
                                                            RRPPs
                                                        </h3>
                                                    </div>
                                                    <p style={{
                                                        color: '#ECF0F5',
                                                        fontFamily: '"Helvetica Now Display", -apple-system, BlinkMacSystemFont, sans-serif',
                                                        fontSize: '14px',
                                                        fontWeight: 400,
                                                        lineHeight: '20px'
                                                    }}>
                                                        Gestiona tu comunidad y gana más con menos.
                                                    </p>
                                                </div>

                                                <div className="space-y-4 cursor-pointer group">
                                                    <div className="flex items-center gap-3" style={{ color: '#ECF0F5' }}>
                                                        <Tag size={24} strokeWidth={1.5} className="group-hover:text-[#FF336D] transition-colors" />
                                                        <h3 style={{
                                                            fontFamily: '"Helvetica Now Display", -apple-system, BlinkMacSystemFont, sans-serif',
                                                            fontSize: '18px',
                                                            fontWeight: 500
                                                        }} className="group-hover:text-[#FF336D] transition-colors">
                                                            Marcas
                                                        </h3>
                                                    </div>
                                                    <p style={{
                                                        color: '#ECF0F5',
                                                        fontFamily: '"Helvetica Now Display", -apple-system, BlinkMacSystemFont, sans-serif',
                                                        fontSize: '14px',
                                                        fontWeight: 400,
                                                        lineHeight: '20px'
                                                    }}>
                                                        Llega a tu audiencia con datos y activaciones reales.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>

                            <a href="#" className="hover:transition cursor-pointer" style={{
                                color: '#ECF0F5',
                                fontFamily: '"Helvetica Now Display", -apple-system, BlinkMacSystemFont, sans-serif',
                                fontSize: '14px',
                                fontWeight: 700,
                                lineHeight: 'normal'
                            }} onMouseEnter={(e) => e.currentTarget.style.color = '#FF336D'} onMouseLeave={(e) => e.currentTarget.style.color = '#ECF0F5'}>Conócenos</a>
                            <button className="flex justify-center items-center hover:bg-white/20 transition cursor-pointer" style={{
                                padding: '6px 8px',
                                gap: '8px',
                                borderRadius: '8px',
                                background: '#252E39',
                                color: '#ECF0F5',
                                textAlign: 'center',
                                fontFamily: '"Helvetica Now Display", -apple-system, BlinkMacSystemFont, sans-serif',
                                fontSize: '14px',
                                fontWeight: 700,
                                lineHeight: 'normal'
                            }}>
                                Accede al Klub Manager
                            </button>
                        </div>

                        <button
                            className="md:hidden cursor-pointer"
                            style={{ color: '#F3F3F4' }}
                            onClick={toggleMenu}
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {isMenuOpen && (
                    <div className="md:hidden bg-black/80 backdrop-blur-md border-t border-white/10">
                        <div className="px-4 pt-2 pb-4 space-y-3">
                            <a href="#" className="block py-2 hover:transition cursor-pointer" style={{
                                color: '#ECF0F5',
                                fontFamily: '"Helvetica Now Display", -apple-system, BlinkMacSystemFont, sans-serif',
                                fontSize: '14px',
                                fontWeight: 700,
                                lineHeight: 'normal'
                            }} onMouseEnter={(e) => e.currentTarget.style.color = '#FF336D'} onMouseLeave={(e) => e.currentTarget.style.color = '#ECF0F5'}>Para quién</a>
                            <a href="#" className="block py-2 hover:transition cursor-pointer" style={{
                                color: '#ECF0F5',
                                fontFamily: '"Helvetica Now Display", -apple-system, BlinkMacSystemFont, sans-serif',
                                fontSize: '14px',
                                fontWeight: 700,
                                lineHeight: 'normal'
                            }} onMouseEnter={(e) => e.currentTarget.style.color = '#FF336D'} onMouseLeave={(e) => e.currentTarget.style.color = '#ECF0F5'}>Conócenos</a>
                            <button className="w-full flex justify-center items-center hover:bg-white/20 transition cursor-pointer" style={{
                                padding: '6px 8px',
                                gap: '8px',
                                borderRadius: '8px',
                                background: '#252E39',
                                color: '#ECF0F5',
                                textAlign: 'center',
                                fontFamily: '"Helvetica Now Display", -apple-system, BlinkMacSystemFont, sans-serif',
                                fontSize: '14px',
                                fontWeight: 700,
                                lineHeight: 'normal'
                            }}>
                                Accede al Klub Manager
                            </button>
                        </div>
                    </div>
                )}
            </nav>
        </>
    );
}

export default Navigation;