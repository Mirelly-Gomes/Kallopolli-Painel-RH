/** Entidade de domínio para um alerta de acompanhamento. */
export class Alert {
  constructor({ id, employeeName, store, signal, recommendation, state, category, createdAt }) {
    this.id = id;
    this.employeeName = employeeName;
    this.store = store;
    this.signal = signal;
    this.recommendation = recommendation;
    this.state = state;
    this.category = category;
    this.createdAt = createdAt;
  }
}
