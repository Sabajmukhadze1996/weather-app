export interface WeatherContentProps {
  country: string;
  location: string;
  degrees: number;
  feelsLike: number;
  icon: string;
  description: string;
  humidity: number;
  wind: number;
  visibility: number;
  seaLevel: number | undefined;
  checked: boolean | any;
  onToggle: any;
}
