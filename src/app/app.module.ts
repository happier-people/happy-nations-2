import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import {MapService} from "./map/map.service";
import {Routes, RouterModule} from "@angular/router";

const routes: Routes = [
    {
        path: '',
        redirectTo: 'map',
        pathMatch: 'full'
    },
    {
        path: 'map',
        component: MapComponent
    }
];

@NgModule({
    declarations: [
        AppComponent,
        MapComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(routes)
    ],
    providers: [MapService],
    bootstrap: [AppComponent]
})
export class AppModule { }
