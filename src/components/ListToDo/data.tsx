export interface Task {
   id: number,
   task: string,
   complete: boolean,
}

export const data: Task[]= [
   {id: 1, task: 'Сделать дизайн', complete: true },
   {id: 2, task: 'Сделать фронтенд', complete: true },
   {id: 3, task: 'Сделать бэкенд', complete: false },
   {id: 4, task: 'Провести тесты', complete: false },
]