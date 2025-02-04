//登录接口post携带的TS类型
export interface loginForm{
    username:string,
    password:string
}
//get的data的数据类型
interface dataType{
    token: string
}
//登录接口get返回的数据类型
export interface loginResponseData{
    code:number,
    data:dataType
}
//user里面所有数据的数据类型
interface userinfo{
    userId: number,
    avatar: string,
    username: string,
    password: string,
    desc: string,
    roles: string[],
    buttons: string[],
    routes: string[],
    token: string,
}
//Data的数据类型
interface user {
    checkuser:userinfo
}
//服务器返回用户数据的类型
export interface userResponseData{
    code:number,
    data:user
}