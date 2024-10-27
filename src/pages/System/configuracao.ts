export const configuracao = `# Configuração de Apostas e Pagamentos 

# Ativa a divisão de servidores para balanceamento de carga
EnableServerDivision = 1

# Ativa protocolos de segurança para transações de apostas
EnableSecureBettingProtocol = 1
SecureBettingProtocolId = 256

# Configurações da Banca
BankPercentage = 20 # Percentual da banca
RegistrationStatus = "ATIVO" # Status do cadastro

# Número máximo de usuários conectados simultaneamente
NumberOfMaxUser = 1000

# Configuração dos limites de apostas
MinimumBetLimit = 10.00 # Limite mínimo de aposta permitido
MaximumBetLimit = 20000.00 # Limite máximo de aposta permitido

# Retorno ao Jogador para a roleta da sorte
RTP_Roulette = 97.3 # Return to Player para roleta

# Ganhos de afiliados
DepositPercentage = 5 # Percentual de ganho sobre depósito
BreakagePercentage = 5 # Percentual de ganho sobre rodadas quebradas
CPA = 10.00 # R$ 10,00 por afiliação com depósito
CPM = 5000.00 # R$ 5000,00 por 1000 afiliações com depósito

# Bônus e Incentivos
WelcomeBonusPercentage = 100 # Percentual do bônus de boas-vindas
LoyaltyPointsRate = 0.01 # Taxa de conversão de apostas em pontos de fidelidade

# Auditoria e Compliance
EnableAuditLogging = 1 # Ativa o registro de auditoria para rastrear transações
ComplianceCheckInterval = 30 # Intervalo para verificação de conformidade

# Limites de depósito e saque
MaxDeposit = 20000.00 # Limite máximo de depósito
MinDeposit = 10.00 # Limite mínimo de depósito
MinWithdrawal = 100.00 # Limite mínimo de saque
MaxWithdrawal = 2000.00 # Limite máximo de saque

# Métodos de pagamento
PixPaymentActive = "ATIVO" # Status do método de pagamento Pix
CardPaymentActive = "ATIVO" # Status do método de pagamento com cartão

# Configurações de som
SoundEnabled = 0 # Som ativado ou não (0 para desativado, 1 para ativado)

# Configuração da Pesquisa de Satisfação

# Ativa a pesquisa de satisfação do jogador
PlayerSatisfactionSurveyEnabled = 1 # Ativa o recurso de pesquisa de satisfação
SurveyFrequency = 30 # Frequência da pesquisa em dias

# Armazenamento das respostas da pesquisa
PlayerSatisfactionResponses = {}

# Machine Learning para Análise Dinâmica de Sucesso
ML_DynamicSuccessAnalysis = 1 # Ativa análise dinâmica de sucesso via Machine Learning
PlayerTypeAdjustment = True # Ajusta a taxa de sucesso com base no tipo de jogador (novo ou antigo)
GameRoundAdjustment = True # Ajusta a taxa de sucesso com base no número de rodadas jogadas
WinHistoryAdjustment = True # Ajusta a taxa de sucesso com base no histórico de ganhos
GameCountAdjustment = True # Ajusta a taxa de sucesso com base no número total de jogos jogados
BetValueAdjustment = True # Ajusta a taxa de sucesso com base no valor da aposta
BankHealthDynamicAdjustment = True # Ajusta a taxa de sucesso com base na saúde financeira da banca
ML_Enabled = 1 # Habilita a aplicação de Machine Learning
ML_ModelPath = "path/to/your/model.pkl" # Caminho para o modelo treinado
ML_Features = ["player_type", "daily_rounds", "win_loss_history", "total_games", "bet_value", "bank_balance"]

# Lista de características usadas pelo modelo

# Dynamic Success Rate Adjustment
DynamicAdjustmentEnabled = 1 # Habilita ajustes dinâmicos com base na previsão do modelo
AdjustmentLimits = {"min": 0.05, "max": 0.95} # Limites de ajuste da taxa de sucesso

# Monitoramento e Testes
PerformanceMonitoringEnabled = 1 # Ativa o monitoramento de performance do sistema
StressTestSchedule = "monthly" # Agenda para testes de estresse mensais

# Backup e Recuperação
BackupEnabled = 1 # Habilita backups regulares dos dados
BackupInterval = "weekly" # Intervalo de backup semanal
DisasterRecoveryPlan = "path/to/recovery_plan.pdf" # Caminho para o plano de recuperação de desastres

# Segurança e Rate Limiting
RateLimitingEnabled = 1 # Ativa limitação de taxa para prevenir ataques DoS
MaxRequestsPerMinute = 100 # Máximo de requisições por minuto por IP`;

export const configuracaoInterface = `# Configurações da Interface de Som

# Sons de interface
Sound_Opening = "http://www.monkmaster.com/sound.mp3" # Som de abertura
Sound_Background = "http://www.monkmaster.com/sound.mp3" # Som de fundo
Sound_ButtonClick = "http://www.monkmaster.com/sound.mp3" # Som de clique em botão
Sound_Spin = "http://www.monkmaster.com/sound.mp3" # Som de giro
Sound_Win = "http://www.monkmaster.com/sound.mp3" # Som de vitória
Sound_Loss = "http://www.monkmaster.com/sound.mp3" # Som de perda

# Configuração de Layout
Layout_Opening = "http://www.monkmaster.com/sound.mp3" # Som para a abertura do layout

# Termos de Uso
TermsOfService_Text = "Selecione o método de pagamento que será o modo pagamento o método de
pagamento oferecido de que. método de pagamento que será o modo pagamento o método de pagamento.`;
