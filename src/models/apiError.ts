export interface INotFoundErrorApi {
    status: number;
    data: {
        detail: string;
    }
}
export interface IErrorApi {
    status: number;
    data: {
        message: string;
    };
}