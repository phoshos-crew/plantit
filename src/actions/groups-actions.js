import groupService from '../services/group-service'

export const PROFILE = "PROFILE"
export const FIND_GROUP_BY_ID = "FIND_GROUP_BY_ID"


export const profile = (dispatch) => {
    groupService.profile()
        .then(groupInfo => dispatch({
            type: PROFILE,
            currentGroup: groupInfo
        }))
}

export const findGroupById = (dispatch, groupId) =>
    groupService.findGroupById(groupId)
    .then(groupInfo => dispatch({
        type: FIND_GROUP_BY_ID,
        foundGroup: groupInfo
    }))


const userActions = {
    findGroupById,
    profile,
}

export default groupActions