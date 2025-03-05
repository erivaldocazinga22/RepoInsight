export interface HttpResponse<T> {
    status: number;
    message: string;
    data?: T
}

export interface Pagination {
    path: string
    previousPage: number | false
    currentPage: number
    nextPage: number
    lastPage: number
    total: number
}

export interface HttpResponseWithPagination<T> {
    status: number;
    message: string;
    data: {
        data: T[]
        pagination: Pagination
    }
}


