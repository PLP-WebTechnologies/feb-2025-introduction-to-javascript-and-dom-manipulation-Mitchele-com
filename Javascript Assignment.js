<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DOM Manipulation Demo</title>
    <style>
        body {
            font-family: sans-serif;
            margin: 20px;
        }

        header {
            background-color: #f0f0f0;
            padding: 10px;
            text-align: center;
            margin-bottom: 20px;
        }

        nav ul {
            list-style: none;
            padding: 0;
        }

        nav ul li {
            display: inline;
            margin-right: 15px;
        }

        main {
            margin-bottom: 20px;
        }

        #styledDiv {
            padding: 15px;
            background-color: lightblue;
            margin-top: 10px;
        }

        footer {
            text-align: center;
            border-top: 1px solid #ccc;
            padding-top: 10px;
        }
    </style>
</head>
<body>
    <header>
        <h1>Welcome to the DOM Demo</h1>
        <nav>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <p id="dynamicText">This is the initial text.</p>
        <button id="changeTextBtn">Change Text</button>
        <div id="styledDiv">This div will be styled.</div>
        <button id="styleBtn">Change Style</button>
        <ul id="itemlist">
            <li>Item 1</li>
            <li>Item 2</li>
        </ul>
        <button id="addItemBtn">Add Item</button>
    </main>

    <footer>
        <p>&copy; 2025 My DOM Demo</p>
    </footer>

    <script>
        document.addEventListener('DOMContentLoaded', function() {
            // Change Text Content
            const changeTextBtn = document.getElementById('changeTextBtn');
            const dynamicTextElement = document.getElementById('dynamicText');

            changeTextBtn.addEventListener('click', function() {
                dynamicTextElement.textContent = 'The text has been changed dynamically!';
            });

            // Modify CSS Styles
            const styleBtn = document.getElementById('styleBtn');
            const styledDivElement = document.getElementById('styledDiv');

            styleBtn.addEventListener('click', function() {
                styledDivElement.style.backgroundColor = 'lightgreen';
                styledDivElement.style.color = 'white';
                styledDivElement.style.fontWeight = 'bold';
            });

            // Add an Element
            const addItemBtn = document.getElementById('addItemBtn');
            const itemList = document.getElementById('itemlist');

            addItemBtn.addEventListener('click', function() {
                const newItem = document.createElement('li');
                newItem.textContent = Item ${itemList.children.length + 1};
                itemList.appendChild(newItem);
            });
        });
    </script>
</body>
</html>