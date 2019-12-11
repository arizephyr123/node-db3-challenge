-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.

select p.ProductName
, c.CategoryName
from product as p
left join category as c on p.Id = c.Id;

-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.

select o.id as OrderId
, s.companyName as ShippingCompany
, o.OrderDate
from [order] as o
join shipper as s on o.ShipVia = s.Id
where o.OrderDate < "2012-08-09";

-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.

select p.ProductName
, od.quantity
from product as p
join orderDetail as od on p.Id = od.ProductId
where od.OrderId = 10251;

-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.

select o.Id as OrderId
, c.CompanyName
, e.LastName as Employee
from [order]as o
join customer as c on o.CustomerId = c.Id
join employee as e on o.EmployeeId = e.Id;