/* eslint-disable @typescript-eslint/no-explicit-any */
export interface ITable{
    title: string;
    dataTable: any[];
    columns: IColumns[];
}

export interface IColumns {
    header: string;
    column: string;
    type: string;
    icon?: string;
    color?: string;
    action?: string;
    filterOption: boolean;
}