import axios from 'axios';


export const postUrl = function (url, params) {
    axios.post(url, {params}).then(function (data) {
        if (data.status === 200) {
            return Promise.resolve(data);
        } else {
            console.log('error');
        }
    })
};

export const getUrl = function (url, params) {
   return  axios.get(url, {params}).then(function (data) {
        if (data.status === 200) {
            return Promise.resolve(data);
        } else {
            console.log('error');
        }
    });
};


export const search = function (keyword) {
    let url = 'https://v1.itooi.cn/netease/search?keyword=' + keyword + '&type=song&pageSize=20&page=0';

    return getUrl(url, {})
};