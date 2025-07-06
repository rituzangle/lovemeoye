# Changelog

All notable changes to the Loves Me, Loves Me Not project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.1] - 2025-01-XX

### Added
- 🎮 **First-Time User Experience**
  - Added helpful instruction message for new players: "Tap a petal, any petal to pluck it."
  - Smart message display logic that shows instructions only when `gamesPlayed === 0` and no petals have been plucked
  - Progressive UI disclosure that hides detailed game progress until first petal is plucked

### Changed
- 🎨 **Visual Design Improvements**
  - Updated game statistics background to yellow theme matching app's gradient
  - Changed statistics container background to `rgba(252, 211, 77, 0.8)` for cohesive design
  - Updated border color to `rgba(245, 158, 11, 0.3)` for subtle amber accent
  - Enhanced visual hierarchy with better color integration

- 🧠 **Game Logic Enhancements**
  - Added `hasPluckedAnyPetal` state tracking for improved user experience
  - Modified `getCurrentText()` function to handle first-time user messaging
  - Updated game progress display to show only after first petal interaction
  - Improved state management for better user flow

### Technical Details
- Added new state variable `hasPluckedAnyPetal` to track petal interaction
- Enhanced `initializeGame()` function to reset petal plucking state
- Updated `pluckPetal()` function to set plucking state on first interaction
- Improved conditional rendering for game progress information

## [1.0.0] - 2025-01-XX

### Added
- 🎮 **Core Gameplay**
  - Interactive daisy petal plucking with touch/tap controls
  - Dynamic petal generation (8-16 petals per game)
  - Alternating "Loves Me" / "Loves Me Not" phrase system
  - Randomized starting phrases for unpredictable outcomes
  - Game completion detection and result display

- 🎨 **Visual Design**
  - Beautiful gradient backgrounds (pink to golden)
  - Natural petal shapes using SVG with gradients
  - Smooth 60fps animations powered by React Native Reanimated 3.10.0
  - Celebration heart effects for positive outcomes
  - Broken heart effects for negative outcomes
  - Elegant typography with Dancing Script and Poppins fonts

- 🎭 **Animation System**
  - Realistic petal falling physics with gravity simulation
  - Wind drift effects with random horizontal movement
  - Natural rotation during petal fall
  - Touch feedback with scale animations
  - Gradual fade-out effects during animations
  - Center daisy pulse animations for user feedback

- 📱 **Cross-Platform Support**
  - iOS 15.1+ compatibility (required for Expo SDK 53.0.0)
  - Android 6.0+ (API level 23) support
  - Web browser compatibility with responsive design
  - Platform-specific haptic feedback on mobile devices
  - Graceful degradation for web platforms

- 🧭 **Navigation System**
  - Tab-based navigation with 4 main sections:
    - Game: Main gameplay screen
    - Info: About page with instructions and history
    - Reset: Quick game restart (web refresh/app restart)
    - Exit: Graceful app closure (web) or minimization (mobile)

- 🔒 **Privacy & Security**
  - Zero data collection policy
  - Complete offline functionality
  - No network requests or external dependencies
  - No analytics, tracking, or user behavior monitoring
  - Privacy-by-design architecture

- 🛠️ **Technical Excellence**
  - TypeScript implementation with strict type checking
  - React Native 0.74.6 with Expo SDK 53.0.0
  - Expo Router 4.0.17 for file-based navigation
  - Production-ready build configurations
  - Comprehensive error handling and edge case management

- 📚 **Documentation**
  - Complete README with setup and deployment instructions
  - Detailed privacy policy
  - App store listing guidelines
  - Technical specifications and API reference
  - Deployment guide for iOS, Android, and web platforms

- 🎯 **App Store Ready**
  - iOS App Store Connect configuration
  - Google Play Console setup
  - App icons and splash screens
  - Store listing descriptions and keywords
  - Screenshot requirements and marketing materials

### Technical Details

#### Dependencies
- **Core Framework**: Expo SDK 53.0.0, React Native 0.74.6
- **Navigation**: Expo Router 4.0.17
- **Animations**: React Native Reanimated 3.10.0
- **Graphics**: React Native SVG 15.8.0, Expo Linear Gradient 14.0.1
- **Fonts**: Expo Google Fonts (Dancing Script, Poppins)
- **Icons**: Lucide React Native 0.468.0
- **Haptics**: Expo Haptics 14.0.1

#### Platform Requirements
- **iOS**: 15.1+ (Expo SDK 53.0.0 requirement)
- **Android**: API level 23+ (Android 6.0+)
- **Web**: Modern browsers with ES6+ support
- **Node.js**: 18.0.0+ for development

#### Build Configuration
- **iOS Deployment Target**: 15.1 (configured in expo-build-properties)
- **Android Target SDK**: API 34 (Android 14)
- **Android Minimum SDK**: API 23 (Android 6.0)
- **TypeScript**: Strict mode enabled
- **Metro**: 0.82.4 for bundling

#### Performance Optimizations
- 60fps animation target across all platforms
- Efficient component rendering with conditional mounting
- Memory management with proper animation cleanup
- Platform-specific code paths for optimal performance
- Bundle size optimization with tree shaking

#### Security Features
- No data collection or storage
- No network communication
- No third-party analytics or tracking
- Open source codebase for transparency
- Platform-specific security compliance

### Development Workflow

#### Setup Commands
```bash
npm install          # Install dependencies
npm start           # Start development server
npm run web         # Web development
npm run ios         # iOS simulator (15.1+)
npm run android     # Android emulator
npm test            # Run test suite
npm run type-check  # TypeScript validation
```

#### Build Commands
```bash
npm run build:ios          # iOS production build
npm run build:android      # Android production build
npm run submit:ios         # Submit to App Store
npm run submit:android     # Submit to Google Play
```

### Known Issues
- None at release

### Breaking Changes
- None (initial release)

### Migration Guide
- None (initial release)

---

## Future Roadmap

### [1.1.0] - Planned Features
- 🎵 **Audio Enhancement**
  - Optional sound effects for petal plucking
  - Ambient background music
  - Audio settings and volume controls

- 🎨 **Visual Themes**
  - Multiple daisy color schemes
  - Seasonal themes (spring, summer, autumn, winter)
  - Special occasion themes (Valentine's Day, anniversaries)

- 🌍 **Internationalization**
  - Multi-language support
  - Localized phrases and text
  - Cultural variations of the tradition

### [1.2.0] - Advanced Features
- 👥 **Multiplayer Mode**
  - Local multiplayer for couples
  - Turn-based petal plucking
  - Shared results and celebrations

- 📊 **Enhanced Gameplay**
  - Different flower types (roses, sunflowers)
  - Customizable petal counts
  - Game difficulty settings

### [2.0.0] - Major Update
- 🎮 **Game Modes**
  - Timed challenges
  - Streak counting
  - Achievement system

- 🔧 **Customization**
  - User-created themes
  - Custom phrases and languages
  - Personalization options

---

## Support

For technical support, bug reports, or feature requests:
- **GitHub Issues**: https://github.com/yourusername/loves-me-loves-me-not/issues
- **Documentation**: Project README and documentation files
- **Community**: GitHub Discussions for community support

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

*Made with 💕 for hopeless romantics everywhere*

**Copyright and all rights reserved: Ritu Sangha. (ritusbooks.com)**