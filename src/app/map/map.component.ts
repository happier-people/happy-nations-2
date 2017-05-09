import { Component, OnInit } from '@angular/core';
import {MapService} from './map.service';

declare let $;
declare let jvm;

@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.less']
})
export class MapComponent implements OnInit {
    private map: any;

    private palette: string[] = [
        '#f6d258', '#efcec5', '#d1af94',
        '#88b14b', '#F48F74', '#DF6F9F',
        '#5587a2', '#829E67', '#1273D0'
    ];

    constructor (
        private mapService: MapService
    ) { }

    ngOnInit () {
        $.fn.vectorMap('addMap', 'world_mill', {
            insets: [{
                width: 900,
                top: 0,
                height: 440.7063107441331,
                bbox: [{
                    y: -12671671.123330014,
                    x: -20004297.151525836
                }, {
                    y: 6930392.025135122,
                    x: 20026572.394749384
                }],
                left: 0
            }],
            paths: this.mapService.COUNTRIES_PATHS,
            height: 440.7063107441331,
            projection: {
                type: 'mill',
                centralMeridian: 11.5
            },
            width: 900.0
        });

        this.map = new jvm.Map({
            map: 'world_mill',
            container: $('#map-container'),
            backgroundColor: '#97d5e0',
            // onRegionOver: onRegionOver,
            // onRegionOut: onRegionOut,
            // onRegionClick: onRegionClick,
            // onRegionTipShow: onRegionTipShow,
            series: {
                regions: [{
                    attribute: 'fill'
                }]
            }
        });
        this.map.series.regions[0].setValues(this.getRandomColors());

    }

    private getRandomColors () : any {
        let colors = {};

        for (let key in this.map.regions) {
            colors[key] = this.palette[
                Math.floor( Math.random()* this.palette.length )
            ];
        }

        return colors;
    }
}
