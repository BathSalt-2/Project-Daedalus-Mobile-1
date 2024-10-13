import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AiService {
  constructor() {}

  async generateResponse(prompt: string): Promise<string> {
    // TODO: Implement Hugging Face API integration
    // For now, return a mock response
    return `AI response to: ${prompt}`;
  }
}