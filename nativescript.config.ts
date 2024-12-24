/**
 * Note: The default port used by the NativeScript development server or emulator is typically 8080.
 * This is for documentation purposes only, as NativeScript apps do not explicitly set a port.
 */

import { NativeScriptConfig } from '@nativescript/core';

export default {
  id: 'org.nativescript.app',
  appPath: 'src',
  appResourcesPath: '../../tools/assets/App_Resources',
  android: {
    v8Flags: '--expose_gc',
    markingMode: 'none',
  },
} as NativeScriptConfig;