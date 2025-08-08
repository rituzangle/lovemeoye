# Technical Specifications

## Framework & Dependencies

### Core Framework
- **Expo SDK**: 53.0.0
- **Expo Router**: 4.0.17
- **React Native**: 0.74.6
- **TypeScript**: 5.3.3
- **Metro**: 0.82.4

### Key Dependencies
- **React Native Reanimated**: 3.16.1 (animations)
- **React Native Gesture Handler**: 2.20.2 (touch interactions)
- **React Native SVG**: 15.8.0 (custom graphics)
- **Expo Linear Gradient**: 14.0.1 (backgrounds)
- **Expo Haptics**: 14.0.1 (tactile feedback)
- **Lucide React Native**: 0.468.0 (icons)

### Font System
- **Expo Google Fonts**: Dancing Script & Poppins
- **Dancing Script**: Decorative headers and romantic text
- **Poppins**: Clean body text and UI elements

### Internationalization
- **Multi-Language Support**: 6 languages (English, French, Spanish, Danish, German, Punjabi)
- **Custom Hook**: `useLanguage()` for centralized language management
- **Auto-Detection**: Browser language detection on web platforms
- **Cultural Adaptation**: Culturally appropriate translations and phrasing
- **Punjabi Support**: Complete Gurmukhi script support with proper cultural context

## Platform Requirements

### iOS
- **Minimum Version**: 15.1 (required for Expo SDK 53.0.0)
- **Target SDK**: iOS 17+
- **Build Configuration**: Release with optimization
- **Deployment Target**: Set in `expo-build-properties`

### Android
- **Minimum SDK**: API 23 (Android 6.0)
- **Target SDK**: API 34 (Android 14)
- **Compile SDK**: API 34
- **Build Type**: AAB for Play Store

### Web
- **Browser Support**: Modern browsers with ES6+
- **Bundle Target**: ES2020
- **Output**: Static or server (configurable)
- **Performance**: 60fps animations
- **Language Detection**: Automatic browser locale detection

## Family-Friendly Architecture

### Child Safety Features
- **Zero Data Collection**: Complete privacy protection for families
- **Offline Operation**: No internet connectivity required
- **Age-Appropriate Content**: Traditional themes presented safely for all ages
- **Educational Value**: Extended counting practice (8-35 petals)
- **Cultural Learning**: Respectful presentation of timeless traditions

### Enhanced Gameplay
- **Extended Petal Range**: 8-35 petals for maximum educational benefit
- **Advanced Counting**: Higher number recognition for older children
- **Cultural Traditions**: Learning about heritage through play
- **Family Bonding**: Multi-generational enjoyment opportunities

## Internationalization Architecture

### Language Support
- **Languages**: English, French, Spanish, Danish, German, Punjabi (ਪੰਜਾਬੀ)
- **Detection**: Automatic browser language detection on web
- **Fallback**: English as default language
- **Cultural Adaptation**: Appropriate phrasing for each culture
- **Script Support**: Full Gurmukhi script rendering for Punjabi

### Punjabi Language Implementation
```typescript
// Punjabi translations with proper cultural context
pa: {
  appTitle: 'ਪਿਆਰ ਕਰਦੇ ਨੇ, ਪਿਆਰ ਨਹੀਂ ਕਰਦੇ',
  lovesMe: 'ਪਿਆਰ ਕਰਦੇ ਨੇ...',
  lovesMeNot: 'ਪਿਆਰ ਨਹੀਂ ਕਰਦੇ...',
  // ... complete translation set
}
```

### Translation System
```typescript
// Translation interface with comprehensive coverage
interface Translations {
  appTitle: string;
  tapPetalInstruction: string;
  lovesMe: string;
  lovesMeNot: string;
  // ... complete interface supporting all 6 languages
}

// Usage pattern with instant language switching
const { t, currentLanguage, changeLanguage } = useLanguage();
```

### Implementation Features
- **Type Safety**: Full TypeScript support for translations
- **Performance**: Efficient state management with minimal re-renders
- **Accessibility**: Proper labels and descriptions in all languages
- **Visual Integration**: Flag icons and native language names
- **Instant Updates**: Language changes apply immediately across entire app

## Enhanced Game Mechanics

### Extended Petal System
- **Range**: 8-35 petals for maximum variety
- **Educational Value**: Advanced counting practice for children
- **Visual Distribution**: Perfect trigonometric positioning for any count
- **Performance**: Optimized rendering for up to 35 petals

### Family-Friendly Content
- **Traditional Respect**: Maintains classic "Loves Me, Loves Me Not" theme
- **Age Appropriateness**: Content suitable for all family members
- **Educational Focus**: Learning through traditional play
- **Cultural Heritage**: Connecting families to timeless traditions

## Build & Deployment

### Build Configuration
```json
// eas.json structure
{
  "build": {
    "production": {
      "android": { "buildType": "aab" },
      "ios": { "buildConfiguration": "Release" }
    }
  }
}
```

### Environment Setup
- **Development**: Expo CLI with hot reload
- **Staging**: EAS Build with preview profile
- **Production**: EAS Build with production profile
- **Testing**: Jest with Expo preset

### Multi-Language Testing
- **All Languages**: Comprehensive testing across all 6 supported languages
- **Cultural Validation**: Ensuring appropriate content for each culture
- **Script Rendering**: Proper Gurmukhi display for Punjabi
- **Performance**: Smooth operation regardless of language selection

## Quality Assurance

### Family Safety Testing
- **Content Review**: All text and imagery appropriate for children
- **Cultural Sensitivity**: Respectful presentation across all languages
- **Educational Value**: Verified learning benefits for different age groups
- **Privacy Protection**: Zero data collection confirmed across all platforms

### Internationalization Testing
- **Language Switching**: Instant updates across entire app
- **Script Rendering**: Proper display of all character sets
- **Cultural Appropriateness**: Content suitable for each cultural context
- **Performance**: No degradation with language changes

## Latest Enhancements Summary

### Punjabi Language Addition
- **Complete Translation**: All interface elements translated to Punjabi
- **Cultural Accuracy**: Proper Gurmukhi script and cultural context
- **Family Heritage**: Connecting Punjabi families to their traditions
- **Technical Excellence**: Full integration with existing language system

### Extended Gameplay
- **35 Petal Support**: Maximum variety and educational value
- **Advanced Counting**: Higher number recognition for children
- **Family Engagement**: Longer gameplay sessions for family bonding
- **Educational Benefits**: Enhanced learning through traditional play

### Family-Friendly Positioning
- **Child Safety**: Complete privacy protection and age-appropriate content
- **Educational Value**: Learning disguised as traditional fun
- **Cultural Heritage**: Respectful presentation of timeless traditions
- **Multi-Generational**: Enjoyable for grandparents, parents, and children

This comprehensive technical specification ensures consistent development practices and production-ready quality across all platforms while maintaining the family-friendly, culturally respectful, and educationally valuable approach of the Loves Me, Loves Me Not application with complete 6-language support including properly implemented Punjabi.

**Copyright and all rights reserved: Ritu Sangha. (ritusbooks.com)**