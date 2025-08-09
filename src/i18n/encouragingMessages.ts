// src/i18n/encouragingMessages.ts
// imported into: components/HeartEffect.tsx
// This file contains encouraging messages in multiple languages for the "loves me, loves me not" game.
// Each language has its own set of messages to provide a localized experience.
// const encouragingMessages: {
//    en: string[]; // english
//    fr: string[]; // french
//    de: string[]; // german
//    es: string[]; // spanish
//    da: string[]; // danish
//    pa: string[]; // punjabi
//  };
import type { Language } from '@/hooks/useLanguage';
const encouragingMessages: Record<Language, string[]> = {
  en: [
    "Let's try another daisy! 🌼",
    "Every flower tells a different story! 🌸",
    "Plenty of fish... (I mean) daisies in this garden! 🌻",
    "We shall not care for those who don't! 🌺",
    "Time for a fresh daisy! 🌷",
    "Other daisies are waiting. Shall we... 🌼",
    "Pick another beautiful flower! 🌸",
    "Every petal has its own answer! ✨",
    "Try again with a new daisy! 🌻",
    "The garden has many more flowers! 🌺",
    "Sometimes flowers need more time! 🌼",
    "Forget that daisy, let's try another! 🌸",
    "A new daisy awaits its fate! 🌸",
  ],
  fr: [
    "Essaie une autre marguerite ! 🌼",
    "Chaque fleur raconte une histoire différente ! 🌸",
    "Peut-être que la prochaine dira 'il/elle m’aime' ! 🌻",
    "Les marguerites sont parfois mystérieuses ! 🌺",
    "Il est temps pour une nouvelle marguerite ! 🌷",
    "Les fleurs n’ont pas encore décidé ! 🌼",
    "Cueille une autre belle fleur ! 🌸",
    "Chaque pétale a sa propre réponse ! ✨",
    "Essaie encore avec une nouvelle marguerite ! 🌻",
    "Le jardin est plein d’autres fleurs ! 🌺",
    "Parfois, les fleurs ont besoin de plus de temps ! 🌼",
    "Une nouvelle marguerite attend son destin ! 🌸",
  ],
  es: [
    "¡Prueba con otra margarita! 🌼",
    "¡Cada flor cuenta una historia diferente! 🌸",
    "¡Quizás la próxima diga 'me quiere'! 🌻",
    "¡Las margaritas pueden ser misteriosas! 🌺",
    "¡Hora de una margarita fresca! 🌷",
    "¡Las flores aún están decidiendo! 🌼",
    "¡Elige otra flor hermosa! 🌸",
    "¡Cada pétalo tiene su propia respuesta! ✨",
    "¡Intenta de nuevo con una nueva margarita! 🌻",
    "¡El jardín tiene muchas más flores! 🌺",
    "¡A veces las flores necesitan más tiempo! 🌼",
    "¡Una nueva margarita espera su destino! 🌸",
  ],
  da: [
    "Prøv en anden marguerit! 🌼",
    "Hver blomst fortæller sin egen historie! 🌸",
    "Måske siger den næste 'elsker mig'! 🌻",
    "Margueritter kan være mystiske! 🌺",
    "Tid til en frisk marguerit! 🌷",
    "Blomsterne overvejer stadig! 🌼",
    "Pluk en anden smuk blomst! 🌸",
    "Hvert kronblad har sit eget svar! ✨",
    "Prøv igen med en ny marguerit! 🌻",
    "Haven har mange flere blomster! 🌺",
    "Nogle gange skal blomster bruge lidt tid! 🌼",
    "En ny marguerit venter på sin skæbne! 🌸",
  ],
  pa: [
    "ਇੱਕ ਹੋਰ ਫੁੱਲ ਨਾਲ਼ ਖੇਡੀਏ! 🌼",
    "ਹਰ ਫੁੱਲ ਇੱਕ ਵੱਖਰੀ ਕਹਾਣੀ ਦੱਸਦਾ ਹੈ! 🌸",
    "ਸ਼ਾਇਦ ਅਗਲਾ ਕਹੇ 'ਪਿਆਰ ਕਰਦੇ ਨੇ'! 🌻",
    "ਨਹੀਂ ਤਾਂ ਨਾ ਸਹੀ। ਕੋਈ ਹੋਰ ਸਹੀ! 🌺",
    "ਇੱਕ ਨਵੇਂ ਫੁੱਲ ਲਈ ਸਮਾਂ ਹੈ! 🌷",
    "ਫੁੱਲ ਅਜੇ ਵੀ ਸੋਚ ਰਹੇ ਹਨ! 🌼",
    "ਇੱਕ ਹੋਰ ਸੋਹਣਾ ਫੁੱਲ ਚੁਣੀਏ! 🌸",
    "ਹਰ ਪੰਖੁੜੀ ਦੀ ਆਪਣੀ ਜ਼ੁਬਾਨ ਹੁੰਦੀ ਹੈ! ✨",
    "ਇੱਕ ਨਵੇਂ ਫੁੱਲ ਨਾਲ ਮੁੜ ਕੋਸ਼ਿਸ਼ ਕਰੋ! 🌻",
    "ਬਾਗ ਵਿੱਚ ਹੋਰ ਵੀ ਬਹੁਤ ਫੁੱਲ ਹਨ! 🌺",
    "ਕਈ ਵਾਰੀ ਫੁੱਲਾਂ ਨੂੰ ਹੋਰ ਸਮਾਂ ਚਾਹੀਦਾ ਹੈ! 🌼",
    "ਭੁੱਲ ਜਾਓ ਉਸ ਫੁੱਲ ਨੂੰ, ਇੱਕ ਹੋਰ ਚੁਣੀਏ! 🌸",
    "ਇੱਕ ਨਵਾਂ ਫੁੱਲ ਆਪਣੀ ਕਿਸਮਤ ਦੀ ਉਡੀਕ ਕਰ ਰਿਹਾ ਹੈ! 🌸",
  ],
  de: [
  "Versuch’s mit einem anderen Gänseblümchen! 🌼",
  "Jede Blume erzählt ihre eigene Geschichte! 🌸",
  "Vielleicht sagt das nächste ‚er/sie liebt mich‘! 🌻",
  "Gänseblümchen sind manchmal geheimnisvoll! 🌺",
  "Zeit für ein frisches Gänseblümchen! 🌷",
  "Die Blumen überlegen noch! 🌼",
  "Pflück eine weitere schöne Blume! 🌸",
  "Jedes Blütenblatt hat seine eigene Antwort! ✨",
  "Versuch’s nochmal mit einem neuen Gänseblümchen! 🌻",
  "Der Garten hat noch viele Blumen! 🌺",
  "Manchmal brauchen Blumen etwas mehr Zeit! 🌼",
  "Ein neues Gänseblümchen wartet auf sein Schicksal! 🌸",
],

};

