import { useState } from 'react';

const useProgressList = () => {
    const [progressList, setProgressList] = useState([
        { id: 50, value: 1, isActive: true },
        { id: 51, value: 2, isActive: false },
        { id: 52, value: 3, isActive: false },
        { id: 53, value: 4, isActive: false },
        { id: 54, value: 5, isActive: false },
        { id: 55, value: 6, isActive: false },
        { id: 56, value: 7, isActive: false },
        { id: 57, value: 8, isActive: false },
        { id: 58, value: 9, isActive: false },
        { id: 59, value: 10, isActive: false }
    ]);

    return [progressList, setProgressList];
}

export default useProgressList;