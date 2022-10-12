import React from 'react'

const ProjectItem = ({ project }) => {
    return (
        <tr>
            <td>
                {project.title}
            </td>
            <td>
                {project.repository_link}
            </td>
            <td>
                {project.users}
            </td>
        </tr>)
}


const ProjectsList = ({ projects }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>
                        Project Title
                    </th>
                    <th>
                        Project Repository Link
                    </th>
                    <th>
                        Involved Users
                    </th>
                    <th>
                        User Last Name
                    </th>
                    <th>
                        User EMAIL
                    </th>
                </tr>
            </thead>
            {console.log(projects)}
            <tbody>
                {/* {projects.map((project_) => <ProjectItem project={project_} />)} */}
                {console.log(projects)}
            </tbody>

        </table>
    )
}

export default ProjectsList;