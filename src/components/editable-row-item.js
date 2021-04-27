import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";
import {withRouter} from "react-router";

const EditableRowItem = (
    {
        item,
        id,
        poster,
        type,
        history
    } = this.props ) => {

    const [editing, setEditing] = useState(false)
    // const [cachedItem, setCachedItem] = useState(item)

    return (
        <tr>
            <td className="d-none d-md-table-cell">{id}</td>
            <td className="d-none d-md-table-cell">{poster}</td>
            <td className="d-none d-md-table-cell">Post</td>
            <td className="text-right">
                { !editing &&
                <Link to={`/admin/${type}/${id}`}>
                    <FontAwesomeIcon icon={"edit"} size={"lg"} onClick={() => {
                        setEditing(true)
                    }}/>
                </Link>
                }
                { editing &&
                    <FontAwesomeIcon icon={"check"} size={"lg"} className="mr-2" onClick={() => {
                        history.goBack()
                        setEditing(false)
                }}/>
                }
                { editing && <FontAwesomeIcon icon={"trash"} size={"lg"} onClick={() => {
                    history.goBack()
                    setEditing(false)
                    }}/>}
            </td>
        </tr>
    )
}

export default withRouter(EditableRowItem)