import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'ac01docstatus'
})
export class Ac01docstatusPipe implements PipeTransform {
    transform(value: any, args?: any): any {
        if (value === 'N') {
            return 'อนุมัติ Memo';
        } else if (value === 'A') {
            return 'รอการยืนยันจากบัญชี';
        } else if (value === 'R') {
            return 'ไม่อนุมัติรายการ';
        } else {
            return 'N/A';
        }
    }
}
