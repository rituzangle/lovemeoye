import { useState, useEffect } from 'react';
import { Platform } from 'react-native';

export type Language = 'en' | 'fr' | 'es' | 'da' | 'de' | 'pa';

export interface Translations {
  // App Title
  appTitle: string;
  
  // Game Messages - Child-friendly but maintaining tradition
  tapPetalInstruction: string;
  lovesMe: string;
  lovesMeNot: string;
  theyLoveMe: string;
  theyLoveMeNot: string;
  tapPetalToStart: string;
  
  // Game Info
  petalsRemaining: string;
  of: string;
  startingWith: string;
  
  // Statistics
  gameStatistics: string;
  gamesPlayed: string;
  
  // Navigation
  game: string;
  info: string;
  reset: string;
  exit: string;
  language: string;
  
  // About Page - Educational focus while maintaining tradition
  aboutGame: string;
  howToPlay: string;
  howToPlayText: string;
  theTradition: string;
  traditionText: string;
  gameFeatures: string;
  randomizedPetals: string;
  randomizedBeginnings: string;
  celebrationHappy: string;
  nudgeOtherwise: string;
  gameStatsTally: string;
  
  // Educational Benefits
  educationalBenefits: string;
  countingPractice: string;
  natureLearning: string;
  patternRecognition: string;
  motorSkills: string;
  culturalTraditions: string;
  familyBonding: string;
  
  // Footer
  copyright: string;
  madeWithLove: string;
  
  // Buttons
  playAgain: string;
  
  // Accessibility
  playDaisyGame: string;
  resetGame: string;
  exitApp: string;
  learnAboutGame: string;
  selectLanguage: string;
}

