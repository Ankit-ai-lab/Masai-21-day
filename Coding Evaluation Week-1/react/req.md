Q: 1
React Evaluation Problem Statement
Duration: 2 Hours
Build a Mini Course Dashboard App
Create a React application called Mini Course Dashboard.

The app should allow users to:

Navigate between pages using React Router
View a list of courses
Search and filter courses
View course details using dynamic routing
Add courses to a saved list
Use Context API for theme management
Use useMemo where appropriate
Use useRef for input focus
Pages Required
The app should have these pages:

Home
Courses
Course Details
Saved Courses
About
404 Not Found
Routes Required
/                     Home page
/courses              Courses page
/courses/:courseId    Course Details page
/saved                Saved Courses page
/about                About page
*                     404 Not Found page
Data to Use
Create at least 6 courses.

Each course should have:

id
title
category
duration
level
price
description
Example categories:

Frontend
Backend
AI
Data
Example levels:

Beginner
Intermediate
Advanced
Core Requirements
1. Routing
Set up routing using React Router.

The app must have a Navbar with links to:

Home
Courses
Saved Courses
About
Use Link or NavLink.

Do not use normal anchor tags for internal navigation.

2. Home Page
The Home page should show:

Welcome message
Short description of the app
Button or link to explore courses
Clicking the button/link should navigate to the Courses page.

3. Courses Page
The Courses page should display all courses.

Each course card should show:

Course title
Category
Duration
Level
Price
View Details button/link
Save Course button
The course list must be rendered using .map().

4. Search Courses
Add a search input on the Courses page.

The user should be able to search courses by title.

Example:

Search: React
Only courses matching the search text should be shown.

5. Filter by Category
Add a category filter dropdown.

Options:

All
Frontend
Backend
AI
Data
The course list should update based on selected category.

Search and category filter should work together.

Example:

Search: React
Category: Frontend
Only matching Frontend React-related courses should appear.

6. useMemo Requirement
Use useMemo for the filtered courses.

Reason:

The filtered course list is a calculated value based on:

courses
search text
selected category
The filtering logic should not unnecessarily run on unrelated re-renders.

Also show a small text:

Showing 3 courses
This count should update based on the filtered result.

7. useRef Requirement
Add a button near the search input:

Focus Search
Clicking it should focus the search input.

Use useRef for this.

8. Course Details Page
When the user clicks View Details, navigate to:

/courses/:courseId
The Course Details page should read the course id from the URL using useParams.

It should display:

Course title
Category
Duration
Level
Price
Description
Save Course button
Back to Courses link/button
If the course id does not exist, show:

Course not found
9. Saved Courses
Users should be able to save courses.

When the user clicks Save Course, that course should be added to the Saved Courses page.

The Saved Courses page should show:

Saved course list
Total saved courses
Total price of saved courses
Remove button for each saved course
If no course is saved, show:

No saved courses yet
10. useMemo for Total Price
Use useMemo to calculate the total price of saved courses.

Example:

Total Price: ₹12000
The total should recalculate only when saved courses change.

Context API Requirement
11. Theme Context
Create a Theme Context.

The app should support:

light mode
dark mode
Theme state should be shared using Context API.

Create a toggle button in the Navbar:

Switch to Dark Mode
or

Switch to Light Mode
Based on the current theme, change basic app styling.

Example:

For light mode:

background: white
text: black
For dark mode:

background: black or dark gray
text: white
404 Page
If the user goes to a route that does not exist, show a 404 page.

The page should contain:

404 Page Not Found
Back to Home link/button
Technical Requirements
The app must use:

React
React Router
useState
useRef
useMemo
useCallback
useContext
React.memo
Redux is not mandatory for this evaluation.

Suggested Component Structure
Students can choose their own structure, but a good structure would be:

App
Navbar
Home
Courses
CourseCard
CourseDetails
SavedCourses
SavedCourseCard
About
NotFound
ThemeContext
Expected Features Checklist
Routing
Home route works
Courses route works
Course details dynamic route works
Saved Courses route works
About route works
404 route works
Navbar navigation works without page reload
Courses Page
Courses render using map
Search by title works
Category filter works
Search and filter work together
Course count updates
Focus Search button works using useRef
Course Details
Course details open using dynamic route
useParams is used
Invalid course id shows Course not found
Back to Courses works
Saved Courses
Save course works
Saved courses page displays saved items
Duplicate save is handled properly
Remove course works
Total saved count works
Total price works
Empty saved state is shown
Hooks
useState used for local state
useRef used for search input focus
useMemo used for filtered courses
useMemo used for saved course total
useCallback used for save/remove handlers
useContext used for theme
React.memo used for child component optimization
Duplicate Save Rule
If the same course is already saved, clicking Save Course again should not add a duplicate.

Any one of these is acceptable:

Show alert: Course already saved
Disable Save button for already saved course
Change button text to Saved
Bonus Features
These are optional. Students should attempt them only after completing the main requirements.

Use NavLink to highlight active route
Add level filter
Add sort by price
Persist saved courses in localStorage
Add basic CSS styling
Show saved count in Navbar