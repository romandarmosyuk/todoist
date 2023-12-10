export interface Task {
   id: number,
   task: string,
   complete: boolean,
   isEdit: boolean,
}

export const data: Task[]= [
   {id: 1, task: 'Сделать дизайн', complete: true, isEdit: false },
   {id: 2, task: 'Сделать фронтенд', complete: true, isEdit: false },
   {id: 3, task: 'Сделать бэкенд', complete: false, isEdit: false },
   {id: 4, task: 'Провести тесты', complete: false, isEdit: false },
]