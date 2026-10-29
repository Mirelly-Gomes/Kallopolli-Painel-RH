import { MockDashboardRepository } from "./repositories/MockDashboardRepository.js";
import { DashboardService } from "./services/DashboardService.js";
import { DashboardView } from "./views/DashboardView.js";
import { DashboardController } from "./controllers/DashboardController.js";

async function bootstrap() {
  const repository = new MockDashboardRepository();
  const service = new DashboardService(repository);
  const view = new DashboardView();
  const controller = new DashboardController(service, view);

  try {
    await controller.init();
  } catch (error) {
    console.error("Falha ao iniciar o dashboard:", error);
    document.querySelector("main").innerHTML = `
      <section class="panel" style="margin:32px auto;max-width:560px">
        <h1>Não foi possível carregar o painel</h1>
        <p>Atualize a página. Se o problema continuar, confira o console do navegador.</p>
      </section>`;
  }
}

bootstrap();
