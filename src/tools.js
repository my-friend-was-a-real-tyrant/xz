/*工具函数*/
export const dealWithTime= (data)=> {
    let formatDateTime
    let Y = data.getFullYear()
    let M = data.getMonth() + 1
    let D = data.getDate()
    let H = data.getHours()
    let Min = data.getMinutes()
    let S = data.getSeconds()
    // let H = 11
    // let Min =30
    // let S = data.getSeconds()
    let W = data.getDay()
    H = H < 10 ? ('0' + H) : H
    Min = Min < 10 ? ('0' + Min) : Min
    S = S < 10 ? ('0' + S) : S
    switch (W) {
        case 0:
            W = '天'
            break
        case 1:
            W = '一'
            break
        case 2:
            W = '二'
            break
        case 3:
            W = '三'
            break
        case 4:
            W = '四'
            break
        case 5:
            W = '五'
            break
        case 6:
            W = '六'
            break
        default:
            break
    }
    formatDateTime = Y + '年' + M + '月' + D + '日 ' + H + ':' + Min + ':' + S + ' 星期' + W
    return {H,Min,S}
}
