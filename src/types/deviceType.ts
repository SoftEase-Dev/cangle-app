export const device = {
    data: {
        attributes: {
            status: false,
            forward: false,
            backward: false,
            right: false,
            left: false,
            up: false,
            down: false
        }
    }
}

export interface dev {
    data: {
        attributes: {
            status: boolean,
            forward: boolean,
            backward: boolean,
            right: boolean,
            left: boolean,
            up: boolean,
            down: boolean
        }
    }
}