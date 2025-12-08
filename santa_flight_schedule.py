# Santa's Sleigh Flight Schedule Calculator

# Input: takeoff time and flight duration
a = int(input("Enter takeoff hour (0-23): "))
b = int(input("Enter takeoff minute (0-59): "))
c = int(input("Enter flight duration in minutes: "))

# Convert takeoff time to total minutes since midnight
total_minutes = a * 60 + b

# Add flight duration
total_minutes += c

# Calculate landing time
v = (total_minutes // 60) % 24  # hours, wrapping around at 24
m = total_minutes % 60           # minutes

# Output
print(f"\nSanta lands at:")
print(f"v = {v} hours")
print(f"m = {m} minutes")
