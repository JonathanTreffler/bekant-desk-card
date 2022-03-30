import { LovelaceCard, LovelaceCardConfig, LovelaceCardEditor } from 'custom-card-helpers';
declare global {
  interface HTMLElementTagNameMap {
    'bekant-desk-card-editor': LovelaceCardEditor;
    'hui-error-card': LovelaceCard;
  }
  interface Window {
    customCards?: { 
      type: string;
      description: string;
      name: string; 
      preview?: boolean;
    }[];
  }
}

export interface BekantDeskCardConfig extends LovelaceCardConfig {
  name?: string;
  desk: string;
  moving_sensor: string;
  connection_sensor: string;
  height_sensor: string;
  max_height: number;
  min_height: number;
  presets: {
    target: number;
    label: string;
  }[];
}
