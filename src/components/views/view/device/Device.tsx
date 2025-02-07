import React from 'react';
import './device.scss';
import {IDevice} from "../../../../types/views";
import test from "../../../../assets/socket.gif"

interface DeviceProps {
    name: IDevice['name'];
    id: IDevice['id'];
    type: IDevice['type'];
}

const Device = ({id,type,name}:DeviceProps) => {


    return (
        <div className="device">
            <img src={test} alt="device icon"/>
            <div className="device__name">{name}</div>
        </div>
    );
}

export default Device;