export default encouragingMessages;

// src/i18n/encouragingMessages.ts
// This file contains encouraging messages in multiple languages for the "loves me, loves me not
//" game. Each language has its own set of messages to provide a localized experience.
// The messages are designed to encourage players to try again with different flowers, emphasizing
// the fun and mystery of the game. The messages are stored in an object where each key
// represents a language code (like 'en' for English, 'fr' for French,
// 'es' for Spanish, etc.) and the value is an array of strings containing the messages in that
// language. This structure allows for easy access and expansion if more languages or messages are needed in
// the future.
// The messages are playful and light-hearted, making the game enjoyable for players of all ages.
// The messages encourage players to keep trying with different flowers, highlighting the
// unpredictability of the game and the idea that each flower can tell a different story.
// The messages are also designed to be culturally neutral, making them suitable for a wide audience.
// src/i18n/encouragingMessages.ts
// This file is part of the "loves me, loves me not" game, which is a fun and interactive way to
// explore the concept of love and chance through a simple flower-picking game.
// The game involves picking petals from a flower to determine if someone loves you or not,
// with each petal representing a different outcome. The encouraging messages are meant to
// keep players engaged and motivated, even if they don't get the desired outcome on their first try
// or if they need to try multiple times.
// The messages are crafted to be positive and uplifting, encouraging players to continue playing
// and to enjoy the process of discovering the outcome, rather than focusing solely on the result.
// The messages can be used in various parts of the game, such as after a player picks a flower


// export type EncouragingMessages = typeof encouragingMessages;
// export type Language = keyof EncouragingMessages;
// export type LanguageOption = {
// code: Language;
//  name: string;
//  flag: string;
//  nativeName: string;
//};
//export type LanguageOptions = LanguageOption[];
//export type EncouragingMessage = string;
//export type EncouragingMessagesByLanguage = {
//  [key in Language]: EncouragingMessage[];
//};
//export type EncouragingMessagesMap = {
//  [key: string]: EncouragingMessage[];
//};
//export type EncouragingMessagesMapByLanguage = {
//  [key in Language]: EncouragingMessage[];
//};
