const url = require('../constants/blogger');
export const requestTitle = async () => {
    try {
        let response = await fetch(url.HOME
        );
        let json = await response.json();
        console.log(json);
        return json;
    } catch (error) {
        console.error(error);
    }
}
export const requestPages = async (MAX_RESULTS) => {
    try {
        let response = await fetch(url.LIST_PAGE + MAX_RESULTS);
        let json = await response.json();
        console.log(json);
        return json;
    } catch (error) {
        console.error(error);
    }
}

export const requestPostBodyFalse = async (MAX_RESULTS) => {
    try {
        console.log(url.LIST_POST_BODY_FALSE + MAX_RESULTS);
        let response = await fetch(url.LIST_POST_BODY_FALSE + MAX_RESULTS);
        let json = await response.json();
        console.log(json);
        return json;
    } catch (error) {
        console.error(error);
    }
}

export const requestPostBodyFalseNextPage = async (MAX_RESULTS, nextPage) => {
    try {
        console.log(url.LIST_POST_BODY_FALSE + MAX_RESULTS);
        let response = await fetch(url.LIST_POST_BODY_FALSE + MAX_RESULTS + "&pageToken=" + nextPage);
        let json = await response.json();
        console.log(json);
        return json;
    } catch (error) {
        console.error(error);
    }
}

export const requestPostBodyTrue = async (MAX_RESULTS) => {
    try {
        let response = await fetch(url.LIST_POST_BODY_TRUE + MAX_RESULTS);
        let json = await response.json();
        console.log(json);
        return json;
    } catch (error) {
        console.error(error);
    }
}

export const requestPostById = async (postId) => {
    try {
        let postUrl = url.POST_BY_GET + "/" + postId + '?' + url.KEY_VALUE;
        console.log(postUrl);
        let response = await fetch(postUrl);
        let json = await response.json();
        console.log(json);
        return json;
    } catch (error) {
        console.error(error);
    }
}

export const requestPageById = async (pageId) => {
    try {
        let pageUrl = url.PAGE_BY_GET + "/" + pageId + '?' + url.KEY_VALUE;
        console.log(pageUrl);
        let response = await fetch(pageUrl);
        let json = await response.json();
        console.log(json);
        return json;
    } catch (error) {
        console.error(error);
    }
}
export const requestPostSeach = async (q) => {
    try {
        let postUrl = url.LIST_POST_SEARCH + q;
        console.log(postUrl);
        let response = await fetch(postUrl);
        let json = await response.json();
        console.log(json);
        return json;
    } catch (error) {
        console.error(error);
    }
}
export const requestGithubUser = async () => {
    try {
        let getGithubUser = url.GET_GITHUB_USER
        console.log(getGithubUser);
        let response = await fetch(getGithubUser);
        let json = await response.json();
        console.log(json);
        return json;
    } catch (error) {
        console.error(error);
    }
}
export const requestGetUser = async () => {
    try {
        // let postUrl = url.GET_USER;
        // console.log(postUrl);
        // let response = await fetch(postUrl);
        // let json = await response.json();
        // console.log(json);
        return url.GET_USER;
    } catch (error) {
        console.error(error);
    }
}
