import React, { useState, useEffect } from "react";
import SideBar from "../SideBar/SideBar";
import "./Attendance.css";
import "react-circular-progressbar/dist/styles.css";
import { useSelector } from "react-redux";
import { Button } from 'primereact/button';
import { Calendar } from 'primereact/calendar';
import { FaGreaterThan } from "react-icons/fa6";
import { FcLeave } from "react-icons/fc";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

export default function Attendance() {
  const percentage = 16;
  const demoState = useSelector((state) => state.DemoState);
  useEffect(() => {
    const add = document.getElementById("home-container");
    if (demoState.navbar) {
      add.classList.add("home-open");
    } else {
      add.classList.remove("home-open");
    }
    console.log(demoState);
  }, [demoState]);
  const [date, setDate] = useState(null);

  const attendanceData = [
    { Date: '2024-10-01', 'In-time': '09:00 AM', 'Out-Time': '06:00 PM', 'Work Hours': '9', Status: 'Present' },
    { Date: '2024-10-02', 'In-time': '09:30 AM', 'Out-Time': '06:00 PM', 'Work Hours': '8.5', Status: 'Present' },
    { Date: '2024-10-03', 'In-time': '09:00 AM', 'Out-Time': '05:30 PM', 'Work Hours': '8.5', Status: 'Present' },
    { Date: '2024-10-04', 'In-time': '09:00 AM', 'Out-Time': '06:00 PM', 'Work Hours': '9', Status: 'Leave' },
    { Date: '2024-10-05', 'In-time': '09:15 AM', 'Out-Time': '06:00 PM', 'Work Hours': '8.75', Status: 'Late' },
    { Date: '2024-10-06', 'In-time': '09:00 AM', 'Out-Time': '06:00 PM', 'Work Hours': '9', Status: 'Absent' },
    { Date: '2024-10-07', 'In-time': '09:00 AM', 'Out-Time': '06:00 PM', 'Work Hours': '9', Status: 'Present' },
    { Date: '2024-10-08', 'In-time': '09:00 AM', 'Out-Time': '06:00 PM', 'Work Hours': '9', Status: 'Present' },
    { Date: '2024-10-09', 'In-time': '09:00 AM', 'Out-Time': '06:00 PM', 'Work Hours': '9', Status: 'Leave' },
    { Date: '2024-10-10', 'In-time': '09:00 AM', 'Out-Time': '06:00 PM', 'Work Hours': '9', Status: 'Present' },
    { Date: '2024-10-11', 'In-time': '09:00 AM', 'Out-Time': '06:00 PM', 'Work Hours': '9', Status: 'Absent' },
    { Date: '2024-10-12', 'In-time': '09:00 AM', 'Out-Time': '06:00 PM', 'Work Hours': '9', Status: 'Present' },
    { Date: '2024-10-13', 'In-time': '09:10 AM', 'Out-Time': '06:00 PM', 'Work Hours': '8.83', Status: 'Late' },
    { Date: '2024-10-14', 'In-time': '09:00 AM', 'Out-Time': '06:00 PM', 'Work Hours': '9', Status: 'Leave' },
    { Date: '2024-10-15', 'In-time': '09:05 AM', 'Out-Time': '06:00 PM', 'Work Hours': '8.92', Status: 'Late' },
    { Date: '2024-10-16', 'In-time': '09:00 AM', 'Out-Time': '06:00 PM', 'Work Hours': '9', Status: 'Present' },
    { Date: '2024-10-17', 'In-time': '09:00 AM', 'Out-Time': '06:00 PM', 'Work Hours': '9', Status: 'Present' },
    { Date: '2024-10-18', 'In-time': '09:00 AM', 'Out-Time': '06:00 PM', 'Work Hours': '9', Status: 'Absent' },
    { Date: '2024-10-19', 'In-time': '09:00 AM', 'Out-Time': '06:00 PM', 'Work Hours': '9', Status: 'Present' },
    { Date: '2024-10-20', 'In-time': '09:00 AM', 'Out-Time': '06:00 PM', 'Work Hours': '9', Status: 'Leave' },
    { Date: '2024-10-21', 'In-time': '09:30 AM', 'Out-Time': '06:00 PM', 'Work Hours': '8.5', Status: 'Late' },
];

  

  return (
    <div className="home-container" id="home-container">
      <SideBar />
      <div className="home-middle-container">
        <div className="inner">
          <h4>Attendance</h4>
          <Button label="Apply Leave"  severity="success" className="leave-button"> 
          <FcLeave className="leave-icon"/>
          </Button>
        </div>
        <div className="attendance-cards">   
            <div className="card p-4 col-md-3 ">
              <div className="attendance">
                <div className="attendance-content">
                  <h2>Inbox</h2>
                  <h4>Pending Applications</h4>
                </div>
                <div className="attendance-data-1">
                  <h2>15</h2>
                </div>
              </div>
            </div>       
            <div className="card p-4 col-md-3 ">
              <div className="attendance">
                <div className="attendance-content">
                  <h2>Late</h2>
                  <h4>In past 30 days</h4>
                </div>
                <div className="attendance-data-2">
                  <h2>15</h2>
                </div>
              </div>
            
          </div>         
            <div className="card p-4 col-md-3 ">
              <div className="attendance">
                <div className="attendance-content">
                  <h2>Absent Days</h2>
                  <h4>Month: October</h4>
                </div>
                <div className="attendance-data-3">
                  <h2>15</h2>
                </div>
              </div>
            
          </div>         
            <div className="card p-4 col-md-3 ">
              <div className="attendance">
                <div className="attendance-content">
                  <h2>Pending Leave</h2>
                  <h4>Pending Applications</h4>
                </div>
                <div className="attendance-data-4">
                  <h2>15</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="table-container-message">
          <div className="card calander-attendance col-md-8">
            <h3>Your Attendance</h3>
          <DataTable value={attendanceData} removableSort scrollable 
              scrollHeight="480px" tableStyle={{ minWidth: '50rem' }}>
                <Column field="Date" header="Date" sortable style={{ width: '20%' }}></Column>
                <Column field="In-time" header="In-time" sortable style={{ width: '20%' }}></Column>
                <Column field="Out-Time" header="Out-Time" sortable style={{ width: '20%' }}></Column>
                <Column field="Work Hours" header="Work Hours" sortable style={{ width: '20%' }}></Column>
                <Column field="Status" header="Status" sortable style={{ width: '20%' }}></Column>
            </DataTable>          
          </div>
          <div className="pad col-md-4">
          <div className='card messeges-attendance '>
            <div className="button-section">
            <Button label="Holidays" text raised className="button-days"/>
            <Button label="Recent Leave" severity="success" text raised className="button-days"/>
            {/* <FaGreaterThan className="greater-than"/> */}
            </div>
            <div>
              <div className="date-section">
              <p>  2nd October - Gandhi Jayanti </p>
              <Button label="Holiday" severity="Holiday" text raised className="button-hoilday"/>
              </div>
              <div className="date-section">
              <p>  31st October - Diwali </p>
              <Button label="Holiday" severity="Holiday" text raised className="button-hoilday"/>
              </div>
              <div className="date-section">
              <p>  1st November - Lakshmi Pujan </p>
              <Button label="Holiday" severity="Holiday" text raised className="button-hoilday"/>
              </div>
              <div className="date-section">
              <p>  20th November - Election Day </p>
              <Button label="Holiday" severity="Holiday" text raised className="button-hoilday"/>
              </div>
              <div className="date-section">
              <p>  23rd November - Vote Counting Day </p>
              <Button label="Half-Day" severity="Holiday" text raised className="button-hoilday"/>
              </div>
            </div>
          </div>
          </div>
          </div>
        </div>    
      </div>
    
  );
}
