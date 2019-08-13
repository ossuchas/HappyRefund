import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'tf01docstatus'
})
export class Tf01docstatusPipe implements PipeTransform {
    transform(value: any, args?: any): any {
        if (value === 'N') {
            return 'รอตรวจเอกสาร';
        } else if (value === 'A') {
            return 'เอกสารผ่าน';
        } else if (value === 'R') {
            return 'เอกสารไม่ผ่าน';
        } else {
            return 'N/A';
        }
    }
}
