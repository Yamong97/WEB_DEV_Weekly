
// {
//     "task": "Buy groceries",
//     "completed": false,
//     "dueDate": "2025-08-30"
// }

let todoArray = [];
let nextId = 1;

function getAll() {
    return todoArray;
}

function addOne(name, species, age, color, weight) {
    // Check if any parameter is empty or undefined
    if (!name || !species || !age || !color || !weight) {
        return false;
    }


    const newTodo = {
        id: nextId++,
        name,
        species,
        age,
        color,
        weight,
    };

    todoArray.push(newTodo);
    return newTodo;
}

function findById(id) {
    const todo = todoArray.find((item) => item.id == id);
    if (todo) {
        return todo;
    } else {
        return false;
    }
}

function updateOneById(id, updatedData) {
    const todo = findById(id);
    if (todo) {
        // Update properties only if provided in updatedData
        if (updatedData.name) {
            todo.name = updatedData.name;
        }
        if (updatedData.species) {
            todo.species = updatedData.species;
        }
        if (updatedData.age) {
            todo.age = updatedData.age;
        }
        if (updatedData.color) {
            todo.color = updatedData.color;
        }
        if (updatedData.weight) {
            todo.weight = updatedData.weight;
        }
        return todo;
    }
    return false;
}

function deleteOneById(id) {
    const todo = findById(id);
    if (todo) {
        const initialLength = todoArray.length;
        todoArray = todoArray.filter((todo) => todo.id != id);
        return todoArray.length < initialLength; // Indicate successful deletion if the length has decreased
    }
    return false; // Return false if the item was not found
}

if (require.main === module) {
    // Add dog
    let result = addOne("Buddy", 20);
    console.log(result);
    // Add another dog
    result = addOne("Mittens", 10);
    console.log(result);

    console.log("getAll called:", getAll());

    console.log("findById called:", findById(1));

    console.log("updateOneById called:", updateOneById(1, { weight: 22 }));
    console.log("findById called after item updated:", findById(1));

    console.log("deleteOneById called:", deleteOneById(1));
    console.log("findById called after item deleted:", findById(1));
}

const ToDos = {
    getAll,
    addOne,
    findById,
    updateOneById,
    deleteOneById
};

module.exports = ToDos;
