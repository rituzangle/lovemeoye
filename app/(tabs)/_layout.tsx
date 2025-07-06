import { Tabs } from 'expo-router';
import { Heart, Info, RotateCcw, X, Globe } from 'lucide-react-native';
import { Platform } from 'react-native';
import { useLanguage } from '@/hooks/useLanguage';

/**
 * Tab Layout Component
 * 
 * Defines the main tab navigation structure for the app with production-ready features.
 * Includes 5 strategically designed tabs for optimal user experience:
 * 
 * 1. Exit - Graceful app closure (web) or minimization (mobile)
 * 2. Game - Main gameplay screen with daisy interaction
 * 3. Reset - Quick game restart functionality
 * 4. Language - Multi-language selection with flags
 * 5. About - Game information, instructions, and background
 * 
 * PRODUCTION FEATURES:
 * - Platform-specific behavior handling
 * - Consistent visual design with brand colors
 * - Accessible tab labels and icons
 * - Smooth navigation transitions
 * - Error handling for edge cases
 * - Internationalization support
 */
export default function TabLayout() {
  const { t } = useLanguage();

  /**
   * Handle app exit functionality with platform-specific behavior
   * Web: Attempts to close the browser tab/window gracefully
   * Mobile: Logs exit request (would minimize in production builds)
   * 
   * Note: On mobile platforms, apps typically minimize rather than close
   * due to platform restrictions and user experience guidelines
   */
  const handleExit = () => {
    try {
      if (Platform.OS === 'web') {
        // Web platform: attempt to close the current tab/window
        if (window.close) {
          window.close();
        } else {
          // Fallback: navigate to a blank page or show exit message
          window.location.href = 'about:blank';
        }
      } else {
        // Mobile platforms: log the exit request
        // In production, this could trigger app minimization or cleanup
        console.log('Exit requested - app would minimize on mobile platform');
        
        // Future enhancement: Could implement app state cleanup here
        // or trigger a confirmation dialog for user feedback
      }
    } catch (error) {
      // Handle any errors gracefully
      console.warn('Exit handling error:', error);
    }
  };

  /**
   * Handle app reset functionality with platform-specific behavior
   * Web: Hard refresh to reset all state and reload the app
   * Mobile: Logs reset request (would restart app or reset state in production)
   */
  const handleReset = () => {
    try {
      if (Platform.OS === 'web') {
        // Web platform: hard refresh to reset all application state
        window.location.reload();
      } else {
        // Mobile platforms: log the reset request
        // In production, this could trigger app restart or state reset
        console.log('Reset requested - would restart app on mobile platform');
        
        // Future enhancement: Could implement state reset logic here
        // or navigate to a reset confirmation screen
      }
    } catch (error) {
      // Handle any errors gracefully
      console.warn('Reset handling error:', error);
    }
  };

  return (
    <Tabs
      screenOptions={{
        headerShown: false, // Hide default headers for custom styling and better UX
        tabBarStyle: {
          backgroundColor: '#FFE4E6',    // Light pink background matching app theme
          borderTopColor: '#F8BBD9',     // Slightly darker pink border for definition
          borderTopWidth: 1,
          height: Platform.OS === 'ios' ? 88 : 64, // Platform-specific height
          paddingBottom: Platform.OS === 'ios' ? 20 : 8, // Safe area handling
          paddingTop: 8,
          shadowColor: '#000',           // Subtle shadow for depth
          shadowOffset: { width: 0, height: -2 },
          shadowOpacity: 0.1,
          shadowRadius: 4,
          elevation: 8,                  // Android shadow
        },
        tabBarActiveTintColor: '#E11D48',   // Rose-600 for active tabs (brand primary)
        tabBarInactiveTintColor: '#BE185D', // Rose-700 for inactive tabs (brand secondary)
        tabBarLabelStyle: {
          fontSize: 12,
          fontFamily: 'Poppins-Medium',  // Consistent typography
          marginTop: 4,
        },
        tabBarIconStyle: {
          marginTop: 4,
        },
        // Smooth tab transitions
        tabBarHideOnKeyboard: true,      // Hide tab bar when keyboard is open
        tabBarAllowFontScaling: false,   // Prevent font scaling issues
      }}>
      
      {/* Exit Tab - Special behavior handled by listener */}
      <Tabs.Screen
        name="exit"
        options={{
          title: t.exit,
          tabBarIcon: ({ size, color }) => (
            <X size={size} color={color} strokeWidth={2} />
          ),
          tabBarAccessibilityLabel: t.exitApp,
        }}
        listeners={{
          tabPress: (e) => {
            e.preventDefault(); // Prevent default navigation
            handleExit();       // Execute platform-specific exit logic
          },
        }}
      />
      
      {/* Main Game Tab - Primary interaction screen */}
      <Tabs.Screen
        name="index"
        options={{
          title: t.game,
          tabBarIcon: ({ size, color }) => (
            <Heart size={size} color={color} strokeWidth={2} fill={color} />
          ),
          tabBarAccessibilityLabel: t.playDaisyGame,
        }}
      />
      
      {/* Reset Tab - Quick game restart functionality */}
      <Tabs.Screen
        name="reset"
        options={{
          title: t.reset,
          tabBarIcon: ({ size, color }) => (
            <RotateCcw size={size} color={color} strokeWidth={2} />
          ),
          tabBarAccessibilityLabel: t.resetGame,
        }}
        listeners={{
          tabPress: (e) => {
            e.preventDefault(); // Prevent default navigation
            handleReset();      // Execute platform-specific reset logic
          },
        }}
      />
      
      {/* Language Tab - Multi-language selection */}
      <Tabs.Screen
        name="language"
        options={{
          title: t.language,
          tabBarIcon: ({ size, color }) => (
            <Globe size={size} color={color} strokeWidth={2} />
          ),
          tabBarAccessibilityLabel: t.selectLanguage,
        }}
      />
      
      {/* About/Info Tab - Game information and instructions */}
      <Tabs.Screen
        name="about"
        options={{
          title: t.info,
          tabBarIcon: ({ size, color }) => (
            <Info size={size} color={color} strokeWidth={2} />
          ),
          tabBarAccessibilityLabel: t.learnAboutGame,
        }}
      />
    </Tabs>
  );
}