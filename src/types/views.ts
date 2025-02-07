export enum DeviceType {
    LIGHT,
    SWITCH,
    SOCKET
}

export interface IDevice {
    name: string;
    id: string;
    type: DeviceType
}

export interface IView {
    name: string;
    devices: IDevice[];
}

export interface IViews {
    name: string;
    id: string;
    views: IView[];
}
