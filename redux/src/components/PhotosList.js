import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'

// import userReducer from "../redux/reducers/users-reducer";
import {
    grayScaleAction,
    onUserLoaded,
    grayScaleActionNone
} from '../redux/action-creators/index'

const PhotosList = () => {
    const dispatch = useDispatch()
    const users = useSelector(({userReducer: {users}}) => users)
    const badEmployees = useSelector(({userReducer: {badEmployees}}) => badEmployees)
    const {counter1, counter2} = useSelector(({counter1, counter2})=> ({
        counter1: counter1.counter,
        counter2: counter2.counter
    }))
    console.log('Users:', users)
    const fetchPhotos =  async () => {
        const resp = await fetch('https://dummyapi.io/data/api/user?limit=10', {
            headers: {
                'app-id': 'lTE5abbDxdjGplutvTuc'
            }
        });
        const json = await resp.json()
//filter: grayscale(1);
        dispatch(onUserLoaded(json.data))
    }

useEffect(()=> {
    if(!users.length){
        fetchPhotos()
    }
}, [])
    return (
        <div>
            {!(counter1 % 2) && <div>
                {users.map(el => (
                    <img
                        style={{
                            filter: badEmployees.includes(el.id) ? 'blur(3px)' : ''
                        }}
                        onClick={()=> {
                            const alreadyInList = badEmployees.includes(el.id)
                            const answer = !alreadyInList && window.confirm('Are you sure?')
                            if(answer) {
                                return dispatch(grayScaleAction(el.id))
                            }
                            alreadyInList && dispatch(grayScaleActionNone(el.id))
                        }}
                        key={el.id}
                        src={el.picture}
                        alt={el.firstName}
                    />
                ))}
            </div>}

        </div>
    )
}
export default PhotosList