import cookie from 'react-cookies';

//加载用户cookie信息
export const loadUserInfo = ()=>{
    return cookie.load('userInfo');
}

//保存用户cookie信息
export const onLogin = (user) => {
    cookie.save('userInfo',user ,{path:'/'})
}

//删除用户cookie信息
export const onLogout = () => {
    cookie.remove('userInfo');
}

//保存用户搜索信息
export const saveSearchInfo = (searchInfo) =>{
    cookie.save('userSearchInfo',searchInfo,{path:'/'});
}
//加载用户搜索信息
export const loadSearchInfo = ()=>{
    return cookie.load('userSearchInfo');
}
//删除用户搜索信息
export const deletaSearchInfo = ()=>{
    cookie.remove('userSearchInfo');
}