import React, { useEffect, useState } from 'react';
import { SharedValue } from 'react-native-reanimated';
// Importing React and necessary hooks for component lifecycle management
import { View, StyleSheet, Platform, Text } from 'react-native';  
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withRepeat,
  withSequence,
  withSpring,
  Easing,
} from 'react-native-reanimated';
import { Heart, HeartCrack } from 'lucide-react-native';

interface HeartEffectProps {
  type: 'celebration' | 'broken';
}
import { useLanguage } from '@/hooks/useLanguage'; // ✅ hooks at top
import encouragingMessages from '@/src/i18n/encouragingMessages';
/*
  Importing the useLanguage hook to access the current language setting
  This is essential for ensuring the app displays messages in the user's preferred language
  The useLanguage hook provides the current language and a function to change it
  It is used to select the appropriate encouraging messages based on the current language setting
  This ensures that the app is localized correctly and provides a better user experience
  The encouragingMessages object contains messages in multiple languages
  and is structured to allow easy access based on the current language
*/
const AnimatedHeart = Animated.createAnimatedComponent(Heart);
const AnimatedHeartCrack = Animated.createAnimatedComponent(HeartCrack);
const AnimatedText = Animated.createAnimatedComponent(Text);

/**
 * Encouraging, family-friendly messages for "loves me not" outcomes 
const encouragingMessages = [
  "Try another daisy! 🌼",
  'Every flower tells a different story! 🌸',
  "A new daisy awaits it's fate! 🌸",
];*/

/**
 * Heart Effect Component
 * 
 * Displays beautiful animated heart effects for game outcomes with family-friendly content
 * while maintaining the traditional "Loves Me, Loves Me Not" theme.
 * 
 * FAMILY-FRIENDLY FEATURES:
 * - Maintains the classic romantic tradition in an age-appropriate way
 * - Positive, encouraging messages for all outcomes
 * - Beautiful, colorful animations that delight children and families
 * - Educational elements about flowers and nature
 * - Safe, appropriate content that parents can feel good about
 * 
 * CELEBRATION MODE:
 * - Happy heart animations with sparkles
 * - Colorful hearts floating upward
 * - Joyful, bouncy animations
 * - Celebration of the positive "loves me" outcome
 * 
 * ENCOURAGEMENT MODE:
 * - Gentle, supportive animations
 * - Positive messages about trying again
 * - Focus on the beauty of flowers and the fun of the tradition
 * - Encouraging families to keep playing and enjoying the game
 */
