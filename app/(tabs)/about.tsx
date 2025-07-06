import React from 'react';
import { View, Text, StyleSheet, ScrollView, Linking, Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Heart } from 'lucide-react-native';
import { useLanguage } from '@/hooks/useLanguage';

/**
 * About Screen Component
 * 
 * Provides comprehensive information about the classic "Loves Me, Loves Me Not" game
 * with child-friendly presentation while maintaining the traditional theme.
 * Now fully internationalized with proper language support for all content.
 * 
 * FEATURES:
 * - Complete multi-language support with internationalization
 * - Interactive Wikipedia link with platform-specific handling
 * - Beautiful gradient background matching app theme
 * - Comprehensive game feature descriptions
 * - Cultural and historical context presented appropriately for families
 * - Responsive design for all screen sizes
 * - Educational benefits highlighted for parents and educators
 * - Instant language switching across all content
 */
export default function AboutScreen() {
  const { t } = useLanguage();

  const openWikiLink = () => {
    const url = 'https://en.wikipedia.org/wiki/He_loves_me..._he_loves_me_not';
    if (Platform.OS === 'web') {
      window.open(url, '_blank');
    } else {
      Linking.openURL(url);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={['#FDF2F8', '#FCE7F3', '#FBBF24']}
        style={StyleSheet.absoluteFillObject}
      />

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.title}>{t.aboutGame}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t.howToPlay}</Text>
          <Text style={styles.text}>
            {t.howToPlayText}
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t.theTradition}</Text>
          <Text style={styles.text}>
            {t.traditionText.split('\n')[0]}
            {'\n'}
            <Text style={styles.link} onPress={openWikiLink}>
              {t.traditionText.includes('Learn more') ? 
                t.traditionText.split('\n').find(line => line.includes('Learn more')) : 
                'Learn more about this lovely tradition!'
              }
            </Text>
          </Text>
        </View>

        <View style={[styles.section, { marginBottom: 16 }]}>
          <Text style={styles.sectionTitle}>{t.gameFeatures}</Text>
          <View style={styles.featureList}>
            <View style={styles.feature}>
              <Heart size={14} color="#E11D48" />
              <Text style={styles.featureText}>{t.randomizedPetals}</Text>
            </View>
            <View style={styles.feature}>
              <Heart size={14} color="#E11D48" />
              <Text style={styles.featureText}>{t.randomizedBeginnings}</Text>
            </View>
            <View style={styles.feature}>
              <Heart size={14} color="#E11D48" />
              <Text style={styles.featureText}>{t.celebrationHappy}</Text>
            </View>
            <View style={styles.feature}>
              <Heart size={14} color="#E11D48" />
              <Text style={styles.featureText}>{t.nudgeOtherwise}</Text>
            </View>
            <View style={styles.feature}>
              <Heart size={14} color="#E11D48" />
              <Text style={styles.featureText}>{t.gameStatsTally}</Text>
            </View>
          </View>
        </View>

        <View style={styles.educationalSection}>
          <Text style={styles.sectionTitle}>{t.educationalBenefits}</Text>
          <View style={styles.featureList}>
            <View style={styles.feature}>
              <Text style={styles.benefitEmoji}>🔢</Text>
              <Text style={styles.featureText}>{t.countingPractice}</Text>
            </View>
            <View style={styles.feature}>
              <Text style={styles.benefitEmoji}>🌸</Text>
              <Text style={styles.featureText}>{t.natureLearning}</Text>
            </View>
            <View style={styles.feature}>
              <Text style={styles.benefitEmoji}>🧠</Text>
              <Text style={styles.featureText}>{t.patternRecognition}</Text>
            </View>
            <View style={styles.feature}>
              <Text style={styles.benefitEmoji}>👆</Text>
              <Text style={styles.featureText}>{t.motorSkills}</Text>
            </View>
            <View style={styles.feature}>
              <Text style={styles.benefitEmoji}>🌍</Text>
              <Text style={styles.featureText}>{t.culturalTraditions}</Text>
            </View>
            <View style={styles.feature}>
              <Text style={styles.benefitEmoji}>👨‍👩‍👧‍👦</Text>
              <Text style={styles.featureText}>{t.familyBonding}</Text>
            </View>
          </View>
        </View>

        <View style={styles.footer}>
          <Text style={styles.copyrightText}>
            {t.copyright}
          </Text>
          <Text style={styles.copyrightText}>
            {t.madeWithLove}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1 
  },
  content: {
    padding: 24,
    paddingBottom: 40,
  },
  header: {
    alignItems: 'center',
    marginBottom: 24,
  },
  title: {
    fontSize: 28,
    fontFamily: 'DancingScript-Bold',
    color: '#BE185D',
    marginTop: 8,
    textAlign: 'center',
  },
  section: {
    marginBottom: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 20,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  educationalSection: {
    marginBottom: 20,
    backgroundColor: 'rgba(139, 92, 246, 0.1)', // Light purple background for educational content
    padding: 20,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: 'rgba(139, 92, 246, 0.2)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 20,
    fontFamily: 'Poppins-SemiBold',
    color: '#BE185D',
    marginBottom: 12,
  },
  text: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#374151',
    lineHeight: 24,
  },
  link: {
    color: '#E11D48',
    textDecorationLine: 'underline',
    fontFamily: 'Poppins-Medium',
  },
  featureList: {
    marginTop: 12,
  },
  feature: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  featureText: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#374151',
    marginLeft: 12,
    flex: 1,
  },
  benefitEmoji: {
    fontSize: 16,
    width: 20,
    textAlign: 'center',
  },
  footer: {
    alignItems: 'center',
    marginTop: 20,
    paddingVertical: 20,
    paddingHorizontal: 24,
  },
  copyrightText: {
    fontSize: 14,
    fontFamily: 'DancingScript-Regular',
    color: '#BE185D',
    textAlign: 'center',
    fontStyle: 'italic',
    marginBottom: 8,
  },
});