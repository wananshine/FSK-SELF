const menu = [
  {
    name: '测试页面',
    icon: '',
    path: '/test'
  },
  {
    name: '空白页',
    icon: '',
    path: '/blank',
  },
  {
    name: '生产看板',
    icon: 'ReconciliationOutlined',
    path: '/production_card',
  },
  {
    name: '仓库输入',
    icon: 'FormOutlined',
    path: '/warehouse_input'
  },
  {
    name: '数据检查',
    icon: 'FundViewOutlined',
    path: '/data_check'
  },
  {
    name: '任务管理',
    icon: 'AuditOutlined',
    path: '/task_manage'
  },
  {
    name: '任务次数',
    icon: 'AuditOutlined',
    path: '/task_number'
  },
  {
    name: '系统设置',
    icon: 'SettingOutlined',
    path: '/SystemSettings',
    children: [
        {
            name: '权限管理',
            icon: 'LockOutlined',
            path: '/rules_manage',
        },
        {
            name: '数据字典',
            icon: 'BoxPlotOutlined',
            path: '/data_dictionary/:detail?',
        },
        {
            name: '产线信息',
            icon: 'NodeIndexOutlined',
            path: '/line_information',
        },
        {
            name: '位置信息',
            icon: 'EnvironmentOutlined',
            path: '/location_information',
        },
        {
            name: '产线位置对应',
            icon: 'BoxPlotOutlined',
            path: '/production_line_position',
        },
        {
            name: '产线任务类型对应',
            icon: 'BoxPlotOutlined',
            path: '/production_line_task',
        }
    ],
  }
]


const nav = [

]



export default ({ mock }) => {
  return {
    '/api/user/login': (options)=>{},
    '/api/user/menu': (options)=>{
      return menu
    }
  }
}


export {
  menu
}
