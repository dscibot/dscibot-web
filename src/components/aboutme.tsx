import React, { useRef, useEffect } from 'react';
import { Home, Mail, ShoppingCart, CircleUserRound, Linkedin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Portfolio() {
    const navigate = useNavigate();
    const rightPanelRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const rightPanel = rightPanelRef.current;

        const handleScroll = () => {
            // Vous pouvez ajouter ici des actions supplémentaires si nécessaire
        };

        if (rightPanel) {
            rightPanel.addEventListener('scroll', handleScroll);
        }

        return () => {
            if (rightPanel) {
                rightPanel.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white px-4 flex flex-col relative pt-10">
            <div className="flex-grow max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 pb-16">
                {/* Panneau de gauche fixe */}
                <div className="fixed lg:w-1/3 w-full bg-zinc-900 rounded-3xl shadow-xl p-6 space-y-6 overflow-y-auto">
                    <img
                        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
                        alt="Portrait"
                        className="rounded-2xl object-cover h-64 w-full"
                    />
                    <div>
                        <h2 className="text-xl font-bold mb-2">Bonjour👋</h2>
                        <p className="text-sm text-gray-300">
                            Je m'appelle <strong>Dorian Cibot</strong> et je suis passionné par l'informatique et les nouvelles technologies.
                            J’ai touché un peu à tout : réparation de matériel, programmation, et même quelques notions de DevOps. Ce que j’aime, c’est apprendre en continu et explorer tout ce que ce domaine peut offrir. Toujours curieux, je suis partant pour relever de nouveaux défis et progresser chaque jour un peu plus.
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        <span className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm">🗺️ Chaillac</span>
                        <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm">🌱 28 ans</span>
                    </div>
                </div>

                {/* Panneau de droite avec cartes navigables */}
                <div ref={rightPanelRef} className="lg:w-2/3 w-full lg:ml-[53.333%] space-y-4 overflow-y-auto">
                    {/* Informations Personnelles */}
                    <div className="bg-zinc-900 rounded-3xl p-6 shadow-lg">
                        <h3 className="text-2xl font-semibold mb-3">Informations Personnelles</h3>
                        <ul className="text-gray-300 list-disc ml-6 space-y-1">
                            <li>Né le 7 Janvier 1997</li>
                        </ul>
                    </div>

                    {/* Langues */}
                    <div className="bg-zinc-900 rounded-3xl p-6 shadow-lg">
                        <h3 className="text-2xl font-semibold mb-3">Langues</h3>
                        <ul className="text-gray-300 list-disc ml-6 space-y-1">
                            <li>Français: Natif</li>
                            <li>Anglais: Niveau correct</li>
                        </ul>
                    </div>

                    {/* Intérêts */}
                    <div className="bg-zinc-900 rounded-3xl p-6 shadow-lg">
                        <h3 className="text-2xl font-semibold mb-3">Intérêts</h3>
                        <ul className="text-gray-300 list-disc ml-6 space-y-1">
                            <li>Nouvelles Technologies</li>
                            <li>Domotique et Iot</li>
                            <li>Impression 3D</li>
                        </ul>
                    </div>

                    {/* Éducation */}
                    <div className="bg-zinc-900 rounded-3xl p-6 shadow-lg">
                        <h3 className="text-2xl font-semibold mb-3">Éducation</h3>
                        <ul className="text-gray-300 space-y-2">
                            <li>
                                <span className="font-semibold">Bachelor DevOps</span> - Studi, Administrateur système DevOps (2024 - Actuellement)
                            </li>
                            <li>
                                <span className="font-semibold">Licence Professionnelle</span> - IUT Limoges, Conduite de Projet: Développement Web (2016 - 2018)
                            </li>
                            <li>
                                <span className="font-semibold">BTS</span> - Lycée Turgot Limoges, Système Numérique option Informatique et réseau (2017 - 2018)
                            </li>
                            <li>
                                <span className="font-semibold">Bac Général</span> - Lycée Raoul Dautry Limoges, Scientifique (2008 - 2012)
                            </li>
                            <li>
                                <span className="font-semibold">Brevet</span> - Collège Guy de Maupassant, Limoges
                            </li>
                        </ul>
                    </div>

                    {/* Expérience */}
                    <div className="bg-zinc-900 rounded-3xl p-6 shadow-lg">
                        <h3 className="text-2xl font-semibold mb-3">Expérience</h3>
                        <ul className="text-gray-300 space-y-2">
                            <li>
                                <span className="font-semibold">E-commerce</span> - DSCMaker (Actuellement)
                            </li>
                            <li>
                                <span className="font-semibold">Technicien Informatique itinérant</span> - Solutions30, Temps Plein (2022 - Actuellement)
                            </li>
                            <li>
                                <span className="font-semibold">Conseiller de vente</span> - Alinéa Limoges, Temps Plein (2020 - 2021)
                            </li>
                            <li>
                                <span className="font-semibold">Employé de Restauration</span> - Alinéa Limoges, Temps Partiel (2019 - 2020)
                            </li>
                            <li>
                                <span className="font-semibold">Employé de Restauration</span> - Mcdonalds Limoges ZI Nord, Temps Partiel (2015 - 2018)
                            </li>
                            <li>
                                <span className="font-semibold">Stage</span> - Garage Automobile Dieselec, 6 Semaines (2017)
                            </li>
                        </ul>
                    </div>

                    {/* Compétences */}
                    <div className="bg-zinc-900 rounded-3xl p-6 shadow-lg">
                        <h3 className="text-2xl font-semibold mb-3">Compétences</h3>
                        <ul className="text-gray-300 list-disc ml-6 space-y-1">
                            <li>Diagnostic, Réparation, Maintenance Matériel: PC Fixe/Portable, Serveur, Imprimante, Baie de Brassage et autre matériel informatique</li>
                            <li>Développement: Connaissances de base sur les langages C++, Java, Python, Html/5, CSS, PHP, JavaScript, SQL</li>
                            <li>Logiciel: Bonne connaissance des systèmes d'exploitation Windows, Linux, Android, iOS, Mac</li>
                            <li>Autres: Très bonne connaissance de l'Anglais technique et Permis</li>
                        </ul>
                    </div>
                </div>
            </div>


            {/* Barre de navigation fixe */}
            <div className="fixed bottom-4 left-0 right-0 flex justify-center">
                <div className="bg-zinc-800 rounded-xl p-2 flex space-x-4 shadow-lg">
                    <div className="bg-gray-700 p-3 rounded-xl hover:scale-110 transition-transform cursor-pointer" onClick={() => navigate('/')}>
                        <Home className="w-5 h-5 text-white" />
                    </div>
                    <div className="bg-orange-500 p-3 rounded-xl hover:scale-110 transition-transform cursor-pointer" onClick={() => navigate('/aboutme')}>
                        <CircleUserRound className="w-5 h-5 text-white" />
                    </div>
                    <a href="mailto:contact@dscibot.ovh" className="bg-gray-700 p-3 rounded-xl hover:scale-110 transition-transform cursor-pointer">
                        <Mail className="w-5 h-5 text-white" />
                    </a>
                    <a href="https://www.linkedin.com/in/dorian-cibot-122a57148/" target="_blank" rel="noopener noreferrer" className="bg-gray-700 p-3 rounded-xl hover:scale-110 transition-transform cursor-pointer">
                        <Linkedin className="w-5 h-5 text-white" />
                    </a>
                    <a href="https://dscmaker.shop" target="_blank" rel="noopener noreferrer" className="bg-gray-700 p-3 rounded-xl hover:scale-110 transition-transform cursor-pointer">
                        <ShoppingCart className="w-5 h-5 text-white" />
                    </a>
                </div>
            </div>
        </div>
    );
}
