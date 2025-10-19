/*
 * @Author: hxf hongxin.feng@transwarp.io
 * @Date: 2025-10-18 13:14:43
 * @LastEditors: hxf hongxin.feng@transwarp.io
 * @LastEditTime: 2025-10-19 19:06:00
 * @FilePath: \my-app-self-code\src\App.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { mockData } from './data/mockData'
import { createTableColumns } from './config/columns.tsx'
import './App.css'
import { Button, Table } from 'antd'
import { useState } from 'react'
import { FormSelf } from './contexts/FormContext.tsx'

function App() {
  const [isEditing, setIsEditing] = useState(false)
  const columns = createTableColumns(isEditing )
  const handleClickButton = () => {
    if(isEditing) {
      // 如果是编辑态，点击保存 
    setIsEditing(false)
    } else {
      // 如果是View态，点击编辑
      setIsEditing(true)
    }
    }
    return (
      <>
          <FormSelf>
            <Table
              columns={columns}
              dataSource={mockData}
              rowKey="id"
            />
            <Button onClick={handleClickButton}>{isEditing?'保存':'编辑'}</Button>
          </FormSelf>
      </>
    )
}



export default App
