module.exports = {
    
    // Buttons
    buttonSubmit: 'button[type="submit"]',
    buttonRegular: 'button[type="button"]',
    buttonSuccess: 'button.bg-success, button.btn-success',
    buttonWarning: 'button.bg-warning, button.btn-warning',
    buttonDanger: 'button.bg-danger, button.btn-danger',
    buttonPrimary: 'button.bg-primary, button.btn-primary',
    buttonSecondary: 'button.bg-secondary, button.btn-secondary',
    buttonInfo: 'button.bg-info, button.btn-info',
    buttonClose: 'button.close',

    // Icons
    iconSvg: 'svg',

    // Alerts
    alertDanger: '.alert.alert-danger',
    alertSuccess: '.alert.alert-success',

    // Div
    divider: 'div',
    divLoading: 'div[aria-label="Loading"]',

    // Card
    cardHeaderTitle: 'header.card-header',
    
    // Table
    tableData: 'td:not(.d-none):not(:has(button))',
    tableDataFirstChild: 'td:first-child',
    tableDataSecondChild: 'td:nth-child(2)',
    tableDataThirdChild: 'td:nth-child(3)',
    tableDataLastChild: 'td:last-child',
    tableDataNotLastChild: 'td:not(:last-child)',
    table: 'table.table',
    tableHeaderWrapper: 'table.table thead',
    tableHeaderList: 'table.table thead tr th:not(.d-none)',
    tableHeaderListWithoutButton: 'table.table thead tr th:not(:has(button))',
    tableBodyRowList: 'table.table tbody tr',
    tableBodyColumnList: 'table.table tbody tr td',
    tableBodyColumnListNumber: 'table.table tbody tr td:first-child',
    tableEmptyText: 'table.table tbody tr td h2',

    // Pagination
    pagination: 'ul.pagination',
    paginationFirstPage: 'ul.pagination li.page-item a[aria-label="Go to first page"]',
    paginationPrevPage: 'ul.pagination li.page-item a[aria-label="Go to previous page"]',
    paginationPageNumber: 'ul.pagination li.page-item a.c-page-link-number',
    paginationPageNumberActive: 'ul.pagination li.page-item.active a.c-page-link-number',
    paginationNextPage: 'ul.pagination li.page-item a[aria-label="Go to next page"]',
    paginationLastPage: 'ul.pagination li.page-item a[aria-label="Go to last page"]',

    // List
    listGroup: '.list-group',
    listGroupItemAction: '.list-group .list-group-item-action',

    // Modal
    modalContent: '.modal-content',
    modalHeader: '.modal-header',
    modalClose: '.modal-header button.close',
    modalContentImage: '.modal-content .modal-body img',

    // Form
    formulir: 'form',
    formGroup: 'form .form-group',
    formGroupLabel: 'form .form-group label',
    formGroupInput: 'form .form-group input',
    formGroupInputSelect: 'form .form-group select',
    formGroupInputSelectOption: 'form .form-group select option',
    formGroupInputTextarea: 'form .form-group textarea',
    formGroupInputFile: 'form .form-group input[type="file"]',
    formGroupInputPassword: 'form .form-group input[type="password"]',
    // CKEditor
    ckContent: '.ck-content[contenteditable=true]',

    // Classname
    disabled: 'disabled',

    // Inputs
    inputNumber: 'input[type="number"]',
    option: 'option',

}