# Expo Router Project Requirements

## Project Overview

This is a production-ready Expo Router application using Expo SDK 53.0.0 and Expo Router 4.0.17, designed for beautiful, fully-featured applications with web as the default platform.

## Core Technical Stack

### Framework & Runtime
- **Expo SDK**: 53.0.0
- **Expo Router**: 4.0.17
- **React Native**: 0.74.6
- **TypeScript**: Required for all new code
- **Platform Priority**: Web-first with mobile compatibility

### Architecture Requirements

#### Project Structure (MANDATORY)
```
app/                    # All routes MUST be in /app directory
├── _layout.tsx        # Root layout with REQUIRED useFrameworkReady hook
├── (tabs)/           # Primary tab-based navigation
│   ├── _layout.tsx   # Tab configuration
│   └── *.tsx         # Individual tab screens
└── +not-found.tsx    # 404 handling

components/            # All reusable components MUST be here
├── *.tsx             # Component files

hooks/                # Custom React hooks
└── useFrameworkReady.ts # CRITICAL framework integration

types/                # Type definitions
└── env.d.ts          # Environment variable types
```

#### Navigation Architecture (MANDATORY)
- **Primary Navigation**: Tab-based layout (REQUIRED)
- **Secondary Navigation**: Stack/Modal/Drawer within tabs (OPTIONAL)
- **Implementation**: Use Expo Router's built-in navigation

## Critical Framework Integration

### REQUIRED Code (NEVER REMOVE OR MODIFY)
```typescript
// app/_layout.tsx - This code is ESSENTIAL for framework operation
import { useFrameworkReady } from '@/hooks/useFrameworkReady';

export default function RootLayout() {
  useFrameworkReady(); // CRITICAL: Must never be removed or modified
  
  return (
    <>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </>
  );
}
```

## Platform Compatibility Requirements

### Web-First Development
- Default platform is **Web**
- All features must work on web browsers
- Native-only APIs require platform-specific implementations

### Platform-Specific Code Pattern (REQUIRED)
```typescript
import { Platform } from 'react-native';

const handleFeature = () => {
  if (Platform.OS !== 'web') {
    // Native implementation (iOS/Android)
    NativeAPI.execute();
  } else {
    // Web-compatible alternative
    webAlternative();
  }
};
```

### Restricted APIs on Web
- Haptics (use visual feedback alternatives)
- Local Authentication (implement web auth)
- Native sensors (use web APIs where available)
- Camera (limited functionality)

### iOS Deployment Target
- **Minimum Version**: 15.1 (required for Expo SDK 53.0.0)
- **Configuration**: Set in `app.json` under `expo.plugins.expo-build-properties.ios.deploymentTarget`
- **Testing**: Must test on iOS 15.1+ simulators and devices

## Design & UI Requirements

### Design Standards
- **Quality Level**: Production-ready, not cookie-cutter
- **Aesthetic**: Beautiful, fully-featured applications
- **Styling**: Use `StyleSheet.create` exclusively
- **NO NativeWind** or alternative styling libraries (unless explicitly requested)

### Image Handling
- **Placeholder Images**: Link directly to Pexels URLs using `Image` components
- **Format**: `<Image source={{ uri: 'https://images.pexels.com/...' }} />`

### Icons (MANDATORY)
- **Library**: `lucide-react-native` exclusively
- **Import Pattern**: Import specific icons as React components
- **Default Props**:
  ```typescript
  {
    size: 24,
    color: 'currentColor',
    strokeWidth: 2,
    absoluteStrokeWidth: false
  }
  ```

### Font Management (REQUIRED PATTERN)
```typescript
// 1. Install: npm install @expo-google-fonts/[font-name]
// 2. Import and load:
import { useFonts } from 'expo-font';
import { FontName_400Regular } from '@expo-google-fonts/font-name';

export default function App() {
  const [fontsLoaded] = useFonts({
    'FontName-Regular': FontName_400Regular,
  });

  if (!fontsLoaded) return null;
  
  // Continue with app
}
```

## Error Handling Standards

### UI-First Error Display (REQUIRED)
```typescript
// PREFERRED: Inline error display
function Component() {
  const [error, setError] = useState<string | null>(null);
  
  return (
    <View>
      {error && <Text style={styles.errorText}>{error}</Text>}
      {/* Component content */}
    </View>
  );
}

// AVOID: Alert API for errors
```

