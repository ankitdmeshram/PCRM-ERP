import React, { useEffect, useLayoutEffect, useState } from 'react'

import "~/styles/styles.css";
import "~/styles/dashboard.css";
import "primereact/resources/themes/lara-light-cyan/theme.css";

import Header from "../components/header";
import Sidebar from "../components/sidebar";
import Spinner from "../components/spinner";

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

const projects = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const [projectData, setProjectData] = useState<any>([])
    const [isLoading, setIsLoading] = useState(true)
    useLayoutEffect(() => {
        setProjectData([
            {
                "id": 1,
                "title": "Project 1",
                "owner": "Ankit Meshram",
                "tags": ["Tag1", "Tag2"],
                "privacy": "public",
                "start_date": "29-12-2023",
                "end_date": "",
                "updated_at": "23-04-2024",
                "created_at": "29-12-2023",
                "actions": [
                    `<button className="btn btn-sm btn-primary">Edit</button>`,
                    `<button className="btn btn-sm btn-danger">Delete</button>`
                ]
            },
            {
                "id": 2,
                "title": "Project 2",
                "owner": "Ankit Meshram",
                "tags": ["Tag2", "Tag2"],
                "privacy": "public",
                "start_date": "29-22-2023",
                "end_date": "",
                "updated_at": "23-04-2024",
                "created_at": "29-22-2023",
                "actions": [
                    `<button className="btn btn-sm btn-primary">Edit</button>`,
                    `<button className="btn btn-sm btn-danger">Delete</button>`
                ]
            },
            {
                "id": 3,
                "title": "Project 3",
                "owner": "Ankit Meshram",
                "tags": ["Tag3", "Tag2"],
                "privacy": "public",
                "start_date": "29-32-2023",
                "end_date": "",
                "updated_at": "23-04-2024",
                "created_at": "29-32-2023",
                "actions": [
                    `<button className="btn btn-sm btn-primary">Edit</button>`,
                    `<button className="btn btn-sm btn-danger">Delete</button>`
                ]
            },
            {
                "id": 4,
                "title": "Project 4",
                "owner": "Ankit Meshram",
                "tags": ["Tag4", "Tag2"],
                "privacy": "public",
                "start_date": "29-42-2023",
                "end_date": "",
                "updated_at": "23-04-2024",
                "created_at": "29-42-2023",
                "actions": [
                    `<button className="btn btn-sm btn-primary">Edit</button>`,
                    `<button className="btn btn-sm btn-danger">Delete</button>`
                ]
            },
            {
                "id": 5,
                "title": "Project 5",
                "owner": "Ankit Meshram",
                "tags": ["Tag5", "Tag2"],
                "privacy": "public",
                "start_date": "29-52-2023",
                "end_date": "",
                "updated_at": "23-05-2025",
                "created_at": "29-52-2023",
                "actions": [
                    `<button className="btn btn-sm btn-primary">Edit</button>`,
                    `<button className="btn btn-sm btn-danger">Delete</button>`
                ]
            },
            {
                "id": 6,
                "title": "Project 6",
                "owner": "Ankit Meshram",
                "tags": ["Tag6", "Tag2"],
                "privacy": "public",
                "start_date": "29-62-2023",
                "end_date": "",
                "updated_at": "23-06-2026",
                "created_at": "29-62-2023",
                "actions": [
                    `<button className="btn btn-sm btn-primary">Edit</button>`,
                    `<button className="btn btn-sm btn-danger">Delete</button>`
                ]
            },
            {
                "id": 7,
                "title": "Project 7",
                "owner": "Ankit Meshram",
                "tags": ["Tag7", "Tag2"],
                "privacy": "public",
                "start_date": "29-72-2023",
                "end_date": "",
                "updated_at": "23-07-2027",
                "created_at": "29-72-2023",
                "actions": [
                    `<button className="btn btn-sm btn-primary">Edit</button>`,
                    `<button className="btn btn-sm btn-danger">Delete</button>`
                ]
            },
            {
                "id": 8,
                "title": "Project 8",
                "owner": "Ankit Meshram",
                "tags": ["Tag8", "Tag2"],
                "privacy": "public",
                "start_date": "29-82-2023",
                "end_date": "",
                "updated_at": "23-08-2028",
                "created_at": "29-82-2023",
                "actions": [
                    `<button className="btn btn-sm btn-primary">Edit</button>`,
                    `<button className="btn btn-sm btn-danger">Delete</button>`
                ]
            },
            {
                "id": 9,
                "title": "Project 9",
                "owner": "Ankit Meshram",
                "tags": ["Tag9", "Tag2"],
                "privacy": "public",
                "start_date": "29-92-2023",
                "end_date": "",
                "updated_at": "23-09-2029",
                "created_at": "29-92-2023",
                "actions": [
                    `<button className="btn btn-sm btn-primary">Edit</button>`,
                    `<button className="btn btn-sm btn-danger">Delete</button>`
                ]
            },
            {
                "id": 10,
                "title": "Project 10",
                "owner": "Ankit Meshram",
                "tags": ["Tag10", "Tag2"],
                "privacy": "public",
                "start_date": "29-102-2023",
                "end_date": "",
                "updated_at": "23-010-20210",
                "created_at": "29-102-2023",
                "actions": [
                    `<button className="btn btn-sm btn-primary">Edit</button>`,
                    `<button className="btn btn-sm btn-danger">Delete</button>`
                ]
            },
            {
                "id": 11,
                "title": "Project 11",
                "owner": "Ankit Meshram",
                "tags": ["Tag11", "Tag2"],
                "privacy": "public",
                "start_date": "29-112-2023",
                "end_date": "",
                "updated_at": "23-011-20211",
                "created_at": "29-112-2023",
                "actions": [
                    `<button className="btn btn-sm btn-primary">Edit</button>`,
                    `<button className="btn btn-sm btn-danger">Delete</button>`
                ]
            },
            {
                "id": 12,
                "title": "Project 12",
                "owner": "Ankit Meshram",
                "tags": ["Tag12", "Tag2"],
                "privacy": "public",
                "start_date": "29-122-2023",
                "end_date": "",
                "updated_at": "23-012-20212",
                "created_at": "29-122-2023",
                "actions": [
                    `<button className="btn btn-sm btn-primary">Edit</button>`,
                    `<button className="btn btn-sm btn-danger">Delete</button>`
                ]
            },

        ])
        setIsLoading(false)
        ProjectTableLayout()
    }, [])

    const ProjectTableLayout = () => {
        return (
            <DataTable value={projectData} sortMode="multiple" tableStyle={{ minWidth: '100%' }} paginator showGridlines stripedRows rows={10} rowsPerPageOptions={[5, 10, 25, 50]}>
                <Column field="id" sortable header="Id"></Column>
                <Column field="title" sortable header="Project Title"></Column>
                <Column field="owner" sortable header="Owner"></Column>
                <Column field="tags" sortable header="Tags"></Column>
                <Column field="privacy" sortable header="Privacy"></Column>
                <Column field="start_date" sortable header="Start Date"></Column>
                <Column field="end_date" sortable header="End Date"></Column>
                <Column field="updated_at" sortable header="Updated At"></Column>
                <Column field="created_at" sortable header="Created At"></Column>
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
                            <ProjectTableLayout />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default projects;