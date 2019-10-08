export abstract class URLValues {
    // BASE URL
    static readonly TOKEN_ID: string = 'svi-token';
    static readonly ADMIN_PERMISSION_TOKEN: string = 'permissions-token';

    //   static readonly baseVal = 'http://localhost:8080/';
    static readonly baseVal = 'https://34.231.246.244:8181/';

    // SSO SERVICES
    static readonly ADMIN_URL: string = URLValues.baseVal + 'sso4-portal/services/';
    static readonly LOGIN_URL: string = URLValues.ADMIN_URL + 'login/access';
    static readonly ACCESS_URL: string = URLValues.ADMIN_URL + 'access/users/current';
    static readonly GET_USER_DATA_URL: string = URLValues.ADMIN_URL + 'info/details/current/full';
    static readonly END_SESSION: string = URLValues.ADMIN_URL + 'login/tokens/logout';

    // HFILES ADMIN SERVICES
    static readonly GET_CONFIG_BY_ROLE: string = URLValues.baseVal + 'hfiles-admin-web-svc/services/admin/role/'; // + selectedRole
    static readonly GET_JSON_CONFIG: string = URLValues.baseVal + 'hfiles-admin-web-svc/Admin_Module/config/config.json';
    static readonly PARAMETERS: string = URLValues.baseVal + 'hfiles-admin-web-svc/services/admin/parameters';
    static readonly COMPANY_LIST: string = URLValues.baseVal + 'hfiles-admin-web-svc/services/admin/company/list/'; // + selectedRole
    static readonly PARAM_SAVE: string = URLValues.baseVal + 'hfiles-admin-web-svc/services/admin/parameter/save';
    static readonly PARAM_TEMPLATE: string = URLValues.baseVal + 'hfiles-web-svc/services/details/templates/upload-parameters';

    // COMPANY TAB
    static readonly COMPANY_TAB: string = URLValues.baseVal + 'hfiles-admin-web-svc/services/admin/companies/';  // + selectedRole
    static readonly COMPANY_ELEM: string = URLValues.baseVal + 'hfiles-admin-web-svc/services/admin/companies/'; // + selectedCompId
    static readonly COMPANY_EDIT: string = URLValues.baseVal + 'hfiles-admin-web-svc/services/admin/parameters/'; // + selectedCompId
    static readonly CHECK_COMPANY_ID: string = URLValues.baseVal + 'hfiles-admin-web-svc/services/admin/company/check/'; // + id , GET
    static readonly COMPANY_ADD: string = URLValues.baseVal + 'hfiles-admin-web-svc/services/admin/company/save/'; // + selectedRole , POST
    static readonly COMPANY_ADD_BATCH: string = URLValues.baseVal + 'hfiles-admin-web-svc/services/admin/company/batch'; // POST
    static readonly COMPANY_TEMPLATE: string = URLValues.baseVal + 'hfiles-web-svc/services/details/templates/upload-companies';

    // GENERAL PERMISSIONS TAB
    static readonly GEN_PERMISSION_SELECTED_VALUES: string = URLValues.baseVal + 'hfiles-admin-web-svc/services/admin/roles';
    // tslint:disable-next-line: max-line-length
    static readonly GEN_PERMISSION_COMPANY_LIST: string = URLValues.baseVal + 'hfiles-admin-web-svc/services/admin/company/list/'; // + selectedCompId
    static readonly GEN_PERMISSION_ROLE_SAVE: string = URLValues.baseVal + 'hfiles-admin-web-svc/services/admin/role/save';


    // SAVE // Request URL: https://34.231.246.244:8181/hfiles-admin-web-svc/services/admin/parameter/save
    // company_id: "SSC-IPD"
    // dependency_parameter_type: "province"
    // dependency_parameter_value: "Albay"
    // parameter_id: "0000a078-4c61-481a-85f6-7aac7fc918cc"
    // parameter_name: "Torrijos"
    // parameter_status: "Inactive"
    // parameter_type: "city"

    // PERMISSIONS FROM PERMISSIONS-CONFIG.INI
    static readonly ACCESS_PERMISSIONS: string[] =
        ['EMP-1', 'EMP-2', 'EMP-3', 'EMP-4', 'EMP-5', 'EMP-6', 'EMP-7', 'EMP-8', 'EMP-9', 'EMP-10', 'EMP-11', 'EMP-12', 'EMP-13',
            'EMP-14', 'EMP-15', 'EMP-16', 'EMP-17', 'EMP-18', 'EMP-19', 'EMP-20', 'EMP-21', 'EMP-22', 'EMP-23', 'EMP-24', 'EMP-25',
            'ADM-1', 'ADM-2', 'ADM-3', 'ADM-4', 'ADM-5', 'ADM-6', 'ADM-7', 'ADM-8', 'ADM-9', 'REP-1', 'REP-2'];


    

    /* PERMISSIONS REFERENCE
    EMP-1 : Search Employee
    EMP - 2 : View Employee Details
    EMP - 3 : Update Employee Details
    EMP - 4 : View Documents
    EMP - 5 : Add / Update Benefits, Compensation and Deductions
    EMP - 6 : View Benefits, Compensation and Deductions
    EMP - 7 : Add / Update Leaves
    EMP - 8 : View Leaves
    EMP - 9 : Add / Update Infractions
    EMP - 10 : View Infractions
    EMP - 11 : Add Employee Movement
    EMP - 12 : View Employee Movement
    EMP - 13 : Add Employee By Batch
    EMP - 14 : Add Employee By Single Entry
    EMP - 15 : Upload Documents By Single Entry
    EMP - 16 : Upload Documents By Batch
    EMP - 17 : Self - Service - View Own Employee Details
    EMP - 18 : Self - Service - View Own Documents
    EMP - 19 : Self - Service - View Benefits, Compensation and Deductions
    EMP - 20 : Self - Service - View Leaves
    EMP - 21 : Self - Service - View Infractions
    EMP - 22 : Self - Service - View Available Services
    EMP - 23 : Generate Payroll Input
    EMP - 24 : Time Logs
    EMP - 25 : Self - Service - Time Logs
  
    ADM - 1 : Add Company
    ADM - 2 : Update Company
    ADM - 3 : View Role Permission
    ADM - 4 : Update Role Permission
    ADM - 5 : View Parameter
    ADM - 6 : Batch Upload Parameter Values
    ADM - 7 : Add Parameter Value
    ADM - 8 : De / Activate Parameter Value
    ADM - 9 : View Control Totals
    REP - 1 : View Report
    REP - 2 : Download Report */



}


