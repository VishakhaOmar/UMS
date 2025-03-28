This is a React-based user management application integrating with the Reqres API to handle authentication, user listing, editing, and deletion.

Features

✅ User authentication (Login with email & password)
✅ Paginated user list with avatars
✅ Edit and delete user functionality
✅ Responsive UI using Tailwind CSS
✅ React Router for navigation
✅ API error handling

Installation & Setup

Clone the repository:

git clone https://github.com/your-repo/employwise-app.git
cd employwise-app

Install dependencies:

npm install

Run the development server:

npm start

The app will be available at http://localhost:3000/.

API Endpoints Used

Login: POST https://reqres.in/api/login

Fetch Users: GET https://reqres.in/api/users?page=1

Update User: PUT https://reqres.in/api/users/{id}

Delete User: DELETE https://reqres.in/api/users/{id}