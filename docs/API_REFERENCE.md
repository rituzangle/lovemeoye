# API Reference

## Component APIs

### Petal Component

The core interactive element of the game representing individual daisy petals.

```typescript
interface PetalProps {
  id: string;           // Unique identifier for the petal
  angle: number;        // Position angle around the daisy center (0-360 degrees)
  isPlucked: boolean;   // Whether this petal has been plucked
  onPluck: (id: string) => void; // Callback when petal is tapped
  disabled: boolean;    // Whether petal interaction is disabled
  daisySize: number;    // Size of the daisy container for positioning calculations
}
```

**Usage:**
```typescript
<Petal
  id="petal-1-12345"
  angle={45}
  isPlucked={false}
  onPluck={handlePetalPluck}
  disabled={gameState !== 'playing'}
  daisySize={320}
/>
```

**Features:**
- SVG-based natural petal shape with gradient
- Physics-based falling animation
- Touch feedback with scale animation
- Platform-specific haptic feedback
- Automatic cleanup after animation

### HeartEffect Component

Displays animated heart effects for game outcomes.

```typescript
interface HeartEffectProps {
  type: 'celebration' | 'broken'; // Type of heart effect to display
}
```

**Usage:**
```typescript
// Celebration effect for positive outcomes
<HeartEffect type="celebration" />

// Broken heart effect for negative outcomes
<HeartEffect type="broken" />
```

**Features:**
- Multiple floating hearts for celebration
- Single falling broken heart for negative outcome
- Automatic animation lifecycle management
- Physics-based movement with wind effects

## Hook APIs

### useFrameworkReady Hook

**CRITICAL**: This hook is essential for framework operation and must never be removed.

```typescript
function useFrameworkReady(): void
```

**Usage:**
```typescript
import { useFrameworkReady } from '@/hooks/useFrameworkReady';

export default function RootLayout() {
  useFrameworkReady(); // REQUIRED - DO NOT REMOVE
  
  return (
    // Layout JSX
  );
}
```

**Purpose:**
- Signals to the framework that the React app has mounted
- Enables proper framework integration and communication
- Required for the app to function correctly in the framework environment

## Game Logic APIs

### Game State Types

```typescript
type GameState = 'playing' | 'loves-me' | 'loves-me-not' | 'ready';
type Phrase = 'loves-me' | 'loves-me-not';

interface PetalData {
  id: string;      // Unique identifier with timestamp
  angle: number;   // Position angle around the daisy center
  isPlucked: boolean; // Whether this petal has been plucked
}

interface GameStats {
  gamesPlayed: number;  // Total number of games completed
  lovesMe: number;      // Number of positive outcomes
  lovesMeNot: number;   // Number of negative outcomes
}
```

### Game Initialization

```typescript
const initializeGame = (): void => {
  // Generates 8-16 petals for balanced gameplay
  // Randomizes starting phrase for unpredictable outcomes
  // Resets all animations and state
  // Resets first-time user interaction tracking
}
```

**Features:**
- Random petal count (8-16) for gameplay variety
- Random starting phrase selection
- Unique petal IDs with timestamps for proper React rendering
- Complete state reset for new games
- First-time user experience state management

### Petal Plucking Logic

```typescript
const pluckPetal = (petalId: string): void => {
  // Marks petal as plucked
  // Updates remaining petal count
  // Alternates between phrases
  // Triggers game end when no petals remain
  // Provides haptic feedback
  // Tracks first petal interaction for UI updates
}
```

**Flow:**
1. Validate game state (must be 'playing')
2. Track first petal interaction for UI state management
3. Trigger haptic feedback (mobile only)
4. Mark specific petal as plucked
5. Update remaining petal count
6. Check for game completion
7. Alternate phrase for next petal
8. Animate center daisy for feedback

### User Experience Logic

```typescript
const getCurrentText = (): string => {
  // Returns appropriate message based on game state and user experience
  // Handles first-time user instructions
  // Manages phrase alternation during gameplay
  // Displays final outcomes with emotional context
}
```

