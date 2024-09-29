import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useNavigate } from "@remix-run/react";

import "~/styles/styles.css";
import "~/styles/dashboard.css";
import "primereact/resources/themes/lara-light-cyan/theme.css";

import Header from "../components/header";
import Sidebar from "../components/sidebar";
import Spinner from "../components/spinner";

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { getCookie } from '~/utils/common';

import moment from 'moment';

const projects = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const [projectData, setProjectData] = useState<any>([])
    const [isLoading, setIsLoading] = useState(true)

    const navigate = useNavigate()

    useLayoutEffect(() => {

        fetchProject()

        // setProjectData([
        //     {
        //         "id": 1,
        //         "title": "Project 1",
        //         "owner": "Ankit Meshram",
        //         "tags": ["Tag1", "Tag2"],
        //         "privacy": "public",
        //         "start_date": "29-12-2023",
        //         "end_date": "",
        //         "updated_at": "23-04-2024",
        //         "created_at": "29-12-2023",
        //         "actions": [
        //             `<button className="btn btn-sm btn-primary">Edit</button>`,
        //             `<button className="btn btn-sm btn-danger">Delete</button>`
        //         ]
        //     },
        //     {
        //         "id": 2,
        //         "title": "Project 2",
        //         "owner": "Ankit Meshram",
        //         "tags": ["Tag2", "Tag2"],
        //         "privacy": "public",
        //         "start_date": "29-22-2023",
        //         "end_date": "",
        //         "updated_at": "23-04-2024",
        //         "created_at": "29-22-2023",
        //         "actions": [
        //             `<button className="btn btn-sm btn-primary">Edit</button>`,
        //             `<button className="btn btn-sm btn-danger">Delete</button>`
        //         ]
        //     },
        //     {
        //         "id": 3,
        //         "title": "Project 3",
        //         "owner": "Ankit Meshram",
        //         "tags": ["Tag3", "Tag2"],
        //         "privacy": "public",
        //         "start_date": "29-32-2023",
        //         "end_date": "",
        //         "updated_at": "23-04-2024",
        //         "created_at": "29-32-2023",
        //         "actions": [
        //             `<button className="btn btn-sm btn-primary">Edit</button>`,
        //             `<button className="btn btn-sm btn-danger">Delete</button>`
        //         ]
        //     },
        //     {
        //         "id": 4,
        //         "title": "Project 4",
        //         "owner": "Ankit Meshram",
        //         "tags": ["Tag4", "Tag2"],
        //         "privacy": "public",
        //         "start_date": "29-42-2023",
        //         "end_date": "",
        //         "updated_at": "23-04-2024",
        //         "created_at": "29-42-2023",
        //         "actions": [
        //             `<button className="btn btn-sm btn-primary">Edit</button>`,
        //             `<button className="btn btn-sm btn-danger">Delete</button>`
        //         ]
        //     },
        //     {
        //         "id": 5,
        //         "title": "Project 5",
        //         "owner": "Ankit Meshram",
        //         "tags": ["Tag5", "Tag2"],
        //         "privacy": "public",
        //         "start_date": "29-52-2023",
        //         "end_date": "",
        //         "updated_at": "23-05-2025",
        //         "created_at": "29-52-2023",
        //         "actions": [
        //             `<button className="btn btn-sm btn-primary">Edit</button>`,
        //             `<button className="btn btn-sm btn-danger">Delete</button>`
        //         ]
        //     },
        //     {
        //         "id": 6,
        //         "title": "Project 6",
        //         "owner": "Ankit Meshram",
        //         "tags": ["Tag6", "Tag2"],
        //         "privacy": "public",
        //         "start_date": "29-62-2023",
        //         "end_date": "",
        //         "updated_at": "23-06-2026",
        //         "created_at": "29-62-2023",
        //         "actions": [
        //             `<button className="btn btn-sm btn-primary">Edit</button>`,
        //             `<button className="btn btn-sm btn-danger">Delete</button>`
        //         ]
        //     },
        //     {
        //         "id": 7,
        //         "title": "Project 7",
        //         "owner": "Ankit Meshram",
        //         "tags": ["Tag7", "Tag2"],
        //         "privacy": "public",
        //         "start_date": "29-72-2023",
        //         "end_date": "",
        //         "updated_at": "23-07-2027",
        //         "created_at": "29-72-2023",
        //         "actions": [
        //             `<button className="btn btn-sm btn-primary">Edit</button>`,
        //             `<button className="btn btn-sm btn-danger">Delete</button>`
        //         ]
        //     },
        //     {
        //         "id": 8,
        //         "title": "Project 8",
        //         "owner": "Ankit Meshram",
        //         "tags": ["Tag8", "Tag2"],
        //         "privacy": "public",
        //         "start_date": "29-82-2023",
        //         "end_date": "",
        //         "updated_at": "23-08-2028",
        //         "created_at": "29-82-2023",
        //         "actions": [
        //             `<button className="btn btn-sm btn-primary">Edit</button>`,
        //             `<button className="btn btn-sm btn-danger">Delete</button>`
        //         ]
        //     },
        //     {
        //         "id": 9,
        //         "title": "Project 9",
        //         "owner": "Ankit Meshram",
        //         "tags": ["Tag9", "Tag2"],
        //         "privacy": "public",
        //         "start_date": "29-92-2023",
        //         "end_date": "",
        //         "updated_at": "23-09-2029",
        //         "created_at": "29-92-2023",
        //         "actions": [
        //             `<button className="btn btn-sm btn-primary">Edit</button>`,
        //             `<button className="btn btn-sm btn-danger">Delete</button>`
        //         ]
        //     },
        //     {
        //         "id": 10,
        //         "title": "Project 10",
        //         "owner": "Ankit Meshram",
        //         "tags": ["Tag10", "Tag2"],
        //         "privacy": "public",
        //         "start_date": "29-102-2023",
        //         "end_date": "",
        //         "updated_at": "23-010-20210",
        //         "created_at": "29-102-2023",
        //         "actions": [
        //             `<button className="btn btn-sm btn-primary">Edit</button>`,
        //             `<button className="btn btn-sm btn-danger">Delete</button>`
        //         ]
        //     },
        //     {
        //         "id": 11,
        //         "title": "Project 11",
        //         "owner": "Ankit Meshram",
        //         "tags": ["Tag11", "Tag2"],
        //         "privacy": "public",
        //         "start_date": "29-112-2023",
        //         "end_date": "",
        //         "updated_at": "23-011-20211",
        //         "created_at": "29-112-2023",
        //         "actions": [
        //             `<button className="btn btn-sm btn-primary">Edit</button>`,
        //             `<button className="btn btn-sm btn-danger">Delete</button>`
        //         ]
        //     },
        //     {
        //         "id": 12,
        //         "title": "Project 12",
        //         "owner": "Ankit Meshram",
        //         "tags": ["Tag12", "Tag2"],
        //         "privacy": "public",
        //         "start_date": "29-122-2023",
        //         "end_date": "",
        //         "updated_at": "23-012-20212",
        //         "created_at": "29-122-2023",
        //         "actions": [
        //             `<button className="btn btn-sm btn-primary">Edit</button>`,
        //             `<button className="btn btn-sm btn-danger">Delete</button>`
        //         ]
        //     },

        // ])
        setIsLoading(false)
        ProjectTableLayout()
    }, [])

    const fetchProject = async () => {
        try {
            setIsLoading(true)
            const token = await getCookie("ud").then(res => res)
            const data: any = await fetch("http://localhost:4000/api/project/all-project", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "x-auth-token": `${token}`,
                },
                body: JSON.stringify({}),
            }).then(res => res.json()
            )

            if (data?.success) {
                console.log(data)
                // setProjectData(data?.projects)
                setProjectData(() => {
                    return data?.projects.map((project: any) => {
                        return {
                            ...project,
                            startDate: project.startDate ? moment(project.startDate).format("DD-MM-YYYY HH:mm") : null,
                            endDate: project.endDate ? moment(project.endDate).format("DD-MM-YYYY HH:mm") : null,
                            updatedAt: project.updatedAt ? moment(project.updatedAt).format("DD-MM-YYYY HH:mm") : null,
                            createdAt: project.createdAt ? moment(project.createdAt).format("DD-MM-YYYY HH:mm") : null,
                        }
                    })
                })
            }

            setIsLoading(false)
        } catch (error) {
            console.log(error)
            setIsLoading(false)
        }
    }

    // Function to render Sr No.
    const srNoTemplate = (rowData: any, options: any) => {
        return options.rowIndex + 1;  // Adding 1 to start Sr. No from 1
    };

    const ProjectTableLayout = () => {
        return (
            <DataTable value={projectData} sortMode="multiple" tableStyle={{ minWidth: '100%' }} paginator showGridlines stripedRows rows={10} rowsPerPageOptions={[5, 10, 25, 50]}>
                {/* <Column header="Sr No" body={srNoTemplate} style={{ width: '100px' }}  /> */}
                {/* <Column field="_id" sortable header="Id"></Column> */}
                <Column field="projectName" sortable header="Project Title" style={{ width: '300px' }} ></Column>
                {/* <Column field="createdBy" sortable header="Owner"></Column> */}
                {/* <Column field="tags" sortable header="Tags"></Column> */}
                {/* <Column field="privacy" sortable header="Privacy"></Column> */}
                <Column field="startDate" sortable header="Start Date"></Column>
                <Column field="endDate" sortable header="End Date"></Column>
                <Column field="updatedAt" sortable header="Updated At"></Column>
                <Column field="createdAt" sortable header="Created At"></Column>
            </DataTable>
        )
    }

    return (
        <>
            <Spinner display={isLoading} />
            <div className="bg-back h-100vh">
                <Header setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen} />
                <div className="main">
                    <Sidebar sidebarOpen={sidebarOpen} />
                    <div className="main-body">
                        <div className="box shadow-sm">

                            <button className='btn btn-black mb-2' onClick={() => navigate("/add-project")}>New Project</button>

                            {/* <ProjectTableLayout /> */}
                            <div className=" table-main">

                                <div className="table-row thead">
                                    <div className="table-col table-index">Sr. No.</div>
                                    <div className="table-col table-title">Project Name</div>
                                    <div className="col table-col table-date">Status</div>
                                    <div className="col table-col table-date">Tags</div>
                                    <div className="col table-col table-date">Start Date</div>
                                    <div className="col table-col table-date">End Date</div>
                                    <div className="col table-col table-date">Updated At</div>
                                    <div className="col table-col table-date">Created At</div>
                                    <div className="col table-action">Action</div>
                                </div>

                                {
                                    projectData && projectData.length > 0 && projectData.map((project: any, i: number) => {
                                        return <div className="table-row">
                                            <div className="table-col table-index">{i + 1}</div>
                                            <div className="table-col table-title">{project.projectName}</div>
                                            <div className="col table-col table-date">{project.status}</div>
                                            <div className="col table-col table-date">{project.tags}</div>
                                            <div className="col table-col table-date">{project.startDate}</div>
                                            <div className="col table-col table-date">{project.endDate}</div>
                                            <div className="col table-col table-date">{project.updatedAt}</div>
                                            <div className="col table-col table-date">{project.createdAt}</div>
                                            <div className="col table-action">
                                                <button className="col btn btn-black me-1">Update</button><button className="col btn btn-danger">Delete</button>
                                            </div>
                                        </div>
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default projects;