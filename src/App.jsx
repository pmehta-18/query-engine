import { useState } from 'react'
import { Input, Table, Typography } from 'antd';
import {data as customersData} from './data/customers';
import {data as ordersData} from './data/orders';
import {data as productsData} from './data/products';
import './App.css'

const { Search } = Input;
const { Paragraph } = Typography;

const dataMap = {
  "select_*_from_products": productsData,
  "select_*_from_customers": customersData,
  "select_*_from_orders": ordersData,
};

function App() {
  const [data, setData] = useState(null);
  const [query, setQuery] = useState('');

  const onSearch = (value) => {
    const queryText = value.trim().toLowerCase().replace(/\s/gm, '_');
    if (dataMap[queryText] !== query) {
      setQuery(dataMap[queryText]);
      if (dataMap[queryText]) {
        setData(dataMap[queryText]);
      } else {
        setData(ordersData);
      }
    }
  }

  return (
    <>
      <h2 className='title'>{`${(data && data.title) || ''} Analytics`}</h2>
      <Search placeholder="Enter your query..." onSearch={onSearch} enterButton="Run" />
      {
        data && (
          <>
            <Paragraph className='record-count'>{`${data.raw_data.length} records found`}</Paragraph>
            <Table 
              virtual
              bordered
              columns={data.columns}
              dataSource={data.raw_data}
              pagination={false}
              rowKey={data.rowIndex}
              scroll={{
                x: window.innerWidth > 1280 ? (1280 - 64) : (window.innerWidth - 64), y: 400
              }} 
            />
          </>
        )
      }
    </>
  )
}

export default App
