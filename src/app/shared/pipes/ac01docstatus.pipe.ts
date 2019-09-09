import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'ac01docstatus'
})
export class Ac01docstatusPipe implements PipeTransform {
    transform(value: any, args?: any): any {
        if (value === 'N') {
            return 'รอตรวจเอกสารac01';
        } else if (value === 'A') {
            return 'เอกสารผ่านac01';
        } else if (value === 'R') {
            return 'เอกสารไม่ผ่านac01';
        } else {
            return 'N/A';
        }
    }
}
