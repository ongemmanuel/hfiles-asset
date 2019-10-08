import { Pipe, PipeTransform } from '@angular/core';
import { AdditionalConfig } from '../shared/additional.config';

@Pipe({ name: 'mapKeyToName' })
export class KeyToNamePipe implements PipeTransform {
    labelMap = AdditionalConfig.LABEL_MAP;
    transform(value: string): string {
        return this.labelMap[value];
        // return value;
    }
}

