import { Globe, User, Award, Tag, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useNavigationStore } from '../../stores/useNavigationStore';

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
                            <Link to="/">
                                <img
                                    src="https://klubit.fra1.cdn.digitaloceanspaces.com/web/logo.png"
                                    alt="KLUBIT"
                                    className="h-6 w-auto cursor-pointer"
                                />
                            </Link>
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
                                    onMouseEnter={(e) => e.currentTarget.style.color = '#E5FF88'}
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
                                            className="hidden md:block fixed inset-0 z-40 cursor-default"
                                            onClick={closeDropdown}
                                            style={{ backgroundColor: 'transparent' }}
                                        />
                                        <div
                                            className={`dropdown-menu-container hidden md:block absolute left-1/2 -translate-x-1/2 mt-6 w-[680px] rounded-4xl shadow-2xl px-6 py-6 z-50 ${isClosing ? 'dropdown-menu-exit' : 'dropdown-menu-enter'
                                                }`}
                                            style={{
                                                backgroundColor: '#000000',
                                                border: '1px solid rgba(243, 243, 244, 0.1)',
                                                top: '100%'
                                            }}
                                        >
                                            <div className="grid grid-cols-2 gap-x-4 gap-y-4">
                                                <Link to="/klubs" className="space-y-2 cursor-pointer group p-4 rounded-2xl transition-all hover:bg-[#1A1D24] block" onClick={closeDropdown}>
                                                    <div className="flex items-center gap-3">
                                                        <Globe size={22} strokeWidth={1.5} className="text-[#ECF0F5] group-hover:text-[#E5FF88] transition-colors" />
                                                        <h3 className="text-[#ECF0F5] group-hover:text-[#E5FF88] transition-colors" style={{
                                                            fontFamily: '"Helvetica Now Display", -apple-system, BlinkMacSystemFont, sans-serif',
                                                            fontSize: '16px',
                                                            fontWeight: 500
                                                        }}>
                                                            Klubs
                                                        </h3>
                                                    </div>
                                                    <p style={{
                                                        color: '#ECF0F5',
                                                        fontFamily: '"Helvetica Now Display", -apple-system, BlinkMacSystemFont, sans-serif',
                                                        fontSize: '13px',
                                                        fontWeight: 400,
                                                        lineHeight: '18px'
                                                    }}>
                                                        Las herramientas inteligentes para tus eventos y espacios.
                                                    </p>
                                                </Link>

                                                <Link to="/users" className="space-y-2 cursor-pointer group p-4 rounded-2xl transition-all hover:bg-[#1A1D24] block" onClick={closeDropdown}>
                                                    <div className="flex items-center gap-3">
                                                        <User size={22} strokeWidth={1.5} className="text-[#ECF0F5] group-hover:text-[#E5FF88] transition-colors" />
                                                        <h3 className="text-[#ECF0F5] group-hover:text-[#E5FF88] transition-colors" style={{
                                                            fontFamily: '"Helvetica Now Display", -apple-system, BlinkMacSystemFont, sans-serif',
                                                            fontSize: '16px',
                                                            fontWeight: 500
                                                        }}>
                                                            Usuarios
                                                        </h3>
                                                    </div>
                                                    <p style={{
                                                        color: '#ECF0F5',
                                                        fontFamily: '"Helvetica Now Display", -apple-system, BlinkMacSystemFont, sans-serif',
                                                        fontSize: '13px',
                                                        fontWeight: 400,
                                                        lineHeight: '18px'
                                                    }}>
                                                        Descubre todos los beneficios que Klubit tiene para ti.
                                                    </p>
                                                </Link>

                                                <Link to="/rrpps" className="space-y-2 cursor-pointer group p-4 rounded-2xl transition-all hover:bg-[#1A1D24] block" onClick={closeDropdown}>
                                                    <div className="flex items-center gap-3">
                                                        <Award size={22} strokeWidth={1.5} className="text-[#ECF0F5] group-hover:text-[#E5FF88] transition-colors" />
                                                        <h3 className="text-[#ECF0F5] group-hover:text-[#E5FF88] transition-colors" style={{
                                                            fontFamily: '"Helvetica Now Display", -apple-system, BlinkMacSystemFont, sans-serif',
                                                            fontSize: '16px',
                                                            fontWeight: 500
                                                        }}>
                                                            RRPPs
                                                        </h3>
                                                    </div>
                                                    <p style={{
                                                        color: '#ECF0F5',
                                                        fontFamily: '"Helvetica Now Display", -apple-system, BlinkMacSystemFont, sans-serif',
                                                        fontSize: '13px',
                                                        fontWeight: 400,
                                                        lineHeight: '18px'
                                                    }}>
                                                        Gestiona tu comunidad y gana más con menos.
                                                    </p>
                                                </Link>

                                                <Link to="/brands" className="space-y-2 cursor-pointer group p-4 rounded-2xl transition-all hover:bg-[#1A1D24] block" onClick={closeDropdown}>
                                                    <div className="flex items-center gap-3">
                                                        <Tag size={22} strokeWidth={1.5} className="text-[#ECF0F5] group-hover:text-[#E5FF88] transition-colors" />
                                                        <h3 className="text-[#ECF0F5] group-hover:text-[#E5FF88] transition-colors" style={{
                                                            fontFamily: '"Helvetica Now Display", -apple-system, BlinkMacSystemFont, sans-serif',
                                                            fontSize: '16px',
                                                            fontWeight: 500
                                                        }}>
                                                            Marcas
                                                        </h3>
                                                    </div>
                                                    <p style={{
                                                        color: '#ECF0F5',
                                                        fontFamily: '"Helvetica Now Display", -apple-system, BlinkMacSystemFont, sans-serif',
                                                        fontSize: '13px',
                                                        fontWeight: 400,
                                                        lineHeight: '18px'
                                                    }}>
                                                        Llega a tu audiencia con datos y activaciones reales.
                                                    </p>
                                                </Link>
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>

                            <Link
                                to="/about-us"
                                className="hover:transition cursor-pointer"
                                style={{
                                    color: '#ECF0F5',
                                    fontFamily: '"Helvetica Now Display", -apple-system, BlinkMacSystemFont, sans-serif',
                                    fontSize: '14px',
                                    fontWeight: 700,
                                    lineHeight: 'normal'
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.color = '#E5FF88'}
                                onMouseLeave={(e) => e.currentTarget.style.color = '#ECF0F5'}
                            >
                                Conócenos
                            </Link>
                            <Link to="https://manager.klubit.io/" className="flex justify-center items-center hover:bg-white/20 transition cursor-pointer" style={{
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
                            </Link>
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
                    <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-white/10" style={{ minHeight: 'calc(100vh - 64px)' }}>
                        <div className="px-8 pt-4 pb-4 flex flex-col" style={{ minHeight: 'calc(100vh - 64px)' }}>
                            <div className="flex-1">
                                {/* Para quién dropdown */}
                                <div className="space-y-3 mb-4">
                                    <button
                                        className="flex items-center justify-between w-full py-2 hover:text-[#E5FF88] transition-colors"
                                        style={{
                                            color: '#ECF0F5',
                                            fontFamily: '"Helvetica Now Display", -apple-system, BlinkMacSystemFont, sans-serif',
                                            fontSize: '16px',
                                            fontWeight: 700,
                                            lineHeight: 'normal'
                                        }}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            toggleDropdown();
                                        }}
                                    >
                                        Para quién
                                        <svg
                                            className="w-4 h-4 transition-transform duration-300"
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
                                        <div className="space-y-4 pl-2">
                                            {/* Klubs */}
                                            <Link to="/klubs" className="flex items-start gap-3 py-3 group cursor-pointer" onClick={toggleMenu}>
                                                <Globe size={20} strokeWidth={1.5} className="text-[#ECF0F5] group-hover:text-[#E5FF88] transition-colors" style={{ flexShrink: 0, marginTop: '2px' }} />
                                                <div>
                                                    <h4 className="text-[#ECF0F5] group-hover:text-[#E5FF88] transition-colors" style={{
                                                        fontFamily: '"Helvetica Now Display", -apple-system, BlinkMacSystemFont, sans-serif',
                                                        fontSize: '16px',
                                                        fontWeight: 500,
                                                        marginBottom: '4px'
                                                    }}>
                                                        Klubs
                                                    </h4>
                                                    <p style={{
                                                        color: '#98AAC0',
                                                        fontFamily: '"Helvetica Now Display", -apple-system, BlinkMacSystemFont, sans-serif',
                                                        fontSize: '14px',
                                                        fontWeight: 400,
                                                        lineHeight: '20px'
                                                    }}>
                                                        Las herramientas inteligentes para tus eventos y espacios.
                                                    </p>
                                                </div>
                                            </Link>

                                            {/* Usuarios */}
                                            <Link to="/users" className="flex items-start gap-3 py-3 group cursor-pointer" onClick={toggleMenu}>
                                                <User size={20} strokeWidth={1.5} className="text-[#ECF0F5] group-hover:text-[#E5FF88] transition-colors" style={{ flexShrink: 0, marginTop: '2px' }} />
                                                <div>
                                                    <h4 className="text-[#ECF0F5] group-hover:text-[#E5FF88] transition-colors" style={{
                                                        fontFamily: '"Helvetica Now Display", -apple-system, BlinkMacSystemFont, sans-serif',
                                                        fontSize: '16px',
                                                        fontWeight: 500,
                                                        marginBottom: '4px'
                                                    }}>
                                                        Usuarios
                                                    </h4>
                                                    <p style={{
                                                        color: '#98AAC0',
                                                        fontFamily: '"Helvetica Now Display", -apple-system, BlinkMacSystemFont, sans-serif',
                                                        fontSize: '14px',
                                                        fontWeight: 400,
                                                        lineHeight: '20px'
                                                    }}>
                                                        Descubre todos los beneficios que Klubit tiene para ti.
                                                    </p>
                                                </div>
                                            </Link>

                                            {/* RRPPs */}
                                            <Link to="/rrpps" className="flex items-start gap-3 py-3 group cursor-pointer" onClick={toggleMenu}>
                                                <Award size={20} strokeWidth={1.5} className="text-[#ECF0F5] group-hover:text-[#E5FF88] transition-colors" style={{ flexShrink: 0, marginTop: '2px' }} />
                                                <div>
                                                    <h4 className="text-[#ECF0F5] group-hover:text-[#E5FF88] transition-colors" style={{
                                                        fontFamily: '"Helvetica Now Display", -apple-system, BlinkMacSystemFont, sans-serif',
                                                        fontSize: '16px',
                                                        fontWeight: 500,
                                                        marginBottom: '4px'
                                                    }}>
                                                        RRPPs
                                                    </h4>
                                                    <p style={{
                                                        color: '#98AAC0',
                                                        fontFamily: '"Helvetica Now Display", -apple-system, BlinkMacSystemFont, sans-serif',
                                                        fontSize: '14px',
                                                        fontWeight: 400,
                                                        lineHeight: '20px'
                                                    }}>
                                                        Gestiona tu comunidad y gana más con menos.
                                                    </p>
                                                </div>
                                            </Link>

                                            {/* Marcas */}
                                            <Link to="/brands" className="flex items-start gap-3 py-3 group cursor-pointer" onClick={toggleMenu}>
                                                <Tag size={20} strokeWidth={1.5} className="text-[#ECF0F5] group-hover:text-[#E5FF88] transition-colors" style={{ flexShrink: 0, marginTop: '2px' }} />
                                                <div>
                                                    <h4 className="text-[#ECF0F5] group-hover:text-[#E5FF88] transition-colors" style={{
                                                        fontFamily: '"Helvetica Now Display", -apple-system, BlinkMacSystemFont, sans-serif',
                                                        fontSize: '16px',
                                                        fontWeight: 500,
                                                        marginBottom: '4px'
                                                    }}>
                                                        Marcas
                                                    </h4>
                                                    <p style={{
                                                        color: '#98AAC0',
                                                        fontFamily: '"Helvetica Now Display", -apple-system, BlinkMacSystemFont, sans-serif',
                                                        fontSize: '14px',
                                                        fontWeight: 400,
                                                        lineHeight: '20px'
                                                    }}>
                                                        Llega a tu audiencia con datos y activaciones reales.
                                                    </p>
                                                </div>
                                            </Link>
                                        </div>
                                    )}
                                </div>

                                {/* Conócenos */}
                                <div className="border-t border-white/10 pt-4">
                                    <Link
                                        to="/about-us"
                                        className="block py-3"
                                        onClick={toggleMenu}
                                        style={{
                                            color: '#ECF0F5',
                                            fontFamily: '"Helvetica Now Display", -apple-system, BlinkMacSystemFont, sans-serif',
                                            fontSize: '16px',
                                            fontWeight: 700,
                                            lineHeight: 'normal'
                                        }}
                                    >
                                        Conócenos
                                    </Link>
                                </div>
                            </div>

                            {/* Button at bottom */}
                            <div className="mt-auto pt-4">
                                <Link to="https://manager.klubit.io/" className="w-full flex justify-center items-center hover:bg-white/20 transition cursor-pointer" style={{
                                    padding: '12px 16px',
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
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </nav>
        </>
    );
}

export default Navigation;