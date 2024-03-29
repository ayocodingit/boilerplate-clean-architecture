import { GetMeta, GetRequest } from './requestParams'

describe('test all function in file Request Params', () => {
    const expectRequestParams = expect.objectContaining({
        limit: expect.any(Number),
        page: expect.any(Number),
        offset: expect.any(Number),
    })

    it('test function GetRequest', () => {
        const query: any = {
            limit: 10,
            page: 1,
        }
        const req = GetRequest<{}>(query)
        expect(req).toEqual(expectRequestParams)
    })

    it('test function Paginate with not send object limit and page', () => {
        const query: any = {
            limit: 10,
            page: 1,
        }
        const req = GetRequest<{}>(query)
        expect(req).toEqual(expectRequestParams)
    })
})

describe('test all function in file Paginate', () => {
    const expectMetaPaginate = expect.objectContaining({
        page: expect.any(Number),
        last_page: expect.any(Number),
        limit: expect.any(Number),
        from: expect.any(Number),
        to: expect.any(Number),
        total: expect.any(Number),
    })
    it('test function Meta from pagination', () => {
        const query: any = {
            limit: 10,
            page: 1,
        }
        const paginate = GetRequest<{}>(query)
        const meta = GetMeta(paginate, 10)
        expect(meta).toEqual(expectMetaPaginate)
    })
})
