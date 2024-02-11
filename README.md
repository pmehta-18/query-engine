# Query Engine [(Demo)](https://65c8e5970d7890324fd59907--capable-treacle-9f7356.netlify.app/)

This app uses React + Vite template for boilerplate code.

## Dependencies Used
1. React v18 (out of the box with template)
3. Eslint - provided out of the box with template
2. [antd](https://ant.design/docs/react/introduce) - used for base components like Input, Table and Typography

## Usage
1. Use any of the below queries to view different datasets:  
a. `select * from products` - Products dataset in tabular form  
b. `select * from orders` - Orders dataset in tabular form  
c. `select * from customers` - Customers dataset in tabular form

2. For viewing large number of records, use order dataset or add any random text within query editor. We have used virtualisation to ensure loading thousands of records without pagination does not create performance bottleneck

3. If user enters any queries except above ones, the default fallback dataset used will be orders dataset

4. The data is stored within `/src/data` with respective files which is loaded at the load time of component (only once) and then used as per requirement

5. We have used center layout for the application to ensure views are atleast aligned across different screen sizes primarily