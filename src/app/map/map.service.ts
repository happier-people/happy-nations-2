import {Injectable} from "@angular/core";
import * as COUNTRIES_PATHS from './countries-paths.json';

@Injectable()
export class MapService {
    public COUNTRIES_PATHS = COUNTRIES_PATHS;
}
