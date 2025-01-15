export interface ConfigurationPutRequest {
  interface?: Interface;
  pixel?: string;
  system?: System;
  [property: string]: any;
}

export interface Interface {
  Layout_Opening?: LayoutOpening;
  Sound_Background?: SoundBackground;
  Sound_ButtonClick?: SoundButtonClick;
  Sound_Loss?: SoundLoss;
  Sound_Opening?: SoundOpening;
  Sound_Spin?: SoundSpin;
  Sound_Win?: SoundWin;
  TermsOfService_Text?: TermsOfServiceText;
  [property: string]: any;
}

export interface LayoutOpening {
  description: string;
  value: string;
  [property: string]: any;
}

export interface SoundBackground {
  description: string;
  value: string;
  [property: string]: any;
}

export interface SoundButtonClick {
  description: string;
  value: string;
  [property: string]: any;
}

export interface SoundLoss {
  description: string;
  value: string;
  [property: string]: any;
}

export interface SoundOpening {
  description: string;
  value: string;
  [property: string]: any;
}

export interface SoundSpin {
  description: string;
  value: string;
  [property: string]: any;
}

export interface SoundWin {
  description: string;
  value: string;
  [property: string]: any;
}

export interface TermsOfServiceText {
  description: string;
  value: string;
  [property: string]: any;
}

export interface System {
  AdjustmentLimits?: AdjustmentLimits;
  BackupEnabled?: BackupEnabled;
  BackupInterval?: BackupInterval;
  BankHealthDynamicAdjustment?: BankHealthDynamicAdjustment;
  BankPercentage?: BankPercentage;
  BetValueAdjustment?: BetValueAdjustment;
  BreakagePercentage?: BreakagePercentage;
  CardPaymentActive?: CardPaymentActive;
  ComplianceCheckInterval?: ComplianceCheckInterval;
  CPA?: CPA;
  CPM?: Cpm;
  DepositPercentage?: DepositPercentage;
  DisasterRecoveryPlan?: DisasterRecoveryPlan;
  DynamicAdjustmentEnabled?: DynamicAdjustmentEnabled;
  EnableAuditLogging?: EnableAuditLogging;
  EnableSecureBettingProtocol?: EnableSecureBettingProtocol;
  EnableServerDivision?: EnableServerDivision;
  GameCountAdjustment?: GameCountAdjustment;
  GameRoundAdjustment?: GameRoundAdjustment;
  LoyaltyPointsRate?: LoyaltyPointsRate;
  MaxDeposit?: MaxDeposit;
  MaximumBetLimit?: MaximumBetLimit;
  MaxRequestsPerMinute?: MaxRequestsPerMinute;
  MaxWithdrawal?: MaxWithdrawal;
  MinDeposit?: MinDeposit;
  MinimumBetLimit?: MinimumBetLimit;
  MinWithdrawal?: MinWithdrawal;
  ML_DynamicSuccessAnalysis?: MLDynamicSuccessAnalysis;
  ML_Enabled?: MLEnabled;
  ML_Features?: MLFeatures;
  ML_ModelPath?: MLModelPath;
  NumberOfMaxUser?: NumberOfMaxUser;
  PerformanceMonitoringEnabled?: PerformanceMonitoringEnabled;
  PixPaymentActive?: PixPaymentActive;
  PlayerSatisfactionResponses?: PlayerSatisfactionResponses;
  PlayerSatisfactionSurveyEnabled: PlayerSatisfactionSurveyEnabled;
  PlayerTypeAdjustment?: PlayerTypeAdjustment;
  RateLimitingEnabled?: RateLimitingEnabled;
  RegistrationStatus?: RegistrationStatus;
  RTP_Roulette?: RTPRoulette;
  SecureBettingProtocolId?: SecureBettingProtocolId;
  SoundEnabled?: SoundEnabled;
  StressTestSchedule?: StressTestSchedule;
  SurveyFrequency?: SurveyFrequency;
  WelcomeBonusPercentage?: WelcomeBonusPercentage;
  WinHistoryAdjustment?: WinHistoryAdjustment;
  [property: string]: any;
}

export interface AdjustmentLimits {
  description: string;
  value: Value;
  [property: string]: any;
}

export interface Value {
  max: number;
  min: number;
  [property: string]: any;
}

export interface BackupEnabled {
  description: string;
  value: number;
  [property: string]: any;
}

