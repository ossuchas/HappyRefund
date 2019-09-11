import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'tf02docstatus'
})
export class Tf02docstatusPipe implements PipeTransform {
    transform(value: any, args?: any): any {
        if (value === 'N') {
            return 'รอตรวจยืนยันเอกสาร';
        } else if (value === 'A') {
            return 'เอกสารผ่านยืนยันแล้ว';
        } else if (value === 'R') {
            return 'เอกสารไม่ผ่าน';
        } else {
            return 'N/A';
        }
    }
}
