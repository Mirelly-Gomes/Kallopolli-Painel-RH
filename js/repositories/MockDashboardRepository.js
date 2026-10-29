import { Journey } from "../models/Journey.js";
import { Alert } from "../models/Alert.js";

/** Fonte temporária de dados. Substitua esta classe por um repositório HTTP quando a API existir. */
export class MockDashboardRepository {
  constructor() {
    this.journeys = [
      new Journey({ id: 1, employeeName: "João Silva", store: "Porto Alegre", day: 10, status: "open-alert", statusLabel: "Alerta aberto" }),
      new Journey({ id: 2, employeeName: "Ana Pereira", store: "Tramandaí", day: 3, status: "on-track", statusLabel: "Em dia" }),
      new Journey({ id: 3, employeeName: "Lucas Martins", store: "Capão da Canoa", day: 34, status: "no-response", statusLabel: "Sem resposta 24h" }),
      new Journey({ id: 4, employeeName: "Bianca Rocha", store: "Porto Alegre", day: 52, status: "attended", statusLabel: "Atendido" }),
      new Journey({ id: 5, employeeName: "Pedro Alves", store: "Porto Alegre", day: 21, status: "on-track", statusLabel: "Em dia" }),
      new Journey({ id: 6, employeeName: "Carla Dias", store: "Tramandaí", day: 78, status: "on-track", statusLabel: "Em dia" }),
      new Journey({ id: 7, employeeName: "Marina Costa", store: "Capão da Canoa", day: 43, status: "open-alert", statusLabel: "Alerta aberto" }),
      new Journey({ id: 8, employeeName: "Rafael Souza", store: "Tramandaí", day: 16, status: "on-track", statusLabel: "Em dia" },),
    ];

    this.alerts = [
      new Alert({ id: 101, employeeName: "Lucas Martins", store: "Capão da Canoa", signal: "desmotivação", recommendation: "Lembrete enviado ao líder.", state: "Sem resposta 24h", category: "no-response", createdAt: "Hoje, 09:10" }),
      new Alert({ id: 102, employeeName: "João Silva", store: "Porto Alegre", signal: "cansaço", recommendation: "Sugestão: conversar ainda hoje.", state: "Aguardando líder", category: "open", createdAt: "Hoje, 10:35" }),
      new Alert({ id: 103, employeeName: "Bianca Rocha", store: "Porto Alegre", signal: "conflito", recommendation: "Líder registrou o retorno.", state: "Atendido", category: "attended", createdAt: "Ontem, 16:20" }),
      new Alert({ id: 104, employeeName: "Marina Costa", store: "Capão da Canoa", signal: "adaptação", recommendation: "Verificar andamento na próxima conversa.", state: "Aguardando líder", category: "open", createdAt: "Hoje, 08:45" }),
      new Alert({ id: 105, employeeName: "Rafael Souza", store: "Tramandaí", signal: "dúvida sobre rotina", recommendation: "Contato sugerido para esta semana.", state: "Aguardando líder", category: "open", createdAt: "Ontem, 14:10" }),
      new Alert({ id: 106, employeeName: "Ana Pereira", store: "Tramandaí", signal: "integração", recommendation: "Acompanhamento concluído pelo líder.", state: "Atendido", category: "attended", createdAt: "Ontem, 11:50" }),
      new Alert({ id: 107, employeeName: "Pedro Alves", store: "Porto Alegre", signal: "rotina", recommendation: "Acompanhar na próxima reunião individual.", state: "Aguardando líder", category: "open", createdAt: "Ontem, 09:30" }),
    ];

    // Os totais representam o panorama geral do programa; a tabela exibe somente uma amostra.
    this.summary = { inJourney: 48, openAlerts: 7, noResponse: 2, attended: 12 };
    this.stores = ["Porto Alegre", "Tramandaí", "Capão da Canoa"];
  }

  async getDashboardData() {
    // O async simula o contrato de uma futura chamada HTTP.
    return Promise.resolve({
      journeys: [...this.journeys],
      alerts: [...this.alerts],
      summary: { ...this.summary },
      stores: [...this.stores],
    });
  }

  async markReminderSent(alertId) {
    const alert = this.alerts.find((item) => item.id === alertId);
    if (!alert) throw new Error("Alerta não encontrado.");
    alert.recommendation = "Lembrete reenviado ao líder (simulação).";
    alert.createdAt = "Agora";
    return alert;
  }
}
