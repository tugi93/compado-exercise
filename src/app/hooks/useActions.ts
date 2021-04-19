import { bindActionCreators, ActionCreatorsMapObject } from 'redux'
import { useDispatch } from 'react-redux'

export const useActions = (actions: ActionCreatorsMapObject) => {
    const dispatch = useDispatch()
    return bindActionCreators(actions, dispatch)
}