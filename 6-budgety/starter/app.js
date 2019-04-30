// BUDGET CONTROLLER
var budgetController = (function() {

    const abc = 2;
    var Expense = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var Income = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var calculateTotal = function(type) {
        var sum = 0;
        data.allItems[type].forEach(function(cur) {
            sum = sum + cur.value;
        });
        data.totals[type] = sum;
    };


    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        },
        budget:0,
        percentage: -1
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

        calculateBudget: function() {

            // Calculate total income and expenses
            calculateTotal('exp');
            calculateTotal('inc');

            // Calculate the budget: income - expense
            data.budget = data.totals.inc - data.totals.exp;

            // Calculate the percentage of income that we spent
            if (data.totals.inc > 0) {
                data.percentage = Math.round((data.totals.exp /data.totals.inc) * 100);
            }


            // Expense = 100 and income 200, spent 50% = 100/200 = 0.5 * 100


        },

        getBudget: function() {
            return {
                budget: data.budget,
                totalInc: data.totals.inc,
                totalExp: data.totals.exp,
                percentage: data.percentage
            }
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
        inputBtn: '.add__btn',
        incomeContainer: '.income__list',
        expensesContainer: '.expenses__list',
        budgetLabel: '.budget__value',
        incomeLabel: '.budget__income--value',
        expensesLabel: '.budget__expenses--value',
        percentageLabel: '.budget__expenses--percentage'
        
    }

    return {
        getInput: function() {
            return {
                type: document.querySelector(DOMStrings.inputType).value, // Will be either inc or exp.
                description: document.querySelector(DOMStrings.inputDescription).value,
                value: parseFloat(document.querySelector(DOMStrings.inputValue).value),
            }
        },

        addListItem: function(obj, type) {
            var html, newHtml;
            // Create HTML string with placeholder text

            if (type === 'inc') {
                element = DOMStrings.incomeContainer;
                html = '<div class="item clearfix" id="income-%id%">'
                +'<div class="item__description">%description%</div>'
                +'<div class="right clearfix">'
                +'<div class="item__value">%value%</div>'
                +'<div class="item__delete">'
                +'<button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>'
                +'</div></div></div>';
            } else if (type === 'exp') {
                element = DOMStrings.expensesContainer;
                html = '<div class="item clearfix" id="expense-%id%">'
                +'<div class="item__description">%description%</div>'
                +'<div class="right clearfix">'
                +'<div class="item__value">%value%</div>'
                +'<div class="item__percentage">21%</div>'
                +'<div class="item__delete">'
                +'<button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>'
                +'</div></div></div>';
            }

            // Replace the placeholder text with some actual data
            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%description%', obj.description);
            newHtml = newHtml.replace('%value%', obj.value);

            // Insert the HTML into the DOM
            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);


        },

        clearFields: function() {
            var fields, fieldsArr;

            fields = document.querySelectorAll(DOMStrings.inputDescription + ', ' + DOMStrings.inputValue);

            fieldsArr = Array.prototype.slice.call(fields);

            fieldsArr.forEach(function(current, index, array) {
                current.value = "";
            });

            fieldsArr[0].focus();
        },

        displayBudget: function(obj) {
            document.querySelector(DOMStrings.budgetLabel).textContent = obj.budget;
            document.querySelector(DOMStrings.incomeLabel).textContent = obj.totalInc;
            document.querySelector(DOMStrings.expensesLabel).textContent = obj.totalExp;
            document.querySelector(DOMStrings.percentageLabel).textContent = obj.percentage;

            if (obj.percentage > 0) {
                document.querySelector(DOMStrings.percentageLagel).textContent = obj.percentage + '%';

            }else {
                document.querySelector(DOMStrings.percentageLabel).textContent = '---';
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

    var updateBudget = function() {

        // 1. Calculate the budget
        budgetCtrl.calculateBudget();

        // 2. Return the budget
        var budget = budgetCtrl.getBudget();

        // 3. Display the budget on the UI
        UICtrl.displayBudget(budget);

        


    }
    
    var ctrlAddItem = function() {
        var input, newItem;

        // 1. get the filed input data.
        input = UICtrl.getInput();
        console.log(input);

        if (input.description !== '' && !isNaN(input.value) && input.value > 0 ) {
            // 2. Add the item to the budget controller.
           newItem = budgetCtrl.addItem(input.type, input.description, input.value);
           budgetCtrl.testing();

           // 3. add the item to the UI.
           UICtrl.addListItem(newItem, input.type);

           // 4. Clear the fields.
           UICtrl.clearFields();

           // 5. calculate and update the budget.
           updateBudget();

           // 6. display the budget on the UI.
           console.log("It work")
        }
       

    }

    return {
        init: function() {
            console.log("init");
            UICtrl.displayBudget({
                budget: 0,
                totalInc: 0,
                totalExp: 0,
                percentage: -1
            })
            setupEventListeners();
        }
    }


})(budgetController, UIController);


controller.init();