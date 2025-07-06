const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🤖 Android Build Helper');
console.log('========================');

// Check if EAS CLI is installed
function checkEasCli() {
  try {
    execSync('eas --version', { stdio: 'pipe' });
    console.log('✅ EAS CLI is installed');
    return true;
  } catch (error) {
    console.log('❌ EAS CLI not found. Installing...');
    try {
      execSync('npm install -g @expo/eas-cli', { stdio: 'inherit' });
      console.log('✅ EAS CLI installed successfully');
      return true;
    } catch (installError) {
      console.error('❌ Failed to install EAS CLI:', installError.message);
      return false;
    }
  }
}

// Check if user is logged in to Expo
function checkExpoLogin() {
  try {
    const result = execSync('eas whoami', { stdio: 'pipe', encoding: 'utf8' });
    console.log(`✅ Logged in as: ${result.trim()}`);
    return true;
  } catch (error) {
    console.log('❌ Not logged in to Expo. Please run: eas login');
    return false;
  }
}

// Configure EAS project
function configureEas() {
  const easJsonPath = path.join(__dirname, '..', 'eas.json');
  if (!fs.existsSync(easJsonPath)) {
    console.log('⚙️ Configuring EAS project...');
    try {
      execSync('eas build:configure', { stdio: 'inherit' });
      console.log('✅ EAS project configured');
      return true;
    } catch (error) {
      console.error('❌ Failed to configure EAS:', error.message);
      return false;
    }
  } else {
    console.log('✅ EAS project already configured');
    return true;
  }
}

// Build Android app
function buildAndroid(profile = 'preview') {
  console.log(`🔨 Building Android app (${profile} profile)...`);
  try {
    execSync(`eas build --platform android --profile ${profile}`, { stdio: 'inherit' });
    console.log('✅ Android build completed successfully!');
    console.log('📱 You can download your APK/AAB from the Expo dashboard');
    return true;
  } catch (error) {
    console.error('❌ Android build failed:', error.message);
    return false;
  }
}

// Main execution
async function main() {
  const profile = process.argv[2] || 'preview';
  
  console.log(`Building Android app with profile: ${profile}`);
  console.log('');

  // Step 1: Check EAS CLI
  if (!checkEasCli()) {
    process.exit(1);
  }

  // Step 2: Check login
  if (!checkExpoLogin()) {
    console.log('');
    console.log('Please run the following command to login:');
    console.log('eas login');
    process.exit(1);
  }

  // Step 3: Configure EAS
  if (!configureEas()) {
    process.exit(1);
  }

  // Step 4: Build
  if (!buildAndroid(profile)) {
    process.exit(1);
  }

  console.log('');
  console.log('🎉 Build process completed!');
  console.log('');
  console.log('Next steps:');
  console.log('1. Check your build status at: https://expo.dev');
  console.log('2. Download your APK/AAB when ready');
  console.log('3. Test on Android devices');
  console.log('4. Submit to Google Play Store when ready');
}

main().catch(console.error);