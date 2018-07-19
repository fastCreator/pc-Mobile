export default
  [
    {
      label: 'index',
      name: 'index'
    },
    {
      label: '一级 1',
      name: 'a',
      children: [
        {
          name: 'b',
          label: '二级 1-1',
          children: [
            {
              name: 'x'
            }
          ]
        }
      ]
    },
    {
      label: '一级 2',
      name: 'c',
      children: [
        {
          name: 'd',
          label: '二级 2-1'
        },
        {
          name: 'e',
          label: '二级 2-2'
        }
      ]
    }
  ]
