import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';

import {NavbarComponent} from './components/navbar/navbar/navbar.component';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {HomeComponent} from './components/body/home/home.component';
import {FeaturesComponent} from './components/body/features/features.component';
import {WeeklydealsComponent} from './components/body/weeklydeals/weeklydeals.component';
import {PricingComponent} from './components/body/pricing/pricing.component';
import {MypageComponent} from './components/body/mypage/mypage.component';
import {RegisterComponent} from './components/body/register/register.component';
import {LoginComponent} from './components/body/login/login.component';
import { PasswordrecoveryComponent } from './components/body/passwordrecovery/passwordrecovery.component';
import { IndexComponent } from './components/body/index/index.component';
import { FooterComponent } from './components/footer/footer.component';
import { FastAddComponent } from './components/navbar/admin/fast-add/fast-add.component';
import { AdminBtnComponent } from './components/navbar/admin/admin-btn/admin-btn.component';
import {NgbDatepickerModule, NgbModalModule} from '@ng-bootstrap/ng-bootstrap';
import { ProductmanagementComponent } from './components/navbar/admin/productmanagement/productmanagement.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

@NgModule({
  declarations: [
    NavbarComponent,
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    PricingComponent,
    FeaturesComponent,
    WeeklydealsComponent,
    MypageComponent,
    PasswordrecoveryComponent,
    IndexComponent,
    FooterComponent,
    FastAddComponent,
    AdminBtnComponent,
    ProductmanagementComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    NgbDatepickerModule,
    NgbModalModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    library.add(fas, far);
  }
}
