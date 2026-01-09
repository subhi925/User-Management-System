| TC ID | Feature | Description | Steps | Expected Result |
|------|--------|-------------|-------|----------------|
| TC-01 | Register | Register with valid data | Open Register → enter valid email, password, confirm password, name → submit | User is registered successfully |
| TC-02 | Register | Register with invalid email | Enter invalid email format | Error message is shown |
| TC-03 | Register | Register with mismatched passwords | Enter different password and confirm password | Error message is shown |
| TC-04 | Login | Login with valid credentials | Enter correct email and password → Login | User is logged in and redirected to dashboard |
| TC-05 | Login | Login with wrong password | Enter correct email and wrong password | Login fails with error message |
| TC-06 | Access | Access Admin Dashboard as User | Login as user → open Admin page | Access is denied or redirected |
| TC-07 | Access | Access Admin Dashboard as Admin | Login as admin → open Admin page | Admin Dashboard is displayed |
| TC-08 | User Management | Admin views users list | Login as admin → open Admin Dashboard | List of users is displayed |
| TC-09 | User Management | Admin changes user role | Change role from user to admin | Role is updated |
| TC-10 | User Management | Admin deletes a user | Click delete on a user | User is removed |
| TC-11 | Profile | User views own profile | Login as user → open profile | User data is shown |
| TC-12 | Profile | User edits own profile | Change name → save | Profile is updated |
| TC-13 | Security | User tries to edit another user | Try to open another user profile | Access is blocked |
| TC-14 | Session | Logout | Click logout | User is logged out and redirected to login |
| TC-15 | Session | Access dashboard after logout | After logout, try to open dashboard | Redirected to login |