**Message Logic:**
- **First-time users**: "Tap a petal, any petal to pluck it." (when `gamesPlayed === 0` and no petals plucked)
- **Active gameplay**: "Loves Me..." or "Loves Me Not..." based on current phrase
- **Positive outcome**: "They Love Me! 💕"
- **Negative outcome**: "They Love Me Not... 💔"
- **Ready state**: "Tap a petal to start!"

### Progressive UI Disclosure

```typescript
const showGameProgress = gameState === 'playing' && hasPluckedAnyPetal;
```

**Features:**
- Hides detailed game information until first interaction
- Shows petal count and starting phrase after first pluck
- Improves user experience by reducing cognitive load
- Maintains clean interface for new users

## Animation APIs

### Petal Animation System

```typescript
// Animation values for petal movement
const translateY = useSharedValue(0);  // Vertical position (falling)
const translateX = useSharedValue(0);  // Horizontal position (drift)
const opacity = useSharedValue(1);     // Transparency
const rotation = useSharedValue(0);    // Rotation during fall
const scale = useSharedValue(1);       // Scale for touch feedback
```

**Animation Sequence:**
1. **Touch Feedback**: Quick scale animation (1 → 1.2 → 1)
2. **Falling**: Gravity-like vertical movement over 4 seconds
3. **Drift**: Horizontal wind effect with random direction
4. **Rotation**: Natural spinning during fall
5. **Fade**: Gradual opacity reduction after 1.5 seconds

### Heart Effect Animations

```typescript
// Celebration animation (positive outcome)
const celebrationAnimation = {
  mainHeart: {
    scale: withSpring(1),
    translateY: withTiming(-100, { duration: 2000 }),
    rotation: withRepeat(withTiming(10), -1, true)
  },
  floatingHearts: {
    opacity: withTiming(1),
    translateY: withTiming(-150 to -180),
    translateX: withTiming(-80 to 60)
  }
};

// Broken heart animation (negative outcome)
const brokenAnimation = {
  scale: withSpring(1.2),
  translateY: withTiming(200, { duration: 1500 }),
  rotation: withTiming(45),
  opacity: withTiming(0.3)
};
```

## Platform APIs

### Platform Detection

```typescript
import { Platform } from 'react-native';

// Check current platform
Platform.OS // 'ios' | 'android' | 'web'

// Platform-specific code
if (Platform.OS !== 'web') {
  // Native-only functionality
} else {
  // Web-compatible alternative
}
```

### Haptic Feedback API

```typescript
import * as Haptics from 'expo-haptics';

const triggerHaptics = (): void => {
  if (Platform.OS !== 'web') {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
  }
  // Web platforms: No haptic feedback available
};
```

**Usage:**
- Called on petal tap interactions
- Provides tactile feedback on mobile devices
- Gracefully degrades on web platforms

## Styling APIs

### StyleSheet Patterns

```typescript
import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  responsive: {
    width: width * 0.8,
    height: height * 0.6,
  },
});
```

### Color System

```typescript
const colors = {
  primary: '#E11D48',      // Rose-600 for positive outcomes
  secondary: '#BE185D',    // Rose-700 for UI elements
  neutral: '#6B7280',      // Gray-500 for negative outcomes
  background: {
    start: '#FDF2F8',      // Light pink
    middle: '#FCE7F3',     // Medium pink
    end: '#FBBF24',        // Golden yellow
  },
  statistics: {
    background: 'rgba(252, 211, 77, 0.8)', // Yellow with transparency
    border: 'rgba(245, 158, 11, 0.3)',     // Amber border
  },
};
```

### Typography System

```typescript
const typography = {
  title: {
    fontFamily: 'DancingScript-Bold',
    fontSize: 32,
    color: '#BE185D',
  },
  body: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#374151',
  },
  button: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    color: 'white',
  },
};
```

## Navigation APIs

### Tab Navigation

```typescript
import { Tabs } from 'expo-router';
import { Heart, Info, RotateCcw, X } from 'lucide-react-native';

// Tab configuration
<Tabs.Screen
  name="index"
  options={{
    title: 'Game',
    tabBarIcon: ({ size, color }) => (
      <Heart size={size} color={color} strokeWidth={2} fill={color} />
    ),
    tabBarAccessibilityLabel: 'Play the daisy petal game',
  }}
/>
```

