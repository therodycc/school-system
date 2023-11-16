import { combineReducers } from 'redux';
import createWebStorage from 'redux-persist/lib/storage/createWebStorage';
// reducers
import meReducer from '../slices/me.slice';
import studentReducer from '../slices/student/students.slice';
import teacherReducer from '../slices/teacher/teacher.slice';
import subjectReducer from '../slices/subject/subject.slice';
import classroomReducer from '../slices/classroom/classroom.slice';

const createNoopStorage = () => ({
    getItem() {
        return Promise.resolve(null);
    },
    setItem(_key: any, value: any) {
        return Promise.resolve(value);
    },
    removeItem() {
        return Promise.resolve();
    }
});

const storage = typeof window !== 'undefined' ? createWebStorage('local') : createNoopStorage();

const rootPersistConfig = {
    key: 'root',
    storage,
    keyPrefix: 'redux-',
    whitelist: []
};


const rootReducer = combineReducers({
    me: meReducer,
    student:studentReducer,
    teacher:teacherReducer,
    subject:subjectReducer,
    classroom:classroomReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export { rootPersistConfig, rootReducer };

