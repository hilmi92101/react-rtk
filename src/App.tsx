import './App.css'

// redux
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch } from './store/store';

// redux: notifications
import { selectNotificationsCount, selectResetStatus } from './store/notifications/notifications.selectors';
import { increment, incrementByTwo, reset, resetCountViaApi } from './store/notifications/notifications.slice';

// components
import DisplayCounter from './components/demos/DisplayCounter'

function App() {

    const count = useSelector(selectNotificationsCount);
    const resetStatus = useSelector(selectResetStatus);

    const dispatch = useDispatch<AppDispatch>();

    const resetButtonText = () => {
        switch (resetStatus) {
            case 'idle':
            case 'error':
                return 'Reset via API';
            case 'loading':
                return 'Loading...';
        }
    }

    return (
        <>

            <h1>Notification Count = {count}</h1>
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
                <button onClick={() => {
                    dispatch(resetCountViaApi())
                }}>
                    { resetButtonText() }
                </button>



            </div>

            <DisplayCounter />
            <DisplayCounter />
        </>
    )
}

export default App
