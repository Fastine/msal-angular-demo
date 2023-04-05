import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatListModule } from "@angular/material/list";
import { MatMenuModule } from "@angular/material/menu";
import { MatCardModule } from "@angular/material/card";

import { HomeComponent } from "./home/home.component";
import { ProfileComponent } from "./profile/profile.component";
import { IPublicClientApplication, PublicClientApplication } from "@azure/msal-browser";
import { MSAL_INSTANCE, MsalBroadcastService, MsalService } from "@azure/msal-angular";

function MsalInstanceFactory(): IPublicClientApplication {
	return new PublicClientApplication({
		auth: {
			clientId: "d5f1b369-91ff-440f-a1fa-ec15dfac640f",
			authority: "https://login.microsoftonline.com/e1350cd1-44b5-4af8-9923-1e35db08783e",
			redirectUri: "https://localhost:4200/",
		},
	});
}

@NgModule({
	declarations: [AppComponent, HomeComponent, ProfileComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		HttpClientModule,
		MatButtonModule,
		MatToolbarModule,
		MatListModule,
		MatMenuModule,
		MatCardModule,
	],
	providers: [
		{
			provide: MSAL_INSTANCE,
			useFactory: MsalInstanceFactory,
		},
		MsalService,
		MsalBroadcastService,
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
