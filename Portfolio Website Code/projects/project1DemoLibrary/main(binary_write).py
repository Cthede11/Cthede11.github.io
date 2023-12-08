"""
Names: Christian Thede, Maxwell Hunter
Date: 11/15/2023
Description: This program reads the BTCP1.csv file and takes only selected columns 
             (BTCP1.csv can be replaced with BTCP2.csv).
             It then hashes each row and writes the hashed result to a new file.
             It prints each hashed result to the console for debugging purposes.
             This program also records benchmarking information like memory usage, and CPU usage.
"""


import pandas as pd
import hashlib
import time
import psutil

def hash_data(data):
    h = hashlib.new("md5")
    h.update(data)
    return h.digest()


def hash_and_write_rows(file_path, selected_columns, output_file_path):
    # Record the start time
    start_time = time.time()

    with open(output_file_path, 'wb') as file:
        # Write selected columns to the output file
        file.write(','.join(selected_columns).encode('utf-8') + b'\n')

        # Record the start time for reading
        read_start_time = time.time()

        # Read only selected columns
        df = pd.read_csv(file_path, usecols=selected_columns)

        # Record the end time for reading
        read_end_time = time.time()

        # Print DataFrame for debugging
        print("DataFrame before hashing:")
        print(df)

        # Record the start time for hashing and writing
        hash_start_time = time.time()

        # Iterate through each row, hash it, and write to the output file
        for index, row in df.iterrows():
            hashed_result = hash_data(row.to_csv(index=False).encode('utf-8'))
            file.write(hashed_result + b'\n')
            print(f"Hashed result for row {index}: {hashed_result.hex()}")

        # Record the end time for hashing and writing
        hash_end_time = time.time()

    # Record the end time
    end_time = time.time()

    # Calculate and print benchmarking information
    print("\nBenchmarking Information:")
    print(f"Total time: {end_time - start_time} seconds")
    print(f"Time for reading CSV: {read_end_time - read_start_time} seconds")
    print(f"Time for hashing and writing: {hash_end_time - hash_start_time} seconds")

    # Record memory usage
    memory_info = psutil.Process().memory_info()
    print(f"\nMemory Usage:")
    print(f"Memory used: {memory_info.rss / (1024 * 1024):.2f} MB")
    print(f"Memory peak: {memory_info.peak_wset / (1024 * 1024):.2f} MB")

    # Record CPU usage
    cpu_usage = psutil.cpu_percent()
    print(f"CPU usage: {cpu_usage}%")

# File paths
input_file_path = "BTCP1.csv"
output_file_path = "hashedUsers.txt"

# Specific columns to hash
selected_columns = ["id", "possibly_sensitive", "source", "text", "user_screen_name"]

print(selected_columns)

# Call the function
hash_and_write_rows(input_file_path, selected_columns, output_file_path)

print("\nHashing and writing complete.")
