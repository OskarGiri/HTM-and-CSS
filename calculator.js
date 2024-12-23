<script>
    document.addEventListener('DOMContentLoaded', function() 
        const display = document.getElementById('display');
        const buttons = document.querySelectorAll('.buttons button');

        buttons.forEach(button => {
            button.addEventListener('click', function() {
                const value = button.textContent;

                switch (value) {
                    case 'C':
                        display.value = '';  // Clear display
                        break;
                    case '=':
                        try {
                            // Calculate and show result using eval
                            // Replace 'X' with '*' for multiplication
                            display.value = eval(display.value.replace(/X/g, '*'));
                        } catch (error) {
                            display.value = 'Error';  // Display error on invalid input
                        }
                        break;
                    case '+':
                    case '-':
                    case 'X':
                    case '/':
                    case '%':
                        // Add space around operators for clarity and parsing
                        display.value += ` ${value} `;
                        break;
                    default:
                        // Append number or decimal point
                        display.value += value;
                }
            })
        })
</script>
