# Bug Reports

## BUG-01
Title: User can access Admin Dashboard without admin role  
Steps:
1. Login as a user
2. Manually enter /admin in the URL

Expected Result:
User should be blocked or redirected to User Dashboard

Actual Result:
Admin Dashboard is displayed

Severity:
High

---

## BUG-02
Title: Registration allows weak password  
Steps:
1. Open Register page
2. Enter a password with 2 characters
3. Click Register

Expected Result:
Password validation message should appear

Actual Result:
User is registered successfully

Severity:
Medium

---

## BUG-03
Title: User session is not cleared after logout  
Steps:
1. Login as any user
2. Click Logout
3. Press browser Back button

Expected Result:
User should be redirected to Login page

Actual Result:
User dashboard is shown

Severity:
High
