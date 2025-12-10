n = int(input())
weights = list(map(float, input().split()))

# Calculate average weight
average = sum(weights) / n

# Find melon closest to average
min_distance = float('inf')
closest_melon = 0

for i in range(n):
    distance = abs(weights[i] - average)
    if distance < min_distance:
        min_distance = distance
        closest_melon = i

# Print result (0-indexed melon number and average rounded to 2 decimals)
print(f"{closest_melon} {average:.2f}")
