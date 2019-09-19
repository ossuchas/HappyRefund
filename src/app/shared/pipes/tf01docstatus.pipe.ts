import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'tf01docstatus'
})
export class Tf01docstatusPipe implements PipeTransform {
    transform(value: any, args?: any): any {
        if (value === 'N') {
            return 'รอการตรวจสอบเอกสาร';
        } else if (value === 'A') {
            return 'ยืนยันการส่งเอกสาร';
        } else if (value === 'R') {
            return 'ไม่อนุมัติรายการ';
        } else {
            return 'N/A';
        }
    }
}
