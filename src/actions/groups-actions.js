import groupService from '../services/group-service'

export const FIND_GROUP_BY_ID = "FIND_GROUP_BY_ID"


export const findGroupById = (dispatch, groupId) =>
    groupService.findGroupById(groupId)
    .then(groupInfo => dispatch({
        type: FIND_GROUP_BY_ID,
        foundGroup: groupInfo
    }))


const userActions = {
    findGroupById,
}

export default groupActions