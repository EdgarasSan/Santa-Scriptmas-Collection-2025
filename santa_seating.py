def calculate_total_seats(n, k):
    """
    Calculate total seats in Santa's concert hall.
    
    Parameters:
    n: number of rows
    k: number of seats in the first row
    
    Returns:
    s: total number of seats
    """
    # Using arithmetic sequence sum formula
    # s = n * (first_term + last_term) / 2
    # where last_term = k + (n-1) * 2
    
    last_row_seats = k + (n - 1) * 2
    total_seats = n * (k + last_row_seats) // 2
    
    return total_seats

# Test with the example
n = 3  # rows
k = 8  # seats in first row

s = calculate_total_seats(n, k)
print(f"Concert Hall Configuration:")
print(f"Number of rows: {n}")
print(f"Seats in first row: {k}")
print(f"Seats increase per row: 2")
print(f"\nRow breakdown:")
for i in range(n):
    seats_in_row = k + i * 2
    print(f"  Row {i+1}: {seats_in_row} seats")
print(f"\nTotal seats to order: {s} seats")

# Test with more examples
print("\n" + "="*40)
print("Additional Examples:")
print("="*40)

test_cases = [
    (5, 10),  # 5 rows, starting with 10 seats
    (10, 5),  # 10 rows, starting with 5 seats
    (1, 20),  # 1 row, starting with 20 seats
]

for rows, first_seats in test_cases:
    total = calculate_total_seats(rows, first_seats)
    print(f"\nn={rows}, k={first_seats} → Total seats: {total}")