### Special Tab Behaviors

```typescript
// Exit tab with custom behavior
<Tabs.Screen
  name="exit"
  listeners={{
    tabPress: (e) => {
      e.preventDefault(); // Prevent navigation
      handleExit();       // Custom exit logic
    },
  }}
/>
```

## Utility APIs

### Dimension Calculations

```typescript
const { width, height } = Dimensions.get('window');

// Responsive daisy sizing
const DAISY_SIZE = Math.min(width * 0.8, 320);
const CENTER_SIZE = DAISY_SIZE * 0.3;
const PETAL_WIDTH = DAISY_SIZE * 0.08;
const PETAL_HEIGHT = DAISY_SIZE * 0.25;
const RADIUS = DAISY_SIZE * 0.38;
```

### Trigonometric Positioning

```typescript
// Calculate petal position around circle
const radian = (angle * Math.PI) / 180;
const petalX = Math.cos(radian) * RADIUS;
const petalY = Math.sin(radian) * RADIUS;
const petalRotation = angle + 90; // Point toward center
```

### Random Generation

```typescript
// Generate random petal count (8-16)
const numPetals = Math.floor(Math.random() * 9) + 8;

// Generate random starting phrase
const randomStartingPhrase = Math.random() < 0.5 ? 'loves-me' : 'loves-me-not';

// Generate random animation parameters
const horizontalDrift = (Math.random() - 0.5) * 150;
const rotationAmount = (Math.random() - 0.5) * 540;
```

## State Management APIs

### Game State Management

```typescript
// Core game state
const [gameState, setGameState] = useState<'playing' | 'loves-me' | 'loves-me-not' | 'ready'>('ready');
const [currentPhrase, setCurrentPhrase] = useState<'loves-me' | 'loves-me-not'>('loves-me');
const [hasPluckedAnyPetal, setHasPluckedAnyPetal] = useState(false);

// Game statistics
const [gameStats, setGameStats] = useState<GameStats>({
  gamesPlayed: 0,
  lovesMe: 0,
  lovesMeNot: 0,
});
```

### State Reset Patterns

```typescript
const initializeGame = () => {
  // Reset all game state atomically
  setGameState('playing');
  setTotalPetals(numPetals);
  setRemainingPetals(numPetals);
  setCurrentPhrase(randomStartingPhrase);
  setStartingPhrase(randomStartingPhrase);
  setHasPluckedAnyPetal(false); // Reset first-time interaction tracking
  setPetals(newPetals);
};
```

## Error Handling APIs

### Error State Management

```typescript
const [error, setError] = useState<string | null>(null);

// Display errors in UI
{error && (
  <Text style={styles.errorText}>{error}</Text>
)}

// Clear errors
const clearError = () => setError(null);
```

### Platform Error Handling

```typescript
const handlePlatformSpecificError = (error: Error) => {
  if (Platform.OS === 'web') {
    console.error('Web error:', error);
    // Web-specific error handling
  } else {
    console.error('Native error:', error);
    // Native-specific error handling
  }
};
```

## Performance APIs

### Animation Optimization

```typescript
// Efficient animation cleanup
useEffect(() => {
  if (!isPlucked) {
    // Reset all animation values to prevent memory leaks
    translateY.value = 0;
    translateX.value = 0;
    opacity.value = 1;
    rotation.value = 0;
    scale.value = 1;
  }
}, [isPlucked]);
```

### Conditional Rendering

```typescript
// Performance optimization: Don't render if completely faded out and plucked
if (isPlucked && opacity.value === 0) {
  return null;
}

// Progressive UI disclosure for better performance
{gameState === 'playing' && hasPluckedAnyPetal && (
  <GameProgressDisplay />
)}
```

This comprehensive API reference provides detailed documentation for all components, hooks, and utilities used in the Loves Me, Loves Me Not application, including the latest enhancements for first-time user experience and visual design improvements.

**Copyright and all rights reserved: Ritu Sangha. (ritusbooks.com)**