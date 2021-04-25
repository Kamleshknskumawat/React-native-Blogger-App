const BASE_URL = "https://www.googleapis.com/blogger/v3/blogs/";
export const BASE_URL_GITHUB="https://api.github.com/";
export const BASE_URL_GITHUB_WEB="https://www.github.com/";
export const BASE_URL_TWITTER="https://twitter.com/"
const BLOG_ID = '981187379722719150'; //981187379722719150
const USER_ID = '10948874019227604562'; //10948874019227604562
export const GET_USER = "KamleshKnsKumawat"; // Here your github username eg, https://api.github.com/users/Kamleshknskumawat -> after users name name.
const KEY = 'AIzaSyCoP_fSjuDjp0cYeJcU0Shsic_y4AG13mM'; //Here place your api key. https://www.youtube.com/watch?v=2aSpzoLSwyA
const USER = "users/"
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
const QUESTION = "/search?q=";
export const HOME = BLOGGER_URL + '?' + KEY_VALUE;
export const LIST_PAGE = BLOGGER_URL + PAGES + '?' + KEY_VALUE + MAX_RESULTS;
export const LIST_POST_BODY_FALSE = BLOGGER_URL + POST + '?' + KEY_VALUE + ORDERBY + FETCH_FETCHIMAGE_TRUE + FETCH_BODIES_FALSE + MAX_RESULTS;
export const LIST_POST_BODY_TRUE = BLOGGER_URL + POST + '?' + KEY_VALUE + ORDERBY + FETCH_BODIES_TRUE + MAX_RESULTS;
export const POST_BY_GET = BLOGGER_URL + POST;
export const PAGE_BY_GET = BLOGGER_URL + PAGES;
export const LIST_POST_SEARCH = BLOGGER_URL + POST + QUESTION;
export const LIST_POST_SEARCH_END='&' + KEY_VALUE + ORDERBY + FETCH_BODIES_FALSE;
export const GET_GITHUB_USER = BASE_URL_GITHUB+USER+GET_USER;
const NOT_STARTED = 'NOT_STARTED';
const SUCCESS = 'SUCCESS';
const FAILED = 'FAILED';