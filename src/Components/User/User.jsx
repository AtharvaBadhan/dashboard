import React, { useState, useRef } from "react";
import "./User.css";
import SideBar from "../SideBar/SideBar";
import { FaGreaterThan, FaLessThan } from "react-icons/fa6";
import { LuRefreshCcw } from "react-icons/lu";
import { AiOutlineFilePdf } from "react-icons/ai";
import { PiMicrosoftExcelLogoFill } from "react-icons/pi";
import { AiOutlineEdit } from "react-icons/ai";
import { GoTrash } from "react-icons/go";
import jsPDF from "jspdf";
import "jspdf-autotable";


export default function User() {
  // Data for table (initial state)
  const tableRef = useRef();

  const initialData = [
      { id: 1, name: "Vincent Williamson", age: 31, job: "iOS Developer", city: "Sinaai-Waas" },
      { id: 2, name: "Taylor Reyes", age: 22, job: "UI/UX Developer", city: "Baileux" },
      { id: 3, name: "Justin Block", age: 26, job: "Frontend Developer", city: "Overland Park" },
      { id: 4, name: "Sean Guzman", age: 26, job: "Web Designer", city: "Gloucester" },
      { id: 5, name: "Keith Carter", age: 20, job: "Graphic Designer", city: "Oud-Turnhout" },
      { id: 6, name: "Mia Thompson", age: 27, job: "Software Engineer", city: "Austin" },
      { id: 7, name: "Daniel Harris", age: 35, job: "Product Manager", city: "San Francisco" },
      { id: 8, name: "Ella Martin", age: 29, job: "Data Analyst", city: "Seattle" },
      { id: 9, name: "Noah Smith", age: 24, job: "Backend Developer", city: "Chicago" },
      { id: 10, name: "Olivia Davis", age: 32, job: "DevOps Engineer", city: "New York" },
      { id: 11, name: "Liam Johnson", age: 30, job: "Marketing Specialist", city: "Los Angeles" },
      { id: 12, name: "Ava Brown", age: 28, job: "Content Writer", city: "Miami" },
      { id: 13, name: "Sophia Wilson", age: 23, job: "Business Analyst", city: "Phoenix" },
      { id: 14, name: "Isabella Moore", age: 21, job: "Web Developer", city: "Philadelphia" },
      { id: 15, name: "James Taylor", age: 34, job: "Project Coordinator", city: "Dallas" },
      { id: 16, name: "Lucas Anderson", age: 26, job: "System Administrator", city: "San Diego" },
      { id: 17, name: "Mason Thomas", age: 29, job: "Graphic Designer", city: "Houston" },
      { id: 18, name: "Ethan Jackson", age: 27, job: "SEO Specialist", city: "Boston" },
      { id: 19, name: "Harper White", age: 25, job: "Social Media Manager", city: "Atlanta" },
      { id: 20, name: "Ella Harris", age: 30, job: "Data Scientist", city: "Denver" },
      { id: 21, name: "Aiden Clark", age: 33, job: "Software Tester", city: "San Jose" },
      { id: 22, name: "Chloe Lewis", age: 22, job: "Product Designer", city: "Charlotte" },
      { id: 23, name: "Jackson Young", age: 26, job: "Network Engineer", city: "Indianapolis" },
      { id: 24, name: "Grace Hall", age: 31, job: "Web Developer", city: "Columbus" },
      { id: 25, name: "Zoe Allen", age: 29, job: "Copywriter", city: "Fort Worth" },
      { id: 26, name: "Wyatt King", age: 25, job: "Mobile Developer", city: "San Antonio" },
      { id: 27, name: "Amelia Wright", age: 27, job: "UX Designer", city: "San Francisco" },
      { id: 28, name: "Benjamin Scott", age: 28, job: "Information Architect", city: "Seattle" },
      { id: 29, name: "Scarlett Hill", age: 24, job: "HR Specialist", city: "Washington" },
      { id: 30, name: "Henry Carter", age: 34, job: "Full Stack Developer", city: "Las Vegas" },
  ];  
 
  // State to hold table data
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState(initialData);
  const [currentPage, setCurrentPage] = useState(1);
  const entriesPerPage = 10;
 const input = document.getElementById('initialData');
  // Calculate indices for slicing data
  const indexOfLastEntry = currentPage * entriesPerPage;
  const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
  const currentEntries = data.slice(indexOfFirstEntry, indexOfLastEntry);

  // Change page handler
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const filteredData = data.filter((entry) =>
    Object.values(entry).some((value) =>
      String(value).toLowerCase().includes(searchTerm.toLowerCase())
    )
  );


  const totalPages = Math.ceil(data.length / entriesPerPage);

  const handleDelete = (id) => {
   
    const updatedData = data.filter((entry) => entry.id !== id);
    setData(updatedData);

    
    if (currentPage > Math.ceil(updatedData.length / entriesPerPage)) {
      setCurrentPage(Math.ceil(updatedData.length / entriesPerPage));
    }
  };

    const exportPDF = () => {
      const doc = new jsPDF();
      const tableColumn = ["ID", "Name", "Age", "Job Title", "City"];
      const tableRows = [];
  
      initialData.forEach((item) => {
        const data = [item.id, item.name, item.age, item.job, item.city];
        tableRows.push(data);
      });
  
      
      doc.autoTable({
        head: [tableColumn],
        body: tableRows,
      });
  
      doc.save("table.pdf"); 
    };
  
  return (
    <div className="home-container" id="home-container">
      <SideBar />
      <div className="home-middle-container">
        <div className="inner">
          <h4>User's</h4>
        </div>
        <div className="container outer-cont">
          <div className="row col-sm-12">
            <div className="col-md-offset-1 col-md-12">
              <div className="panel">
                <div className="panel-heading">
                  <div className="row">
                    <div className="col col-sm-3 col-xs-12">
                      <h4 className="title">
                        Data <span>List</span>
                      </h4>
                    </div>
                    <div className="col-sm-9 col-xs-12 text-right">
                      <div className="btn_group table-btn">
                        <input type="text" className="form-control" placeholder="Search" value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}/>
                        <button className="btn btn-default" title="Reload">
                          <LuRefreshCcw />
                        </button>
                        <button className="btn btn-default" title="Pdf">
                          <AiOutlineFilePdf onClick={exportPDF} />
                        </button>
                        <button className="btn btn-default" title="Excel">
                          <PiMicrosoftExcelLogoFill />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="panel-body table-responsive">
                  <table className="table" id="initialData">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Full Name</th>
                        <th>Age</th>
                        <th>Job Title</th>
                        <th>City</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentEntries.map((entry, index) => (
                        <tr key={entry.id}>
                          <td>{index + indexOfFirstEntry + 1}</td>
                          <td>{entry.name}</td>
                          <td>{entry.age}</td>
                          <td>{entry.job}</td>
                          <td>{entry.city}</td>
                          <td>
                            <ul className="action-list">
                              <li>
                                <a href="#" data-tip="edit">
                                  <AiOutlineEdit />
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  data-tip="delete"
                                  onClick={() => handleDelete(entry.id)}
                                >
                                  <GoTrash />
                                </a>
                              </li>
                            </ul>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="panel-footer">
                  <div className="row">
                    <div className="col col-sm-6 col-xs-6">
                      Displaing <b>{currentEntries.length}</b> out of <b>{data.length}</b> Entries
                    </div>
                    <div className="col-sm-6 col-xs-6">
                      <ul className="pagination hidden-xs pull-right">
                        <li>
                          <button
                          className="pagination-btn"
                            disabled={currentPage === 1}
                            onClick={() => handlePageChange(currentPage - 1)}
                          >
                            <FaLessThan />
                          </button>
                        </li>
                        {[...Array(totalPages)].map((_, pageNumber) => (
                          <li key={pageNumber} className={currentPage === pageNumber + 1 ? "active" : ""}>
                            <button onClick={() => handlePageChange(pageNumber + 1)} className="pagination-btn">
                              {pageNumber + 1}
                            </button>
                          </li>
                        ))}
                        <li>
                          <button
                          className="pagination-btn"
                            disabled={currentPage === totalPages}
                            onClick={() => handlePageChange(currentPage + 1)}
                          >
                            <FaGreaterThan />
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );}