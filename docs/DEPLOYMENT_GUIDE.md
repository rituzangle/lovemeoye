# Production Deployment Guide

## Pre-Deployment Checklist

### 🔍 Code Quality & Testing
- [ ] All TypeScript errors resolved
- [ ] ESLint warnings addressed
- [ ] Test suite passing with >70% coverage
- [ ] Performance testing on multiple devices
- [ ] Memory leak testing completed
- [ ] Animation performance verified at 60fps

### 📱 Platform Testing
- [ ] iOS testing on iOS 15.1+ devices (REQUIRED)
- [ ] Android testing on multiple device sizes  
- [ ] Web browser compatibility testing
- [ ] Tablet/iPad layout verification
- [ ] Accessibility testing completed

### 🎨 Assets & Branding
- [ ] App icons generated for all sizes (1024x1024 source)
- [ ] Splash screens created for all platforms
- [ ] Screenshots captured for app stores
- [ ] App preview video created (optional)
- [ ] Marketing materials prepared

### 📄 Legal & Compliance
- [ ] Privacy Policy finalized and hosted
- [ ] Terms of Service created (if needed)
- [ ] App Store guidelines compliance verified
- [ ] Google Play policies compliance verified
- [ ] Age rating assessment completed

## Environment Setup

### 1. Install Required Tools
```bash
# Install EAS CLI globally
npm install -g @expo/eas-cli

# Install Expo CLI (if not already installed)
npm install -g @expo/cli

# Verify installations
eas --version
expo --version
```

### 2. Expo Account Setup
```bash
# Login to your Expo account
eas login

# Verify login
eas whoami
```

### 3. Project Configuration
```bash
# Initialize EAS configuration
eas build:configure

# This creates/updates eas.json with build profiles
```

## iOS Deployment

### 1. Apple Developer Account Setup
- [ ] Apple Developer Program membership ($99/year)
- [ ] App Store Connect access configured
- [ ] Certificates and provisioning profiles ready
- [ ] iOS 15.1+ deployment target confirmed

### 2. App Store Connect Configuration
```bash
# Create app record in App Store Connect
# - App name: "Loves Me, Loves Me Not"
# - Bundle ID: com.lovesme.daisygame
# - SKU: loves-me-loves-me-not-2025
# - Minimum iOS Version: 15.1
```

### 3. Build for iOS
```bash
# Build for App Store distribution (iOS 15.1+ required)
eas build --platform ios --profile production

# Monitor build progress
eas build:list
```

### 4. Submit to App Store
```bash
# Submit to App Store Connect
eas submit --platform ios

# Or upload manually through Transporter app
```

### 5. App Store Connect Final Steps
1. **App Information**
   - Name: Loves Me, Loves Me Not
   - Subtitle: Romantic Daisy Petal Game
   - Category: Games > Casual
   - Content Rights: Check if your app uses third-party content

2. **Pricing and Availability**
   - Price: Free
   - Availability: All territories
   - App Store Distribution: On

3. **App Privacy**
   - Data Types: None collected
   - Privacy Policy URL: https://your-site.com/privacy

4. **App Review Information**
   - Contact Information: Your details
   - Demo Account: Not needed (no login required)
   - Notes: "Simple offline game, no data collection, iOS 15.1+ compatible"

5. **Version Information**
   - Screenshots: Upload all required sizes
   - App Preview: Upload video (optional)
   - Description: Use store listing description
   - Keywords: love,romance,daisy,game,petals,fortune
   - Support URL: GitHub repository
   - Marketing URL: Your website

## Android Deployment

### 1. Google Play Console Setup
- [ ] Google Play Console account ($25 one-time fee)
- [ ] Developer account verified
- [ ] Payment profile configured

### 2. App Signing Setup
```bash
# EAS handles app signing automatically
# Verify signing configuration in eas.json
```

### 3. Build for Android
```bash
# Build AAB for Play Store
eas build --platform android --profile production

# Build APK for testing (optional)
eas build --platform android --profile preview
```

### 4. Google Play Console Configuration

#### Create App
1. **App Details**
   - App name: Loves Me, Loves Me Not
   - Default language: English (United States)
   - App or game: Game
   - Free or paid: Free

2. **Store Listing**
   - Short description: Experience the timeless daisy petal tradition!
   - Full description: Use full store listing description
   - App icon: 512x512 PNG
   - Feature graphic: 1024x500 PNG
   - Screenshots: Phone and tablet screenshots

3. **Content Rating**
   - Target age group: Everyone
   - Content descriptors: None
   - Interactive elements: None

4. **App Content**
   - Privacy Policy: https://your-site.com/privacy
   - App access: All functionality available without restrictions
   - Content guidelines: Compliant
   - Target audience: Everyone

5. **Pricing & Distribution**
   - Countries: All available countries
   - Content guidelines: Acknowledge compliance
   - US export laws: Not applicable

### 5. Submit to Google Play
```bash
# Submit to Google Play Console
eas submit --platform android

# Or upload manually through Play Console
```

