export const Data = {
    tasks :{
         'task-1':{id: 'task-1', text: 'Walk your Cat',description:'column-1'},
         'task-2':{id: 'task-2', text: 'Fix your porch',description:'column-2'},
         'task-3':{id: 'task-3', text: 'Gather firewood',description:'column-3'},
         'task-5':{id: 'task-5', text: 'Dance with white fairy',description:'column-1'},
         'task-4':{id: 'task-4', text: 'Feed your dragon',description:'column-2'},
         'task-6':{id: 'task-6', text: 'Light up the mountain',description:'column-3'},
         'task-7':{id: 'task-7', text: 'Build a pirate ship',description:'column-1'},
         'task-8':{id: 'task-8', text: 'Say no Darth Vadar',description:'column-2'},
    },
    columnData:['column-1','column-2','column-3'],
    columns:{
        'column-1': {
            id: 'column-1',
            title: "Open",
            taskIds:['task-1','task-4','task-7',],
            background:['rgb(48, 191, 191)'],
          },
          'column-2': {
            id: 'column-2',
            title: 'In Progress',
            taskIds:['task-2','task-5','task-8',],
            background:['rgb(0, 170, 255)'],
          },
          'column-3': {
            id: 'column-3',
            title: 'Done',
            taskIds:['task-3','task-6',],
            background:['rgb(143, 126, 230)'],
          }
    },
    taskCount:8
}

 