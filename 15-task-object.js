'use strict';

const ToDoList = {
	tasks: [{
		title: 'Помыть посуду',
		id: 1,
		priority: 4
	},{
		title: 'Пропылесосить',
		id: 2,
		priority: 2
	},{
		title: 'Постирать вещи',
		id: 3,
		priority: 1
	}],

	//Добавить задачу
	addTask: function(title, priority) {
		this.tasks.push({
			title: title,
			id: this.tasks.length + 1,
			priority: priority
		});
	},

	//Найдем задачу по id
	findTaskIndexByID: function (id) {
    	for (let index in this.tasks) {
      		if (this.tasks[index].id === id) {
        	return index;
      		}
		}
	},

	//Удалим задачу по id
	deleteTaskByID: function(id) {
		const index = this.findTaskIndexByID(id);
				this.tasks.splice(index, 1);
	},

	//Вариант 1: Изменить имя или приоритет по id
	changeDataByID: function(id, dataToChange) {
		const index = this.findTaskIndexByID(id);
			if (typeof dataToChange === 'string') {
				this.tasks[index].title = dataToChange;
			};
			if (typeof dataToChange === 'number') {
				this.tasks[index].priority = dataToChange;	
			};
	},

	//Вариант 2: Изменить имя или приоритет по id
	changeDataByID2: function(id, dataToChange) {
		this.tasks = this.tasks.map(task => {
    		if (task.id === id) {
      			if (typeof dataToChange === 'string') {
       				task.title = dataToChange;
      			}
      			if (typeof dataToChange === 'number') {
        			task.priority = dataToChange;
     			}
    		}
    		return task;
  		});
	},

	//Сортировка по приоритету
	sortPriority: function() {
		ToDoList.tasks.sort(function(a,b) {
		return a.priority - b.priority;
		});
	},

};