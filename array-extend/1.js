/**
 * Created by fengjj on 2016/6/21.
 */
/*
    Array.from   将对象(类数组或者可遍历(iterable)对象)转换成真正的数组，可遍历对象包括（ES6中的Set 和 Map）
* */
'use strict';
//可遍历对象(部署了iterator接口) Set and Map  Array.from(obj,fn); fn有两个参数item（当前值）和index（索引）
let s = new Set();
s.add(1).add(3).add(6);
let arr_set = Array.from(s);
console.log('===== Set to Array ===='.arr_set);

let m = new Map([['name','xiaoming'],['age',18]]);
m.set('email','fjj_321@126.com');
let arr_map = Array.from(m);
console.log('======== Map to Array ========',arr_map);

//将字符串转为数组
console.log(Array.from('abc',(item,index) => {
    return item+index;
}));
