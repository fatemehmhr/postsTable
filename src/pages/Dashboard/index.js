import React, { PureComponent } from "react";
import { Typography } from 'antd';
import Chart1 from "../../components/Chart1/index";



const { Title } = Typography;

export default function Dashboard(){
    return(
        <div>
            
            <Title level={2} style={{textAlign:'left'}}>Dashboard</Title>
            <Chart1 />
            
            
        </div>
    )
}