import React from 'react'
import {
    List,
    Datagrid,
    TextField,
    DateField,
    EditButton,
    DeleteButton
} from 'react-admin'

const PostList = (props) => {
    return (
        <List {...props}>
            <Datagrid>
                <TextField source='_id'/>
                <TextField source='title'/>
                {/*<TextField source='/posts'/>*/}
                <EditButton basePath='/posts'/>
            </Datagrid>
        </List>
    )
}

export default PostList
