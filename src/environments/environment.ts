// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: 'http://192.168.0.42:5000/api/v1',
//   apiUrl: 'http://localhost:5000/api/v1',
  memoUrl_1: 'http://www.ap-ir.com/WebSalesReport/Forms/WF_Print_Form_Viewer.aspx?PFID=\
  PF_TR_009_2&PFName=PF_TR_009_2.rpt&ParaName=@TransferNumber&ParaValue=',
  memoUrl_2: '&ExtraQueryString=%7C@NitiBankName*%7C@NitiBankType*1%7C@NitiBankNo*%7C@\
  CustomerBankName*%7C@CustomerBankType*1%7C@CustomerBankNo*%7C@ContactID*'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
