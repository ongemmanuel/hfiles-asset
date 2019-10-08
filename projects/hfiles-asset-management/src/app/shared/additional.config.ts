export abstract class AdditionalConfig {

    static readonly PARAMETER_GROUPING = [{
        label: 'Common',
        parameters: [{
            label: 'Citizenship',
            key: 'citizenship'
        }, {
            label: 'City',
            key: 'city'
        }, {
            label: 'Civil Status',
            key: 'civil_status'
        }, {
            label: 'Country',
            key: 'country'
        }, {
            label: 'Currency',
            key: 'currency'
        }, {
            label: 'Educational Attainment Level',
            key: 'educational_attainment_level'
        }, {
            label: 'Gender',
            key: 'gender'
        }, {
            label: 'Nationality',
            key: 'nationality'
        }, {
            label: 'Province',
            key: 'province'
        }, {
            label: 'Relationship',
            key: 'relationship'
        }, {
            label: 'RDO Code',
            key: 'rdo_code'
        }, {
            label: 'Religion',
            key: 'religion'
        }]
    }, {
        label: 'Organizational Hierarchy',
        parameters: [{
            label: 'Group',
            key: 'group'
        }, {
            label: 'Division',
            key: 'division'
        }, {
            label: 'Department',
            key: 'department'
        }, {
            label: 'Section',
            key: 'section'
        }]
    }, {
        label: 'Employee',
        parameters: [{
            label: 'Action Taken',
            key: 'action_taken'
        }, {
            label: 'Bank Account Type',
            key: 'bank_account_type'
        }, {
            label: 'Benefit Type',
            key: 'benefit_type'
        }, {
            label: 'Compensation Type',
            key: 'computation_type'
        }, {
            label: 'Computation Type',
            key: 'computation_type'
        }, {
            label: 'Deduction Exemption Code',
            key: 'deduction_exemption_code'
        }, {
            label: 'Deduction Type',
            key: 'deduction_type'
        }, {
            label: 'Employment Status',
            key: 'employment_status'
        }, {
            label: 'Employment Type',
            key: 'employment_type'
        }, {
            label: 'Infraction Type',
            key: 'infraction_type'
        }, {
            label: 'Job Title',
            key: 'job_title'
        }, {
            label: 'Leave Type',
            key: 'leave_type'
        }, {
            label: 'Position Title',
            key: 'position_title'
        }, {
            label: 'Position Type',
            key: 'position_type'
        }, {
            label: 'Salary Level',
            key: 'salary_level'
        }, {
            label: 'Salary Computation Basis',
            key: 'salary_type'
        }, {
            label: 'Salary Disbursement Type',
            key: 'salary_disburse_type'
        }, {
            label: 'Skill Level',
            key: 'skill_level'
        }, {
            label: 'Tax Code',
            key: 'tax_code'
        }, {
            label: 'Training Type',
            key: 'training_type'
        }]
    }, {
        label: 'Payroll',
        parameters: [{
            label: 'Payroll Frequency',
            key: 'payroll_frequency'
        }, {
            label: 'Payroll Keys',
            key: 'payroll_key'
        }]
    }, {
        label: 'Asset',
        parameters: [{
            label: 'Asset Class',
            key: 'asset_class'
        }, {
            label: 'Asset Status',
            key: 'asset_status'
        }, {
            label: 'Asset Type',
            key: 'asset_type'
        }, {
            label: 'Ownership',
            key: 'ownership'
        }, {
            label: 'Project',
            key: 'project'
        }]
    }];

    static readonly COMPANY_EDIT_CONFIG:
        { label: string, key: string, type: string, popType: string, isRequired: boolean }[] =
        [{
            label: 'Company Id',
            key: 'company_id',
            type: '',
            popType: 'search',
            isRequired: true
        }, {
            label: 'Company Name',
            key: 'company_name',
            type: 'text',
            popType: 'text',
            isRequired: true
        }, {
            label: 'Company Address',
            key: 'company_address',
            type: 'text',
            popType: 'text',
            isRequired: false
        }, {
            label: 'Address 1',
            key: 'present_address_line1',
            type: 'text',
            popType: 'text',
            isRequired: true
        }, {
            label: 'Address 2',
            key: 'present_address_line2',
            type: 'text',
            popType: 'text',
            isRequired: false
        }, {
            label: 'Barangay',
            key: 'present_barangay',
            type: 'text',
            popType: 'text',
            isRequired: true
        }, {
            label: 'City',
            key: 'present_city',
            type: 'text',
            popType: 'text',
            isRequired: true
        }, {
            label: 'Province',
            key: 'present_province',
            type: 'text',
            popType: 'text',
            isRequired: true
        }, {
            label: 'Country',
            key: 'present_country',
            type: 'text',
            popType: 'text',
            isRequired: true
        }, {
            label: 'Zip Code',
            key: 'present_zip_code',
            type: 'text',
            popType: 'text',
            isRequired: true
        }, {
            label: 'Telephone Number',
            key: 'telephone_no',
            type: 'selectize',
            popType: 'selectize',
            isRequired: true
        }, {
            label: 'Fax Number',
            key: 'fax_no',
            type: 'selectize',
            popType: 'selectize',
            isRequired: false
        }, {
            label: 'Nature of Work',
            key: 'nature_of_work',
            type: 'text',
            popType: 'text',
            isRequired: false
        }, {
            label: 'Company Website',
            key: 'company_website',
            type: 'text',
            popType: 'text',
            isRequired: false
        }, {
            label: 'Company TIN',
            key: 'company_tin',
            type: 'text',
            popType: 'text',
            isRequired: true
        }, {
            label: 'Currency',
            key: 'currency',
            type: 'text',
            popType: 'text',
            isRequired: true
        }, {
            label: 'Probationary Periods (Days)',
            key: 'probationary_period',
            type: 'text',
            popType: 'text',
            isRequired: true
        }, {
            label: 'Working Days of the Month',
            key: 'working_days_of_the_month',
            type: 'text',
            popType: 'text',
            isRequired: true
        }, {
            label: 'HR Email Address',
            key: 'company_email_address',
            type: 'selectize',
            popType: 'selectize',
            isRequired: true
        }, {
            label: 'Org Chart Template',
            key: 'org_chart_template',
            type: 'selectize',
            popType: 'selectize',
            isRequired: true
        }];

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

    // PERMISSION MAP
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

    // LABEL MAP
    static readonly LABEL_MAP = {
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
        'EMP-24': 'View Shift Types',
        'EMP-25': 'Add Shift Type',
        'EMP-26': 'Update Shift Type',
        'EMP-27': 'View Shift Schedule',
        'EMP-28': 'Assign Shift Schedule',
        'EMP-29': 'Update Shift Schedule',
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

    // PERMISSION CONFIG INI
    static readonly PERMISSION_CONFIG_MODULE: { EMP: string, ADM: string, REP: string } = {
        EMP: 'Employee Module',
        ADM: 'Admin Module',
        REP: 'Report Module',
    };

    static readonly PERMISSION_CONFIG_FUNCTIONALITY = {
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
        'EMP-24': 'View Shift Types',
        'EMP-25': 'Add Shift Type',
        'EMP-26': 'Update Shift Type',
        'EMP-27': 'View Shift Schedule',
        'EMP-28': 'Assign Shift Schedule',
        'EMP-29': 'Update Shift Schedule',
        'ADM-1': 'Add Company',
        'ADM-2': 'Update Company',
        'ADM-3': 'View Role Permission',
        'ADM-4': 'Update Role Permission',
        'ADM-5': 'View Parameter',
        'ADM-6': 'Batch Upload Parameter Values',
        'ADM-7': 'Add Parameter Value',
        'ADM-8': 'De/Activate Parameter Value',
        'ADM-9': 'View Control Totals',
        'REP-1': 'View Report',
        'REP-2': 'Download Report',
    };

    static readonly PERMISSION_CONFIG_FOLDER = {
        BIO: 'Biometrics',
        EDU: 'Education',
        'EDU-1': 'Education/Training',
        'GOV-1': 'Government/BIR',
        'GOV-2': 'Government/HDMF',
        'GOV-1-A': 'Government/BIR/W-4',
        'GOV-1-B': 'Government/BIR/W-2',
        'GOV-3': 'Government/PHIC',
        'GOV-4': 'Government/SSS',
        'GOV-5': 'Government/DFA',
        'GOV-5-A': 'Government/DFA/I-9',
        'GOV-5-B': 'Government/DFA/I-94',
        'GOV-5-C': 'Government/DFA/Visa',
        'GOV-5-D': 'Government/DFA/NOA Receipt',
        'GOV-5-E': 'Government/DFA/NOA Approval',
        'GOV-6': 'Government/LTO',
        'GOV-7': 'Government/NSO',
        'GOV-8': 'Government/PRC',
        'EMP-1': 'Employment/Application Documents',
        'EMP-2': 'Employment/On-boarding Documents',
        'EMP-3-A': 'Employment/Employee Performance/Performance Evaluation',
        'EMP-3-B': 'Employment/Employee Performance/Infraction',
        'EMP-3-B1': 'Employment/Employee Performance/Infraction/Notice to Explain',
        'EMP-3-B2': 'Employment/Employee Performance/Infraction/Suspension Letter',
        'EMP-3-C': 'Employment/Employee Performance/Productivity',
        'EMP-3-D': 'Employment/Employee Performance/Employee Movement',
        'EMP-3-D1': 'Employment/Employee Performance/Employee Movement/Authorization for Change of Employment',
        'EMP-3-D2': 'Employment/Employee Performance/Employee Movement/Recommendation for Promotion',
        'EMP-4': 'Employment/Foreign Assignment Documents',
        'EMP-5': 'Employment/Separation Documents',
        'EMP-6': 'Employment/Others',
        'MED-1': 'Medical/Pre-employment Medical Exam',
        'MED-2': 'Medical/Annual Physical Exam',
        'MED-3': 'Medical/Hospitalization Records',
        'MED-4': 'Medical/Medical Certificates',
        'TNA-1': 'Time and Attendance/Timesheets',
        'TNA-2': 'Time and Attendance/OT',
        'TNA-3': 'Time and Attendance/Leaves',
        'TNA-3-A': 'Time and Attendance/Leaves/Leave Form',
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
        'COM-11': 'Compensation and Benefits/Company Benefits',
        'COM-12': 'Compensation and Benefits/Company Benefits/Forgiveable Loan',
        'COM-13': 'Compensation and Benefits/Company Benefits/Notice of Occupancy and Use of Staff House/Car',
        'COM-14': 'Compensation and Benefits/Company Benefits/Notice of Vacancy of Staff House',
        'COM-15': 'Compensation and Benefits/Company Benefits/Leave Subsidy Form',
        PAY: 'Payroll',
        'PAY-1': 'Payroll/Payslips',
        'PAY-2': 'Payroll/Ledger',
        'PAY-3': 'Payroll/BIR 2316',
        OTH: 'Others',
        'OTH-1': 'Others/Accounts Payable Voucher',
        'OTH-2': 'Others/Check',
        'OTH-3': 'Others/Check Voucher',
        'OTH-4': 'Others/Deposit/Payment Receipt',
        'OTH-5': 'Others/Email'
    };

    static readonly PERMISSION_CONFIG_FIELDCATEGORY = {
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
    };



}

