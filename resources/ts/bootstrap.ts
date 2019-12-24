import * as _ from 'lodash';
import Axios, {AxiosStatic} from 'axios';

declare global {
    const _: _.LoDashStatic

    interface Window {
        axios: AxiosStatic;
        _: _.LoDashStatic;
    }

    interface Element {
        content: string;
    }
}

export default function bootstrap() {

    window.axios = Axios;

    window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

    let token = document.head.querySelector('meta[name="csrf-token"]');

    if (token) {
        window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
    } else {
        console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
    }

}