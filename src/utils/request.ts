let BASE_REST_PATH = '';

interface RequestOptions<Body> {
    accessToken?: string;
    backendVersion?: string;
    body?: Body;
    contentType?: string | null;
    method: 'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'CONNECT' | 'OPTIONS' | 'TRACE' | 'PATCH';
    route?: string;
    url?: string;
}

interface Meta {
    [key: string]: unknown;

    body?: BodyInit | null;
    method: string;
    url: string;
}

export interface RequestResult<Data = unknown> {
    [key: string]: unknown;

    data?: Data;
    error?: Error;
    meta: Meta;
    requestDuration?: number;
    retryAfter?: number;
    status?: number;
}

export const request = async <Data = null, Body = null>({
                                                            accessToken,
                                                            backendVersion,
                                                            body,
                                                            contentType = 'application/json',
                                                            method,
                                                            route = '',
                                                            url = `${BASE_REST_PATH}${typeof backendVersion === 'string' ? backendVersion : ''}`,
                                                        }: RequestOptions<Body>): Promise<RequestResult<Data>> => {
    const headers: HeadersInit = {};

    if (typeof accessToken === 'string') {
        headers.Authorization = `bearer ${accessToken}`;
    }

    const requestData: RequestInit = {
        credentials: 'same-origin',
        headers,
        method,
    };

    if (method !== 'GET') {
        if (typeof contentType === 'string') {
            headers['Content-Type'] = contentType;
        }

        if (body) {
            requestData.body = body instanceof FormData ? body : JSON.stringify(body);
        }
    }

    const result: RequestResult<Data> = {
        meta: {
            method,
            url: url + route,
            body: requestData.body,
        },
    };

    const requestStart: number = Date.now();

    try {
        const response: Response = await fetch(url + route, requestData);

        result.requestDuration = Date.now() - requestStart;
        result.status = response.status;

        try {
            const dataString = await response.text();

            if (dataString && dataString.length > 0) {
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                result.data = JSON.parse(dataString);
            }
        } catch (error) {
            if (error) {
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                result.error = error as Error;
            }
        }

        if (response.status === 429) {
            const retryAfterHeaderValue = response.headers.get('retry-after');

            if (retryAfterHeaderValue !== null) {
                let parsedRetryAfterValue;

                try {
                    parsedRetryAfterValue = parseInt(retryAfterHeaderValue, 10);

                    if (
                        typeof parsedRetryAfterValue === 'number' &&
                        !Number.isNaN(parsedRetryAfterValue)
                    ) {
                        result.retryAfter = parsedRetryAfterValue;
                    }
                } catch (error) {
                    if (error) {
                        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                        result.error = error as Error;
                    }
                }
            }
        }
    } catch (error) {
        result.requestDuration = Date.now() - requestStart;

        if (error) {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            result.error = error as Error;
        }
    }

    return result;
};
