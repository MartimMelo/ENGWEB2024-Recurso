import json
import ast

def process_books(input_file, output_file):
    # Read the input JSON file
    with open(input_file, 'r', encoding='utf-8') as file:
        books = json.load(file)
    
    # Process each book in the list
    for book in books:
        # Rename "bookId" to "_id"
        if 'bookId' in book:
            book["_id"] = book.pop("bookId")
        
        # Convert string arrays to actual arrays
        for key in ["genres", "characters", "awards", "ratingsByStars", "setting"]:
            if key in book and isinstance(book[key], str):
                try:
                    book[key] = ast.literal_eval(book[key])
                except (ValueError, SyntaxError):
                    print(f"Error parsing field {key} in book {book.get('_id', 'unknown')}")
                    book[key] = []
    
    # Write the modified JSON data to the output file
    with open(output_file, 'w', encoding='utf-8') as file:
        json.dump(books, file, indent=4)

# Example usage
input_file = 'dataset.json'  # Input file containing the original JSON data
output_file = 'processed_dataset.json'  # Output file for the modified JSON data

process_books(input_file, output_file)