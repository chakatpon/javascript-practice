// BUDGET CONTROLLER
var budgetController = (function() {

    var Expense = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var Income = function(id, description, value) {
        this.id = id;
        this.descriptioj = description;
        this.value = value;
    };


    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        total: {
            exp: 0,
            inc: 0
        }
    };

    return {
        addItem: function(type, des, val) {
            var newItem, ID;

            //[1 2 3 4 5], next ID = 6
            //if ID = array.lenght();
            //[1 2 4 6 8], next ID = 6 is not correct!
            // ID = last ID + 1

            // Create new ID
            if(data.allItems[type].length > 0) {
                ID = data.allItems[type][data.allItems[type].length  - 1].id + 1;
            }else {
                ID = 0;
            }
            
            // Create new item based on 'inc' or 'exp' type
            if(type === 'exp') {
                
                newItem = new Expense(ID, des, val);
            } else if (type === 'inc') {
                
                newItem = new Income(ID, des, val);
            }
            
            // Push it into our data structure.
            data.allItems[type].push(newItem);

            // Return the new element.
            return newItem;
        },
        
        testing: function() {
            console.log(data);
        }
    }


})();

// UI CONTROLLER
var UIController = (function() {

    var DOMStrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
        
    }

    return {
        getInput: function() {
            return {
                type: document.querySelector(DOMStrings.inputType).value, // Will be either inc or exp.
                description: document.querySelector(DOMStrings.inputDescription).value,
                value: document.querySelector(DOMStrings.inputValue).value,
            }
        },

        getDOMStrings: function() {
            return DOMStrings;
        }

    }
    // Some code

})();

// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {

    var setupEventListeners = function() {
        var DOM = UICtrl.getDOMStrings();

        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress', function(event) {
            if(event.keyCode === 13 || event.whick === 13) {
                ctrlAddItem();
            }
    
        });
    }

    
    var ctrlAddItem = function() {
        var input, newItem;

        // 1. get the filed input data.
        input = UICtrl.getInput();
        console.log(input);
       
        // 2. Add the item to the budget controller.
        newItem = budgetCtrl.addItem(input.type, input.description, input.value);
        budgetCtrl.testing();
        // 3. add the item to the UI.
        // 4. calculate the budget.
        // 5. display the budget on the UI.
        console.log("It work")
    }

    return {
        init: function() {
            console.log("init");
            setupEventListeners();
        }
    }


})(budgetController, UIController);


controller.init();