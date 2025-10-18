/*
 * @Author: hxf hongxin.feng@transwarp.io
 * @Date: 2025-10-18 21:24:57
 * @LastEditors: hxf hongxin.feng@transwarp.io
 * @LastEditTime: 2025-10-18 23:18:33
 * @FilePath: \my-app-self-code\src\data\mockData.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export const mockData = [
    {    
        id:1,
        name:"John Doe",
        value1:100,
        value2:200,
        children:[
            {
                id:2,
                name:"Jane Doe",
                value1:100,
                value2:200,
                children: [
                    { id: 3, name: 'Jim Doe', value1: 100, value2: 200 },
                ],
            },
        ],
    },
    {
        id:4,
        name:"Tom Doe",
        value1:100,
        value2:200,
        children: [
            { id: 5, name: 'Jim Doe', value1: 100, value2: 200 },
        ],
    }
]
