import { mockData } from './data/mockData'
import { createTableColumns } from './config/tableColumns.tsx'
import './App.css'
import { Button, Form, Table } from 'antd'
import { useState } from 'react'

function App() {
  const [isEditing, setIsEditing] = useState(false)
  const [form] = Form.useForm()
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
        <div>
          <Form form={form}>
            <Table
              columns={columns}
              dataSource={mockData}
              rowKey="id"
            />
          </Form>
          <Button onClick={handleClickButton}>{isEditing?'保存':'编辑'}</Button>
        </div>
      </>
    )
}



export default App
