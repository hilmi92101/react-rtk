import { useSelector, } from 'react-redux';
import { selectNotificationsCount, } from '../../store/notifications/notifications.selectors';

const DisplayCounter = () => {

    const count = useSelector(selectNotificationsCount);

    return (
        <>
            <h1>Current Counter from redux store: {count}</h1>
        </>
    );
};

export default DisplayCounter;