const translations: Record<Language, Translations> = {
  en: {
    appTitle: 'Loves Me, Loves Me Not',
    tapPetalInstruction: 'Tap a petal, any petal to pluck it.',
    lovesMe: 'Loves Me...',
    lovesMeNot: 'Loves Me Not...',
    theyLoveMe: 'They Love Me! 💕',
    theyLoveMeNot: 'They Love Me Not... 💔',
    tapPetalToStart: 'Tap a petal to start!',
    petalsRemaining: 'petals remaining',
    of: 'of',
    startingWith: 'Starting with:',
    gameStatistics: 'Game Statistics',
    gamesPlayed: 'Games Played:',
    game: 'Game',
    info: 'Info',
    reset: 'Reset',
    exit: 'Exit',
    language: 'Language',
    aboutGame: 'About the Game',
    howToPlay: 'How to Play',
    howToPlayText: 'Tap a petal. Then another. And another… With each pluck, the daisy flips between "Loves Me" and "Loves Me Not"… until the last petal reveals your fate. A timeless tradition made digital and family-friendly!',
    theTradition: 'The Tradition',
    traditionText: 'This age-old tradition of petal-plucking has been enjoyed by families for centuries. Children and adults have played this gentle game to make decisions or just for fun. It\'s a beautiful way to connect with nature and enjoy a moment of wonder!\n\nLearn more about this lovely tradition!',
    gameFeatures: 'Game Features',
    randomizedPetals: 'Randomized: 8–35 petals for extended variety',
    randomizedBeginnings: 'Different starting phrases each game',
    celebrationHappy: 'Beautiful celebrations for happy endings',
    nudgeOtherwise: 'Gentle encouragement to try again',
    gameStatsTally: 'Track your games and outcomes',
    educationalBenefits: 'Educational Benefits',
    countingPractice: 'Counting and number practice (1-35)',
    natureLearning: 'Learning about flowers and nature',
    patternRecognition: 'Decision-making and pattern recognition',
    motorSkills: 'Fine motor skills development',
    culturalTraditions: 'Cultural traditions and history',
    familyBonding: 'Family bonding and shared experiences',
    copyright: '© 2025 Ritu Sangha (ritusbooks.com)\nAll rights reserved.',
    madeWithLove: 'Made with love for families who cherish timeless traditions! 🌼',
    playAgain: 'Play Again',
    playDaisyGame: 'Play the classic daisy petal game',
    resetGame: 'Reset the game and start over',
    exitApp: 'Exit the application',
    learnAboutGame: 'Learn about the game and tradition',
    selectLanguage: 'Select your language',
  },
  fr: {
    appTitle: 'M\'aime, Ne M\'aime Pas',
    tapPetalInstruction: 'Touchez un pétale, n\'importe lequel.',
    lovesMe: 'M\'aime...',
    lovesMeNot: 'Ne M\'aime Pas...',
    theyLoveMe: 'M\'aime ! 💕',
    theyLoveMeNot: 'Ne M\'aime Pas... 💔',
    tapPetalToStart: 'Touchez un pétale pour commencer !',
    petalsRemaining: 'pétales restants',
    of: 'sur',
    startingWith: 'Commençant par :',
    gameStatistics: 'Statistiques du Jeu',
    gamesPlayed: 'Parties Jouées :',
    game: 'Jeu',
    info: 'Info',
    reset: 'Reset',
    exit: 'Sortir',
    language: 'Langue',
    aboutGame: 'À Propos du Jeu',
    howToPlay: 'Comment Jouer',
    howToPlayText: 'Touchez un pétale. Puis un autre. Et encore un autre… À chaque effeuillage, la marguerite alterne entre "M\'aime" et "Ne m\'aime pas"… jusqu\'à ce que le dernier pétale révèle votre destin. Une tradition intemporelle rendue numérique et familiale !',
    theTradition: 'La Tradition',
    traditionText: 'Cette tradition ancestrale d\'effeuillage a été appréciée par les familles pendant des siècles. Les enfants et les adultes ont joué à ce jeu doux pour prendre des décisions ou juste pour s\'amuser. C\'est une belle façon de se connecter avec la nature !\n\nApprenez-en plus sur cette belle tradition !',
    gameFeatures: 'Fonctionnalités du Jeu',
    randomizedPetals: 'Aléatoire : 8–35 pétales pour une variété étendue',
    randomizedBeginnings: 'Phrases de départ différentes à chaque jeu',
    celebrationHappy: 'Belles célébrations pour les fins heureuses',
    nudgeOtherwise: 'Encouragement doux pour réessayer',
    gameStatsTally: 'Suivez vos jeux et résultats',
    educationalBenefits: 'Avantages Éducatifs',
    countingPractice: 'Pratique du comptage et des nombres (1-35)',
    natureLearning: 'Apprentissage des fleurs et de la nature',
    patternRecognition: 'Prise de décision et reconnaissance de motifs',
    motorSkills: 'Développement de la motricité fine',
    culturalTraditions: 'Traditions culturelles et histoire',
    familyBonding: 'Liens familiaux et expériences partagées',
    copyright: '© 2025 Ritu Sangha (ritusbooks.com)\nTous droits réservés.',
    madeWithLove: 'Fait avec amour pour les familles qui chérissent les traditions intemporelles ! 🌼',
    playAgain: 'Rejouer',
    playDaisyGame: 'Jouer au jeu classique de pétales de marguerite',
    resetGame: 'Remettre à zéro et recommencer',
    exitApp: 'Quitter l\'application',
    learnAboutGame: 'En savoir plus sur le jeu et la tradition',
    selectLanguage: 'Sélectionnez votre langue',
  },
  es: {
    appTitle: 'Me Quiere, No Me Quiere',
    tapPetalInstruction: 'Toca un pétalo, cualquier pétalo.',
    lovesMe: 'Me Quiere...',
    lovesMeNot: 'No Me Quiere...',
    theyLoveMe: '¡Me Quiere! 💕',
    theyLoveMeNot: 'No Me Quiere... 💔',
    tapPetalToStart: '¡Toca un pétalo para empezar!',
    petalsRemaining: 'pétalos restantes',
    of: 'de',
    startingWith: 'Empezando con:',
    gameStatistics: 'Estadísticas del Juego',
    gamesPlayed: 'Partidas Jugadas:',
    game: 'Juego',
    info: 'Info',
    reset: 'Reset',
    exit: 'Salir',
    language: 'Idioma',
    aboutGame: 'Acerca del Juego',
    howToPlay: 'Cómo Jugar',
    howToPlayText: 'Toca un pétalo. Luego otro. Y otro más… Con cada deshoje, la margarita alterna entre "Me quiere" y "No me quiere"… hasta que el último pétalo revele tu destino. ¡Una tradición atemporal hecha digital y familiar!',
    theTradition: 'La Tradición',
    traditionText: 'Esta tradición ancestral de deshojar ha sido disfrutada por familias durante siglos. Niños y adultos han jugado este juego gentil para tomar decisiones o solo por diversión. ¡Es una hermosa manera de conectar con la naturaleza!\n\n¡Aprende más sobre esta hermosa tradición!',
    gameFeatures: 'Características del Juego',
    randomizedPetals: 'Aleatorio: 8–35 pétalos para variedad extendida',
    randomizedBeginnings: 'Frases de inicio diferentes cada juego',
    celebrationHappy: 'Hermosas celebraciones para finales felices',
    nudgeOtherwise: 'Suave aliento para intentar de nuevo',
    gameStatsTally: 'Rastrea tus juegos y resultados',
    educationalBenefits: 'Beneficios Educativos',
    countingPractice: 'Práctica de conteo y números (1-35)',
    natureLearning: 'Aprendizaje sobre flores y naturaleza',
    patternRecognition: 'Toma de decisiones y reconocimiento de patrones',
    motorSkills: 'Desarrollo de habilidades motoras finas',
    culturalTraditions: 'Tradiciones culturales e historia',
    familyBonding: 'Vínculos familiares y experiencias compartidas',
    copyright: '© 2025 Ritu Sangha (ritusbooks.com)\nTodos los derechos reservados.',
    madeWithLove: '¡Hecho con amor para familias que aprecian las tradiciones atemporales! 🌼',
    playAgain: 'Jugar de Nuevo',
    playDaisyGame: 'Jugar al juego clásico de pétalos de margarita',
    resetGame: 'Reiniciar el juego y empezar de nuevo',
    exitApp: 'Salir de la aplicación',
    learnAboutGame: 'Aprender sobre el juego y la tradición',
    selectLanguage: 'Selecciona tu idioma',
  },
  da: {
    appTitle: 'Elsker Mig, Elsker Mig Ikke',
    tapPetalInstruction: 'Tryk på et kronblad, hvilket som helst.',
    lovesMe: 'Elsker Mig...',
    lovesMeNot: 'Elsker Mig Ikke...',
    theyLoveMe: 'De Elsker Mig! 💕',
    theyLoveMeNot: 'De Elsker Mig Ikke... 💔',
    tapPetalToStart: 'Tryk på et kronblad for at starte!',
    petalsRemaining: 'kronblade tilbage',
    of: 'af',
    startingWith: 'Starter med:',
    gameStatistics: 'Spil Statistikker',
    gamesPlayed: 'Spil Spillet:',
    game: 'Spil',
    info: 'Info',
    reset: 'Reset',
    exit: 'Afslut',
    language: 'Sprog',
    aboutGame: 'Om Spillet',
    howToPlay: 'Sådan Spiller Du',
    howToPlayText: 'Tryk på et kronblad. Så et andet. Og endnu et… Med hvert pluk skifter margueriten mellem "Elsker mig" og "Elsker mig ikke"… indtil det sidste kronblad afslører din skæbne. En tidløs tradition gjort digital og familievenlig!',
    theTradition: 'Traditionen',
    traditionText: 'Denne ældgamle tradition med at plukke kronblade har været nydt af familier i århundreder. Børn og voksne har spillet dette blide spil for at træffe beslutninger eller bare for sjov. Det er en smuk måde at forbinde med naturen på!\n\nLær mere om denne dejlige tradition!',
    gameFeatures: 'Spil Funktioner',
    randomizedPetals: 'Tilfældigt: 8–35 kronblade for udvidet variation',
    randomizedBeginnings: 'Forskellige startfraser hvert spil',
    celebrationHappy: 'Smukke fejringer for lykkelige slutninger',
    nudgeOtherwise: 'Blid opmuntring til at prøve igen',
    gameStatsTally: 'Spor dine spil og resultater',
    educationalBenefits: 'Uddannelsesmæssige Fordele',
    countingPractice: 'Tælling og talpraksis (1-35)',
    natureLearning: 'Læring om blomster og natur',
    patternRecognition: 'Beslutningstagning og mønstergenkendelse',
    motorSkills: 'Udvikling af finmotorik',
    culturalTraditions: 'Kulturelle traditioner og historie',
    familyBonding: 'Familiebånd og delte oplevelser',
    copyright: '© 2025 Ritu Sangha (ritusbooks.com)\nAlle rettigheder forbeholdes.',
    madeWithLove: 'Lavet med kærlighed til familier, der værdsætter tidløse traditioner! 🌼',
    playAgain: 'Spil Igen',
    playDaisyGame: 'Spil det klassiske marguerit kronblad spil',
    resetGame: 'Nulstil spillet og start forfra',
    exitApp: 'Afslut applikationen',
    learnAboutGame: 'Lær om spillet og traditionen',
    selectLanguage: 'Vælg dit sprog',
  },
  de: {
    appTitle: 'Er Liebt Mich, Er Liebt Mich Nicht',
    tapPetalInstruction: 'Tippe auf ein Blütenblatt, irgendein Blütenblatt.',
    lovesMe: 'Er Liebt Mich...',
    lovesMeNot: 'Er Liebt Mich Nicht...',
    theyLoveMe: 'Er Liebt Mich! 💕',
    theyLoveMeNot: 'Er Liebt Mich Nicht... 💔',
    tapPetalToStart: 'Tippe auf ein Blütenblatt zum Starten!',
    petalsRemaining: 'Blütenblätter übrig',
    of: 'von',
    startingWith: 'Beginnend mit:',
    gameStatistics: 'Spiel Statistiken',
    gamesPlayed: 'Gespielte Spiele:',
    game: 'Spiel',
    info: 'Info',
    reset: 'Reset',
    exit: 'Beenden',
    language: 'Sprache',
    aboutGame: 'Über das Spiel',
    howToPlay: 'Wie Man Spielt',
    howToPlayText: 'Tippe auf ein Blütenblatt. Dann auf ein anderes. Und noch eins… Mit jedem Zupfen wechselt das Gänseblümchen zwischen "Er liebt mich" und "Er liebt mich nicht"… bis das letzte Blütenblatt dein Schicksal offenbart. Eine zeitlose Tradition digital und familienfreundlich gemacht!',
    theTradition: 'Die Tradition',
    traditionText: 'Diese uralte Tradition des Blütenblatt-Zupfens wurde von Familien jahrhundertelang genossen. Kinder und Erwachsene haben dieses sanfte Spiel gespielt, um Entscheidungen zu treffen oder einfach zum Spaß. Es ist eine schöne Art, sich mit der Natur zu verbinden!\n\nErfahre mehr über diese schöne Tradition!',
    gameFeatures: 'Spiel Funktionen',
    randomizedPetals: 'Zufällig: 8–35 Blütenblätter für erweiterte Abwechslung',
    randomizedBeginnings: 'Verschiedene Startphrasen jedes Spiel',
    celebrationHappy: 'Schöne Feiern für glückliche Enden',
    nudgeOtherwise: 'Sanfte Ermutigung zum nochmal versuchen',
    gameStatsTally: 'Verfolge deine Spiele und Ergebnisse',
    educationalBenefits: 'Bildungsvorteile',
    countingPractice: 'Zählen und Zahlenpraxis (1-35)',
    natureLearning: 'Lernen über Blumen und Natur',
    patternRecognition: 'Entscheidungsfindung und Mustererkennung',
    motorSkills: 'Entwicklung der Feinmotorik',
    culturalTraditions: 'Kulturelle Traditionen und Geschichte',
    familyBonding: 'Familienbindung und gemeinsame Erfahrungen',
    copyright: '© 2025 Ritu Sangha (ritusbooks.com)\nAlle Rechte vorbehalten.',
    madeWithLove: 'Mit Liebe für Familien gemacht, die zeitlose Traditionen schätzen! 🌼',
    playAgain: 'Nochmal Spielen',
    playDaisyGame: 'Das klassische Gänseblümchen-Blütenblatt-Spiel spielen',
    resetGame: 'Spiel zurücksetzen und neu starten',
    exitApp: 'Anwendung beenden',
    learnAboutGame: 'Über das Spiel und die Tradition lernen',
    selectLanguage: 'Wählen Sie Ihre Sprache',
  },
  pa: {
    appTitle: 'ਪਿਆਰ ਕਰਦੇ ਨੇ, ਪਿਆਰ ਨਹੀਂ ਕਰਦੇ',
    tapPetalInstruction: 'ਕੋਈ ਵੀ ਪੱਤੀ ਨੂੰ ਛੂਹੋ।',
    lovesMe: 'ਪਿਆਰ ਕਰਦੇ ਨੇ...',
    lovesMeNot: 'ਪਿਆਰ ਨਹੀਂ ਕਰਦੇ...',
    theyLoveMe: 'ਉਹ ਮੈਨੂੰ ਪਿਆਰ ਕਰਦੇ ਨੇ! 💕',
    theyLoveMeNot: 'ਉਹ ਮੈਨੂੰ ਪਿਆਰ ਨਹੀਂ ਕਰਦੇ.. 💔',
    tapPetalToStart: 'ਸ਼ੁਰੂ ਕਰਨ ਲਈ ਪੱਤੀ ਛੂਹੋ!',
    petalsRemaining: 'ਪੱਤੀਆਂ ਬਾਕੀ',
    of: 'ਵਿੱਚੋਂ',
    startingWith: 'ਸ਼ੁਰੂਆਤ:',
    gameStatistics: 'ਖੇਡ ਦੇ ਅੰਕੜੇ',
    gamesPlayed: 'ਖੇਡੀਆਂ ਗਈਆਂ:',
    game: 'ਖੇਡ',
    info: 'ਜਾਣਕਾਰੀ',
    reset: 'ਰੀਸੈੱਟ',
    exit: 'ਬਾਹਰ',
    language: 'ਭਾਸ਼ਾ',
    aboutGame: 'ਖੇਡ ਬਾਰੇ',
    howToPlay: 'ਕਿਵੇਂ ਖੇਡਣਾ ਹੈ',
    howToPlayText: 'ਇੱਕ ਪੱਤੀ ਛੂਹੋ। ਫਿਰ ਦੂਜੀ। ਅਤੇ ਇੱਕ ਹੋਰ... ਹਰ ਪੱਤੀ ਨਾਲ, ਫੁੱਲ "ਪਿਆਰ ਕਰਦਾ ਹੈ" ਅਤੇ "ਪਿਆਰ ਨਹੀਂ ਕਰਦਾ" ਵਿਚਕਾਰ ਬਦਲਦਾ ਹੈ... ਜਦੋਂ ਤੱਕ ਆਖਰੀ ਪੱਤੀ ਤੁਹਾਡੀ ਕਿਸਮਤ ਦਾ ਖੁਲਾਸਾ ਨਹੀਂ ਕਰਦੀ। ਇੱਕ ਪੁਰਾਣੀ ਪਰੰਪਰਾ ਜੋ ਪਰਿਵਾਰਕ ਅਤੇ ਡਿਜੀਟਲ ਬਣਾਈ ਗਈ ਹੈ!',
    theTradition: 'ਪਰੰਪਰਾ',
    traditionText: 'ਪੱਤੀਆਂ ਤੋੜਨ ਦੀ ਇਹ ਪੁਰਾਣੀ ਪਰੰਪਰਾ ਸਦੀਆਂ ਤੋਂ ਪਰਿਵਾਰਾਂ ਦੁਆਰਾ ਮਨਾਈ ਜਾਂਦੀ ਰਹੀ ਹੈ। ਬੱਚੇ ਅਤੇ ਬਾਲਗ ਇਸ ਸੁੰਦਰ ਖੇਡ ਨੂੰ ਫੈਸਲੇ ਲੈਣ ਲਈ ਜਾਂ ਸਿਰਫ਼ ਮਜ਼ੇ ਲਈ ਖੇਡਦੇ ਹਨ। ਇਹ ਕੁਦਰਤ ਨਾਲ ਜੁੜਨ ਦਾ ਇੱਕ ਸੁੰਦਰ ਤਰੀਕਾ ਹੈ!\n\nਇਸ ਸੁੰਦਰ ਪਰੰਪਰਾ ਬਾਰੇ ਹੋਰ ਜਾਣੋ!',
    gameFeatures: 'ਖੇਡ ਦੀਆਂ ਵਿਸ਼ੇਸ਼ਤਾਵਾਂ',
    randomizedPetals: 'ਬੇਤਰਤੀਬ: 8-35 ਪੱਤੀਆਂ - ਵਿਭਿੰਨਤਾ ਲਈ',
    randomizedBeginnings: 'ਹਰ ਖੇਡ ਵਿੱਚ ਵੱਖਰੀ ਸ਼ੁਰੂਆਤ',
    celebrationHappy: 'ਖੁਸ਼ ਅੰਤ ਲਈ ਸੁੰਦਰ ਜਸ਼ਨ',
    nudgeOtherwise: 'ਦੁਬਾਰਾ ਕੋਸ਼ਿਸ਼ ਕਰਨ ਲਈ ਨਰਮ ਹੌਸਲਾ',
    gameStatsTally: 'ਹੁਣ ਤੱਕ ਖੇਡਾਂ ਦੇ ਨਤੀਜੇ ',
    educationalBenefits: 'ਸਿੱਖਿਆ ਦੇ ਫਾਇਦੇ',
    countingPractice: 'ਗਿਣਤੀ ਅਤੇ ਨੰਬਰ ਅਭਿਆਸ (1-35)',
    natureLearning: 'ਫੁੱਲਾਂ ਅਤੇ ਕੁਦਰਤ ਬਾਰੇ ਸਿੱਖਣਾ',
    patternRecognition: 'ਫੈਸਲਾ ਲੈਣਾ ਅਤੇ ਪੈਟਰਨ ਪਛਾਣ',
    motorSkills: 'ਬਾਰੀਕ ਮੋਟਰ ਹੁਨਰ ਵਿਕਾਸ',
    culturalTraditions: 'ਸੱਭਿਆਚਾਰਕ ਪਰੰਪਰਾਵਾਂ ਅਤੇ ਇਤਿਹਾਸ',
    familyBonding: 'ਪਰਿਵਾਰਕ ਬੰਧਨ ਅਤੇ ਸਾਂਝੇ ਅਨੁਭਵ',
    copyright: '© 2025 ਰਿਤੂ ਸੰਘਾ (ritusbooks.com)\nਸਾਰੇ ਅਧਿਕਾਰ ਸੁਰੱਖਿਤ।',
    madeWithLove: 'ਉਨ੍ਹਾਂ ਪਰਿਵਾਰਾਂ ਲਈ ਪਿਆਰ ਨਾਲ ਬਣਾਇਆ ਗਿਆ ਜੋ ਸਮੇਂ ਦੀਆਂ ਪਰੰਪਰਾਵਾਂ ਨੂੰ ਸੰਭਾਲਦੇ ਹਨ! 🌼',
    playAgain: 'ਦੁਬਾਰਾ ਖੇਡੋ',
    playDaisyGame: 'ਕਲਾਸਿਕ ਗੁਲਦਾਉਦੀ ਪੱਤੀ ਖੇਡ ਖੇਡੋ',
    resetGame: 'ਖੇਡ ਰੀਸੈੱਟ ਕਰੋ ਅਤੇ ਦੁਬਾਰਾ ਸ਼ੁਰੂ ਕਰੋ',
    exitApp: 'ਬੰਦ/ ਖ਼ਤਮ ਕਰੋ',
    learnAboutGame: 'ਖੇਡ ਅਤੇ ਪਰੰਪਰਾ ਬਾਰੇ ਸਿੱਖੋ',
    selectLanguage: 'ਆਪਣੀ ਭਾਸ਼ਾ ਚੁਣੋ',
  },
};

// Global language state for instant updates across all components
let globalLanguageState: Language = 'en';
let globalLanguageListeners: ((language: Language) => void)[] = [];

// Function to change language globally and notify all components instantly
const changeGlobalLanguage = (language: Language) => {
  globalLanguageState = language;
  globalLanguageListeners.forEach(listener => listener(language));
};

export function useLanguage() {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(globalLanguageState);

  // Subscribe to global language changes for instant updates
  useEffect(() => {
    const listener = (newLanguage: Language) => {
      setCurrentLanguage(newLanguage);
    };
    
    globalLanguageListeners.push(listener);
    
    // Cleanup listener on unmount
    return () => {
      globalLanguageListeners = globalLanguageListeners.filter(l => l !== listener);
    };
  }, []);

  // Initialize browser language detection on web
  useEffect(() => {
    if (Platform.OS === 'web' && globalLanguageState === 'en') {
      const browserLang = navigator.language.split('-')[0] as Language;
      if (translations[browserLang]) {
        changeGlobalLanguage(browserLang);
      }
    }
  }, []);

  const t = translations[currentLanguage];

  const changeLanguage = (language: Language) => {
    changeGlobalLanguage(language);
  };

  return {
    currentLanguage,
    changeLanguage,
    t,
  };
}