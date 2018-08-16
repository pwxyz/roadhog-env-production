
import React from 'react'
import dva from 'dva'
import { Button } from 'antd'

const app = dva({})



// 使用这个在ie10 ie9下面报错



const IndexPage = () => <Button>hello world</Button>


app.router(() =><IndexPage />)

app.start(document.getElementById('root'))