export default function HeartEffect({ type }: HeartEffectProps) {
  const [encouragingMessage, setEncouragingMessage] = useState('');
  const { currentLanguage } = useLanguage(); 
// ✅ Always called at the top of the component from '@/hooks/useLanguage';
// This hook retrieves the current language setting from the useLanguage hook
// used unconditionally, never conditionally as in `if (currentLanguage)`

  // This ensures that the component always has access to the current language
  // and can display messages in the correct language without any issues.
  // This is essential for ensuring the app displays messages in the user's preferred language
  // The useLanguage hook provides the current language and a function to change it
  // It is used to select the appropriate encouraging messages based on the current language setting
  // This ensures that the app is localized correctly and provides a better user experience
  // and the encouragingMessages object contains messages in multiple languages
  // and is structured to allow easy access based on the current language
  // and the encouragingMessages object contains messages in multiple languages


  // Main animation values
  const mainScale = useSharedValue(0);
  const mainY = useSharedValue(0);
  const mainRotation = useSharedValue(0);
  const mainOpacity = useSharedValue(1);

  // Floating elements animation values
  const floating1Y = useSharedValue(0);
  const floating2Y = useSharedValue(0);
  const floating3Y = useSharedValue(0);
  const floating1X = useSharedValue(0);
  const floating2X = useSharedValue(0);
  const floating3X = useSharedValue(0);
  const floatingOpacity = useSharedValue(0);

  // Encouragement text animation
  const messageOpacity = useSharedValue(0);

  // Sparkle animation values
  const sparkleCount = 6;
  const sparkles = [...Array(sparkleCount)].map(() => ({
    x: useSharedValue(0),
    y: useSharedValue(0),
    opacity: useSharedValue(0),
    scale: useSharedValue(1),
    rotation: useSharedValue(0),
  }));

  const floatEase = Easing.inOut(Easing.ease);

  useEffect(() => {
  if (type === 'broken') {
    // 🌍 Select a localized encouraging message
    const messages = encouragingMessages[currentLanguage] || encouragingMessages.en;
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    setEncouragingMessage(randomMessage);

    // 🌱 Gentle, supportive animation
    mainScale.value = withSpring(1.1, {
      damping: 10,
      stiffness: 120,
    });

    setTimeout(() => {
      mainY.value = withTiming(-30, {
        duration: 2000,
        easing: Easing.out(Easing.quad),
      });

      mainRotation.value = withRepeat(
        withSequence(
          withTiming(-3, { duration: 1000 }),
          withTiming(3, { duration: 1000 })
        ),
        3,
        true
      );

      messageOpacity.value = withTiming(1, {
        duration: 800,
        easing: Easing.out(Easing.quad),
      });
    }, 500);
  }
  else {
      // CELEBRATION ANIMATION - Happy and colorful!
      console.log('🎉 Starting celebration with hearts and sparkles!');
      
      // Main heart entrance
      mainScale.value = withSpring(1, { 
        damping: 12,
        stiffness: 150
      });
      
      // Happy floating motion
      mainY.value = withTiming(-80, {
        duration: 2000,
        easing: Easing.out(Easing.quad),
      });
      
      // Gentle swaying like a heart floating in the breeze
      mainRotation.value = withRepeat(
        withTiming(8, { duration: 800 }),
        -1,
        true
      );

      // Happy pulsing animation
      setTimeout(() => {
        mainScale.value = withRepeat(
          withSequence(
            withTiming(1.2, { duration: 300 }),
            withTiming(1.0, { duration: 300 })
          ),
          -1,
          false
        );
      }, 600);

      // Floating hearts
      setTimeout(() => {
        floatingOpacity.value = withTiming(1, { duration: 300 });
        
        // Heart 1: Left upward trajectory
        floating1Y.value = withTiming(-120, { 
          duration: 2500,
          easing: floatEase
        });
        floating1X.value = withTiming(-40, { 
          duration: 2500,
          easing: floatEase
        });
        
        // Heart 2: Right upward trajectory
        floating2Y.value = withTiming(-140, { 
          duration: 3000,
          easing: floatEase
        });
        floating2X.value = withTiming(50, { 
          duration: 3000,
          easing: floatEase
        });
        
        // Heart 3: Center upward trajectory
        floating3Y.value = withTiming(-130, { 
          duration: 2800,
          easing: floatEase
        });
        floating3X.value = withTiming(-20, { 
          duration: 2800,
          easing: floatEase
        });

        // Gentle fade-out
        setTimeout(() => {
          floatingOpacity.value = withTiming(0, { 
            duration: 1000,
            easing: floatEase
          });
        }, 1800);
      }, 400);

      // ✨ SPARKLE CELEBRATION ✨
      sparkles.forEach((sparkle, index) => {
        const delay = 300 + index * 100;
        const xDrift = (Math.random() - 0.5) * 80;
        const yDrift = -60 - Math.random() * 40;
        const scaleSize = 0.8 + Math.random() * 0.4;

        setTimeout(() => {
          sparkle.x.value = withTiming(xDrift, { duration: 1200 });
          sparkle.y.value = withTiming(yDrift, { duration: 1200 });
          sparkle.opacity.value = withSequence(
            withTiming(1, { duration: 200 }),
            withTiming(0, { duration: 1000 })
          );
          sparkle.scale.value = withSequence(
            withTiming(scaleSize, { duration: 200 }),
            withTiming(0.3, { duration: 1000 })
          );
          sparkle.rotation.value = withTiming(180, { duration: 1200 });
        }, delay);
      });
    }
  }, [type, currentLanguage]); // (parameter) type: "celebration" | "broken"
  // and (parameter) currentLanguage: string


  // Animated styles
  const mainStyle = useAnimatedStyle(() => ({
    transform: [
      { translateY: mainY.value },
      { scale: mainScale.value },
      { rotate: `${mainRotation.value}deg` },
    ],
    opacity: mainOpacity.value,
  }));

  // Floating hearts styles
const floatingStyle = (x: SharedValue<number>, y: SharedValue<number>) =>
  useAnimatedStyle(() => ({
    transform: [{ translateY: y.value }, { translateX: x.value }],
    opacity: floatingOpacity.value,
  }));


  const messageStyle = useAnimatedStyle(() => ({
    opacity: messageOpacity.value,
    transform: [{ translateY: 20 }],
  }));

  const sparkleStyles = sparkles.map((sparkle) =>
    useAnimatedStyle(() => ({
      position: 'absolute',
      opacity: sparkle.opacity.value,
      transform: [
        { translateX: sparkle.x.value },
        { translateY: sparkle.y.value },
        { scale: sparkle.scale.value },
        { rotate: `${sparkle.rotation.value}deg` },
      ],
    }))
  );

  return (
    <View style={styles.container}>
      {/* Main Element - Heart for both celebration and encouragement */}
      <Animated.View style={[styles.mainElement, mainStyle]}>
        {type === 'celebration' ? (
          <AnimatedHeart size={60} color="#E11D48" fill="#E11D48" strokeWidth={2} />
        ) : (
          <AnimatedHeartCrack size={50} color="#F59E0B" fill="#F59E0B" strokeWidth={2} />
        )}
      </Animated.View>

      {/* Floating Hearts - only for celebration */}
      {type === 'celebration' && (
        <>
          <Animated.View style={[styles.floatingElement, floatingStyle(floating1X, floating1Y)]}>
            <AnimatedHeart size={25} color="#F97316" fill="#F97316" strokeWidth={2} />
          </Animated.View>
          <Animated.View style={[styles.floatingElement, floatingStyle(floating2X, floating2Y)]}>
            <AnimatedHeart size={30} color="#EC4899" fill="#EC4899" strokeWidth={2} />
          </Animated.View>
          <Animated.View style={[styles.floatingElement, floatingStyle(floating3X, floating3Y)]}>
            <AnimatedHeart size={28} color="#8B5CF6" fill="#8B5CF6" strokeWidth={2} />
          </Animated.View>
        </>
      )}

      {/* Sparkles for celebration */}
      {type === 'celebration' &&
        sparkleStyles.map((style, index) => (
          <AnimatedText key={index} style={[styles.sparkle, style]}>
            {['✨', '🌟', '💫', '⭐', '🌈', '🦋'][index % 6]}
          </AnimatedText>
        ))
      }

      {/* Encouraging message for "loves me not" outcomes */}
      {type === 'broken' && (
        <View style={styles.messageWrapper}>
          <AnimatedText style={[styles.encouragingText, messageStyle]}>
            {encouragingMessage}
          </AnimatedText>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginLeft: -30,
    marginTop: -30,
    zIndex: 1000,
    alignItems: 'center',
  },
  mainElement: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  floatingElement: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  messageWrapper: {
    position: 'absolute',
    top: 80,
    width: 220,
    alignItems: 'center',
  },
  encouragingText: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#F59E0B',
    textAlign: 'center',
    lineHeight: 22,
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(245, 158, 11, 0.3)',
  },
  sparkle: {
    fontSize: 20,
    zIndex: 9000,
  },
});