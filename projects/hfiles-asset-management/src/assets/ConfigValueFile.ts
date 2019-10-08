export abstract class ConfigValues {

    static readonly ACCOUNT_ROLE: string = 'superadmin';

    static readonly WITH_PAYROLL_DETAILS: boolean = true;

    static readonly COMPANY_DETAILS: { isRequired: boolean, key: string, label: string }[] = [
        { isRequired: true, key: 'company_name', label: 'Company Name' },
        { isRequired: true, key: 'present_address_line1', label: 'Address 1' },
        { isRequired: false, key: 'present_address_line2', label: 'Address 2' },
        { isRequired: true, key: 'present_barangay', label: 'Barangay' },
        { isRequired: true, key: 'present_city', label: 'City' },
        { isRequired: true, key: 'present_province', label: 'Province' },
        { isRequired: true, key: 'present_country', label: 'Country' },
        { isRequired: true, key: 'present_zip_code', label: 'Zip Code' },
        { isRequired: true, key: 'telephone_no', label: 'Telephone Number' },
        { isRequired: false, key: 'fax_no', label: 'Fax Number' },
        { isRequired: false, key: 'nature_of_work', label: 'Nature of Work' },
        { isRequired: false, key: 'company_website', label: 'Company Website' },
        { isRequired: true, key: 'company_tin', label: 'Company TIN' },
        { isRequired: true, key: 'currency', label: 'Currency' },
        { isRequired: true, key: 'probationary_period', label: 'Probationary Periods (Days)' },
        { isRequired: true, key: 'working_days_of_the_month', label: 'Working Days of the Month' },
        { isRequired: true, key: 'company_email_address', label: 'HR Email Address' },
        { isRequired: true, key: 'org_chart_template', label: 'Org Chart Template' }
    ];

    static readonly PERIOD_KEYS: { BENEFITS: string[], DEDUCTIONS: string[], COMPENSATIONS: string[] } = {
        BENEFITS: [
            'Other Non Taxable Allowance',
            'De Minimis',
            'Fixed Allowance',
            'Other Taxable Allowance',
            'VL Subsidy'
        ],
        DEDUCTIONS: [
            'Tax Deficits',
            'Company Advances',
            'Pension or Provident Fund',
            'HDMF MP Loans',
            'Bank Loans',
            'HDMF Housing Loans',
            'SSS Calamity Loans',
            'SSS Salary Loans',
            'Insurance',
            'Other Deduction',
            'Salary Adjustment/Deduction'],
        COMPENSATIONS: [
            'Transport Allowance',
            'Tax Refund',
            'Hardship Allowance',
            'Salary Adjustment'
        ]
    };


    static readonly PERMISSION_ROLES = {
        demo_admin: [
            {
                id: 'svi_itadmin',
                label: 'IT Admin'
            },
            {
                id: 'svi_hrhead',
                label: 'HR Head'
            },
            {
                id: 'cdci_hrhead',
                label: 'CDCI HR Head'
            },
            {
                id: 'svi_seniorhrassociate',
                label: 'Senior HR Associate'
            },
            {
                id: 'svi_hrassociate',
                label: 'HR Associate'
            },
            {
                id: 'svi_employee',
                label: 'Employee'
            },
            {
                id: 'svi_management',
                label: 'SVI Management'
            },
            {
                id: 'svi_corpsec',
                label: 'SVI Corporate Secretary'
            },
            {
                id: 'svi_ssc_management',
                label: 'SVI-SSC Management'
            }
            ,
            {
                id: 'demo_admin',
                label: 'Demo Admin'
            }
        ],
        clientitadmin: [
            {
                id: 'hradmin',
                label: 'Chief HR Officer'
            },
            {
                id: 'employee',
                label: 'Employee'
            }
        ],
        hfilesadmin: [
            {
                id: 'svi_itadmin',
                label: 'Client IT Admin'
            },
            {
                id: 'svi_chiefhrofficer',
                label: 'Chief HR Officer'
            },
            {
                id: 'svi_hrstaff1',
                label: 'HR Staff 1'
            },
            {
                id: 'svi_hrstaff2',
                label: 'HR Staff 2'
            },
            {
                id: 'svi_employee',
                label: 'Employee'
            }
        ],
        superadmin: [
            {
                id: 'svi_itadmin',
                label: 'IT Admin'
            },
            {
                id: 'svi_hrhead',
                label: 'HR Head'
            },
            {
                id: 'cdci_hrhead',
                label: 'CDCI HR Head'
            },
            {
                id: 'svi_seniorhrassociate',
                label: 'Senior HR Associate'
            },
            {
                id: 'svi_hrassociate',
                label: 'HR Associate'
            },
            {
                id: 'svi_employee',
                label: 'Employee'
            },
            {
                id: 'svi_management',
                label: 'SVI Management'
            },
            {
                id: 'svi_corpsec',
                label: 'SVI Corporate Secretary'
            },
            {
                id: 'svi_ssc_management',
                label: 'SVI-SSC Management'
            },
            {
                id: 'demo_admin',
                label: 'Demo Admin'
            }
        ],
        svi_itadmin: [
            {
                id: 'svi_hrhead',
                label: 'HR Head'
            },
            {
                id: 'cdci_hrhead',
                label: 'CDCI HR Head'
            },
            {
                id: 'svi_seniorhrassociate',
                label: 'Senior HR Associate'
            },
            {
                id: 'svi_hrassociate',
                label: 'HR Associate'
            },
            {
                id: 'svi_employee',
                label: 'Employee'
            },
            {
                id: 'svi_management',
                label: 'SVI Management'
            },
            {
                id: 'svi_corpsec',
                label: 'SVI Corporate Secretary'
            },
            {
                id: 'svi_ssc_management',
                label: 'SVI-SSC Management'
            }
        ]
    };

    static readonly PERMISSIONS = {
        companies: {},
        ADM: {
            'ADM-1': {},
            'ADM-2': {},
            'ADM-3': {},
            'ADM-4': {},
            'ADM-5': {},
            'ADM-6': {},
            'ADM-7': {},
            'ADM-8': {},
            'ADM-9': {}
        },
        EMP: {
            'EMP-1': {},
            'EMP-2': {
                fieldCategories: {
                    EMD: 'Employee Details',
                    APD: 'Personal Details',
                    SPD: 'Salary and Payroll Details',
                    CTI: 'Contact Information',
                    PRA: 'Present Address',
                    PEA: 'Permanent Address',
                    EDB: 'Educational Background',
                    GID: 'Government ID',
                    ECP: 'Emergency Contact Person',
                    FMD: 'Family Details',
                    CPR: 'Company Relatives',
                    TRG: 'Training',
                    TCS: 'Technical Skills',
                    CRT: 'Certificates',
                    ACC: 'Accomplishments',
                    OTH: 'Others',
                    PRO: 'Professional Licenses',
                    PRE: 'Previous Employer',
                    WEX: 'Work Experience',
                    HEV: 'Hiring Evaluation',
                    PEV: 'Performance Evaluation'
                }
            },
            'EMP-3': {
                fieldCategories: {
                    EMD: 'Employee Details',
                    APD: 'Personal Details',
                    SPD: 'Salary and Payroll Details',
                    CTI: 'Contact Information',
                    PRA: 'Present Address',
                    PEA: 'Permanent Address',
                    EDB: 'Educational Background',
                    GID: 'Government ID',
                    ECP: 'Emergency Contact Person',
                    FMD: 'Family Details',
                    CPR: 'Company Relatives',
                    TRG: 'Training',
                    TCS: 'Technical Skills',
                    CRT: 'Certificates',
                    ACC: 'Accomplishments',
                    OTH: 'Others',
                    PRO: 'Professional Licenses',
                    PRE: 'Previous Employer',
                    WEX: 'Work Experience',
                    HEV: 'Hiring Evaluation',
                    PEV: 'Performance Evaluation'
                }
            },
            'EMP-4': {
                folders: {
                    BIO: 'Biometrics',
                    EDU: 'Education',
                    'GOV-1': 'Government/BIR',
                    'GOV-2': 'Government/HDMF',
                    'GOV-3': 'Government/PHIC',
                    'GOV-4': 'Government/SSS',
                    'GOV-5': 'Government/DFA',
                    'GOV-6': 'Government/LTO',
                    'GOV-7': 'Government/NSO',
                    'EMP-1': 'Employment/Application Documents',
                    'EMP-2': 'Employment/On-boarding Documents',
                    'EMP-3-A': 'Employment/Employee Performance/Performance Evaluation',
                    'EMP-3-B': 'Employment/Employee Performance/Infraction',
                    'EMP-3-C': 'Employment/Employee Performance/Productivity',
                    'EMP-3-D': 'Employment/Employee Performance/Employee Movement',
                    'EMP-4': 'Employment/Foreign Assignment Documents',
                    'EMP-5': 'Employment/Separation Documents',
                    'EMP-6': 'Employment/Others',
                    'MED-1': 'Medical/Pre-employment Medical Exam',
                    'MED-2': 'Medical/Annual Physical Exam',
                    'TNA-1': 'Time and Attendance/Timesheets',
                    'TNA-2': 'Time and Attendance/OT',
                    'TNA-3': 'Time and Attendance/Leaves',
                    'COM-1': 'Compensation and Benefits/Compensation History',
                    'COM-2': 'Compensation and Benefits/Medical Insurance',
                    'COM-3': 'Compensation and Benefits/Life Insurance',
                    'COM-4': 'Compensation and Benefits/Transportation Allowance',
                    'COM-5': 'Compensation and Benefits/Other Allowance',
                    'COM-6': 'Compensation and Benefits/De Minimis Allowance',
                    'COM-7': 'Compensation and Benefits/Statutory Benefits',
                    'COM-8': 'Compensation and Benefits/Government Deductions',
                    'COM-8-A': 'Compensation and Benefits/Government Deductions/SSS',
                    'COM-8-B': 'Compensation and Benefits/Government Deductions/HDMF',
                    'COM-9': 'Compensation and Benefits/Company Deductions',
                    'COM-10': 'Compensation and Benefits/Other Deductions',
                    'PAY-1': 'Payroll/Payslips',
                    'PAY-2': 'Payroll/Ledger',
                    'PAY-3': 'Payroll/BIR 2316',
                    OTH: 'Others'
                }
            },
            'EMP-5': {},
            'EMP-6': {},
            'EMP-8': {},
            'EMP-9': {},
            'EMP-10': {},
            'EMP-11': {},
            'EMP-12': {},
            'EMP-13': {},
            'EMP-14': {},
            'EMP-15': {},
            'EMP-16': {},
            'EMP-17': {
                fieldCategories: {
                    EMD: 'Employee Details',
                    APD: 'Personal Details',
                    SPD: 'Salary and Payroll Details',
                    CTI: 'Contact Information',
                    PRA: 'Present Address',
                    PEA: 'Permanent Address',
                    EDB: 'Educational Background',
                    GID: 'Government ID',
                    ECP: 'Emergency Contact Person',
                    FMD: 'Family Details',
                    CPR: 'Company Relatives',
                    TRG: 'Training',
                    TCS: 'Technical Skills',
                    CRT: 'Certificates',
                    ACC: 'Accomplishments',
                    OTH: 'Others',
                    PRO: 'Professional Licenses',
                    PRE: 'Previous Employer',
                    WEX: 'Work Experience',
                    HEV: 'Hiring Evaluation',
                    PEV: 'Performance Evaluation'
                }
            },
            'EMP-18': {
                folders: {
                    BIO: 'Biometrics',
                    EDU: 'Education',
                    'GOV-1': 'Government/BIR',
                    'GOV-2': 'Government/HDMF',
                    'GOV-3': 'Government/PHIC',
                    'GOV-4': 'Government/SSS',
                    'GOV-5': 'Government/DFA',
                    'GOV-6': 'Government/LTO',
                    'GOV-7': 'Government/NSO',
                    'EMP-1': 'Employment/Application Documents',
                    'EMP-2': 'Employment/On-boarding Documents',
                    'EMP-3-A': 'Employment/Employee Performance/Performance Evaluation',
                    'EMP-3-B': 'Employment/Employee Performance/Infraction',
                    'EMP-3-C': 'Employment/Employee Performance/Productivity',
                    'EMP-3-D': 'Employment/Employee Performance/Employee Movement',
                    'EMP-4': 'Employment/Foreign Assignment Documents',
                    'EMP-5': 'Employment/Separation Documents',
                    'EMP-6': 'Employment/Others',
                    'MED-1': 'Medical/Pre-employment Medical Exam',
                    'MED-2': 'Medical/Annual Physical Exam',
                    'TNA-1': 'Time and Attendance/Timesheets',
                    'TNA-2': 'Time and Attendance/OT',
                    'TNA-3': 'Time and Attendance/Leaves',
                    'COM-1': 'Compensation and Benefits/Compensation History',
                    'COM-2': 'Compensation and Benefits/Medical Insurance',
                    'COM-3': 'Compensation and Benefits/Life Insurance',
                    'COM-4': 'Compensation and Benefits/Transportation Allowance',
                    'COM-5': 'Compensation and Benefits/Other Allowance',
                    'COM-6': 'Compensation and Benefits/De Minimis Allowance',
                    'COM-7': 'Compensation and Benefits/Statutory Benefits',
                    'COM-8': 'Compensation and Benefits/Government Deductions',
                    'COM-8-A': 'Compensation and Benefits/Government Deductions/SSS',
                    'COM-8-B': 'Compensation and Benefits/Government Deductions/HDMF',
                    'COM-9': 'Compensation and Benefits/Company Deductions',
                    'COM-10': 'Compensation and Benefits/Other Deductions',
                    'PAY-1': 'Payroll/Payslips',
                    'PAY-2': 'Payroll/Ledger',
                    'PAY-3': 'Payroll/BIR 2316',
                    OTH: 'Others'
                }
            },
            'EMP-19': {},
            'EMP-20': {},
            'EMP-21': {},
            'EMP-22': {},
            'EMP-23': {}
        },
        REP: {
            'REP-1': {},
            'REP-2': {}
        },
        RECRUIT: {
            'RECRUIT-1': {},
            'RECRUIT-2': {},
            'RECRUIT-3': {},
            'RECRUIT-4': {},
            'RECRUIT-5': {},
            'RECRUIT-6': {},
            'RECRUIT-7': {
                fieldCategories: {
                    JBD: 'Job Details',
                    REQ: 'Requirements',
                    JDC: 'Job Description',
                    SKL: 'Skills',
                    BEN: 'Benefits'
                }
            },
            'RECRUIT-8': {
                fieldCategories: {
                    POS: 'Position',
                    IND: 'Industry',
                    COM: 'Company',
                    SLR: 'Salary Range',
                    MPT: 'Match Percentage'
                }
            },
            'RECRUIT-9': {},
            'RECRUIT-10': {},
            'RECRUIT-11': {
                fieldCategories: {
                    APD: 'Applicant Details',
                    EDB: 'Educational Background',
                    WEX: 'Work Experience',
                    SKL: 'Skills'
                }
            },
            'RECRUIT-12': {},
            'RECRUIT-13': {
                fieldCategories: {
                    ANM: 'Applicant Name',
                    ACN: 'Applicant Contact No',
                    AEA: 'Applicant Email Address',
                    MPT: 'Match Percentage'
                }
            }
        }
    };


    static readonly PERMISSIONS_MAP = {
        companies: 'Companies',
        ADM: 'Admin Module',
        'ADM-1': 'Add Company',
        'ADM-2': 'Update Company',
        'ADM-3': 'View Role Permission',
        'ADM-4': 'Update Role Permission',
        'ADM-5': 'View Parameter',
        'ADM-6': 'Batch Upload Parameter Values',
        'ADM-7': 'Add Parameter Value',
        'ADM-8': 'De/Activate Parameter Value',
        'ADM-9': 'View Control Totals',
        EMP: 'Employee Module',
        'EMP-1': 'Search Employee',
        'EMP-2': 'View Employee Details',
        'EMP-3': 'Update Employee Details',
        'EMP-4': 'View Documents',
        'EMP-5': 'Add/Update Benefits, Compensation and Deductions',
        'EMP-6': 'View Benefits, Compensation and Deductions',
        'EMP-7': 'Add/Update Leaves',
        'EMP-8': 'View Leaves',
        'EMP-9': 'Add/Update Infractions',
        'EMP-10': 'View Infractions',
        'EMP-11': 'Add Employee Movement',
        'EMP-12': 'View Employee Movement',
        'EMP-13': 'Add Employee By Batch',
        'EMP-14': 'Add Employee By Single Entry',
        'EMP-15': 'Upload Documents By Single Entry',
        'EMP-16': 'Upload Documents By Batch',
        'EMP-17': 'Self-Service- View Own Employee Details',
        'EMP-18': 'Self-Service- View Own Documents',
        'EMP-19': 'Self-Service- View Benefits, Compensation and Deductions',
        'EMP-20': 'Self-Service- View Leaves',
        'EMP-21': 'Self-Service- View Infractions',
        'EMP-22': 'Self-Service- View Available Services',
        'EMP-23': 'Generate Payroll Input',
        REP: 'Report Module',
        'REP-1': 'View Report',
        'REP-2': 'Download Report',
        RECRUIT: 'Job Recruitment Module',
        'RECRUIT-1': 'Add Job Posting',
        'RECRUIT-2': 'Update Job Posting',
        'RECRUIT-3': 'De/Activate Job Posting',
        'RECRUIT-4': 'Delete Job Posting',
        'RECRUIT-5': 'Search Job Posting',
        'RECRUIT-6': 'View List of Job Posts',
        'RECRUIT-7': 'View Job Posting Details',
        'RECRUIT-8': 'View Job Matches',
        'RECRUIT-9': 'Search Applicant',
        'RECRUIT-10': 'View List of Applicants',
        'RECRUIT-11': 'View Applicant Details',
        'RECRUIT-12': 'View Applicant Documents',
        'RECRUIT-13': 'View Applicant Matches'
    };

    static readonly DEFAULT_VALUES = {
        925: {
            companies: ['ISC Balanga', 'ISC', 'SVIC', 'SVI-ISC', 'ISC Manila', 'SVI-GSC', 'CDCI', 'SVI-SSC'],
            modules: {
                ADM: {
                    'ADM-1': {},
                    'ADM-2': {},
                    'ADM-3': {},
                    'ADM-4': {},
                    'ADM-5': {},
                    'ADM-6': {},
                    'ADM-7': {},
                    'ADM-8': {},
                    'ADM-9': {}
                },
                EMP: {
                    'EMP-1': {},
                    'EMP-2': {
                        fieldCategories: {
                            EMD: 'Employee Details',
                            APD: 'Additional Personal Details',
                            SPD: 'Salary and Payroll Details',
                            CTI: 'Contact Information',
                            PRA: 'Present Address',
                            PEA: 'Permanent Address',
                            EDB: 'Educational Background',
                            GID: 'Government ID',
                            ECP: 'Emergency Contact Person',
                            FMD: 'Family Details',
                            CPR: 'Company Relatives',
                            TRG: 'Training',
                            TCS: 'Technical Skills',
                            CRT: 'Certificates',
                            ACC: 'Accomplishments',
                            OTH: 'Others',
                            PRO: 'Professional Licenses',
                            PRE: 'Previous Employer',
                            WEX: 'Work Experience',
                            HEV: 'Hiring Evaluation',
                            PEV: 'Performance Evaluation'
                        }
                    },
                    'EMP-3': {
                        fieldCategories: {
                            EMD: 'Employee Details',
                            APD: 'Additional Personal Details',
                            SPD: 'Salary and Payroll Details',
                            CTI: 'Contact Information',
                            PRA: 'Present Address',
                            PEA: 'Permanent Address',
                            EDB: 'Educational Background',
                            GID: 'Government ID',
                            ECP: 'Emergency Contact Person',
                            FMD: 'Family Details',
                            CPR: 'Company Relatives',
                            TRG: 'Training',
                            TCS: 'Technical Skills',
                            CRT: 'Certificates',
                            ACC: 'Accomplishments',
                            OTH: 'Others',
                            PRO: 'Professional Licenses',
                            PRE: 'Previous Employer',
                            WEX: 'Work Experience',
                            HEV: 'Hiring Evaluation',
                            PEV: 'Performance Evaluation'
                        }
                    },
                    'EMP-4': {
                        folders: {
                            BIO: 'Biometrics',
                            EDU: 'Education',
                            'GOV-1': 'Government/BIR',
                            'GOV-2': 'Government/HDMF',
                            'GOV-3': 'Government/PHIC',
                            'GOV-4': 'Government/SSS',
                            'GOV-5': 'Government/DFA',
                            'GOV-6': 'Government/LTO',
                            'GOV-7': 'Government/NSO',
                            'EMP-1': 'Employment/Application Documents',
                            'EMP-2': 'Employment/On-boarding Documents',
                            'EMP-3-A': 'Employment/Employee Performance/Performance Evaluation',
                            'EMP-3-B': 'Employment/Employee Performance/Infraction',
                            'EMP-3-C': 'Employment/Employee Performance/Productivity',
                            'EMP-3-D': 'Employment/Employee Performance/Employee Movement',
                            'EMP-4': 'Employment/Foreign Assignment Documents',
                            'EMP-5': 'Employment/Separation Documents',
                            'EMP-6': 'Employment/Others',
                            'MED-1': 'Medical/Pre-employment Medical Exam',
                            'MED-2': 'Medical/Annual Physical Exam',
                            'TNA-1': 'Time and Attendance/Timesheets',
                            'TNA-2': 'Time and Attendance/OT',
                            'TNA-3': 'Time and Attendance/Leaves',
                            'COM-1': 'Compensation and Benefits/Compensation History',
                            'COM-2': 'Compensation and Benefits/Medical Insurance',
                            'COM-3': 'Compensation and Benefits/Life Insurance',
                            'COM-4': 'Compensation and Benefits/Transportation Allowance',
                            'COM-5': 'Compensation and Benefits/Other Allowance',
                            'COM-6': 'Compensation and Benefits/De Minimis Allowance',
                            'COM-7': 'Compensation and Benefits/Statutory Benefits',
                            'COM-8': 'Compensation and Benefits/Government Deductions',
                            'COM-8-A': 'Compensation and Benefits/Government Deductions/SSS',
                            'COM-8-B': 'Compensation and Benefits/Government Deductions/HDMF',
                            'COM-9': 'Compensation and Benefits/Company Deductions',
                            'COM-10': 'Compensation and Benefits/Other Deductions',
                            'PAY-1': 'Payroll/Payslips',
                            'PAY-2': 'Payroll/Ledger',
                            'PAY-3': 'Payroll/BIR 2316',
                            OTH: 'Others'
                        }
                    },
                    'EMP-5': {},
                    'EMP-6': {},
                    'EMP-8': {},
                    'EMP-9': {},
                    'EMP-10': {},
                    'EMP-11': {},
                    'EMP-12': {},
                    'EMP-13': {},
                    'EMP-14': {},
                    'EMP-15': {},
                    'EMP-16': {},
                    'EMP-17': {
                        fieldCategories: {
                            EMD: 'Employee Details',
                            APD: 'Additional Personal Details',
                            SPD: 'Salary and Payroll Details',
                            CTI: 'Contact Information',
                            PRA: 'Present Address',
                            PEA: 'Permanent Address',
                            EDB: 'Educational Background',
                            GID: 'Government ID',
                            ECP: 'Emergency Contact Person',
                            FMD: 'Family Details',
                            CPR: 'Company Relatives',
                            TRG: 'Training',
                            TCS: 'Technical Skills',
                            CRT: 'Certificates',
                            ACC: 'Accomplishments',
                            OTH: 'Others',
                            PRO: 'Professional Licenses',
                            PRE: 'Previous Employer',
                            WEX: 'Work Experience',
                            HEV: 'Hiring Evaluation',
                            PEV: 'Performance Evaluation'
                        }
                    },
                    'EMP-18': {
                        folders: {
                            BIO: 'Biometrics',
                            EDU: 'Education',
                            'GOV-1': 'Government/BIR',
                            'GOV-2': 'Government/HDMF',
                            'GOV-3': 'Government/PHIC',
                            'GOV-4': 'Government/SSS',
                            'GOV-5': 'Government/DFA',
                            'GOV-6': 'Government/LTO',
                            'GOV-7': 'Government/NSO',
                            'EMP-1': 'Employment/Application Documents',
                            'EMP-2': 'Employment/On-boarding Documents',
                            'EMP-3-A': 'Employment/Employee Performance/Performance Evaluation',
                            'EMP-3-B': 'Employment/Employee Performance/Infraction',
                            'EMP-3-C': 'Employment/Employee Performance/Productivity',
                            'EMP-3-D': 'Employment/Employee Performance/Employee Movement',
                            'EMP-4': 'Employment/Foreign Assignment Documents',
                            'EMP-5': 'Employment/Separation Documents',
                            'EMP-6': 'Employment/Others',
                            'MED-1': 'Medical/Pre-employment Medical Exam',
                            'MED-2': 'Medical/Annual Physical Exam',
                            'TNA-1': 'Time and Attendance/Timesheets',
                            'TNA-2': 'Time and Attendance/OT',
                            'TNA-3': 'Time and Attendance/Leaves',
                            'COM-1': 'Compensation and Benefits/Compensation History',
                            'COM-2': 'Compensation and Benefits/Medical Insurance',
                            'COM-3': 'Compensation and Benefits/Life Insurance',
                            'COM-4': 'Compensation and Benefits/Transportation Allowance',
                            'COM-5': 'Compensation and Benefits/Other Allowance',
                            'COM-6': 'Compensation and Benefits/De Minimis Allowance',
                            'COM-7': 'Compensation and Benefits/Statutory Benefits',
                            'COM-8': 'Compensation and Benefits/Government Deductions',
                            'COM-8-A': 'Compensation and Benefits/Government Deductions/SSS',
                            'COM-8-B': 'Compensation and Benefits/Government Deductions/HDMF',
                            'COM-9': 'Compensation and Benefits/Company Deductions',
                            'COM-10': 'Compensation and Benefits/Other Deductions',
                            'PAY-1': 'Payroll/Payslips',
                            'PAY-2': 'Payroll/Ledger',
                            'PAY-3': 'Payroll/BIR 2316',
                            OTH: 'Others'
                        }
                    },
                    'EMP-19': {},
                    'EMP-20': {},
                    'EMP-21': {},
                    'EMP-22': {},
                    'EMP-23': {},
                    'EMP-24': {}
                },
                RECRUIT: {
                    'RECRUIT-1': {},
                    'RECRUIT-2': {},
                    'RECRUIT-3': {},
                    'RECRUIT-4': {},
                    'RECRUIT-5': {},
                    'RECRUIT-6': {},
                    'RECRUIT-7': {},
                    'RECRUIT-8': {},
                    'RECRUIT-9': {},
                    'RECRUIT-10': {},
                    'RECRUIT-11': {
                        fieldCategories: {
                            APD: 'Additional Personal Details',
                            EDB: 'Educational Background',
                            WEX: 'Work Experience'
                        }
                    },
                    'RECRUIT-12': {},
                    'RECRUIT-13': {}
                },
                REP: {
                    'REP-1': {},
                    'REP-2': {}
                }
            }
        },
        superadmin: {
            companies: ['ISC Balanga', 'ISC', 'SVIC', 'aaa', 'Test', 'SVI-ISC', 'test1', 'ISC Manila',
             'SVI-GSC', 'CDCI', 'SVI-SSC', 'testqwe123', 'ISC Balanga', 'SVIC',
             'SVIC', 'SVI-ISC', 'ISC Manila', 'ISC Balanga', 'SVIC', 'SVIC',
             'SVIC', 'SVIC', 'SVIC', 'SVIC', 'SVIC', 'SVIC', 'SVIC', 'SVIC', 'SVIC', 'SVIC', 'Test', 'TEST', 'TEST1234'],
            modules: {
                ADM: {
                    'ADM-1': {},
                    'ADM-2': {},
                    'ADM-3': {},
                    'ADM-4': {},
                    'ADM-5': {},
                    'ADM-6': {},
                    'ADM-7': {},
                    'ADM-8': {},
                    'ADM-9': {},
                    'ADM-10': {},
                    'ADM-11': {}
                }
            }
        },
        demo_admin10: {
            companies: ['SVI-SSC', 'SVIC', 'SVI-ISC', 'CDCI', 'SVI'],
            modules: {
                ADM: {
                    'ADM-1': {},
                    'ADM-2': {},
                    'ADM-3': {},
                    'ADM-4': {},
                    'ADM-5': {},
                    'ADM-6': {},
                    'ADM-7': {},
                    'ADM-8': {},
                    'ADM-9': {},
                    'ADM-10': {}
                },
                EMP: {
                    'EMP-1': {},
                    'EMP-2': {
                        folders: {
                            OTH: 'Others'
                        }
                    },
                    'EMP-3': {},
                    'EMP-4': {},
                    'EMP-5': {},
                    'EMP-6': {},
                    'EMP-7': {},
                    'EMP-8': {},
                    'EMP-9': {},
                    'EMP-10': {},
                    'EMP-11': {},
                    'EMP-12': {},
                    'EMP-13': {},
                    'EMP-14': {},
                    'EMP-15': {},
                    'EMP-16': {},
                    'EMP-17': {
                        folders: {
                            OTH: 'Others'
                        }
                    },
                    'EMP-18': {},
                    'EMP-19': {},
                    'EMP-20': {},
                    'EMP-21': {},
                    'EMP-22': {},
                    'EMP-23': {}
                },
                REP: {
                    'REP-1': {},
                    'REP-2': {}
                }
            }
        },
        svi_corpsec: {
            companies: ['SVI-SSC', 'SVIC', 'SVI-ISC', 'CDCI', 'SVI'],
            modules: {
                ADM: {
                    'ADM-1': {},
                    'ADM-2': {},
                    'ADM-3': {},
                    'ADM-4': {},
                    'ADM-5': {},
                    'ADM-6': {},
                    'ADM-7': {},
                    'ADM-8': {},
                    'ADM-9': {},
                    'ADM-10': {}
                },
                EMP: {
                    'EMP-1': {},
                    'EMP-2': {
                        folders: {
                            OTH: 'Others'
                        }
                    },
                    'EMP-3': {},
                    'EMP-4': {},
                    'EMP-5': {},
                    'EMP-6': {},
                    'EMP-7': {},
                    'EMP-8': {},
                    'EMP-9': {},
                    'EMP-10': {},
                    'EMP-11': {},
                    'EMP-12': {},
                    'EMP-13': {},
                    'EMP-14': {},
                    'EMP-15': {},
                    'EMP-16': {},
                    'EMP-17': {
                        folders: {
                            OTH: 'Others'
                        }
                    },
                    'EMP-18': {},
                    'EMP-19': {},
                    'EMP-20': {},
                    'EMP-21': {},
                    'EMP-22': {},
                    'EMP-23': {}
                },
                REP: {
                    'REP-1': {},
                    'REP-2': {}
                }
            }
        },
        cdci_hrhead: {
            companies: ['ISC Balanga', 'ISC Manila', 'CDCI'],
            modules: {
                ADM: {
                    'ADM-1': {},
                    'ADM-2': {},
                    'ADM-3': {}
                },
                EMP: {
                    'EMP-1': {},
                    'EMP-3': {}
                }
            }
        },
        demo_admin5: {
            companies: ['SVI-SSC', 'SVIC', 'SVI-ISC', 'CDCI', 'SVI'],
            modules: {
                ADM: {
                    'ADM-1': {},
                    'ADM-2': {},
                    'ADM-3': {},
                    'ADM-4': {},
                    'ADM-5': {},
                    'ADM-6': {},
                    'ADM-7': {},
                    'ADM-8': {},
                    'ADM-9': {},
                    'ADM-10': {}
                },
                EMP: {
                    'EMP-1': {},
                    'EMP-2': {
                        folders: {
                            OTH: 'Others'
                        }
                    },
                    'EMP-3': {},
                    'EMP-4': {},
                    'EMP-5': {},
                    'EMP-6': {},
                    'EMP-7': {},
                    'EMP-8': {},
                    'EMP-9': {},
                    'EMP-10': {},
                    'EMP-11': {},
                    'EMP-12': {},
                    'EMP-13': {},
                    'EMP-14': {},
                    'EMP-15': {},
                    'EMP-16': {},
                    'EMP-17': {
                        folders: {
                            OTH: 'Others'
                        }
                    },
                    'EMP-18': {},
                    'EMP-19': {},
                    'EMP-20': {},
                    'EMP-21': {},
                    'EMP-22': {},
                    'EMP-23': {}
                },
                REP: {
                    'REP-1': {},
                    'REP-2': {}
                }
            }
        },
        demo_admin4: {
            companies: ['SVI-SSC', 'SVIC', 'SVI-ISC', 'CDCI', 'SVI'],
            modules: {
                ADM: {
                    'ADM-1': {},
                    'ADM-2': {},
                    'ADM-3': {},
                    'ADM-4': {},
                    'ADM-5': {},
                    'ADM-6': {},
                    'ADM-7': {},
                    'ADM-8': {},
                    'ADM-9': {},
                    'ADM-10': {}
                },
                EMP: {
                    'EMP-1': {},
                    'EMP-2': {
                        folders: {
                            OTH: 'Others'
                        }
                    },
                    'EMP-3': {},
                    'EMP-4': {},
                    'EMP-5': {},
                    'EMP-6': {},
                    'EMP-7': {},
                    'EMP-8': {},
                    'EMP-9': {},
                    'EMP-10': {},
                    'EMP-11': {},
                    'EMP-12': {},
                    'EMP-13': {},
                    'EMP-14': {},
                    'EMP-15': {},
                    'EMP-16': {},
                    'EMP-17': {
                        folders: {
                            OTH: 'Others'
                        }
                    },
                    'EMP-18': {},
                    'EMP-19': {},
                    'EMP-20': {},
                    'EMP-21': {},
                    'EMP-22': {},
                    'EMP-23': {}
                },
                REP: {
                    'REP-1': {},
                    'REP-2': {}
                }
            }
        },
        svi_employee: {
            companies: ['SVIC', 'SVI-ISC', 'CDCI', 'SVI-SSC'],
            modules: {
                EMP: {
                    'EMP-17': {},
                    'EMP-18': {},
                    'EMP-19': {},
                    'EMP-20': {},
                    'EMP-21': {},
                    'EMP-22': {}
                },
                REP: {
                    'REP-1': {},
                    'REP-2': {}
                }
            }
        },
        968: {
            companies: ['ISC Balanga', 'ISC', 'SVIC', 'SVI-ISC', 'ISC Manila', 'SVI-GSC', 'CDCI', 'SVI-SSC'],
            modules: {
                ADM: {
                    'ADM-1': {},
                    'ADM-2': {},
                    'ADM-3': {},
                    'ADM-4': {},
                    'ADM-5': {},
                    'ADM-6': {},
                    'ADM-7': {},
                    'ADM-8': {},
                    'ADM-9': {}
                },
                EMP: {
                    'EMP-1': {},
                    'EMP-2': {
                        fieldCategories: {
                            EMD: 'Employee Details',
                            APD: 'Additional Personal Details',
                            SPD: 'Salary and Payroll Details',
                            CTI: 'Contact Information',
                            PRA: 'Present Address',
                            PEA: 'Permanent Address',
                            EDB: 'Educational Background',
                            GID: 'Government ID',
                            ECP: 'Emergency Contact Person',
                            FMD: 'Family Details',
                            CPR: 'Company Relatives',
                            TRG: 'Training',
                            TCS: 'Technical Skills',
                            CRT: 'Certificates',
                            ACC: 'Accomplishments',
                            OTH: 'Others',
                            PRO: 'Professional Licenses',
                            PRE: 'Previous Employer',
                            WEX: 'Work Experience',
                            HEV: 'Hiring Evaluation',
                            PEV: 'Performance Evaluation'
                        }
                    },
                    'EMP-3': {
                        fieldCategories: {
                            EMD: 'Employee Details',
                            APD: 'Additional Personal Details',
                            SPD: 'Salary and Payroll Details',
                            CTI: 'Contact Information',
                            PRA: 'Present Address',
                            PEA: 'Permanent Address',
                            EDB: 'Educational Background',
                            GID: 'Government ID',
                            ECP: 'Emergency Contact Person',
                            FMD: 'Family Details',
                            CPR: 'Company Relatives',
                            TRG: 'Training',
                            TCS: 'Technical Skills',
                            CRT: 'Certificates',
                            ACC: 'Accomplishments',
                            OTH: 'Others',
                            PRO: 'Professional Licenses',
                            PRE: 'Previous Employer',
                            WEX: 'Work Experience',
                            HEV: 'Hiring Evaluation',
                            PEV: 'Performance Evaluation'
                        }
                    },
                    'EMP-4': {
                        folders: {
                            BIO: 'Biometrics',
                            EDU: 'Education',
                            'GOV-1': 'Government/BIR',
                            'GOV-2': 'Government/HDMF',
                            'GOV-3': 'Government/PHIC',
                            'GOV-4': 'Government/SSS',
                            'GOV-5': 'Government/DFA',
                            'GOV-6': 'Government/LTO',
                            'GOV-7': 'Government/NSO',
                            'EMP-1': 'Employment/Application Documents',
                            'EMP-2': 'Employment/On-boarding Documents',
                            'EMP-3-A': 'Employment/Employee Performance/Performance Evaluation',
                            'EMP-3-B': 'Employment/Employee Performance/Infraction',
                            'EMP-3-C': 'Employment/Employee Performance/Productivity',
                            'EMP-3-D': 'Employment/Employee Performance/Employee Movement',
                            'EMP-4': 'Employment/Foreign Assignment Documents',
                            'EMP-5': 'Employment/Separation Documents',
                            'EMP-6': 'Employment/Others',
                            'MED-1': 'Medical/Pre-employment Medical Exam',
                            'MED-2': 'Medical/Annual Physical Exam',
                            'TNA-1': 'Time and Attendance/Timesheets',
                            'TNA-2': 'Time and Attendance/OT',
                            'TNA-3': 'Time and Attendance/Leaves',
                            'COM-1': 'Compensation and Benefits/Compensation History',
                            'COM-2': 'Compensation and Benefits/Medical Insurance',
                            'COM-3': 'Compensation and Benefits/Life Insurance',
                            'COM-4': 'Compensation and Benefits/Transportation Allowance',
                            'COM-5': 'Compensation and Benefits/Other Allowance',
                            'COM-6': 'Compensation and Benefits/De Minimis Allowance',
                            'COM-7': 'Compensation and Benefits/Statutory Benefits',
                            'COM-8': 'Compensation and Benefits/Government Deductions',
                            'COM-8-A': 'Compensation and Benefits/Government Deductions/SSS',
                            'COM-8-B': 'Compensation and Benefits/Government Deductions/HDMF',
                            'COM-9': 'Compensation and Benefits/Company Deductions',
                            'COM-10': 'Compensation and Benefits/Other Deductions',
                            'PAY-1': 'Payroll/Payslips',
                            'PAY-2': 'Payroll/Ledger',
                            'PAY-3': 'Payroll/BIR 2316',
                            OTH: 'Others'
                        }
                    },
                    'EMP-5': {},
                    'EMP-6': {},
                    'EMP-8': {},
                    'EMP-9': {},
                    'EMP-10': {},
                    'EMP-11': {},
                    'EMP-12': {},
                    'EMP-13': {},
                    'EMP-14': {},
                    'EMP-15': {},
                    'EMP-16': {},
                    'EMP-17': {
                        fieldCategories: {
                            EMD: 'Employee Details',
                            APD: 'Additional Personal Details',
                            SPD: 'Salary and Payroll Details',
                            CTI: 'Contact Information',
                            PRA: 'Present Address',
                            PEA: 'Permanent Address',
                            EDB: 'Educational Background',
                            GID: 'Government ID',
                            ECP: 'Emergency Contact Person',
                            FMD: 'Family Details',
                            CPR: 'Company Relatives',
                            TRG: 'Training',
                            TCS: 'Technical Skills',
                            CRT: 'Certificates',
                            ACC: 'Accomplishments',
                            OTH: 'Others',
                            PRO: 'Professional Licenses',
                            PRE: 'Previous Employer',
                            WEX: 'Work Experience',
                            HEV: 'Hiring Evaluation',
                            PEV: 'Performance Evaluation'
                        }
                    },
                    'EMP-18': {
                        folders: {
                            BIO: 'Biometrics',
                            EDU: 'Education',
                            'GOV-1': 'Government/BIR',
                            'GOV-2': 'Government/HDMF',
                            'GOV-3': 'Government/PHIC',
                            'GOV-4': 'Government/SSS',
                            'GOV-5': 'Government/DFA',
                            'GOV-6': 'Government/LTO',
                            'GOV-7': 'Government/NSO',
                            'EMP-1': 'Employment/Application Documents',
                            'EMP-2': 'Employment/On-boarding Documents',
                            'EMP-3-A': 'Employment/Employee Performance/Performance Evaluation',
                            'EMP-3-B': 'Employment/Employee Performance/Infraction',
                            'EMP-3-C': 'Employment/Employee Performance/Productivity',
                            'EMP-3-D': 'Employment/Employee Performance/Employee Movement',
                            'EMP-4': 'Employment/Foreign Assignment Documents',
                            'EMP-5': 'Employment/Separation Documents',
                            'EMP-6': 'Employment/Others',
                            'MED-1': 'Medical/Pre-employment Medical Exam',
                            'MED-2': 'Medical/Annual Physical Exam',
                            'TNA-1': 'Time and Attendance/Timesheets',
                            'TNA-2': 'Time and Attendance/OT',
                            'TNA-3': 'Time and Attendance/Leaves',
                            'COM-1': 'Compensation and Benefits/Compensation History',
                            'COM-2': 'Compensation and Benefits/Medical Insurance',
                            'COM-3': 'Compensation and Benefits/Life Insurance',
                            'COM-4': 'Compensation and Benefits/Transportation Allowance',
                            'COM-5': 'Compensation and Benefits/Other Allowance',
                            'COM-6': 'Compensation and Benefits/De Minimis Allowance',
                            'COM-7': 'Compensation and Benefits/Statutory Benefits',
                            'COM-8': 'Compensation and Benefits/Government Deductions',
                            'COM-8-A': 'Compensation and Benefits/Government Deductions/SSS',
                            'COM-8-B': 'Compensation and Benefits/Government Deductions/HDMF',
                            'COM-9': 'Compensation and Benefits/Company Deductions',
                            'COM-10': 'Compensation and Benefits/Other Deductions',
                            'PAY-1': 'Payroll/Payslips',
                            'PAY-2': 'Payroll/Ledger',
                            'PAY-3': 'Payroll/BIR 2316',
                            OTH: 'Others'
                        }
                    },
                    'EMP-19': {},
                    'EMP-20': {},
                    'EMP-21': {},
                    'EMP-22': {},
                    'EMP-23': {},
                    'EMP-24': {}
                },
                RECRUIT: {
                    'RECRUIT-1': {},
                    'RECRUIT-2': {},
                    'RECRUIT-3': {},
                    'RECRUIT-4': {},
                    'RECRUIT-5': {},
                    'RECRUIT-6': {},
                    'RECRUIT-7': {},
                    'RECRUIT-8': {},
                    'RECRUIT-9': {},
                    'RECRUIT-10': {},
                    'RECRUIT-11': {
                        fieldCategories: {
                            APD: 'Additional Personal Details',
                            EDB: 'Educational Background',
                            WEX: 'Work Experience'
                        }
                    },
                    'RECRUIT-12': {},
                    'RECRUIT-13': {}
                },
                REP: {
                    'REP-1': {},
                    'REP-2': {}
                }
            }
        },
        svi_seniorhrassociate: {
            companies: ['ISC Balanga', 'SVIC', 'Test', 'SVI-ISC', 'ISC Manila', 'CDCI', 'SVI-SSC'],
            modules: {
                ADM: {
                    'ADM-1': {},
                    'ADM-2': {},
                    'ADM-3': {},
                    'ADM-4': {},
                    'ADM-5': {},
                    'ADM-6': {},
                    'ADM-7': {},
                    'ADM-8': {},
                    'ADM-9': {}
                },
                EMP: {
                    'EMP-1': {},
                    'EMP-2': {
                        fieldCategories: {
                            EMD: 'Employee Details',
                            APD: 'Additional Personal Details',
                            SPD: 'Salary and Payroll Details',
                            CTI: 'Contact Information',
                            PRA: 'Present Address',
                            PEA: 'Permanent Address',
                            EDB: 'Educational Background',
                            GID: 'Government ID',
                            ECP: 'Emergency Contact Person',
                            FMD: 'Family Details',
                            CPR: 'Company Relatives',
                            TRG: 'Training',
                            TCS: 'Technical Skills',
                            CRT: 'Certificates',
                            ACC: 'Accomplishments',
                            OTH: 'Others',
                            PRO: 'Professional Licenses',
                            PRE: 'Previous Employer',
                            WEX: 'Work Experience',
                            HEV: 'Hiring Evaluation',
                            PEV: 'Performance Evaluation'
                        }
                    },
                    'EMP-3': {
                        fieldCategories: {
                            EMD: 'Employee Details',
                            APD: 'Additional Personal Details',
                            SPD: 'Salary and Payroll Details',
                            CTI: 'Contact Information',
                            PRA: 'Present Address',
                            PEA: 'Permanent Address',
                            EDB: 'Educational Background',
                            GID: 'Government ID',
                            ECP: 'Emergency Contact Person',
                            FMD: 'Family Details',
                            CPR: 'Company Relatives',
                            TRG: 'Training',
                            TCS: 'Technical Skills',
                            CRT: 'Certificates',
                            ACC: 'Accomplishments',
                            OTH: 'Others',
                            PRO: 'Professional Licenses',
                            PRE: 'Previous Employer',
                            WEX: 'Work Experience',
                            HEV: 'Hiring Evaluation',
                            PEV: 'Performance Evaluation'
                        }
                    },
                    'EMP-4': {
                        folders: {
                            BIO: 'Biometrics',
                            EDU: 'Education',
                            'GOV-1': 'Government/BIR',
                            'GOV-2': 'Government/HDMF',
                            'GOV-3': 'Government/PHIC',
                            'GOV-4': 'Government/SSS',
                            'GOV-5': 'Government/DFA',
                            'GOV-6': 'Government/LTO',
                            'GOV-7': 'Government/NSO',
                            'EMP-1': 'Employment/Application Documents',
                            'EMP-2': 'Employment/On-boarding Documents',
                            'EMP-3-A': 'Employment/Employee Performance/Performance Evaluation',
                            'EMP-3-B': 'Employment/Employee Performance/Infraction',
                            'EMP-3-C': 'Employment/Employee Performance/Productivity',
                            'EMP-3-D': 'Employment/Employee Performance/Employee Movement',
                            'EMP-4': 'Employment/Foreign Assignment Documents',
                            'EMP-5': 'Employment/Separation Documents',
                            'EMP-6': 'Employment/Others',
                            'MED-1': 'Medical/Pre-employment Medical Exam',
                            'MED-2': 'Medical/Annual Physical Exam',
                            'TNA-1': 'Time and Attendance/Timesheets',
                            'TNA-2': 'Time and Attendance/OT',
                            'TNA-3': 'Time and Attendance/Leaves',
                            'COM-1': 'Compensation and Benefits/Compensation History',
                            'COM-2': 'Compensation and Benefits/Medical Insurance',
                            'COM-3': 'Compensation and Benefits/Life Insurance',
                            'COM-4': 'Compensation and Benefits/Transportation Allowance',
                            'COM-5': 'Compensation and Benefits/Other Allowance',
                            'COM-6': 'Compensation and Benefits/De Minimis Allowance',
                            'COM-7': 'Compensation and Benefits/Statutory Benefits',
                            'COM-8': 'Compensation and Benefits/Government Deductions',
                            'COM-8-A': 'Compensation and Benefits/Government Deductions/SSS',
                            'COM-8-B': 'Compensation and Benefits/Government Deductions/HDMF',
                            'COM-9': 'Compensation and Benefits/Company Deductions',
                            'COM-10': 'Compensation and Benefits/Other Deductions',
                            'PAY-1': 'Payroll/Payslips',
                            'PAY-2': 'Payroll/Ledger',
                            'PAY-3': 'Payroll/BIR 2316',
                            OTH: 'Others'
                        }
                    },
                    'EMP-5': {},
                    'EMP-6': {},
                    'EMP-8': {},
                    'EMP-9': {},
                    'EMP-10': {},
                    'EMP-11': {},
                    'EMP-12': {},
                    'EMP-13': {},
                    'EMP-14': {},
                    'EMP-15': {},
                    'EMP-16': {},
                    'EMP-17': {
                        fieldCategories: {
                            EMD: 'Employee Details',
                            APD: 'Additional Personal Details',
                            SPD: 'Salary and Payroll Details',
                            CTI: 'Contact Information',
                            PRA: 'Present Address',
                            PEA: 'Permanent Address',
                            EDB: 'Educational Background',
                            GID: 'Government ID',
                            ECP: 'Emergency Contact Person',
                            FMD: 'Family Details',
                            CPR: 'Company Relatives',
                            TRG: 'Training',
                            TCS: 'Technical Skills',
                            CRT: 'Certificates',
                            ACC: 'Accomplishments',
                            OTH: 'Others',
                            PRO: 'Professional Licenses',
                            PRE: 'Previous Employer',
                            WEX: 'Work Experience',
                            HEV: 'Hiring Evaluation',
                            PEV: 'Performance Evaluation'
                        }
                    },
                    'EMP-18': {},
                    'EMP-19': {},
                    'EMP-20': {},
                    'EMP-21': {},
                    'EMP-22': {},
                    'EMP-23': {}
                },
                RECRUIT: {
                    'RECRUIT-1': {},
                    'RECRUIT-2': {},
                    'RECRUIT-3': {},
                    'RECRUIT-4': {},
                    'RECRUIT-5': {},
                    'RECRUIT-6': {},
                    'RECRUIT-7': {
                        fieldCategories: {}
                    },
                    'RECRUIT-8': {
                        fieldCategories: {}
                    },
                    'RECRUIT-9': {},
                    'RECRUIT-10': {},
                    'RECRUIT-11': {
                        fieldCategories: {
                            APD: 'Additional Personal Details',
                            EDB: 'Educational Background',
                            WEX: 'Work Experience'
                        }
                    },
                    'RECRUIT-12': {},
                    'RECRUIT-13': {
                        fieldCategories: {}
                    }
                },
                REP: {
                    'REP-1': {},
                    'REP-2': {}
                }
            }
        },
        svi_hrassociate: {
            companies: ['ISC Balanga', 'SVIC', 'SVI-ISC', 'ISC Manila', 'CDCI', 'SVI-SSC'],
            modules: {
                ADM: {
                    'ADM-1': {},
                    'ADM-2': {},
                    'ADM-3': {},
                    'ADM-4': {},
                    'ADM-5': {},
                    'ADM-6': {},
                    'ADM-7': {},
                    'ADM-8': {},
                    'ADM-9': {}
                },
                EMP: {
                    'EMP-1': {},
                    'EMP-2': {},
                    'EMP-3': {},
                    'EMP-4': {
                        folders: {
                            BIO: 'Biometrics',
                            EDU: 'Education',
                            'GOV-1': 'Government/BIR',
                            'GOV-2': 'Government/HDMF',
                            'GOV-3': 'Government/PHIC',
                            'GOV-4': 'Government/SSS',
                            'GOV-5': 'Government/DFA',
                            'GOV-6': 'Government/LTO',
                            'GOV-7': 'Government/NSO',
                            'EMP-1': 'Employment/Application Documents',
                            'EMP-2': 'Employment/On-boarding Documents',
                            'EMP-3-A': 'Employment/Employee Performance/Performance Evaluation',
                            'EMP-3-B': 'Employment/Employee Performance/Infraction',
                            'EMP-3-C': 'Employment/Employee Performance/Productivity',
                            'EMP-3-D': 'Employment/Employee Performance/Employee Movement',
                            'EMP-4': 'Employment/Foreign Assignment Documents',
                            'EMP-5': 'Employment/Separation Documents',
                            'EMP-6': 'Employment/Others',
                            'MED-1': 'Medical/Pre-employment Medical Exam',
                            'MED-2': 'Medical/Annual Physical Exam',
                            'TNA-1': 'Time and Attendance/Timesheets',
                            'TNA-2': 'Time and Attendance/OT',
                            'TNA-3': 'Time and Attendance/Leaves',
                            'COM-1': 'Compensation and Benefits/Compensation History',
                            'COM-2': 'Compensation and Benefits/Medical Insurance',
                            'COM-3': 'Compensation and Benefits/Life Insurance',
                            'COM-4': 'Compensation and Benefits/Transportation Allowance',
                            'COM-5': 'Compensation and Benefits/Other Allowance',
                            'COM-6': 'Compensation and Benefits/De Minimis Allowance',
                            'COM-7': 'Compensation and Benefits/Statutory Benefits',
                            'COM-8': 'Compensation and Benefits/Government Deductions',
                            'COM-8-A': 'Compensation and Benefits/Government Deductions/SSS',
                            'COM-8-B': 'Compensation and Benefits/Government Deductions/HDMF',
                            'COM-9': 'Compensation and Benefits/Company Deductions',
                            'COM-10': 'Compensation and Benefits/Other Deductions',
                            'PAY-1': 'Payroll/Payslips',
                            'PAY-2': 'Payroll/Ledger',
                            'PAY-3': 'Payroll/BIR 2316',
                            OTH: 'Others'
                        }
                    },
                    'EMP-5': {},
                    'EMP-6': {},
                    'EMP-8': {},
                    'EMP-9': {},
                    'EMP-10': {},
                    'EMP-11': {},
                    'EMP-12': {},
                    'EMP-13': {},
                    'EMP-14': {},
                    'EMP-15': {},
                    'EMP-16': {},
                    'EMP-17': {},
                    'EMP-18': {},
                    'EMP-19': {},
                    'EMP-20': {},
                    'EMP-21': {},
                    'EMP-22': {},
                    'EMP-23': {}
                },
                RECRUIT: {
                    'RECRUIT-1': {},
                    'RECRUIT-2': {},
                    'RECRUIT-3': {},
                    'RECRUIT-4': {},
                    'RECRUIT-5': {},
                    'RECRUIT-6': {}
                },
                REP: {
                    'REP-1': {},
                    'REP-2': {}
                }
            }
        },
        1281: {
            companies: ['ISC Balanga', 'ISC', 'SVIC', 'SVI-ISC', 'ISC Manila', 'SVI-GSC', 'CDCI', 'SVI-SSC'],
            modules: {
                ADM: {
                    'ADM-1': {},
                    'ADM-2': {},
                    'ADM-3': {},
                    'ADM-4': {},
                    'ADM-5': {},
                    'ADM-6': {},
                    'ADM-7': {},
                    'ADM-8': {},
                    'ADM-9': {}
                },
                EMP: {
                    'EMP-1': {},
                    'EMP-2': {
                        fieldCategories: {
                            EMD: 'Employee Details',
                            APD: 'Additional Personal Details',
                            SPD: 'Salary and Payroll Details',
                            CTI: 'Contact Information',
                            PRA: 'Present Address',
                            PEA: 'Permanent Address',
                            EDB: 'Educational Background',
                            GID: 'Government ID',
                            ECP: 'Emergency Contact Person',
                            FMD: 'Family Details',
                            CPR: 'Company Relatives',
                            TRG: 'Training',
                            TCS: 'Technical Skills',
                            CRT: 'Certificates',
                            ACC: 'Accomplishments',
                            OTH: 'Others',
                            PRO: 'Professional Licenses',
                            PRE: 'Previous Employer',
                            WEX: 'Work Experience',
                            HEV: 'Hiring Evaluation',
                            PEV: 'Performance Evaluation'
                        }
                    },
                    'EMP-3': {
                        fieldCategories: {
                            EMD: 'Employee Details',
                            APD: 'Additional Personal Details',
                            SPD: 'Salary and Payroll Details',
                            CTI: 'Contact Information',
                            PRA: 'Present Address',
                            PEA: 'Permanent Address',
                            EDB: 'Educational Background',
                            GID: 'Government ID',
                            ECP: 'Emergency Contact Person',
                            FMD: 'Family Details',
                            CPR: 'Company Relatives',
                            TRG: 'Training',
                            TCS: 'Technical Skills',
                            CRT: 'Certificates',
                            ACC: 'Accomplishments',
                            OTH: 'Others',
                            PRO: 'Professional Licenses',
                            PRE: 'Previous Employer',
                            WEX: 'Work Experience',
                            HEV: 'Hiring Evaluation',
                            PEV: 'Performance Evaluation'
                        }
                    },
                    'EMP-4': {
                        folders: {
                            BIO: 'Biometrics',
                            EDU: 'Education',
                            'GOV-1': 'Government/BIR',
                            'GOV-2': 'Government/HDMF',
                            'GOV-3': 'Government/PHIC',
                            'GOV-4': 'Government/SSS',
                            'GOV-5': 'Government/DFA',
                            'GOV-6': 'Government/LTO',
                            'GOV-7': 'Government/NSO',
                            'EMP-1': 'Employment/Application Documents',
                            'EMP-2': 'Employment/On-boarding Documents',
                            'EMP-3-A': 'Employment/Employee Performance/Performance Evaluation',
                            'EMP-3-B': 'Employment/Employee Performance/Infraction',
                            'EMP-3-C': 'Employment/Employee Performance/Productivity',
                            'EMP-3-D': 'Employment/Employee Performance/Employee Movement',
                            'EMP-4': 'Employment/Foreign Assignment Documents',
                            'EMP-5': 'Employment/Separation Documents',
                            'EMP-6': 'Employment/Others',
                            'MED-1': 'Medical/Pre-employment Medical Exam',
                            'MED-2': 'Medical/Annual Physical Exam',
                            'TNA-1': 'Time and Attendance/Timesheets',
                            'TNA-2': 'Time and Attendance/OT',
                            'TNA-3': 'Time and Attendance/Leaves',
                            'COM-1': 'Compensation and Benefits/Compensation History',
                            'COM-2': 'Compensation and Benefits/Medical Insurance',
                            'COM-3': 'Compensation and Benefits/Life Insurance',
                            'COM-4': 'Compensation and Benefits/Transportation Allowance',
                            'COM-5': 'Compensation and Benefits/Other Allowance',
                            'COM-6': 'Compensation and Benefits/De Minimis Allowance',
                            'COM-7': 'Compensation and Benefits/Statutory Benefits',
                            'COM-8': 'Compensation and Benefits/Government Deductions',
                            'COM-8-A': 'Compensation and Benefits/Government Deductions/SSS',
                            'COM-8-B': 'Compensation and Benefits/Government Deductions/HDMF',
                            'COM-9': 'Compensation and Benefits/Company Deductions',
                            'COM-10': 'Compensation and Benefits/Other Deductions',
                            'PAY-1': 'Payroll/Payslips',
                            'PAY-2': 'Payroll/Ledger',
                            'PAY-3': 'Payroll/BIR 2316',
                            OTH: 'Others'
                        }
                    },
                    'EMP-5': {},
                    'EMP-6': {},
                    'EMP-8': {},
                    'EMP-9': {},
                    'EMP-10': {},
                    'EMP-11': {},
                    'EMP-12': {},
                    'EMP-13': {},
                    'EMP-14': {},
                    'EMP-15': {},
                    'EMP-16': {},
                    'EMP-17': {
                        fieldCategories: {
                            EMD: 'Employee Details',
                            APD: 'Additional Personal Details',
                            SPD: 'Salary and Payroll Details',
                            CTI: 'Contact Information',
                            PRA: 'Present Address',
                            PEA: 'Permanent Address',
                            EDB: 'Educational Background',
                            GID: 'Government ID',
                            ECP: 'Emergency Contact Person',
                            FMD: 'Family Details',
                            CPR: 'Company Relatives',
                            TRG: 'Training',
                            TCS: 'Technical Skills',
                            CRT: 'Certificates',
                            ACC: 'Accomplishments',
                            OTH: 'Others',
                            PRO: 'Professional Licenses',
                            PRE: 'Previous Employer',
                            WEX: 'Work Experience',
                            HEV: 'Hiring Evaluation',
                            PEV: 'Performance Evaluation'
                        }
                    },
                    'EMP-18': {
                        folders: {
                            BIO: 'Biometrics',
                            EDU: 'Education',
                            'GOV-1': 'Government/BIR',
                            'GOV-2': 'Government/HDMF',
                            'GOV-3': 'Government/PHIC',
                            'GOV-4': 'Government/SSS',
                            'GOV-5': 'Government/DFA',
                            'GOV-6': 'Government/LTO',
                            'GOV-7': 'Government/NSO',
                            'EMP-1': 'Employment/Application Documents',
                            'EMP-2': 'Employment/On-boarding Documents',
                            'EMP-3-A': 'Employment/Employee Performance/Performance Evaluation',
                            'EMP-3-B': 'Employment/Employee Performance/Infraction',
                            'EMP-3-C': 'Employment/Employee Performance/Productivity',
                            'EMP-3-D': 'Employment/Employee Performance/Employee Movement',
                            'EMP-4': 'Employment/Foreign Assignment Documents',
                            'EMP-5': 'Employment/Separation Documents',
                            'EMP-6': 'Employment/Others',
                            'MED-1': 'Medical/Pre-employment Medical Exam',
                            'MED-2': 'Medical/Annual Physical Exam',
                            'TNA-1': 'Time and Attendance/Timesheets',
                            'TNA-2': 'Time and Attendance/OT',
                            'TNA-3': 'Time and Attendance/Leaves',
                            'COM-1': 'Compensation and Benefits/Compensation History',
                            'COM-2': 'Compensation and Benefits/Medical Insurance',
                            'COM-3': 'Compensation and Benefits/Life Insurance',
                            'COM-4': 'Compensation and Benefits/Transportation Allowance',
                            'COM-5': 'Compensation and Benefits/Other Allowance',
                            'COM-6': 'Compensation and Benefits/De Minimis Allowance',
                            'COM-7': 'Compensation and Benefits/Statutory Benefits',
                            'COM-8': 'Compensation and Benefits/Government Deductions',
                            'COM-8-A': 'Compensation and Benefits/Government Deductions/SSS',
                            'COM-8-B': 'Compensation and Benefits/Government Deductions/HDMF',
                            'COM-9': 'Compensation and Benefits/Company Deductions',
                            'COM-10': 'Compensation and Benefits/Other Deductions',
                            'PAY-1': 'Payroll/Payslips',
                            'PAY-2': 'Payroll/Ledger',
                            'PAY-3': 'Payroll/BIR 2316',
                            OTH: 'Others'
                        }
                    },
                    'EMP-19': {},
                    'EMP-20': {},
                    'EMP-21': {},
                    'EMP-22': {},
                    'EMP-23': {},
                    'EMP-24': {}
                },
                RECRUIT: {
                    'RECRUIT-1': {},
                    'RECRUIT-2': {},
                    'RECRUIT-3': {},
                    'RECRUIT-4': {},
                    'RECRUIT-5': {},
                    'RECRUIT-6': {},
                    'RECRUIT-7': {},
                    'RECRUIT-8': {},
                    'RECRUIT-9': {},
                    'RECRUIT-10': {},
                    'RECRUIT-11': {
                        fieldCategories: {
                            APD: 'Additional Personal Details',
                            EDB: 'Educational Background',
                            WEX: 'Work Experience'
                        }
                    },
                    'RECRUIT-12': {},
                    'RECRUIT-13': {}
                },
                REP: {
                    'REP-1': {},
                    'REP-2': {}
                }
            }
        },
        demo_admin6: {
            companies: ['SVI-SSC', 'SVIC', 'SVI-ISC', 'CDCI', 'SVI'],
            modules: {
                ADM: {
                    'ADM-1': {},
                    'ADM-2': {},
                    'ADM-3': {},
                    'ADM-4': {},
                    'ADM-5': {},
                    'ADM-6': {},
                    'ADM-7': {},
                    'ADM-8': {},
                    'ADM-9': {},
                    'ADM-10': {}
                },
                EMP: {
                    'EMP-2': {
                        folders: {
                            OTH: 'Others'
                        }
                    },
                    'EMP-3': {},
                    'EMP-4': {},
                    'EMP-5': {},
                    'EMP-6': {},
                    'EMP-7': {},
                    'EMP-8': {},
                    'EMP-9': {},
                    'EMP-10': {},
                    'EMP-11': {},
                    'EMP-12': {},
                    'EMP-13': {},
                    'EMP-14': {},
                    'EMP-15': {},
                    'EMP-16': {},
                    'EMP-17': {
                        folders: {
                            OTH: 'Others'
                        }
                    },
                    'EMP-18': {},
                    'EMP-19': {},
                    'EMP-20': {},
                    'EMP-21': {},
                    'EMP-22': {},
                    'EMP-23': {}
                },
                REP: {
                    'REP-1': {},
                    'REP-2': {}
                }
            }
        },
        demo_admin9: {
            companies: ['CDCI'],
            modules: {
                ADM: {
                    'ADM-1': {},
                    'ADM-2': {},
                    'ADM-3': {},
                    'ADM-4': {},
                    'ADM-5': {},
                    'ADM-6': {},
                    'ADM-7': {},
                    'ADM-8': {},
                    'ADM-9': {},
                    'ADM-10': {}
                },
                EMP: {
                    'EMP-1': {},
                    'EMP-2': {
                        folders: {
                            OTH: 'Others'
                        }
                    },
                    'EMP-3': {},
                    'EMP-4': {},
                    'EMP-5': {},
                    'EMP-6': {},
                    'EMP-7': {},
                    'EMP-8': {},
                    'EMP-9': {},
                    'EMP-10': {},
                    'EMP-11': {},
                    'EMP-12': {},
                    'EMP-13': {},
                    'EMP-14': {},
                    'EMP-15': {},
                    'EMP-16': {},
                    'EMP-17': {
                        folders: {
                            OTH: 'Others'
                        }
                    },
                    'EMP-18': {},
                    'EMP-19': {},
                    'EMP-20': {},
                    'EMP-21': {},
                    'EMP-22': {},
                    'EMP-23': {}
                },
                REP: {
                    'REP-1': {},
                    'REP-2': {}
                }
            }
        },
        demo_admin3: {
            companies: ['SVI-SSC', 'SVIC', 'SVI-ISC', 'CDCI', 'SVI'],
            modules: {
                ADM: {
                    'ADM-1': {},
                    'ADM-2': {},
                    'ADM-3': {},
                    'ADM-4': {},
                    'ADM-5': {},
                    'ADM-6': {},
                    'ADM-7': {},
                    'ADM-8': {},
                    'ADM-9': {},
                    'ADM-10': {}
                },
                EMP: {
                    'EMP-1': {},
                    'EMP-2': {
                        folders: {
                            OTH: 'Others'
                        }
                    },
                    'EMP-3': {},
                    'EMP-4': {},
                    'EMP-5': {},
                    'EMP-6': {},
                    'EMP-7': {},
                    'EMP-8': {},
                    'EMP-9': {},
                    'EMP-10': {},
                    'EMP-11': {},
                    'EMP-12': {},
                    'EMP-13': {},
                    'EMP-14': {},
                    'EMP-15': {},
                    'EMP-16': {},
                    'EMP-17': {
                        folders: {
                            OTH: 'Others'
                        }
                    },
                    'EMP-18': {},
                    'EMP-19': {},
                    'EMP-20': {},
                    'EMP-21': {},
                    'EMP-22': {},
                    'EMP-23': {}
                },
                REP: {
                    'REP-1': {},
                    'REP-2': {}
                }
            }
        },
        demo_admin2: {
            companies: ['SVI-SSC', 'SVIC', 'SVI-ISC', 'CDCI', 'SVI'],
            modules: {
                ADM: {
                    'ADM-1': {},
                    'ADM-2': {},
                    'ADM-3': {},
                    'ADM-4': {},
                    'ADM-5': {},
                    'ADM-6': {},
                    'ADM-7': {},
                    'ADM-8': {},
                    'ADM-9': {},
                    'ADM-10': {}
                },
                EMP: {
                    'EMP-1': {},
                    'EMP-2': {
                        fieldCategories: {
                            APD: 'Additional Personal Details',
                            SPD: 'Salary and Payroll Details',
                            CTI: 'Contact Information',
                            PRA: 'Present Address',
                            PEA: 'Permanent Address',
                            EDB: 'Educational Background',
                            GID: 'Government ID',
                            ECP: 'Emergency Contact Person',
                            FMD: 'Family Details',
                            CPR: 'Company Relatives',
                            EMH: 'Employee History',
                            TRG: 'Training',
                            TCS: 'Technical Skills',
                            CRT: 'Certificates',
                            ACC: 'Accomplishments',
                            OTH: 'Others',
                            PRO: 'Professional Licenses',
                            PRE: 'Previous Employer',
                            WEX: 'Work Experience',
                            HEV: 'Hiring Evaluation',
                            PEV: 'Performance Evaluation'
                        }
                    },
                    'EMP-3': {},
                    'EMP-4': {
                        folders: {
                            BIO: 'Biometrics',
                            EDU: 'Education',
                            'GOV-1': 'Government/BIR',
                            'GOV-2': 'Government/HDMF',
                            'GOV-3': 'Government/PHIC',
                            'GOV-4': 'Government/SSS',
                            'GOV-5': 'Government/DFA',
                            'GOV-6': 'Government/LTO',
                            'GOV-7': 'Government/NSO',
                            'EMP-1': 'Employment/Application Documents',
                            'EMP-2': 'Employment/On-boarding Documents',
                            'EMP-3-A': 'Employment/Employee Performance/Performance Evaluation',
                            'EMP-3-B': 'Employment/Employee Performance/Infraction',
                            'EMP-3-C': 'Employment/Employee Performance/Productivity',
                            'EMP-3-D': 'Employment/Employee Performance/Employee Movement',
                            'EMP-4': 'Employment/Foreign Assignment Documents',
                            'EMP-5': 'Employment/Separation Documents',
                            'EMP-6': 'Employment/Others',
                            'MED-1': 'Medical/Pre-employment Medical Exam',
                            'MED-2': 'Medical/Annual Physical Exam',
                            'TNA-1': 'Time and Attendance/Timesheets',
                            'TNA-2': 'Time and Attendance/OT',
                            'TNA-3': 'Time and Attendance/Leaves',
                            'COM-1': 'Compensation and Benefits/Compensation History',
                            'COM-2': 'Compensation and Benefits/Medical Insurance',
                            'COM-3': 'Compensation and Benefits/Life Insurance',
                            'COM-4': 'Compensation and Benefits/Transportation Allowance',
                            'COM-5': 'Compensation and Benefits/Other Allowance',
                            'COM-6': 'Compensation and Benefits/De Minimis Allowance',
                            'COM-7': 'Compensation and Benefits/Statutory Benefits',
                            'COM-8': 'Compensation and Benefits/Government Deductions',
                            'COM-8-A': 'Compensation and Benefits/Government Deductions/SSS',
                            'COM-8-B': 'Compensation and Benefits/Government Deductions/HDMF',
                            'COM-9': 'Compensation and Benefits/Company Deductions',
                            'COM-10': 'Compensation and Benefits/Other Deductions',
                            'PAY-1': 'Payroll/Payslips',
                            'PAY-2': 'Payroll/Ledger',
                            'PAY-3': 'Payroll/BIR 2316',
                            OTH: 'Others'
                        }
                    },
                    'EMP-5': {},
                    'EMP-6': {},
                    'EMP-7': {},
                    'EMP-8': {},
                    'EMP-9': {},
                    'EMP-10': {},
                    'EMP-11': {},
                    'EMP-12': {},
                    'EMP-13': {},
                    'EMP-14': {},
                    'EMP-15': {},
                    'EMP-16': {},
                    'EMP-17': {
                        fieldCategories: {
                            EMD: 'Employee Details',
                            APD: 'Additional Personal Details',
                            SPD: 'Salary and Payroll Details',
                            CTI: 'Contact Information',
                            PRA: 'Present Address',
                            PEA: 'Permanent Address',
                            EDB: 'Educational Background',
                            GID: 'Government ID',
                            ECP: 'Emergency Contact Person',
                            FMD: 'Family Details',
                            CPR: 'Company Relatives',
                            EMH: 'Employee History',
                            TRG: 'Training',
                            TCS: 'Technical Skills',
                            CRT: 'Certificates',
                            ACC: 'Accomplishments',
                            OTH: 'Others',
                            PRO: 'Professional Licenses',
                            PRE: 'Previous Employer',
                            WEX: 'Work Experience',
                            HEV: 'Hiring Evaluation',
                            PEV: 'Performance Evaluation'
                        }
                    },
                    'EMP-18': {
                        folders: {
                            BIO: 'Biometrics',
                            EDU: 'Education',
                            'GOV-1': 'Government/BIR',
                            'GOV-2': 'Government/HDMF',
                            'GOV-3': 'Government/PHIC',
                            'GOV-4': 'Government/SSS',
                            'GOV-5': 'Government/DFA',
                            'GOV-6': 'Government/LTO',
                            'GOV-7': 'Government/NSO',
                            'EMP-1': 'Employment/Application Documents',
                            'EMP-2': 'Employment/On-boarding Documents',
                            'EMP-3-A': 'Employment/Employee Performance/Performance Evaluation',
                            'EMP-3-B': 'Employment/Employee Performance/Infraction',
                            'EMP-3-C': 'Employment/Employee Performance/Productivity',
                            'EMP-3-D': 'Employment/Employee Performance/Employee Movement',
                            'EMP-4': 'Employment/Foreign Assignment Documents',
                            'EMP-5': 'Employment/Separation Documents',
                            'EMP-6': 'Employment/Others',
                            'MED-1': 'Medical/Pre-employment Medical Exam',
                            'MED-2': 'Medical/Annual Physical Exam',
                            'TNA-1': 'Time and Attendance/Timesheets',
                            'TNA-2': 'Time and Attendance/OT',
                            'TNA-3': 'Time and Attendance/Leaves',
                            'COM-1': 'Compensation and Benefits/Compensation History',
                            'COM-2': 'Compensation and Benefits/Medical Insurance',
                            'COM-3': 'Compensation and Benefits/Life Insurance',
                            'COM-4': 'Compensation and Benefits/Transportation Allowance',
                            'COM-5': 'Compensation and Benefits/Other Allowance',
                            'COM-6': 'Compensation and Benefits/De Minimis Allowance',
                            'COM-7': 'Compensation and Benefits/Statutory Benefits',
                            'COM-8': 'Compensation and Benefits/Government Deductions',
                            'COM-8-A': 'Compensation and Benefits/Government Deductions/SSS',
                            'COM-8-B': 'Compensation and Benefits/Government Deductions/HDMF',
                            'COM-9': 'Compensation and Benefits/Company Deductions',
                            'COM-10': 'Compensation and Benefits/Other Deductions',
                            'PAY-1': 'Payroll/Payslips',
                            'PAY-2': 'Payroll/Ledger',
                            'PAY-3': 'Payroll/BIR 2316',
                            OTH: 'Others'
                        }
                    },
                    'EMP-19': {},
                    'EMP-20': {},
                    'EMP-21': {},
                    'EMP-22': {},
                    'EMP-23': {}
                },
                REP: {
                    'REP-1': {},
                    'REP-2': {}
                }
            }
        },
        svi_hrheadFake: {
            companies: ['SVIC', 'SVI-ISC', 'CDCI', 'SVI-SSC'],
            modules: {
                ADM: {
                    'ADM-2': {},
                    'ADM-3': {},
                    'ADM-4': {},
                    'ADM-5': {},
                    'ADM-6': {},
                    'ADM-7': {},
                    'ADM-8': {},
                    'ADM-9': {}
                },
                EMP: {
                    'EMP-1': {},
                    'EMP-2': {
                        fieldCategories: {
                            EMD: 'Employee Details',
                            APD: 'Additional Personal Details',
                            SPD: 'Salary and Payroll Details',
                            // CTI: 'Contact Information',
                            PRA: 'Present Address',
                            PEA: 'Permanent Address',
                            EDB: 'Educational Background',
                            GID: 'Government ID',
                            ECP: 'Emergency Contact Person',
                            FMD: 'Family Details',
                            CPR: 'Company Relatives',
                            TRG: 'Training',
                            TCS: 'Technical Skills',
                            CRT: 'Certificates',
                            ACC: 'Accomplishments',
                            OTH: 'Others',
                            PRO: 'Professional Licenses',
                            PRE: 'Previous Employer',
                            WEX: 'Work Experience',
                            HEV: 'Hiring Evaluation',
                            PEV: 'Performance Evaluation'
                        }
                    }
                }
            }
        },

        svi_hrhead: {
            companies: ['SVIC', 'SVI-ISC', 'CDCI', 'SVI-SSC'],
            modules: {
                ADM: {
                    'ADM-2': {},
                    'ADM-3': {},
                    'ADM-4': {},
                    'ADM-5': {},
                    'ADM-6': {},
                    'ADM-7': {},
                    'ADM-8': {},
                    'ADM-9': {}
                },
                EMP: {
                    'EMP-1': {},
                    'EMP-2': {
                        fieldCategories: {
                            EMD: 'Employee Details',
                            APD: 'Additional Personal Details',
                            SPD: 'Salary and Payroll Details',
                            // CTI: 'Contact Information',
                            PRA: 'Present Address',
                            PEA: 'Permanent Address',
                            EDB: 'Educational Background',
                            GID: 'Government ID',
                            ECP: 'Emergency Contact Person',
                            FMD: 'Family Details',
                            CPR: 'Company Relatives',
                            TRG: 'Training',
                            TCS: 'Technical Skills',
                            CRT: 'Certificates',
                            ACC: 'Accomplishments',
                            OTH: 'Others',
                            PRO: 'Professional Licenses',
                            PRE: 'Previous Employer',
                            WEX: 'Work Experience',
                            HEV: 'Hiring Evaluation',
                            PEV: 'Performance Evaluation'
                        }
                    },
                    'EMP-3': {
                        fieldCategories: {
                            EMD: 'Employee Details',
                            APD: 'Additional Personal Details',
                            SPD: 'Salary and Payroll Details',
                            CTI: 'Contact Information',
                            PRA: 'Present Address',
                            PEA: 'Permanent Address',
                            EDB: 'Educational Background',
                            GID: 'Government ID',
                            ECP: 'Emergency Contact Person',
                            FMD: 'Family Details',
                            CPR: 'Company Relatives',
                            TRG: 'Training',
                            TCS: 'Technical Skills',
                            CRT: 'Certificates',
                            ACC: 'Accomplishments',
                            OTH: 'Others',
                            PRO: 'Professional Licenses',
                            PRE: 'Previous Employer',
                            WEX: 'Work Experience',
                            HEV: 'Hiring Evaluation',
                            PEV: 'Performance Evaluation'
                        }
                    },
                    'EMP-4': {
                        folders: {
                            BIO: 'Biometrics',
                            EDU: 'Education',
                            'GOV-1': 'Government/BIR',
                            'GOV-2': 'Government/HDMF',
                            'GOV-3': 'Government/PHIC',
                            'GOV-4': 'Government/SSS',
                            'GOV-5': 'Government/DFA',
                            'GOV-6': 'Government/LTO',
                            'GOV-7': 'Government/NSO',
                            'EMP-1': 'Employment/Application Documents',
                            'EMP-2': 'Employment/On-boarding Documents',
                            'EMP-3-A': 'Employment/Employee Performance/Performance Evaluation',
                            'EMP-3-B': 'Employment/Employee Performance/Infraction',
                            'EMP-3-C': 'Employment/Employee Performance/Productivity',
                            'EMP-3-D': 'Employment/Employee Performance/Employee Movement',
                            'EMP-4': 'Employment/Foreign Assignment Documents',
                            'EMP-5': 'Employment/Separation Documents',
                            'EMP-6': 'Employment/Others',
                            'MED-1': 'Medical/Pre-employment Medical Exam',
                            'MED-2': 'Medical/Annual Physical Exam',
                            'TNA-1': 'Time and Attendance/Timesheets',
                            'TNA-2': 'Time and Attendance/OT',
                            'TNA-3': 'Time and Attendance/Leaves',
                            'TNA-4': 'Time and Attendance/DTR',
                            'COM-1': 'Compensation and Benefits/Compensation History',
                            'COM-2': 'Compensation and Benefits/Medical Insurance',
                            'COM-3': 'Compensation and Benefits/Life Insurance',
                            'COM-4': 'Compensation and Benefits/Transportation Allowance',
                            'COM-5': 'Compensation and Benefits/Other Allowance',
                            'COM-6': 'Compensation and Benefits/De Minimis Allowance',
                            'COM-7': 'Compensation and Benefits/Statutory Benefits',
                            'COM-8': 'Compensation and Benefits/Government Deductions',
                            'COM-8-A': 'Compensation and Benefits/Government Deductions/SSS',
                            'COM-8-B': 'Compensation and Benefits/Government Deductions/HDMF',
                            'COM-9': 'Compensation and Benefits/Company Deductions',
                            'COM-10': 'Compensation and Benefits/Other Deductions',
                            'PAY-1': 'Payroll/Payslips',
                            'PAY-2': 'Payroll/Ledger',
                            'PAY-3': 'Payroll/BIR 2316',
                            OTH: 'Others'
                        }
                    },
                    'EMP-5': {},
                    'EMP-6': {},
                    'EMP-8': {},
                    'EMP-9': {},
                    'EMP-10': {},
                    'EMP-11': {},
                    'EMP-12': {},
                    'EMP-13': {},
                    'EMP-14': {},
                    'EMP-15': {},
                    'EMP-16': {},
                    'EMP-17': {
                        fieldCategories: {
                            EMD: 'Employee Details',
                            APD: 'Additional Personal Details',
                            SPD: 'Salary and Payroll Details',
                            CTI: 'Contact Information',
                            PRA: 'Present Address',
                            PEA: 'Permanent Address',
                            EDB: 'Educational Background',
                            GID: 'Government ID',
                            ECP: 'Emergency Contact Person',
                            FMD: 'Family Details',
                            CPR: 'Company Relatives',
                            TRG: 'Training',
                            TCS: 'Technical Skills',
                            CRT: 'Certificates',
                            ACC: 'Accomplishments',
                            OTH: 'Others',
                            PRO: 'Professional Licenses',
                            PRE: 'Previous Employer',
                            WEX: 'Work Experience',
                            HEV: 'Hiring Evaluation',
                            PEV: 'Performance Evaluation'
                        }
                    },
                    'EMP-18': {
                        folders: {
                            BIO: 'Biometrics',
                            EDU: 'Education',
                            'GOV-1': 'Government/BIR',
                            'GOV-2': 'Government/HDMF',
                            'GOV-3': 'Government/PHIC',
                            'GOV-4': 'Government/SSS',
                            'GOV-5': 'Government/DFA',
                            'GOV-6': 'Government/LTO',
                            'GOV-7': 'Government/NSO',
                            'EMP-1': 'Employment/Application Documents',
                            'EMP-2': 'Employment/On-boarding Documents',
                            'EMP-3-A': 'Employment/Employee Performance/Performance Evaluation',
                            'EMP-3-B': 'Employment/Employee Performance/Infraction',
                            'EMP-3-C': 'Employment/Employee Performance/Productivity',
                            'EMP-3-D': 'Employment/Employee Performance/Employee Movement',
                            'EMP-4': 'Employment/Foreign Assignment Documents',
                            'EMP-5': 'Employment/Separation Documents',
                            'EMP-6': 'Employment/Others',
                            'MED-1': 'Medical/Pre-employment Medical Exam',
                            'MED-2': 'Medical/Annual Physical Exam',
                            'TNA-1': 'Time and Attendance/Timesheets',
                            'TNA-2': 'Time and Attendance/OT',
                            'TNA-3': 'Time and Attendance/Leaves',
                            'TNA-4': 'Time and Attendance/DTR',
                            'COM-1': 'Compensation and Benefits/Compensation History',
                            'COM-2': 'Compensation and Benefits/Medical Insurance',
                            'COM-3': 'Compensation and Benefits/Life Insurance',
                            'COM-4': 'Compensation and Benefits/Transportation Allowance',
                            'COM-5': 'Compensation and Benefits/Other Allowance',
                            'COM-6': 'Compensation and Benefits/De Minimis Allowance',
                            'COM-7': 'Compensation and Benefits/Statutory Benefits',
                            'COM-8': 'Compensation and Benefits/Government Deductions',
                            'COM-8-A': 'Compensation and Benefits/Government Deductions/SSS',
                            'COM-8-B': 'Compensation and Benefits/Government Deductions/HDMF',
                            'COM-9': 'Compensation and Benefits/Company Deductions',
                            'COM-10': 'Compensation and Benefits/Other Deductions',
                            'PAY-1': 'Payroll/Payslips',
                            'PAY-2': 'Payroll/Ledger',
                            'PAY-3': 'Payroll/BIR 2316',
                            OTH: 'Others'
                        }
                    },
                    'EMP-19': {},
                    'EMP-20': {},
                    'EMP-21': {},
                    'EMP-22': {},
                    'EMP-23': {}
                },
                RECRUIT: {
                    'RECRUIT-1': {},
                    'RECRUIT-2': {},
                    'RECRUIT-3': {},
                    'RECRUIT-4': {},
                    'RECRUIT-5': {},
                    'RECRUIT-6': {},
                    'RECRUIT-7': {},
                    'RECRUIT-8': {},
                    'RECRUIT-9': {},
                    'RECRUIT-10': {},
                    'RECRUIT-11': {
                        fieldCategories: {
                            APD: 'Additional Personal Details',
                            EDB: 'Educational Background',
                            WEX: 'Work Experience'
                        }
                    },
                    'RECRUIT-12': {},
                    'RECRUIT-13': {}
                },
                REP: {
                    'REP-1': {},
                    'REP-2': {}
                }
            }
        },
        demo_admin7: {
            companies: ['SVI-SSC', 'SVIC', 'SVI-ISC', 'CDCI', 'SVI'],
            modules: {
                ADM: {
                    'ADM-1': {},
                    'ADM-2': {},
                    'ADM-3': {},
                    'ADM-4': {},
                    'ADM-5': {},
                    'ADM-6': {},
                    'ADM-7': {},
                    'ADM-8': {},
                    'ADM-9': {},
                    'ADM-10': {}
                },
                EMP: {
                    'EMP-1': {},
                    'EMP-2': {
                        folders: {
                            OTH: 'Others'
                        }
                    },
                    'EMP-3': {},
                    'EMP-4': {},
                    'EMP-5': {},
                    'EMP-6': {},
                    'EMP-7': {},
                    'EMP-8': {},
                    'EMP-9': {},
                    'EMP-10': {},
                    'EMP-11': {},
                    'EMP-12': {},
                    'EMP-13': {},
                    'EMP-14': {},
                    'EMP-15': {},
                    'EMP-16': {},
                    'EMP-17': {
                        folders: {
                            OTH: 'Others'
                        }
                    },
                    'EMP-18': {},
                    'EMP-19': {},
                    'EMP-20': {},
                    'EMP-21': {},
                    'EMP-22': {},
                    'EMP-23': {}
                },
                REP: {
                    'REP-1': {},
                    'REP-2': {}
                }
            }
        },
        svi_ssc_management: {
            companies: ['SVI-SSC'],
            modules: {
                ADM: {
                    'ADM-1': {},
                    'ADM-2': {},
                    'ADM-3': {},
                    'ADM-4': {},
                    'ADM-5': {},
                    'ADM-6': {},
                    'ADM-7': {},
                    'ADM-8': {},
                    'ADM-9': {},
                    'ADM-10': {}
                },
                EMP: {
                    'EMP-1': {},
                    'EMP-2': {
                        folders: {
                            OTH: 'Others'
                        }
                    },
                    'EMP-3': {},
                    'EMP-4': {},
                    'EMP-5': {},
                    'EMP-6': {},
                    'EMP-7': {},
                    'EMP-8': {},
                    'EMP-9': {},
                    'EMP-10': {},
                    'EMP-11': {},
                    'EMP-12': {},
                    'EMP-13': {},
                    'EMP-14': {},
                    'EMP-15': {},
                    'EMP-16': {},
                    'EMP-17': {
                        folders: {
                            OTH: 'Others'
                        }
                    },
                    'EMP-18': {},
                    'EMP-19': {},
                    'EMP-20': {},
                    'EMP-21': {},
                    'EMP-22': {},
                    'EMP-23': {}
                },
                REP: {
                    'REP-1': {},
                    'REP-2': {}
                }
            }
        },
        svi_itadmin: {
            companies: ['SVIC', 'SVI-ISC', 'SVI-GSC', 'CDCI', 'SVI-SSC'],
            modules: {
                ADM: {
                    'ADM-1': {},
                    'ADM-2': {},
                    'ADM-3': {},
                    'ADM-4': {},
                    'ADM-5': {},
                    'ADM-6': {},
                    'ADM-7': {},
                    'ADM-8': {},
                    'ADM-9': {}
                },
                EMP: {
                    'EMP-1': {},
                    'EMP-2': {},
                    'EMP-3': {},
                    'EMP-4': {},
                    'EMP-5': {},
                    'EMP-6': {},
                    'EMP-8': {},
                    'EMP-9': {},
                    'EMP-10': {},
                    'EMP-11': {},
                    'EMP-12': {},
                    'EMP-13': {},
                    'EMP-14': {},
                    'EMP-15': {},
                    'EMP-16': {},
                    'EMP-17': {},
                    'EMP-18': {},
                    'EMP-19': {},
                    'EMP-20': {},
                    'EMP-21': {},
                    'EMP-22': {},
                    'EMP-23': {}
                },
                REP: {
                    'REP-1': {},
                    'REP-2': {}
                }
            }
        },
        'PP-ALL': {
            companies: ['ISC Balanga', 'ISC', 'SVIC', 'SVI-ISC', 'ISC Manila', 'SVI-GSC', 'CDCI', 'SVI-SSC'],
            modules: {
                ADM: {
                    'ADM-1': {},
                    'ADM-2': {},
                    'ADM-3': {},
                    'ADM-4': {},
                    'ADM-5': {},
                    'ADM-6': {},
                    'ADM-7': {},
                    'ADM-8': {},
                    'ADM-9': {}
                },
                EMP: {
                    'EMP-1': {},
                    'EMP-2': {
                        fieldCategories: {
                            EMD: 'Employee Details',
                            APD: 'Additional Personal Details',
                            SPD: 'Salary and Payroll Details',
                            CTI: 'Contact Information',
                            PRA: 'Present Address',
                            PEA: 'Permanent Address',
                            EDB: 'Educational Background',
                            GID: 'Government ID',
                            ECP: 'Emergency Contact Person',
                            FMD: 'Family Details',
                            CPR: 'Company Relatives',
                            TRG: 'Training',
                            TCS: 'Technical Skills',
                            CRT: 'Certificates',
                            ACC: 'Accomplishments',
                            OTH: 'Others',
                            PRO: 'Professional Licenses',
                            PRE: 'Previous Employer',
                            WEX: 'Work Experience',
                            HEV: 'Hiring Evaluation',
                            PEV: 'Performance Evaluation'
                        }
                    },
                    'EMP-3': {
                        fieldCategories: {
                            EMD: 'Employee Details',
                            APD: 'Additional Personal Details',
                            SPD: 'Salary and Payroll Details',
                            CTI: 'Contact Information',
                            PRA: 'Present Address',
                            PEA: 'Permanent Address',
                            EDB: 'Educational Background',
                            GID: 'Government ID',
                            ECP: 'Emergency Contact Person',
                            FMD: 'Family Details',
                            CPR: 'Company Relatives',
                            TRG: 'Training',
                            TCS: 'Technical Skills',
                            CRT: 'Certificates',
                            ACC: 'Accomplishments',
                            OTH: 'Others',
                            PRO: 'Professional Licenses',
                            PRE: 'Previous Employer',
                            WEX: 'Work Experience',
                            HEV: 'Hiring Evaluation',
                            PEV: 'Performance Evaluation'
                        }
                    },
                    'EMP-4': {
                        folders: {
                            BIO: 'Biometrics',
                            EDU: 'Education',
                            'GOV-1': 'Government/BIR',
                            'GOV-2': 'Government/HDMF',
                            'GOV-3': 'Government/PHIC',
                            'GOV-4': 'Government/SSS',
                            'GOV-5': 'Government/DFA',
                            'GOV-6': 'Government/LTO',
                            'GOV-7': 'Government/NSO',
                            'EMP-1': 'Employment/Application Documents',
                            'EMP-2': 'Employment/On-boarding Documents',
                            'EMP-3-A': 'Employment/Employee Performance/Performance Evaluation',
                            'EMP-3-B': 'Employment/Employee Performance/Infraction',
                            'EMP-3-C': 'Employment/Employee Performance/Productivity',
                            'EMP-3-D': 'Employment/Employee Performance/Employee Movement',
                            'EMP-4': 'Employment/Foreign Assignment Documents',
                            'EMP-5': 'Employment/Separation Documents',
                            'EMP-6': 'Employment/Others',
                            'MED-1': 'Medical/Pre-employment Medical Exam',
                            'MED-2': 'Medical/Annual Physical Exam',
                            'TNA-1': 'Time and Attendance/Timesheets',
                            'TNA-2': 'Time and Attendance/OT',
                            'TNA-3': 'Time and Attendance/Leaves',
                            'COM-1': 'Compensation and Benefits/Compensation History',
                            'COM-2': 'Compensation and Benefits/Medical Insurance',
                            'COM-3': 'Compensation and Benefits/Life Insurance',
                            'COM-4': 'Compensation and Benefits/Transportation Allowance',
                            'COM-5': 'Compensation and Benefits/Other Allowance',
                            'COM-6': 'Compensation and Benefits/De Minimis Allowance',
                            'COM-7': 'Compensation and Benefits/Statutory Benefits',
                            'COM-8': 'Compensation and Benefits/Government Deductions',
                            'COM-8-A': 'Compensation and Benefits/Government Deductions/SSS',
                            'COM-8-B': 'Compensation and Benefits/Government Deductions/HDMF',
                            'COM-9': 'Compensation and Benefits/Company Deductions',
                            'COM-10': 'Compensation and Benefits/Other Deductions',
                            'PAY-1': 'Payroll/Payslips',
                            'PAY-2': 'Payroll/Ledger',
                            'PAY-3': 'Payroll/BIR 2316',
                            OTH: 'Others'
                        }
                    },
                    'EMP-5': {},
                    'EMP-6': {},
                    'EMP-8': {},
                    'EMP-9': {},
                    'EMP-10': {},
                    'EMP-11': {},
                    'EMP-12': {},
                    'EMP-13': {},
                    'EMP-14': {},
                    'EMP-15': {},
                    'EMP-16': {},
                    'EMP-17': {
                        fieldCategories: {
                            EMD: 'Employee Details',
                            APD: 'Additional Personal Details',
                            SPD: 'Salary and Payroll Details',
                            CTI: 'Contact Information',
                            PRA: 'Present Address',
                            PEA: 'Permanent Address',
                            EDB: 'Educational Background',
                            GID: 'Government ID',
                            ECP: 'Emergency Contact Person',
                            FMD: 'Family Details',
                            CPR: 'Company Relatives',
                            TRG: 'Training',
                            TCS: 'Technical Skills',
                            CRT: 'Certificates',
                            ACC: 'Accomplishments',
                            OTH: 'Others',
                            PRO: 'Professional Licenses',
                            PRE: 'Previous Employer',
                            WEX: 'Work Experience',
                            HEV: 'Hiring Evaluation',
                            PEV: 'Performance Evaluation'
                        }
                    },
                    'EMP-18': {
                        folders: {
                            BIO: 'Biometrics',
                            EDU: 'Education',
                            'GOV-1': 'Government/BIR',
                            'GOV-2': 'Government/HDMF',
                            'GOV-3': 'Government/PHIC',
                            'GOV-4': 'Government/SSS',
                            'GOV-5': 'Government/DFA',
                            'GOV-6': 'Government/LTO',
                            'GOV-7': 'Government/NSO',
                            'EMP-1': 'Employment/Application Documents',
                            'EMP-2': 'Employment/On-boarding Documents',
                            'EMP-3-A': 'Employment/Employee Performance/Performance Evaluation',
                            'EMP-3-B': 'Employment/Employee Performance/Infraction',
                            'EMP-3-C': 'Employment/Employee Performance/Productivity',
                            'EMP-3-D': 'Employment/Employee Performance/Employee Movement',
                            'EMP-4': 'Employment/Foreign Assignment Documents',
                            'EMP-5': 'Employment/Separation Documents',
                            'EMP-6': 'Employment/Others',
                            'MED-1': 'Medical/Pre-employment Medical Exam',
                            'MED-2': 'Medical/Annual Physical Exam',
                            'TNA-1': 'Time and Attendance/Timesheets',
                            'TNA-2': 'Time and Attendance/OT',
                            'TNA-3': 'Time and Attendance/Leaves',
                            'COM-1': 'Compensation and Benefits/Compensation History',
                            'COM-2': 'Compensation and Benefits/Medical Insurance',
                            'COM-3': 'Compensation and Benefits/Life Insurance',
                            'COM-4': 'Compensation and Benefits/Transportation Allowance',
                            'COM-5': 'Compensation and Benefits/Other Allowance',
                            'COM-6': 'Compensation and Benefits/De Minimis Allowance',
                            'COM-7': 'Compensation and Benefits/Statutory Benefits',
                            'COM-8': 'Compensation and Benefits/Government Deductions',
                            'COM-8-A': 'Compensation and Benefits/Government Deductions/SSS',
                            'COM-8-B': 'Compensation and Benefits/Government Deductions/HDMF',
                            'COM-9': 'Compensation and Benefits/Company Deductions',
                            'COM-10': 'Compensation and Benefits/Other Deductions',
                            'PAY-1': 'Payroll/Payslips',
                            'PAY-2': 'Payroll/Ledger',
                            'PAY-3': 'Payroll/BIR 2316',
                            OTH: 'Others'
                        }
                    },
                    'EMP-19': {},
                    'EMP-20': {},
                    'EMP-21': {},
                    'EMP-22': {},
                    'EMP-23': {},
                    'EMP-24': {}
                },
                RECRUIT: {
                    'RECRUIT-1': {},
                    'RECRUIT-2': {},
                    'RECRUIT-3': {},
                    'RECRUIT-4': {},
                    'RECRUIT-5': {},
                    'RECRUIT-6': {},
                    'RECRUIT-7': {},
                    'RECRUIT-8': {},
                    'RECRUIT-9': {},
                    'RECRUIT-10': {},
                    'RECRUIT-11': {
                        fieldCategories: {
                            APD: 'Additional Personal Details',
                            EDB: 'Educational Background',
                            WEX: 'Work Experience'
                        }
                    },
                    'RECRUIT-12': {},
                    'RECRUIT-13': {}
                },
                REP: {
                    'REP-1': {},
                    'REP-2': {}
                }
            }
        },
        demo_admin8: {
            companies: ['SVI-SSC'],
            modules: {
                ADM: {
                    'ADM-1': {},
                    'ADM-2': {},
                    'ADM-3': {},
                    'ADM-4': {},
                    'ADM-5': {},
                    'ADM-6': {},
                    'ADM-7': {},
                    'ADM-8': {},
                    'ADM-9': {},
                    'ADM-10': {}
                },
                EMP: {
                    'EMP-1': {},
                    'EMP-2': {
                        folders: {
                            OTH: 'Others'
                        }
                    },
                    'EMP-3': {},
                    'EMP-4': {},
                    'EMP-5': {},
                    'EMP-6': {},
                    'EMP-7': {},
                    'EMP-8': {},
                    'EMP-9': {},
                    'EMP-10': {},
                    'EMP-11': {},
                    'EMP-12': {},
                    'EMP-13': {},
                    'EMP-14': {},
                    'EMP-15': {},
                    'EMP-16': {},
                    'EMP-17': {
                        folders: {
                            OTH: 'Others'
                        }
                    },
                    'EMP-18': {},
                    'EMP-19': {},
                    'EMP-20': {},
                    'EMP-21': {},
                    'EMP-22': {},
                    'EMP-23': {}
                },
                REP: {
                    'REP-1': {},
                    'REP-2': {}
                }
            }
        },
        svi_management: {
            companies: ['SVI-SSC', 'SVIC', 'SVI-ISC', 'CDCI', 'SVI'],
            modules: {
                ADM: {
                    'ADM-1': {},
                    'ADM-2': {},
                    'ADM-3': {},
                    'ADM-4': {},
                    'ADM-5': {},
                    'ADM-6': {},
                    'ADM-7': {},
                    'ADM-8': {},
                    'ADM-9': {},
                    'ADM-10': {}
                },
                EMP: {
                    'EMP-2': {
                        folders: {
                            OTH: 'Others'
                        }
                    },
                    'EMP-3': {},
                    'EMP-4': {},
                    'EMP-5': {},
                    'EMP-6': {},
                    'EMP-7': {},
                    'EMP-8': {},
                    'EMP-9': {},
                    'EMP-10': {},
                    'EMP-11': {},
                    'EMP-12': {},
                    'EMP-13': {},
                    'EMP-14': {},
                    'EMP-15': {},
                    'EMP-16': {},
                    'EMP-17': {
                        folders: {
                            OTH: 'Others'
                        }
                    },
                    'EMP-18': {},
                    'EMP-19': {},
                    'EMP-20': {},
                    'EMP-21': {},
                    'EMP-22': {},
                    'EMP-23': {}
                },
                REP: {
                    'REP-1': {},
                    'REP-2': {}
                }
            }
        },
        demo_admin: {
            companies: ['SVIC', 'SVI-ISC', 'CDCI', 'SVI-SSC'],
            modules: {
                ADM: {
                    'ADM-1': {},
                    'ADM-2': {},
                    'ADM-3': {},
                    'ADM-4': {},
                    // 'ADM-5': {},
                    'ADM-6': {},
                    'ADM-7': {},
                    'ADM-8': {},
                    'ADM-9': {}
                },
                EMP: {
                    'EMP-1': {},
                    // 'EMP-2': {},
                    'EMP-3': {},
                    'EMP-4': {
                        folders: {
                            BIO: 'Biometrics',
                            // EDU: 'Education',
                            'GOV-1': 'Government/BIR',
                            'GOV-2': 'Government/HDMF',
                            'GOV-3': 'Government/PHIC',
                            'GOV-4': 'Government/SSS',
                            'GOV-5': 'Government/DFA',
                            'GOV-6': 'Government/LTO',
                            'GOV-7': 'Government/NSO',
                            'EMP-1': 'Employment/Application Documents',
                            'EMP-2': 'Employment/On-boarding Documents',
                            'EMP-3-A': 'Employment/Employee Performance/Performance Evaluation',
                            'EMP-3-B': 'Employment/Employee Performance/Infraction',
                            'EMP-3-C': 'Employment/Employee Performance/Productivity',
                            'EMP-3-D': 'Employment/Employee Performance/Employee Movement',
                            'EMP-4': 'Employment/Foreign Assignment Documents',
                            'EMP-5': 'Employment/Separation Documents',
                            'EMP-6': 'Employment/Others',
                            'MED-1': 'Medical/Pre-employment Medical Exam',
                            'MED-2': 'Medical/Annual Physical Exam',
                            'TNA-1': 'Time and Attendance/Timesheets',
                            'TNA-2': 'Time and Attendance/OT',
                            'TNA-3': 'Time and Attendance/Leaves',
                            'COM-1': 'Compensation and Benefits/Compensation History',
                            'COM-2': 'Compensation and Benefits/Medical Insurance',
                            'COM-3': 'Compensation and Benefits/Life Insurance',
                            'COM-4': 'Compensation and Benefits/Transportation Allowance',
                            'COM-5': 'Compensation and Benefits/Other Allowance',
                            'COM-6': 'Compensation and Benefits/De Minimis Allowance',
                            'COM-7': 'Compensation and Benefits/Statutory Benefits',
                            'COM-8': 'Compensation and Benefits/Government Deductions',
                            'COM-8-A': 'Compensation and Benefits/Government Deductions/SSS',
                            'COM-8-B': 'Compensation and Benefits/Government Deductions/HDMF',
                            'COM-9': 'Compensation and Benefits/Company Deductions',
                            'COM-10': 'Compensation and Benefits/Other Deductions',
                            'PAY-1': 'Payroll/Payslips',
                            'PAY-2': 'Payroll/Ledger',
                            'PAY-3': 'Payroll/BIR 2316',
                            OTH: 'Others'
                        }
                    },
                    'EMP-5': {},
                    'EMP-6': {},
                    'EMP-8': {},
                    'EMP-9': {},
                    'EMP-10': {},
                    'EMP-11': {},
                    'EMP-12': {},
                    'EMP-13': {},
                    'EMP-14': {},
                    'EMP-15': {},
                    'EMP-16': {},
                    'EMP-17': {},
                    'EMP-18': {},
                    'EMP-19': {},
                    'EMP-20': {},
                    'EMP-21': {},
                    'EMP-22': {},
                    'EMP-23': {}
                },
                REP: {
                    'REP-1': {},
                    'REP-2': {}
                }
            }
        }
    };


}

