import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'ac02docstatus'
})
export class Ac02docstatusPipe implements PipeTransform {
    transform(value: any, args?: any): any {
        if (value === 'N') {
            return 'รอการยืนยันจากบัญชี';
        } else if (value === 'A') {
            return 'APPROVED';
        } else if (value === 'R') {
            return 'ไม่อนุมัติรายการ';
        } else {
            return 'N/A';
        }
    }
}
