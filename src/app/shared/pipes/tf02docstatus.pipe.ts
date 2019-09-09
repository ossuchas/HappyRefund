import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'tf02docstatus'
})
export class Tf02docstatusPipe implements PipeTransform {
    transform(value: any, args?: any): any {
        if (value === 'N') {
            return 'รอตรวจเอกสารtf02';
        } else if (value === 'A') {
            return 'เอกสารผ่านtf02';
        } else if (value === 'R') {
            return 'เอกสารไม่ผ่านtf02';
        } else {
            return 'N/A';
        }
    }
}
