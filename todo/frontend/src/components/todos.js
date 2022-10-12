import React from 'react'

const TodoItem = ({ todo }) => {
    return (
        <tr>
            <td>
                {todo.id}
            </td>
            <td>
                {todo.project}
            </td>
            <td>
                {todo.text}
            </td>
            <td>
                {todo.creation_date_time}
            </td>
            <td>
                {todo.last_modified_date_time}
            </td>
            <td>
                {todo.user}
            </td>
            <td>
                {todo.is_closed}
            </td>
        </tr>)
}


const TodosList = ({ todos }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>
                        Todo id
                    </th>
                    <th>
                        project
                    </th>
                    <th>
                        text
                    </th>
                    <th>
                        creation_date_tim
                    </th>
                    <th>
                        modified
                    </th>
                    <th>
                        user
                    </th>
                    <th>
                        closed
                    </th>
                </tr>
            </thead>
            <tbody>
                console.log(todos)
                {todos.map((todo_) => <TodoItem todo={todo_} />)}

            </tbody>

        </table>
    )
}

export default TodosList;