## Environment Configuration

### Environment Variables
- **System**: Use Expo's environment variable system
- **Naming**: Prefix with `EXPO_PUBLIC_` for client-side access
- **Files**: `.env`, `.env.staging`, `.env.production`

### Type Definitions (REQUIRED)
```typescript
// types/env.d.ts
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      EXPO_PUBLIC_API_URL: string;
      EXPO_PUBLIC_API_KEY: string;
    }
  }
}
export {};
```

## Dependency Management

### Package Requirements
- **Preservation**: NEVER remove existing dependencies from package.json
- **Additions**: Only add dependencies that support Expo managed workflow
- **Native Code**: Avoid packages requiring native code modifications

### Preferred Libraries
- **Animations**: `react-native-reanimated` (not `Animated`)
- **Gestures**: `react-native-gesture-handler` (not `PanResponder`)
- **Navigation**: Expo Router built-in navigation

## Camera Implementation

### Standard Pattern (REQUIRED)
```typescript
import { CameraView, useCameraPermissions } from 'expo-camera';

export default function CameraScreen() {
  const [permission, requestPermission] = useCameraPermissions();
  
  if (!permission?.granted) {
    return (
      <View>
        <Button onPress={requestPermission} title="Grant Permission" />
      </View>
    );
  }
  
  return <CameraView style={styles.camera} />;
}
```

## API Routes (Server Features)

### Configuration
```json
// app.json
{
  "web": {
    "output": "server"
  }
}
```

### Implementation Pattern
```typescript
// app/api-name+api.ts
export function GET(request: Request) {
  return Response.json({ data: 'response' });
}

export async function POST(request: Request) {
  const body = await request.json();
  return Response.json({ received: body });
}
```

## Monetization Requirements

### In-App Purchases & Subscriptions
- **Platform**: Use RevenueCat (REQUIRED)
- **NOT Stripe**: Does not support mobile platform billing
- **Implementation**: Requires native code, export project for local development
- **Testing**: Use Expo Dev Client for development builds

### RevenueCat Integration
- Follow official guide: https://www.revenuecat.com/docs/getting-started/installation/expo
- Requires exporting from Bolt for local development
- Will not function in Bolt's in-browser preview

## File Management

### Route Removal
```bash
rm -rf "path/to/route/file"
```

### Expo Managed Workflow (MANDATORY)
- **NO** `ios` or `android` directories
- **NO** native code files
- Use Expo managed workflow exclusively

## Development Workflow

### Tab Layout Implementation
```typescript
// app/(tabs)/_layout.tsx
import { Tabs } from 'expo-router';
import { Home } from 'lucide-react-native';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ size, color }) => (
            <Home size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
```

### Component Template
```typescript
import { View, Text, StyleSheet } from 'react-native';

export default function ComponentName() {
  return (
    <View style={styles.container}>
      <Text>Component Content</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
```

## Quality Standards

### Code Quality
- TypeScript for all new code
- Comprehensive error handling
- Platform-specific implementations where needed
- Performance-optimized animations and gestures

### Design Quality
- Production-ready aesthetics
- Responsive design for all screen sizes
- Consistent styling patterns
- Accessible UI components

### Testing Requirements
- Test on web browsers (primary)
- Test on iOS 15.1+ and Android (secondary)
- Handle platform-specific behaviors
- Validate camera and native API functionality

## Deployment Considerations

### Web Deployment
- Static export for web hosting
- Server output for API routes
- Environment variable configuration

### Mobile Deployment
- Expo managed workflow
- EAS Build for production
- Platform-specific configurations in app.json
- iOS 15.1+ deployment target

---

## Summary Checklist

- [ ] Tab-based primary navigation implemented
- [ ] `useFrameworkReady` hook preserved in root layout
- [ ] Platform-specific code for web compatibility
- [ ] Lucide icons used exclusively
- [ ] Google Fonts loaded properly
- [ ] Error handling via UI components
- [ ] Expo environment variables configured
- [ ] No native code directories created
- [ ] StyleSheet.create used for styling
- [ ] Production-ready design implemented
- [ ] iOS deployment target set to 15.1+

This requirements document ensures consistent, high-quality development practices while maintaining framework compatibility and web-first functionality for production-ready applications.