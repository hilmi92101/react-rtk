import './App.css'

// redux
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch } from './store/store';

// redux: notifications
import { selectNotificationsCount, } from './store/notifications/notifications.selectors';
import { increment, incrementByTwo, reset } from './store/notifications/notifications.slice';

// components
import DisplayCounter from './components/demos/DisplayCounter'

function App() {

    const count = useSelector(selectNotificationsCount);
    const dispatch = useDispatch<AppDispatch>();

    return (
        <>
            
            <h1>Notification Count = { count }</h1>
            <div className="card">
                <button onClick={() => {
                    dispatch(increment())
                }}>
                    Increment
                </button>
                <button onClick={() => {
                    dispatch(incrementByTwo())
                }}>
                    Increment By 2
                </button>
                <button onClick={() => {
                    dispatch(reset())
                }}>
                    Reset
                </button>
            </div>

            <DisplayCounter />
            <DisplayCounter />
        </>
    )
}

export default App
