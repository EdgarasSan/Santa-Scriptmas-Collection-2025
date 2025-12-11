def generate_christmas_lights(n):
    """
    Generate an N×N Christmas Lights Grid with border.
    
    Rules:
    - If (row + col) divisible by 3: T (Tree)
    - If divisible by 5: S (Star)
    - If divisible by both 3 and 5 (i.e., 15): G (Gift)
    - Otherwise: . (dark)
    - Row and column numbers start from 1
    """
    
    # Calculate border width (2 chars per cell + spaces between + edges)
    border_width = 2 * n + (n - 1) + 2
    
    # Print top border
    print('#' * border_width)
    
    # Generate each row
    for row in range(1, n + 1):
        line = '#'
        for col in range(1, n + 1):
            sum_val = row + col
            
            # Check divisibility rules
            if sum_val % 15 == 0:  # Divisible by both 3 and 5
                char = 'G'
            elif sum_val % 5 == 0:
                char = 'S'
            elif sum_val % 3 == 0:
                char = 'T'
            else:
                char = '.'
            
            line += ' ' + char
        
        line += ' #'
        print(line)
    
    # Print bottom border
    print('#' * border_width)


# Main program
if __name__ == "__main__":
    try:
        n = int(input("Enter grid size N: "))
        if n <= 0:
            print("Please enter a positive integer.")
        else:
            generate_christmas_lights(n)
    except ValueError:
        print("Invalid input. Please enter an integer.")