## Web Deployment

### 1. Build Web Version
```bash
# Build static web version
expo export --platform web

# Files will be in dist/ directory
```

### 2. Deploy to Hosting Service

#### Netlify Deployment
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy to Netlify
netlify deploy --prod --dir=dist
```

#### Vercel Deployment
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy to Vercel
vercel --prod
```

#### GitHub Pages
```bash
# Add to package.json scripts
"deploy:web": "expo export --platform web && gh-pages -d dist"

# Deploy
npm run deploy:web
```

## Post-Deployment Tasks

### 1. Monitor App Store Status
- [ ] iOS: Check App Store Connect for review status
- [ ] Android: Check Google Play Console for review status
- [ ] Respond to any reviewer feedback promptly

### 2. Marketing Preparation
- [ ] Social media accounts created
- [ ] Press kit prepared
- [ ] Launch announcement ready
- [ ] Influencer outreach planned

### 3. Analytics Setup (Optional)
```bash
# If you decide to add analytics later
expo install expo-analytics-amplitude
# or
expo install @react-native-firebase/analytics
```

### 4. User Feedback Monitoring
- [ ] App Store reviews monitoring
- [ ] Google Play reviews monitoring
- [ ] GitHub issues tracking
- [ ] User support email setup

## Troubleshooting Common Issues

### Build Failures
```bash
# Clear Expo cache
expo start --clear

# Clear EAS build cache
eas build --clear-cache

# Check build logs
eas build:list
eas build:view [BUILD_ID]
```

### iOS Deployment Target Issues
```bash
# Verify iOS deployment target in app.json
# Should be set to 15.1 for Expo SDK 53.0.0
{
  "expo": {
    "plugins": [
      [
        "expo-build-properties",
        {
          "ios": {
            "deploymentTarget": "15.1"
          }
        }
      ]
    ]
  }
}
```

### Submission Issues
- **iOS**: Check certificates and provisioning profiles, verify iOS 15.1+ compatibility
- **Android**: Verify app signing configuration
- **Both**: Ensure compliance with store policies

### Performance Issues
```bash
# Profile bundle size
npx react-native-bundle-visualizer

# Check for memory leaks
# Use Flipper or React DevTools Profiler
```

## Version Updates

### 1. Increment Version Numbers
```json
// app.json
{
  "expo": {
    "version": "1.0.1",
    "ios": {
      "buildNumber": "2"
    },
    "android": {
      "versionCode": 2
    }
  }
}
```

### 2. Build and Submit Updates
```bash
# Build new version
eas build --platform all --profile production

# Submit updates
eas submit --platform all
```

## Success Metrics

### Key Performance Indicators
- **Downloads**: Track weekly/monthly downloads
- **Ratings**: Maintain 4.5+ star average
- **Reviews**: Monitor sentiment and feedback
- **Crashes**: Keep crash rate below 0.1%
- **Performance**: Maintain 60fps animations

### Analytics to Track
- Daily/Monthly Active Users
- Session duration
- Game completion rate
- Platform distribution (iOS/Android/Web)
- Geographic distribution

## Support & Maintenance

### 1. User Support
- Monitor app store reviews
- Respond to GitHub issues
- Maintain support email
- Update FAQ documentation

### 2. Regular Updates
- OS compatibility updates (iOS 15.1+ maintained)
- Bug fixes and improvements
- New features based on user feedback
- Security updates (if applicable)

### 3. Long-term Maintenance
- Annual developer account renewals
- Dependency updates (maintain Expo SDK compatibility)
- Performance optimizations
- Platform-specific improvements

---

## Quick Reference Commands

```bash
# Development
npm start                    # Start development server
npm run web                  # Web development
npm run ios                  # iOS simulator (iOS 15.1+)
npm run android             # Android emulator

# Building
eas build --platform ios --profile production
eas build --platform android --profile production
expo export --platform web

# Submission
eas submit --platform ios
eas submit --platform android

# Monitoring
eas build:list              # List all builds
eas submit:list             # List all submissions

# Testing
npm test                    # Run test suite
npm run test:ci            # CI tests
npm run type-check         # TypeScript checking
```

## iOS 15.1+ Specific Notes

### Why iOS 15.1+?
- Required for Expo SDK 53.0.0 compatibility
- Ensures access to latest iOS features and security updates
- Maintains compatibility with modern iOS development practices

### Testing Requirements
- Test on iOS 15.1+ simulators and devices
- Verify all features work correctly on the minimum deployment target
- Check performance on older supported devices

### App Store Requirements
- Set minimum iOS version to 15.1 in App Store Connect
- Include iOS 15.1+ compatibility in app description
- Test submission process with iOS 15.1+ build

This comprehensive deployment guide ensures a smooth path from development to production across all platforms while maintaining the highest quality standards and iOS 15.1+ compatibility for the Loves Me, Loves Me Not app.

**Copyright and all rights reserved: Ritu Sangha. (ritusbooks.com)**