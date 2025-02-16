class User:
    def __init__(self, email, password):
        self.email = email
        self.password = password  # In real apps, store a hashed password!
    
    def check_password(self, password):
        return self.password == password  # Replace with proper hashing later
