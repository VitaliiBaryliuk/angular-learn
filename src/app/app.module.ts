import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Route, RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ChildComponent } from './child.component';
import { HomeComponent } from './Home/home.component';
import { AboutComponent } from './About/about.component';
import { NotFoundComponent } from './NotFoud/NotFound.component';
import { ItemComponent } from './Home/item.component';
import { ItemDetailsComponent } from './Home/item.details.component';
import { ItemStatComponent } from './Home/item.stat.component';

import { TemplateVariablesModule } from './TemplateVariables/templateVariables.module';
import { ClassesDirectivesModule } from './ClassesDirectives/classesDirectives.module';
import { CustomAttributiveDirectivesModule } from './CustomAttributiveDirectives/customAttributiveDirectives.module';
import { LifeCycleMethodsComponent } from './LifeCycleMethods/lifeCycleMethods.component';
import { StructureDirectivesModule } from './StructureDirectives/structureDirectives.module';
import { ServicesComponentModule } from './ServicesComponent/services.module';
import { FormsComponentModule } from './FormsComponent/formsComponent.module';
import { FormsNgFormComponentModule } from './FormsNgFormComponent/formsNgFormComponent.module';
import { FormsReactiveComponentModule } from './FormsReactiveComponent/formsReactiveComponent.module';
import { FormsReactiveFormBuilerComponentModule } from './FormsReactiveFormBuilderComponent/formsReactiveFormBuilderComponent.module';
import { HttpRequestComponentModule } from './HttpRequestComponent/httpRequestComponent.module';
import { RxjsComponentModule } from './RxjsComponent/rxjsComponent.module';
import { RxjsErrorResponseProcessingComponentModule } from './RxjsErrorResponseProcessingComponent/rxjsErrorResponseProcessingComponent.module';
import { RequestsComponentModule } from './RequestsComponent/requestsComponent.module';
import { PipesModule } from './PipesComponent/pipes.module';


import { DataService } from './ServicesComponent/data.service';
import { LogService } from './ServicesComponent/log.service';
import { HttpService } from './services/http.service';
import { AboutGuard } from './About/about.guard';
import { ExitAboutGuard } from './About/exit.about.guard';

const itemRoutes = [
    { path: 'details', component: ItemDetailsComponent },
    { path: 'stat', component: ItemStatComponent }
]

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent  },
    { path: 'item/:id', component: ItemComponent, children: itemRoutes},
    { path: 'about', component: AboutComponent, canActivate: [AboutGuard], canDeactivate: [ExitAboutGuard] },
    { path: '**', component: NotFoundComponent },
]
 
@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes),
        BrowserModule,
        FormsModule,
        HttpClientModule,
        TemplateVariablesModule,
        ClassesDirectivesModule,
        CustomAttributiveDirectivesModule,
        StructureDirectivesModule,
        ServicesComponentModule,
        FormsComponentModule,
        FormsNgFormComponentModule,
        FormsReactiveComponentModule,
        FormsReactiveFormBuilerComponentModule,
        HttpRequestComponentModule,
        RxjsComponentModule,
        RxjsErrorResponseProcessingComponentModule,
        RequestsComponentModule,
        PipesModule
    ],
    declarations: [ 
        AppComponent, 
        ChildComponent, 
        LifeCycleMethodsComponent,
        HomeComponent,
        AboutComponent,
        NotFoundComponent,
        ItemComponent,
        ItemDetailsComponent,
        ItemStatComponent
    ],
    bootstrap: [ AppComponent ],
    providers: [DataService, LogService, HttpService, AboutGuard, ExitAboutGuard]
})

export class AppModule {};