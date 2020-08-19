import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* getUserChar() {
    const config = {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      };
    try {
        const responsePayload = yield axios.get(`http://localhost:5000/api/character/`, config);
        yield put({ type: 'SET_CHARACTERS' , payload: responsePayload.data});
    } catch (error) {
        console.log('List get request failed', error);
    }
}

function* getAllCharacters() {
    yield takeEvery('GET_CHARACTERS', getUserChar);
}

export default getAllCharacters;