import { Card, Col, Row, Statistic } from 'antd';
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { Chart } from "react-google-charts";

export const data = [
    ["Horário", "Min", "Max", "valor"],
    ["01:00", 250, 650, 430],
    ["02:00", 250, 650, 420],
    ["00:00", 250, 650, 405],
    ["03:00", 250, 650, 390],
    ["04:00", 250, 650, 370],
    ["05:00", 250, 650, 350],
    ["06:00", 250, 650, 300],
    ["07:00", 250, 650, 660],
    ["08:00", 250, 650, 650],
    ["09:00", 250, 650, 645],
    ["10:00", 250, 650, 635],
    ["11:00", 250, 650, 620],
    ["12:00", 250, 650, 610],
    ["13:00", 250, 650, 600],
    ["14:00", 250, 650, 590],
    ["15:00", 250, 650, 570],
    ["16:00", 250, 650, 550],
    ["17:00", 250, 650, 500],
    ["18:00", 250, 650, 470],
    ["19:00", 250, 650, 640],
    ["20:00", 250, 650, 630],
    ["21:00", 250, 650, 620],
    ["22:00", 250, 650, 610],
    ["23:00", 250, 650, 615],
  ];
  
  export const options = {
    title: "Umidade do Solo / Cultura - ALFACE",
    curveType: "function",
    legend: { position: "bottom" },
  };

const Monitoramento= () => (
    <>
        <Row gutter={16}>    
        <Col span={8}>
        <Card title="Alta Umidade" bordered={false}>
        <Statistic
          //title="Active"
          value={650}
          precision={2}
          valueStyle={{ color: '#3f8600' }}
          prefix={<ArrowUpOutlined />}
          //suffix="%"
        />
            
        </Card>
        </Col>
        <Col span={8}>
        <Card title="Umidade Ideal" bordered={false}>
        <Statistic
          //title="Active"
          value={450}
          precision={2}
          valueStyle={{ color: '#000' }}
          //prefix={<ArrowUpOutlined />}
          //suffix="%"
        />            
        </Card>
        </Col>
        <Col span={8}>
        <Card title="Baixa Umidade" bordered={false}>
        <Statistic
          //title="Idle"
          value={250}
          precision={2}
          valueStyle={{ color: '#cf1322' }}
          prefix={<ArrowDownOutlined />}
          //suffix="%"
        />
        </Card>
        </Col>
    </Row>
    <Chart
      chartType="LineChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
    </>
  
);

export default Monitoramento

