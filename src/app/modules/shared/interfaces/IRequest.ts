export interface IRequest{
    id?: string,
    productId: string,
    userName: string,
    area: string,
    duration: string,
    requestDate: Date,
    status: 'pendiente' | 'aceptada' | 'rechazada',
}