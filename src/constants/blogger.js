const BASE_URL = "https://www.googleapis.com/blogger/v3/blogs/";
const BLOG_ID = '981187379722719150';
const USER_ID = '10948874019227604562';
const USER = "users/"
const KEY = 'AIzaSyCoP_fSjuDjp0cYeJcU0Shsic_y4AG13mM';
const KEYEQUAL = 'key=';
const BLOGGER_URL = BASE_URL + BLOG_ID;
export const KEY_VALUE = KEYEQUAL + KEY;
const PAGES = '/pages';
const POST = '/posts';
const MAX_RESULTS = "&maxResults=";
const ORDERBY = "&orderBy=PUBLISHED";
const FETCH_BODIES_TRUE = "&fetchBodies=true";
const FETCH_BODIES_FALSE = "&fetchBodies=false";
const FETCH_FETCHIMAGE_TRUE = "&fetchImages=true";
const QUESTION = "&q=";
export const HOME = BLOGGER_URL + '?' + KEY_VALUE;
export const LIST_PAGE = BLOGGER_URL + PAGES + '?' + KEY_VALUE + MAX_RESULTS;
export const LIST_POST_BODY_FALSE = BLOGGER_URL + POST + '?' + KEY_VALUE + ORDERBY + FETCH_FETCHIMAGE_TRUE + FETCH_BODIES_FALSE + MAX_RESULTS;
export const LIST_POST_BODY_TRUE = BLOGGER_URL + POST + '?' + KEY_VALUE + ORDERBY + FETCH_BODIES_TRUE + MAX_RESULTS;
export const POST_BY_GET = BLOGGER_URL + POST;
export const PAGE_BY_GET = BLOGGER_URL + PAGES;
export const LIST_POST_SEARCH = BLOGGER_URL + POST + '?' + KEY_VALUE + ORDERBY + FETCH_BODIES_FALSE + QUESTION;
//export const GET_USER = "https://www.googleapis.com/blogger/v3/" + USER + USER_ID + '?' + KEY_VALUE;
export const GET_USER = "KamleshKnsKumawat";


const NOT_STARTED = 'NOT_STARTED';
const SUCCESS = 'SUCCESS';
const FAILED = 'FAILED';