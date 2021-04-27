import React from "react";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import EditableRowItem from "../editable-row-item";

const Table = ({ contents, contentType }) => {
    return (
        <div>
            <table className="table table-hover">
                <thead>
                <tr>
                    <th className="d-none d-md-table-cell">_id</th>
                    <th className="d-none d-md-table-cell">Poster</th>
                    <th className="d-none d-lg-table-cell">Type</th>

                    <th className="text-right">
                        <FontAwesomeIcon icon={"sort-alpha-up"} order={2} size={"lg"} className="mr-3"/>
                        <Link to={"/something"}>
                            <FontAwesomeIcon icon={"th"} order={3} size={"lg"} className="mr-1"/>
                        </Link>
                    </th>
                </tr>
                </thead>
                <tbody>
                {
                    contents.map((content, index) =>
                    <EditableRowItem
                        item={content}
                        id={content._id}
                        poster={content.originalPoster}
                        key={index}
                        type={contentType}
                    />)
                }
                </tbody>
            </table>
        </div>
    )
}

export default Table