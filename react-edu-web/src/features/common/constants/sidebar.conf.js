export const sidebar_menus = [
  { name: 'data-analysis', url: '#', icon: 'area-chart', text: '数据分析', active: true },
  { name: 'user-center', url: '#', icon: 'users', text: '用户中心' },
  { name: 'course-mgr', url: '#', icon: 'object-group', text: '课程管理', children: 
    [
      { name: 'course-add', url: '#', text: '课程添加' },
      { name: 'course-list', url: '#', text: '课程列表' },
      { name: 'course-cate', url: '#', text: '课程分类' },
      { name: 'course-topic', url: '#', text: '课程专题' }
    ] 
  },
  { name: 'ops-center', url: '#', icon: 'bars', text: '运营中心' },
  { name: 'model-center', url: '#', icon: 'calculator', text: '建模中心' },
  { name: 'settings', url: '#', icon: 'cog', text: '系统设置', children: 
    [
      { name: 'settings-site', url: '#', text: '站点设置' },
      { name: 'settings-user', url: '#', text: '用户设置' },
      { name: 'settings-role', url: '#', text: '角色设置' },
      { name: 'settings-course', url: '#', text: '课程设置' },
      { name: 'settings-ops', url: '#', text: '运营设置' },
      { name: 'settings-fis', url: '#', text: '财务设置' }
    ] 
  }
];