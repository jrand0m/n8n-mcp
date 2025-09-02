/**
 * Type Definitions
 * Part of n8n-MCP - Model Context Protocol Server for n8n
 * Copyright (c) 2024 AiAdvisors Romuald Czlonkowski
 * Contributor: jrand0m
 * Licensed under the Sustainable Use License v1.0
 */

export interface MCPServerConfig {
  port: number;
  host: string;
  authToken?: string;
}

export interface ToolDefinition {
  name: string;
  description: string;
  inputSchema: {
    type: string;
    properties: Record<string, any>;
    required?: string[];
    additionalProperties?: boolean | Record<string, any>;
  };
  outputSchema?: {
    type: string;
    properties: Record<string, any>;
    required?: string[];
    additionalProperties?: boolean | Record<string, any>;
  };
}

export interface ResourceDefinition {
  uri: string;
  name: string;
  description?: string;
  mimeType?: string;
}

export interface PromptDefinition {
  name: string;
  description?: string;
  arguments?: Array<{
    name: string;
    description?: string;
    required?: boolean;
  }>;
}