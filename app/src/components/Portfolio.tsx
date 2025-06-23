import React from 'react';
import { Home, Mail, ShoppingCart, CircleUserRound, Linkedin } from 'lucide-react';
import { FloatingCardComponent } from './FloatingCard';
import { TypeWriter } from './TypeWriter';
import { floatingCards } from '../data/floatingCards';
import { useNavigate } from 'react-router-dom'; // si tu utilises React Router

export default function Portfolio() {
    const navigate = useNavigate(); // pour navigation interne

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center relative overflow-hidden">
            {/* Cartes flottantes */}
            {floatingCards.map(card => (
                <FloatingCardComponent key={card.id} card={card} />
            ))}

            {/* Contenu principal */}
            <div className="text-center z-10 max-w-2xl mx-auto px-4">
                <div className="bg-gray-800/90 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-gray-700">
                    <div className="space-y-4">
                        <div className="text-white text-xl">
                            Bienvenue sur{' '}
                            <span className="bg-orange-500 text-white px-3 py-1 rounded-full inline-flex items-center">
                                <TypeWriter text="DSCIbot" delay={0} speed={120} />
                            </span>
                        </div>
                    </div>
                </div>

                {/* Navigation Icons */}
                <div className="flex justify-center space-x-4 mt-8 opacity-0 animate-fade-in" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
                    <div className="bg-orange-500 p-3 rounded-xl hover:scale-110 transition-transform cursor-pointer" onClick={() => navigate('/')}>
                        <Home className="w-5 h-5 text-white" />
                    </div>
                    <div
                        className="bg-gray-700 p-3 rounded-xl hover:scale-110 transition-transform cursor-pointer"
                        onClick={() => navigate('/aboutme')}
                    >
                        <CircleUserRound className="w-5 h-5 text-white" />
                    </div>
                    <a
                        href="mailto:contact@dscibot.ovh"
                        className="bg-gray-700 p-3 rounded-xl hover:scale-110 transition-transform cursor-pointer"
                    >
                        <Mail className="w-5 h-5 text-white" />
                    </a>
                    <a href="https://www.linkedin.com/in/dorian-cibot-122a57148/"
                        target="_blank"
                        rel="noopener noreferrer" className="bg-gray-700 p-3 rounded-xl hover:scale-110 transition-transform cursor-pointer">
                        <Linkedin className="w-5 h-5 text-white" />
                    </a>
                    <a
                        href="https://dscmaker.shop"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-700 p-3 rounded-xl hover:scale-110 transition-transform cursor-pointer"
                    >
                        <ShoppingCart className="w-5 h-5 text-white" />
                    </a>
                </div>

                {/* Made Badge */}
                <div className="absolute bottom-6 right-6 opacity-0 animate-fade-in" style={{ animationDelay: '5s', animationFillMode: 'forwards' }}>
                    <div className="bg-white text-black px-3 py-2 rounded-full text-sm font-medium flex items-center space-x-2">
                        <span>⚡</span>
                        <span>Made by DSC - Website is in construction</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
