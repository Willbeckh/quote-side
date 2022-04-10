import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CreateQuoteComponent } from './components/create-quote/create-quote.component';
import { QuotesComponent } from './components/quotes/quotes.component';
import { QuoteItemComponent } from './components/quote-item/quote-item.component';
import { HomeComponent } from './components/home/home.component';
import { LikeBoxComponent } from './components/like-box/like-box.component';
import { DislikeBoxComponent } from './components/dislike-box/dislike-box.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CreateQuoteComponent,
    QuotesComponent,
    QuoteItemComponent,
    HomeComponent,
    LikeBoxComponent,
    DislikeBoxComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
