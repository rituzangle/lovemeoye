import { useEffect } from 'react';

/**
 * Global interface extension for framework integration
 * This allows the framework to communicate with the app when it's ready
 */
declare global {
  interface Window {
    frameworkReady?: () => void;
  }
}

/**
 * Framework Ready Hook
 * 
 * CRITICAL: This hook is essential for the framework to function properly.
 * It signals to the framework that the React app has mounted and is ready
 * to receive interactions and updates.
 * 
 * DO NOT REMOVE OR MODIFY this hook - it's required for proper framework operation.
 * 
 * FEATURES:
 * - Framework communication initialization
 * - App readiness signaling
 * - Cross-platform compatibility
 * - Production-ready integration
 * - Multi-language app support
 * 
 * Usage: Call this hook in the root layout component (_layout.tsx)
 */
export function useFrameworkReady() {
  useEffect(() => {
    // Signal to the framework that the app is ready
    // This callback is set by the framework and called when the app mounts
    // Essential for proper framework integration and functionality
    window.frameworkReady?.();
  });
}