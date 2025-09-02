/**
 * Integration Test Configuration
 * Part of n8n-MCP - Model Context Protocol Server for n8n
 * Copyright (c) 2024 AiAdvisors Romuald Czlonkowski
 * Contributor: jrand0m
 */

import { defineConfig, mergeConfig } from 'vitest/config';
import baseConfig from './vitest.config';

export default mergeConfig(
  baseConfig,
  defineConfig({
    test: {
      // Include both global setup and integration-specific MSW setup
      setupFiles: ['./tests/setup/global-setup.ts', './tests/integration/setup/integration-setup.ts'],
      // Only include integration tests
      include: ['tests/integration/**/*.test.ts'],
      // Integration tests might need more time
      testTimeout: 30000,
      // Specific pool options for integration tests
      poolOptions: {
        threads: {
          // Run integration tests sequentially by default
          singleThread: true,
          maxThreads: 1
        }
      },
      // Disable coverage for integration tests or set lower thresholds
      coverage: {
        enabled: false
      }
    }
  })
);