
export type IResponseData<T> = {
    err: '';
    data: T;
}
export interface IResponseError {
    err: string;
    data: null;
}
export interface ISearchCondition {
    page?: number;
    limit?: number;
    key?: string;
}
export interface IResponsePageData<T> {
    data: T[];
    err:'';
    total: number;
}
export enum SwitchType {
    isHot = 'isHot',
    isComing = 'isComing',
    isClassic = 'isClassic'
}



