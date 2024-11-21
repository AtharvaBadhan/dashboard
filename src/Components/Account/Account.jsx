import React, { useState, useEffect } from "react";
import "./Account.css";
import SideBar from "../SideBar/SideBar";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { BiLogoHtml5 } from "react-icons/bi";
import { useSelector } from "react-redux";

export default function Account() {
  const [products, setProducts] = useState([
    { Description: "Health Insurance Deduction", Amount: '$200' },
    { Description: "Retirement Contribution", Amount: '$300' },
    { Description: "Income Tax Deduction", Amount: '$500' },
    { Description: "Loan Repayment Deduction", Amount: '$150' },
    { Description: "Other Miscellaneous Deductions", Amount: '$100' },
    { Description: "Transportation Deduction", Amount: '$80' },
    { Description: "Life Insurance Deduction", Amount: '$250' },
]);
const demoState= useSelector(state => state.DemoState);
useEffect(() => {
  const add = document.getElementById("home-container");
  if(demoState.navbar) {
    add.classList.add("home-open")
  }else {
    add.classList.remove("home-open")
  }
},); 
const [payment, setPayment] = useState([
  {
    "Pay Cycle": "Monthly",
    "Payment Date": "2024-10-01",
    "Due Date": "2024-10-05",
    "Paid": "$1500"
  },
  {
    "Pay Cycle": "Monthly",
    "Payment Date": "2024-10-01",
    "Due Date": "2024-10-05",
    "Paid": "$1500"
  },
  {
    "Pay Cycle": "Monthly",
    "Payment Date": "2024-10-01",
    "Due Date": "2024-10-05",
    "Paid": "$1500"
  },
])
const lastsalary = [
  { LatestPay: 'Previous Pay: $18,022' },
  { LatestPay: 'Total Pay: $22,250' },
  { LatestPay: 'Pay Day: 01-10-2024'},
  { LatestPay: 'Next Pay Day: 01-11-2024'},
  { LatestPay: 'Deductions due to Excess Holiday: $50'},
  { LatestPay: 'Tax Deductions: $2,000'},
  { LatestPay: 'Incremented form Last Pay: 19%'},
  { LatestPay: 'Amount Transfered to Bank: $20,000'},
]
  return (
    <div className="home-container" id="home-container">
      <SideBar />
      <div className="home-middle-container">
        <div className="inner">
          <h4>Salary Account</h4>
        </div>
        <div className="payroll-details">
          <div>
            <div className="payroll-date">
              <p>Payroll Date: </p>
              <p>1st January - 31st January</p>
            </div>
            <div className="payroll-amount">
              <div className="payroll-cost">
                <h3>$22050</h3>
                <p>Payroll Cost</p>
              </div>
              <div className="payroll-cost">
                <h3>$20050</h3>
                <p>Net Pay</p>
              </div>
            </div>
          </div>
          <div className="pay-day">
            <p className="payroll-pay-day">Pay Day</p>
            <p className="payroll-day">31</p>
            <p>Jan 2022</p>
            <p>500 Employee</p>
          </div>
          <div className="payroll-tax">
            <div>
              <p>Tax And Deduction</p>
            </div>
            <div className="payroll-taxation">
              <div>
                <p>Taxes: </p>
                <p>Pre-Tax Deduction: </p>
                <p>Post-Tax Deduction: </p>
              </div>
              <div>
                <p>$2000</p>
                <p>$22050</p>
                <p>$20050</p>
              </div>
            </div>
          </div>
        </div>
        <div className="salary-details">  
             <div className="previous-pay-table col-md-6">
        <div className="card col-md-12">      
          <div className="card-body p-4">
            <h5 className="card-title mb-3">Previous Salary</h5>           
              <DataTable value={lastsalary} stripedRows tableStyle={{ maxWidth: '50rem' }}>
    <Column field="LatestPay" header="Latest Pay"></Column>
</DataTable>         
          </div>
        </div>
        </div>
        <div className="card col-md-6 p-4">
        <h5 className="mb-3">Salary Deduction</h5>
          <DataTable className="data-table" value={products}>
            <Column field="Description" header="Description"></Column>
            <Column field="Amount" header="Amount"></Column>
          </DataTable>
        </div>
        </div>
        <div className="card p-4">
        <h5>Payment Information</h5>
            <DataTable className="payment-table table-bordered" value={payment} stripedRows tableStyle={{ minWidth: '50rem' }}>
                <Column field="Pay Cycle" header="Pay Cycle"></Column>
                <Column field="Payment Date" header="Payment Date"></Column>
                <Column field="Due Date" header="Due Date"></Column>
                <Column field="Paid" header="Paid"></Column>
            </DataTable>
        </div>
      </div>
    </div>
  );
}