export interface BackupInterval {
  description: string;
  value: string;
  [property: string]: any;
}

export interface BankHealthDynamicAdjustment {
  description: string;
  value: boolean;
  [property: string]: any;
}

export interface BankPercentage {
  description: string;
  value: number;
  [property: string]: any;
}

export interface BetValueAdjustment {
  description: string;
  value: boolean;
  [property: string]: any;
}

export interface BreakagePercentage {
  description: string;
  value: number;
  [property: string]: any;
}

export interface CPA {
  description: string;
  value: number;
  [property: string]: any;
}

export interface Cpm {
  description: string;
  value: number;
  [property: string]: any;
}

export interface CardPaymentActive {
  description: string;
  value: boolean;
  [property: string]: any;
}

export interface ComplianceCheckInterval {
  description: string;
  value: number;
  [property: string]: any;
}

export interface DepositPercentage {
  description: string;
  value: number;
  [property: string]: any;
}

export interface DisasterRecoveryPlan {
  description: string;
  value: string;
  [property: string]: any;
}

export interface DynamicAdjustmentEnabled {
  description: string;
  value: number;
  [property: string]: any;
}

export interface EnableAuditLogging {
  description: string;
  value: number;
  [property: string]: any;
}

export interface EnableSecureBettingProtocol {
  description: string;
  value: number;
  [property: string]: any;
}

export interface EnableServerDivision {
  description: string;
  value: number;
  [property: string]: any;
}

export interface GameCountAdjustment {
  description: string;
  value: boolean;
  [property: string]: any;
}

export interface GameRoundAdjustment {
  description: string;
  value: boolean;
  [property: string]: any;
}

export interface LoyaltyPointsRate {
  description: string;
  value: number;
  [property: string]: any;
}

export interface MLDynamicSuccessAnalysis {
  description: string;
  value: number;
  [property: string]: any;
}

export interface MLEnabled {
  description: string;
  value: number;
  [property: string]: any;
}

export interface MLFeatures {
  description: string;
  value: string[];
  [property: string]: any;
}

export interface MLModelPath {
  description: string;
  value: string;
  [property: string]: any;
}

export interface MaxDeposit {
  description: string;
  value: number;
  [property: string]: any;
}

export interface MaxRequestsPerMinute {
  description: string;
  value: number;
  [property: string]: any;
}

export interface MaxWithdrawal {
  description: string;
  value: number;
  [property: string]: any;
}

export interface MaximumBetLimit {
  description: string;
  value: number;
  [property: string]: any;
}

export interface MinDeposit {
  description: string;
  value: number;
  [property: string]: any;
}

export interface MinWithdrawal {
  description: string;
  value: number;
  [property: string]: any;
}

export interface MinimumBetLimit {
  description: string;
  value: number;
  [property: string]: any;
}

export interface NumberOfMaxUser {
  description: string;
  value: number;
  [property: string]: any;
}

export interface PerformanceMonitoringEnabled {
  description: string;
  value: number;
  [property: string]: any;
}

export interface PixPaymentActive {
  description: string;
  value: boolean;
  [property: string]: any;
}

export interface PlayerSatisfactionResponses {
  description: string;
  value: { [key: string]: any };
  [property: string]: any;
}

export interface PlayerSatisfactionSurveyEnabled {
  description: string;
  value: number;
  [property: string]: any;
}

export interface PlayerTypeAdjustment {
  description: string;
  value: boolean;
  [property: string]: any;
}

export interface RTPRoulette {
  description: string;
  value: number;
  [property: string]: any;
}

export interface RateLimitingEnabled {
  description: string;
  value: number;
  [property: string]: any;
}

export interface RegistrationStatus {
  description: string;
  value: boolean;
  [property: string]: any;
}

export interface SecureBettingProtocolId {
  description: string;
  value: number;
  [property: string]: any;
}

export interface SoundEnabled {
  description: string;
  value: number;
  [property: string]: any;
}

export interface StressTestSchedule {
  description: string;
  value: string;
  [property: string]: any;
}

export interface SurveyFrequency {
  description: string;
  value: number;
  [property: string]: any;
}

export interface WelcomeBonusPercentage {
  description: string;
  value: number;
  [property: string]: any;
}

export interface WinHistoryAdjustment {
  description: string;
  value: boolean;
  [property: string]: any;
}
