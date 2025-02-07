import React, {useMemo} from 'react';
import './view.scss';
import {IView} from "../../../types/views";
import Device from "./device/Device";

interface ViewProps {
    devices: IView['devices'];
}

const View = ({devices}:ViewProps) => {
    const content = useMemo(()=>{
        return devices.map(({name,id,type})=>{
            return <Device key={`device__${id}`} name={name} id={id} type={type}/>
        })
    },[devices])

    return (
        <div className="view">
            {content}
        </div>
    );
}

export default View;
