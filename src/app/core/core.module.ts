import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

// Core providers.
import { ServicesModule } from "./services/services.module";

// Core modules.
import { ComponentsModule } from "./components/components.module";
import { PagesModule } from "./pages/pages.module";

@NgModule({
	declarations: [],
	providers: [ServicesModule],
	imports: [CommonModule],
	exports: [ComponentsModule, PagesModule]
})
export class CoreModule {}
