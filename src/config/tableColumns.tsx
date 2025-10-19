/*
 * @Author: hxf hongxin.feng@transwarp.io
 * @Date: 2025-10-19 20:00:10
 * @LastEditors: hxf hongxin.feng@transwarp.io
 * @LastEditTime: 2025-10-19 20:07:06
 * @FilePath: \my-app-self-code\src\config\tableColumns.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { EditableComp } from "../components/EditableComp"
import type { IMockData } from "../data/mockData"

export const createTableColumns = (isEditing:boolean) => {
    return [
        {
            title:"Name",
            dataIndex:"name",
            key:"name"
        },
        {
            title:"value1",
            dataIndex:"value1",
            key:"value1",
            render:(value:string, record:IMockData) => {
                return <EditableComp value={value} isEditing={isEditing} record={record} />
            }
        },
        {
            title:"value2",
            dataIndex:"value2",
            key:"value2"
        }
    ]
}