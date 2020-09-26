import AuthSaga from './AuthSaga';

export default function* IndexSaga() {
    yield [
        AuthSaga()
    ];
}
