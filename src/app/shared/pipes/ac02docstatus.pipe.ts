import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'ac02docstatus'
})
export class Ac02docstatusPipe implements PipeTransform {
    transform(value: any, args?: any): any {
        if (value === 'N') {
            return 'รอตรวจเอกสารac02';
        } else if (value === 'A') {
            return 'เอกสารผ่านac02';
        } else if (value === 'R') {
            return 'เอกสารไม่ผ่านac02';
        } else {
            return 'N/A';
        }
    }
}
