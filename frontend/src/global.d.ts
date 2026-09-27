interface Window {
  Kakao?: {
    Share: { sendDefault(options: unknown): void };
    cleanup(): void;
    init(appKey: string): void;
    isInitialized(): boolean;
  };
}
