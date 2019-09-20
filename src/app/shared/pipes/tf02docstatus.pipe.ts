import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'tf02docstatus'
})
export class Tf02docstatusPipe implements PipeTransform {
    transform(value: any, args?: any): any {
        if (value === 'N') {
            return 'ยืนยันการส่งเอกสาร';
        } else if (value === 'A') {
            return 'อนุมัติ Memo';
        } else if (value === 'R') {
            return 'ไม่อนุมัติรายการ';
        } else {
            return 'N/A';
        }
    }
}
